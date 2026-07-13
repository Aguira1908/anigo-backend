import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { NotFoundException } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

describe('UserService', () => {
  let service: UserService;

  const mockPrismaService = {
    user: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  const mockEventEmitter = {
    emit: jest.fn(),
  };

  const mockLogger = {
    setContext: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
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
      providers: [
        UserService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: EventEmitter2, useValue: mockEventEmitter },
        { provide: PinoLogger, useValue: mockLogger },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // ─── create ───────────────────────────────────────────────────────────────────

  describe('create', () => {
    const createDto: CreateUserDto = {
      username: 'testuser',
      password: 'password123',
    };

    it('should create a user and emit entity.mutated event', async () => {
      mockPrismaService.user.create.mockResolvedValue(mockUser);

      const result = await service.create(createDto);

      expect(mockPrismaService.user.create).toHaveBeenCalledWith({
        data: createDto,
      });
      expect(mockEventEmitter.emit).toHaveBeenCalledWith(
        'entity.mutated',
        expect.objectContaining({ entity: 'user', action: 'created' }),
      );
      expect(result).toEqual(mockUser);
    });

    it('should propagate prisma error on duplicate username', async () => {
      mockPrismaService.user.create.mockRejectedValue(
        new Error('Unique constraint failed on the fields: (`username`)'),
      );

      await expect(service.create(createDto)).rejects.toThrow(
        'Unique constraint failed on the fields: (`username`)',
      );
    });
  });

  // ─── findAll ──────────────────────────────────────────────────────────────────

  describe('findAll', () => {
    it('should return all users ordered by createdAt desc', async () => {
      const userList = [mockUser, { ...mockUser, id: 'uuid-user-2' }];
      mockPrismaService.user.findMany.mockResolvedValue(userList);

      const result = await service.findAll();

      expect(mockPrismaService.user.findMany).toHaveBeenCalledWith({
        orderBy: { createdAt: 'desc' },
      });
      expect(result).toEqual(userList);
    });

    it('should return empty array when no users exist', async () => {
      mockPrismaService.user.findMany.mockResolvedValue([]);

      const result = await service.findAll();

      expect(result).toEqual([]);
    });
  });

  // ─── findOne ──────────────────────────────────────────────────────────────────

  describe('findOne', () => {
    it('should return a user by ID', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue(mockUser);

      const result = await service.findOne('uuid-user-1');

      expect(mockPrismaService.user.findUnique).toHaveBeenCalledWith({
        where: { id: 'uuid-user-1' },
      });
      expect(result).toEqual(mockUser);
    });

    it('should throw NotFoundException when user does not exist', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue(null);

      await expect(service.findOne('nonexistent-id')).rejects.toThrow(
        NotFoundException,
      );
      await expect(service.findOne('nonexistent-id')).rejects.toThrow(
        'User with ID nonexistent-id not found',
      );
    });
  });

  // ─── update ───────────────────────────────────────────────────────────────────

  describe('update', () => {
    const updateDto: UpdateUserDto = { username: 'updateduser' };

    it('should update user and emit entity.mutated event', async () => {
      const updatedUser = { ...mockUser, username: 'updateduser' };
      mockPrismaService.user.update.mockResolvedValue(updatedUser);

      const result = await service.update('uuid-user-1', updateDto);

      expect(mockPrismaService.user.update).toHaveBeenCalledWith({
        where: { id: 'uuid-user-1' },
        data: updateDto,
      });
      expect(mockEventEmitter.emit).toHaveBeenCalledWith(
        'entity.mutated',
        expect.objectContaining({ entity: 'user', action: 'updated' }),
      );
      expect(result).toEqual(updatedUser);
    });

    it('should propagate error if user does not exist', async () => {
      mockPrismaService.user.update.mockRejectedValue(
        new Error('Record to update not found'),
      );

      await expect(service.update('bad-id', updateDto)).rejects.toThrow(
        'Record to update not found',
      );
    });
  });

  // ─── remove ───────────────────────────────────────────────────────────────────

  describe('remove', () => {
    it('should delete user and emit entity.mutated event', async () => {
      mockPrismaService.user.delete.mockResolvedValue(mockUser);

      const result = await service.remove('uuid-user-1');

      expect(mockPrismaService.user.delete).toHaveBeenCalledWith({
        where: { id: 'uuid-user-1' },
      });
      expect(mockEventEmitter.emit).toHaveBeenCalledWith(
        'entity.mutated',
        expect.objectContaining({ entity: 'user', action: 'deleted' }),
      );
      expect(result).toEqual(mockUser);
    });

    it('should propagate error if user does not exist', async () => {
      mockPrismaService.user.delete.mockRejectedValue(
        new Error('Record to delete does not exist'),
      );

      await expect(service.remove('nonexistent-id')).rejects.toThrow(
        'Record to delete does not exist',
      );
    });
  });
});
