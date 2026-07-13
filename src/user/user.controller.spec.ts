import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { NotFoundException } from '@nestjs/common';
import { ApiResponse } from '../common/dto/api-response.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

describe('UserController', () => {
  let controller: UserController;

  const mockUserService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  const mockUser = {
    id: 'uuid-user-1',
    username: 'testuser',
    password: 'hashed_password',
    role: 'USER',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [{ provide: UserService, useValue: mockUserService }],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: jest.fn(() => true) })
      .overrideInterceptor(CacheInterceptor)
      .useValue({ intercept: jest.fn((ctx, next) => next.handle()) })
      .compile();

    controller = module.get<UserController>(UserController);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // ─── POST /user ───────────────────────────────────────────────────────────────

  describe('POST /user (create)', () => {
    const createDto: CreateUserDto = {
      username: 'testuser',
      password: 'password123',
    };

    it('should return ApiResponse with created user', async () => {
      mockUserService.create.mockResolvedValue(mockUser);

      const result = await controller.create(createDto);

      expect(mockUserService.create).toHaveBeenCalledWith(createDto);
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data).toEqual(mockUser);
      expect(result.message).toBe('Successfully created user');
    });

    it('should propagate error from service', async () => {
      mockUserService.create.mockRejectedValue(
        new Error('Unique constraint failed'),
      );

      await expect(controller.create(createDto)).rejects.toThrow(
        'Unique constraint failed',
      );
    });
  });

  // ─── GET /user ────────────────────────────────────────────────────────────────

  describe('GET /user (findAll)', () => {
    it('should return ApiResponse with list of users', async () => {
      const userList = [mockUser, { ...mockUser, id: 'uuid-user-2' }];
      mockUserService.findAll.mockResolvedValue(userList);

      const result = await controller.findAll();

      expect(mockUserService.findAll).toHaveBeenCalled();
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data).toHaveLength(2);
      expect(result.message).toBe('Successfully retrieved all users');
    });

    it('should return empty array when no users exist', async () => {
      mockUserService.findAll.mockResolvedValue([]);

      const result = await controller.findAll();

      expect(result.data).toEqual([]);
    });
  });

  // ─── GET /user/:id ────────────────────────────────────────────────────────────

  describe('GET /user/:id (findOne)', () => {
    it('should return ApiResponse with user data', async () => {
      mockUserService.findOne.mockResolvedValue(mockUser);

      const result = await controller.findOne('uuid-user-1');

      expect(mockUserService.findOne).toHaveBeenCalledWith('uuid-user-1');
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data).toEqual(mockUser);
      expect(result.message).toBe('Successfully retrieved user details');
    });

    it('should propagate NotFoundException when user is not found', async () => {
      mockUserService.findOne.mockRejectedValue(
        new NotFoundException('User with ID nonexistent not found'),
      );

      await expect(controller.findOne('nonexistent')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  // ─── PATCH /user/:id ──────────────────────────────────────────────────────────

  describe('PATCH /user/:id (update)', () => {
    const updateDto: UpdateUserDto = { username: 'updateduser' };

    it('should return ApiResponse with updated user', async () => {
      const updated = { ...mockUser, username: 'updateduser' };
      mockUserService.update.mockResolvedValue(updated);

      const result = await controller.update('uuid-user-1', updateDto);

      expect(mockUserService.update).toHaveBeenCalledWith(
        'uuid-user-1',
        updateDto,
      );
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data.username).toBe('updateduser');
      expect(result.message).toBe('Successfully updated user');
    });

    it('should propagate service error during update', async () => {
      mockUserService.update.mockRejectedValue(new Error('Update failed'));

      await expect(
        controller.update('uuid-user-1', updateDto),
      ).rejects.toThrow('Update failed');
    });
  });

  // ─── DELETE /user/:id ─────────────────────────────────────────────────────────

  describe('DELETE /user/:id (remove)', () => {
    it('should return ApiResponse with deleted user data', async () => {
      mockUserService.remove.mockResolvedValue(mockUser);

      const result = await controller.remove('uuid-user-1');

      expect(mockUserService.remove).toHaveBeenCalledWith('uuid-user-1');
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data).toEqual(mockUser);
      expect(result.message).toBe('Successfully deleted user');
    });

    it('should propagate error if user does not exist', async () => {
      mockUserService.remove.mockRejectedValue(
        new Error('Record to delete does not exist'),
      );

      await expect(controller.remove('bad-id')).rejects.toThrow(
        'Record to delete does not exist',
      );
    });
  });
});
