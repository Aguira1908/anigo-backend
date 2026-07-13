import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UnauthorizedException } from '@nestjs/common';
import { ApiResponse } from '../common/dto/api-response.dto';

describe('AuthController', () => {
  let controller: AuthController;

  const mockAuthService = {
    register: jest.fn(),
    login: jest.fn(),
    refreshTokens: jest.fn(),
    revokeToken: jest.fn(),
  };

  // ─── Mock express Request / Response ────────────────────────────────────────

  const mockResponse = () => {
    const res: any = {};
    res.cookie = jest.fn().mockReturnValue(res);
    res.clearCookie = jest.fn().mockReturnValue(res);
    return res;
  };

  const mockRequest = (cookies: Record<string, string> = {}) => ({
    cookies,
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [{ provide: AuthService, useValue: mockAuthService }],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // ─── POST /auth/register ──────────────────────────────────────────────────────

  describe('POST /auth/register', () => {
    const registerDto = { username: 'newuser', password: 'password123' };

    it('should return ApiResponse with user data on successful registration', async () => {
      const createdUser = { id: 'uuid-1', username: 'newuser' };
      mockAuthService.register.mockResolvedValue(createdUser);

      const result = await controller.register(registerDto);

      expect(mockAuthService.register).toHaveBeenCalledWith(registerDto);
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data).toMatchObject({
        id: createdUser.id,
        username: createdUser.username,
      });
      expect(result.message).toBe('Successfully registered');
    });

    it('should propagate error thrown by authService.register', async () => {
      mockAuthService.register.mockRejectedValue(
        new Error('Username already exists'),
      );

      await expect(controller.register(registerDto)).rejects.toThrow(
        'Username already exists',
      );
    });
  });

  // ─── POST /auth/login ─────────────────────────────────────────────────────────

  describe('POST /auth/login', () => {
    const loginDto = { username: 'testuser', password: 'password123' };

    it('should set cookies and return success ApiResponse', async () => {
      const tokens = {
        accessToken: 'mock_access_token',
        refreshToken: 'mock_refresh_token',
      };
      mockAuthService.login.mockResolvedValue(tokens);
      const res = mockResponse();

      const result = await controller.login(loginDto, res);

      expect(mockAuthService.login).toHaveBeenCalledWith(loginDto);
      expect(res.cookie).toHaveBeenCalledWith(
        'accessToken',
        tokens.accessToken,
        expect.any(Object),
      );
      expect(res.cookie).toHaveBeenCalledWith(
        'refreshToken',
        tokens.refreshToken,
        expect.any(Object),
      );
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data).toBeNull();
      expect(result.message).toBe('Successfully logged in');
    });

    it('should propagate UnauthorizedException for invalid credentials', async () => {
      mockAuthService.login.mockRejectedValue(
        new UnauthorizedException('Invalid username or password'),
      );
      const res = mockResponse();

      await expect(controller.login(loginDto, res)).rejects.toThrow(
        UnauthorizedException,
      );
    });
  });

  // ─── POST /auth/refresh ───────────────────────────────────────────────────────

  describe('POST /auth/refresh', () => {
    it('should refresh tokens and set new cookies when refresh token is present', async () => {
      const tokens = {
        accessToken: 'new_access_token',
        refreshToken: 'new_refresh_token',
      };
      mockAuthService.refreshTokens.mockResolvedValue(tokens);
      const req = mockRequest({ refreshToken: 'old_refresh_token' });
      const res = mockResponse();

      const result = await controller.refresh(req as any, res);

      expect(mockAuthService.refreshTokens).toHaveBeenCalledWith(
        'old_refresh_token',
      );
      expect(res.cookie).toHaveBeenCalledTimes(2);
      expect(result.message).toBe('Successfully refreshed tokens');
    });

    it('should throw UnauthorizedException when refreshToken cookie is missing', async () => {
      const req = mockRequest({});
      const res = mockResponse();

      await expect(controller.refresh(req as any, res)).rejects.toThrow(
        UnauthorizedException,
      );
      await expect(controller.refresh(req as any, res)).rejects.toThrow(
        'Refresh token not found',
      );
    });

    it('should throw UnauthorizedException when token is invalid or expired', async () => {
      mockAuthService.refreshTokens.mockRejectedValue(
        new UnauthorizedException('Invalid or expired refresh token'),
      );
      const req = mockRequest({ refreshToken: 'expired_token' });
      const res = mockResponse();

      await expect(controller.refresh(req as any, res)).rejects.toThrow(
        UnauthorizedException,
      );
    });
  });

  // ─── POST /auth/logout ────────────────────────────────────────────────────────

  describe('POST /auth/logout', () => {
    it('should revoke token and clear cookies when refreshToken cookie is present', async () => {
      mockAuthService.revokeToken.mockResolvedValue(undefined);
      const req = mockRequest({ refreshToken: 'some_refresh_token' });
      const res = mockResponse();

      const result = await controller.logout(req as any, res);

      expect(mockAuthService.revokeToken).toHaveBeenCalledWith(
        'some_refresh_token',
      );
      expect(res.clearCookie).toHaveBeenCalledWith('accessToken');
      expect(res.clearCookie).toHaveBeenCalledWith('refreshToken');
      expect(result.message).toBe('Successfully logged out');
    });

    it('should clear cookies even without a refresh token cookie', async () => {
      const req = mockRequest({});
      const res = mockResponse();

      const result = await controller.logout(req as any, res);

      expect(mockAuthService.revokeToken).not.toHaveBeenCalled();
      expect(res.clearCookie).toHaveBeenCalledWith('accessToken');
      expect(res.clearCookie).toHaveBeenCalledWith('refreshToken');
      expect(result.message).toBe('Successfully logged out');
    });
  });
});
