import { Test, TestingModule } from '@nestjs/testing';
import { EpisodeService } from './episode.service';
import { PrismaService } from '../prisma/prisma.service';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { NotFoundException } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { UpdateEpisodeDto } from './dto/update-episode.dto';

describe('EpisodeService', () => {
  let service: EpisodeService;

  const mockPrismaService = {
    episode: {
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

  const mockEpisode = {
    id: 'uuid-ep-1',
    animeId: 'uuid-anime-1',
    slug: 'naruto-ep-1',
    title: 'Enter! Uzumaki Naruto!',
    episodeNumber: 1,
    mirrorLink: null,
    urlEpisode: null,
    releaseDate: new Date('2002-10-03'),
    mirrors: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EpisodeService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: EventEmitter2, useValue: mockEventEmitter },
        { provide: PinoLogger, useValue: mockLogger },
      ],
    }).compile();

    service = module.get<EpisodeService>(EpisodeService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // ─── create ───────────────────────────────────────────────────────────────────

  describe('create', () => {
    const createDto: CreateEpisodeDto = {
      animeId: 'uuid-anime-1',
      slug: 'naruto-ep-1',
      episodeNumber: 1,
    };

    it('should create episode and emit entity.mutated event', async () => {
      mockPrismaService.episode.create.mockResolvedValue(mockEpisode);

      const result = await service.create(createDto);

      expect(mockPrismaService.episode.create).toHaveBeenCalledWith({
        data: createDto,
        include: { mirrors: true },
      });
      expect(mockEventEmitter.emit).toHaveBeenCalledWith(
        'entity.mutated',
        expect.objectContaining({
          entity: 'episode',
          action: 'created',
        }),
      );
      expect(result).toEqual(mockEpisode);
    });

    it('should propagate prisma error on create failure', async () => {
      mockPrismaService.episode.create.mockRejectedValue(
        new Error('Foreign key constraint failed'),
      );

      await expect(service.create(createDto)).rejects.toThrow(
        'Foreign key constraint failed',
      );
    });
  });

  // ─── findAll ──────────────────────────────────────────────────────────────────

  describe('findAll', () => {
    it('should return all episodes ordered by createdAt asc', async () => {
      const episodeList = [
        mockEpisode,
        { ...mockEpisode, id: 'uuid-ep-2', episodeNumber: 2 },
      ];
      mockPrismaService.episode.findMany.mockResolvedValue(episodeList);

      const result = await service.findAll();

      expect(mockPrismaService.episode.findMany).toHaveBeenCalledWith({
        orderBy: { createdAt: 'asc' },
      });
      expect(result).toHaveLength(2);
      expect(result).toEqual(episodeList);
    });

    it('should return empty array when no episodes exist', async () => {
      mockPrismaService.episode.findMany.mockResolvedValue([]);

      const result = await service.findAll();

      expect(result).toEqual([]);
    });
  });

  // ─── findOne ──────────────────────────────────────────────────────────────────

  describe('findOne', () => {
    it('should return an episode with mirrors by ID', async () => {
      mockPrismaService.episode.findUnique.mockResolvedValue(mockEpisode);

      const result = await service.findOne('uuid-ep-1');

      expect(mockPrismaService.episode.findUnique).toHaveBeenCalledWith({
        where: { id: 'uuid-ep-1' },
        include: { mirrors: true },
      });
      expect(result).toEqual(mockEpisode);
    });

    it('should throw NotFoundException when episode is not found', async () => {
      mockPrismaService.episode.findUnique.mockResolvedValue(null);

      await expect(service.findOne('nonexistent-id')).rejects.toThrow(
        NotFoundException,
      );
      await expect(service.findOne('nonexistent-id')).rejects.toThrow(
        'Episode with ID nonexistent-id not found',
      );
    });
  });

  // ─── update ───────────────────────────────────────────────────────────────────

  describe('update', () => {
    const updateDto: UpdateEpisodeDto = { title: 'Updated Episode Title' };

    it('should update episode and emit entity.mutated event', async () => {
      const updatedEpisode = { ...mockEpisode, title: 'Updated Episode Title' };
      mockPrismaService.episode.update.mockResolvedValue(updatedEpisode);

      const result = await service.update('uuid-ep-1', updateDto);

      expect(mockPrismaService.episode.update).toHaveBeenCalledWith({
        where: { id: 'uuid-ep-1' },
        data: updateDto,
      });
      expect(mockEventEmitter.emit).toHaveBeenCalledWith(
        'entity.mutated',
        expect.objectContaining({
          entity: 'episode',
          action: 'updated',
        }),
      );
      expect(result).toEqual(updatedEpisode);
    });

    it('should propagate error if episode does not exist', async () => {
      mockPrismaService.episode.update.mockRejectedValue(
        new Error('Record to update not found'),
      );

      await expect(service.update('bad-id', updateDto)).rejects.toThrow(
        'Record to update not found',
      );
    });
  });

  // ─── remove ───────────────────────────────────────────────────────────────────

  describe('remove', () => {
    it('should delete episode and emit entity.mutated event', async () => {
      mockPrismaService.episode.delete.mockResolvedValue(mockEpisode);

      const result = await service.remove('uuid-ep-1');

      expect(mockPrismaService.episode.delete).toHaveBeenCalledWith({
        where: { id: 'uuid-ep-1' },
      });
      expect(mockEventEmitter.emit).toHaveBeenCalledWith(
        'entity.mutated',
        expect.objectContaining({
          entity: 'episode',
          action: 'deleted',
        }),
      );
      expect(result).toEqual(mockEpisode);
    });

    it('should propagate error if episode does not exist', async () => {
      mockPrismaService.episode.delete.mockRejectedValue(
        new Error('Record to delete does not exist'),
      );

      await expect(service.remove('nonexistent-id')).rejects.toThrow(
        'Record to delete does not exist',
      );
    });
  });
});
