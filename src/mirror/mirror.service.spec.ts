import { Test, TestingModule } from '@nestjs/testing';
import { MirrorService } from './mirror.service';
import { PrismaService } from '../prisma/prisma.service';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { NotFoundException } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { CreateMirrorDto } from './dto/create-mirror.dto';
import { UpdateMirrorDto } from './dto/update-mirror.dto';
import { Resolution } from '@prisma/client';

describe('MirrorService', () => {
  let service: MirrorService;

  const mockPrismaService = {
    mirror: {
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

  const mockMirror = {
    id: 'uuid-mirror-1',
    episodeId: 'uuid-ep-1',
    resolution: Resolution.HD,
    servers: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MirrorService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: EventEmitter2, useValue: mockEventEmitter },
        { provide: PinoLogger, useValue: mockLogger },
      ],
    }).compile();

    service = module.get<MirrorService>(MirrorService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // ─── create ───────────────────────────────────────────────────────────────────

  describe('create', () => {
    const createDto: CreateMirrorDto = {
      episodeId: 'uuid-ep-1',
      resolution: Resolution.HD,
    };

    it('should create mirror and emit entity.mutated event', async () => {
      mockPrismaService.mirror.create.mockResolvedValue(mockMirror);

      const result = await service.create(createDto);

      expect(mockPrismaService.mirror.create).toHaveBeenCalledWith({
        data: createDto,
        include: { servers: true },
      });
      expect(mockEventEmitter.emit).toHaveBeenCalledWith(
        'entity.mutated',
        expect.objectContaining({ entity: 'mirror', action: 'created' }),
      );
      expect(result).toEqual(mockMirror);
    });

    it('should propagate prisma error on create failure', async () => {
      mockPrismaService.mirror.create.mockRejectedValue(
        new Error('Foreign key constraint failed'),
      );

      await expect(service.create(createDto)).rejects.toThrow(
        'Foreign key constraint failed',
      );
    });
  });

  // ─── findAll ──────────────────────────────────────────────────────────────────

  describe('findAll', () => {
    it('should return all mirrors ordered by createdAt asc', async () => {
      const mirrorList = [
        mockMirror,
        { ...mockMirror, id: 'uuid-mirror-2', resolution: Resolution.FHD },
      ];
      mockPrismaService.mirror.findMany.mockResolvedValue(mirrorList);

      const result = await service.findAll();

      expect(mockPrismaService.mirror.findMany).toHaveBeenCalledWith({
        orderBy: { createdAt: 'asc' },
      });
      expect(result).toEqual(mirrorList);
    });

    it('should return empty array when no mirrors exist', async () => {
      mockPrismaService.mirror.findMany.mockResolvedValue([]);

      const result = await service.findAll();

      expect(result).toEqual([]);
    });
  });

  // ─── findOne ──────────────────────────────────────────────────────────────────

  describe('findOne', () => {
    it('should return a mirror with servers by ID', async () => {
      mockPrismaService.mirror.findUnique.mockResolvedValue(mockMirror);

      const result = await service.findOne('uuid-mirror-1');

      expect(mockPrismaService.mirror.findUnique).toHaveBeenCalledWith({
        where: { id: 'uuid-mirror-1' },
        include: { servers: true },
      });
      expect(result).toEqual(mockMirror);
    });

    it('should throw NotFoundException when mirror is not found', async () => {
      mockPrismaService.mirror.findUnique.mockResolvedValue(null);

      await expect(service.findOne('nonexistent-id')).rejects.toThrow(
        NotFoundException,
      );
      await expect(service.findOne('nonexistent-id')).rejects.toThrow(
        'Mirror with ID nonexistent-id not found',
      );
    });
  });

  // ─── update ───────────────────────────────────────────────────────────────────

  describe('update', () => {
    const updateDto: UpdateMirrorDto = { resolution: Resolution.FHD };

    it('should update mirror and emit entity.mutated event', async () => {
      const updatedMirror = { ...mockMirror, resolution: Resolution.FHD };
      mockPrismaService.mirror.update.mockResolvedValue(updatedMirror);

      const result = await service.update('uuid-mirror-1', updateDto);

      expect(mockPrismaService.mirror.update).toHaveBeenCalledWith({
        where: { id: 'uuid-mirror-1' },
        data: updateDto,
      });
      expect(mockEventEmitter.emit).toHaveBeenCalledWith(
        'entity.mutated',
        expect.objectContaining({ entity: 'mirror', action: 'updated' }),
      );
      expect(result).toEqual(updatedMirror);
    });

    it('should propagate error if mirror does not exist', async () => {
      mockPrismaService.mirror.update.mockRejectedValue(
        new Error('Record to update not found'),
      );

      await expect(service.update('bad-id', updateDto)).rejects.toThrow(
        'Record to update not found',
      );
    });
  });

  // ─── remove ───────────────────────────────────────────────────────────────────

  describe('remove', () => {
    it('should delete mirror and emit entity.mutated event', async () => {
      mockPrismaService.mirror.delete.mockResolvedValue(mockMirror);

      const result = await service.remove('uuid-mirror-1');

      expect(mockPrismaService.mirror.delete).toHaveBeenCalledWith({
        where: { id: 'uuid-mirror-1' },
      });
      expect(mockEventEmitter.emit).toHaveBeenCalledWith(
        'entity.mutated',
        expect.objectContaining({ entity: 'mirror', action: 'deleted' }),
      );
      expect(result).toEqual(mockMirror);
    });

    it('should propagate error if mirror does not exist', async () => {
      mockPrismaService.mirror.delete.mockRejectedValue(
        new Error('Record to delete does not exist'),
      );

      await expect(service.remove('nonexistent-id')).rejects.toThrow(
        'Record to delete does not exist',
      );
    });
  });
});
