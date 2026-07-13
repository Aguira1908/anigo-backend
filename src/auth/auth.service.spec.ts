import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { UnauthorizedException } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import * as argon2 from 'argon2';

jest.mock('argon2');

const mockArgon2 = argon2 as jest.Mocked<typeof argon2>;

describe('AuthService', () => {
  let service: AuthService;

  const mockUserService = {
    create: jest.fn(),
  };

  const mockPrismaService = {
    user: {
      findUnique: jest.fn(),
    },
  };

  const mockJwtService = {
    sign: jest.fn(),
  };

  const mockCacheManager = {
    get: jest.fn(),
    set: jest.fn(),
    del: jest.fn(),
  };

  const mockLogger = {
    setContext: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UserService, useValue: mockUserService },
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: JwtService, useValue: mockJwtService },
        { provide: CACHE_MANAGER, useValue: mockCacheManager },
        { provide: PinoLogger, useValue: mockLogger },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // ─── register ────────────────────────────────────────────────────────────────

  describe('register', () => {
    const registerDto = { username: 'testuser', password: 'password123' };

    it('should hash password and call userService.create', async () => {
      const hashedPassword = 'hashed_password';
      const createdUser = { id: 'uuid-1', username: 'testuser' };

      mockArgon2.hash.mockResolvedValue(hashedPassword);
      mockUserService.create.mockResolvedValue(createdUser);

      const result = await service.register(registerDto);

      expect(mockArgon2.hash).toHaveBeenCalledWith(registerDto.password);
      expect(mockUserService.create).toHaveBeenCalledWith({
        username: registerDto.username,
        password: hashedPassword,
      });
      expect(result).toEqual(createdUser);
    });

    it('should propagate error if userService.create throws', async () => {
      mockArgon2.hash.mockResolvedValue('hashed');
      mockUserService.create.mockRejectedValue(new Error('Duplicate username'));

      await expect(service.register(registerDto)).rejects.toThrow(
        'Duplicate username',
      );
    });
  });

  // ─── login ────────────────────────────────────────────────────────────────────

  describe('login', () => {
    const loginDto = { username: 'testuser', password: 'password123' };
    const storedUser = {
      id: 'uuid-1',
      username: 'testuser',
      password: 'hashed_password',
    };

    it('should return tokens when credentials are valid', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue(storedUser);
      mockArgon2.verify.mockResolvedValue(true);
      mockJwtService.sign.mockReturnValue('mock_access_token');
      mockCacheManager.set.mockResolvedValue(undefined);

      const result = await service.login(loginDto);

      expect(mockPrismaService.user.findUnique).toHaveBeenCalledWith({
        where: { username: loginDto.username },
      });
      expect(mockArgon2.verify).toHaveBeenCalledWith(
        storedUser.password,
        loginDto.password,
      );
      expect(result).toHaveProperty('accessToken');
      expect(result).toHaveProperty('refreshToken');
    });

    it('should throw UnauthorizedException when user is not found', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue(null);

      await expect(service.login(loginDto)).rejects.toThrow(
        UnauthorizedException,
      );
    });

    it('should throw UnauthorizedException when password is incorrect', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue(storedUser);
      mockArgon2.verify.mockResolvedValue(false);

      await expect(service.login(loginDto)).rejects.toThrow(
        UnauthorizedException,
      );
    });

    it('should throw UnauthorizedException with correct message for invalid credentials', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue(null);

      await expect(service.login(loginDto)).rejects.toThrow(
        'Invalid username or password',
      );
    });
  });

  // ─── refreshTokens ────────────────────────────────────────────────────────────

  describe('refreshTokens', () => {
    const rawRefreshToken = 'raw_refresh_token_value';

    it('should return new tokens when refresh token is valid', async () => {
      mockCacheManager.get.mockResolvedValue('uuid-1');
      mockCacheManager.del.mockResolvedValue(undefined);
      mockCacheManager.set.mockResolvedValue(undefined);
      mockJwtService.sign.mockReturnValue('new_access_token');

      const result = await service.refreshTokens(rawRefreshToken);

      expect(mockCacheManager.get).toHaveBeenCalledWith(
        expect.stringContaining('refresh_token:'),
      );
      expect(mockCacheManager.del).toHaveBeenCalledWith(
        expect.stringContaining('refresh_token:'),
      );
      expect(result).toHaveProperty('accessToken', 'new_access_token');
      expect(result).toHaveProperty('refreshToken');
    });

    it('should throw UnauthorizedException when refresh token is invalid or expired', async () => {
      mockCacheManager.get.mockResolvedValue(null);

      await expect(service.refreshTokens(rawRefreshToken)).rejects.toThrow(
        UnauthorizedException,
      );
    });

    it('should throw UnauthorizedException with correct message for expired token', async () => {
      mockCacheManager.get.mockResolvedValue(undefined);

      await expect(service.refreshTokens(rawRefreshToken)).rejects.toThrow(
        'Invalid or expired refresh token',
      );
    });
  });

  // ─── revokeToken ─────────────────────────────────────────────────────────────

  describe('revokeToken', () => {
    it('should delete the hashed token from cache', async () => {
      const rawToken = 'raw_token_to_revoke';
      mockCacheManager.del.mockResolvedValue(undefined);

      await service.revokeToken(rawToken);

      expect(mockCacheManager.del).toHaveBeenCalledWith(
        expect.stringContaining('refresh_token:'),
      );
    });

    it('should not throw if cache deletion succeeds', async () => {
      mockCacheManager.del.mockResolvedValue(undefined);
      await expect(service.revokeToken('any_token')).resolves.not.toThrow();
    });
  });
});
