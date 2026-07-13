import { Test, TestingModule } from '@nestjs/testing';
import { StreamserverService } from './streamserver.service';
import { PrismaService } from '../prisma/prisma.service';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { NotFoundException } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { CreateStreamserverDto } from './dto/create-streamserver.dto';
import { UpdateStreamserverDto } from './dto/update-streamserver.dto';

describe('StreamserverService', () => {
  let service: StreamserverService;

  const mockPrismaService = {
    streamServer: {
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

  const mockServer = {
    id: 'uuid-server-1',
    mirrorId: 'uuid-mirror-1',
    platform: 'vidstream',
    dataContent: null,
    embedUrl: 'https://embed.example.com/video123',
    embedHtml: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StreamserverService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: EventEmitter2, useValue: mockEventEmitter },
        { provide: PinoLogger, useValue: mockLogger },
      ],
    }).compile();

    service = module.get<StreamserverService>(StreamserverService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // ─── create ───────────────────────────────────────────────────────────────────

  describe('create', () => {
    const createDto: CreateStreamserverDto = {
      mirrorId: 'uuid-mirror-1',
      platform: 'vidstream',
      embedUrl: 'https://embed.example.com/video123',
    };

    it('should create a stream server and emit entity.mutated event', async () => {
      mockPrismaService.streamServer.create.mockResolvedValue(mockServer);

      const result = await service.create(createDto);

      expect(mockPrismaService.streamServer.create).toHaveBeenCalledWith({
        data: createDto,
      });
      expect(mockEventEmitter.emit).toHaveBeenCalledWith(
        'entity.mutated',
        expect.objectContaining({
          entity: 'streamserver',
          action: 'created',
        }),
      );
      expect(result).toEqual(mockServer);
    });

    it('should propagate prisma error on create failure', async () => {
      mockPrismaService.streamServer.create.mockRejectedValue(
        new Error('Foreign key constraint failed'),
      );

      await expect(service.create(createDto)).rejects.toThrow(
        'Foreign key constraint failed',
      );
    });
  });

  // ─── findAll ──────────────────────────────────────────────────────────────────

  describe('findAll', () => {
    it('should return all stream servers ordered by createdAt asc', async () => {
      const serverList = [
        mockServer,
        { ...mockServer, id: 'uuid-server-2', platform: 'mp4upload' },
      ];
      mockPrismaService.streamServer.findMany.mockResolvedValue(serverList);

      const result = await service.findAll();

      expect(mockPrismaService.streamServer.findMany).toHaveBeenCalledWith({
        orderBy: { createdAt: 'asc' },
      });
      expect(result).toEqual(serverList);
    });

    it('should return empty array when no servers exist', async () => {
      mockPrismaService.streamServer.findMany.mockResolvedValue([]);

      const result = await service.findAll();

      expect(result).toEqual([]);
    });
  });

  // ─── findOne ──────────────────────────────────────────────────────────────────

  describe('findOne', () => {
    it('should return a stream server by ID', async () => {
      mockPrismaService.streamServer.findUnique.mockResolvedValue(mockServer);

      const result = await service.findOne('uuid-server-1');

      expect(mockPrismaService.streamServer.findUnique).toHaveBeenCalledWith({
        where: { id: 'uuid-server-1' },
      });
      expect(result).toEqual(mockServer);
    });

    it('should throw NotFoundException when stream server is not found', async () => {
      mockPrismaService.streamServer.findUnique.mockResolvedValue(null);

      await expect(service.findOne('nonexistent-id')).rejects.toThrow(
        NotFoundException,
      );
      await expect(service.findOne('nonexistent-id')).rejects.toThrow(
        'Stream server with ID nonexistent-id not found',
      );
    });
  });

  // ─── update ───────────────────────────────────────────────────────────────────

  describe('update', () => {
    const updateDto: UpdateStreamserverDto = {
      embedUrl: 'https://embed.example.com/new-video',
    };

    it('should update stream server and emit entity.mutated event', async () => {
      const updatedServer = {
        ...mockServer,
        embedUrl: 'https://embed.example.com/new-video',
      };
      mockPrismaService.streamServer.update.mockResolvedValue(updatedServer);

      const result = await service.update('uuid-server-1', updateDto);

      expect(mockPrismaService.streamServer.update).toHaveBeenCalledWith({
        where: { id: 'uuid-server-1' },
        data: updateDto,
      });
      expect(mockEventEmitter.emit).toHaveBeenCalledWith(
        'entity.mutated',
        expect.objectContaining({
          entity: 'streamserver',
          action: 'updated',
        }),
      );
      expect(result).toEqual(updatedServer);
    });

    it('should propagate error if stream server does not exist', async () => {
      mockPrismaService.streamServer.update.mockRejectedValue(
        new Error('Record to update not found'),
      );

      await expect(service.update('bad-id', updateDto)).rejects.toThrow(
        'Record to update not found',
      );
    });
  });

  // ─── remove ───────────────────────────────────────────────────────────────────

  describe('remove', () => {
    it('should delete stream server and emit entity.mutated event', async () => {
      mockPrismaService.streamServer.delete.mockResolvedValue(mockServer);

      const result = await service.remove('uuid-server-1');

      expect(mockPrismaService.streamServer.delete).toHaveBeenCalledWith({
        where: { id: 'uuid-server-1' },
      });
      expect(mockEventEmitter.emit).toHaveBeenCalledWith(
        'entity.mutated',
        expect.objectContaining({
          entity: 'streamserver',
          action: 'deleted',
        }),
      );
      expect(result).toEqual(mockServer);
    });

    it('should propagate error if stream server does not exist', async () => {
      mockPrismaService.streamServer.delete.mockRejectedValue(
        new Error('Record to delete does not exist'),
      );

      await expect(service.remove('nonexistent-id')).rejects.toThrow(
        'Record to delete does not exist',
      );
    });
  });
});
