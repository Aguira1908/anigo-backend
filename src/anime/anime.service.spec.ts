import { Test, TestingModule } from '@nestjs/testing';
import { AnimeService } from './anime.service';
import { PrismaService } from '../prisma/prisma.service';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { NotFoundException } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';
import { AnimeStatus } from '@prisma/client';

describe('AnimeService', () => {
  let service: AnimeService;

  const mockPrismaService = {
    anime: {
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

  const mockAnime = {
    id: 'uuid-anime-1',
    title: 'Naruto',
    titleJapan: 'ナルト',
    slug: 'naruto',
    type: 'TV',
    coverImage: 'https://example.com/naruto.jpg',
    status: AnimeStatus.COMPLETED,
    studio: 'Pierrot',
    totalEpisodes: 220,
    releaseDate: new Date('2002-10-03'),
    rating: 8.5,
    synopsis: 'A ninja story',
    url: 'https://example.com/naruto',
    isActive: true,
    genres: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AnimeService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: EventEmitter2, useValue: mockEventEmitter },
        { provide: PinoLogger, useValue: mockLogger },
      ],
    }).compile();

    service = module.get<AnimeService>(AnimeService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // ─── create ───────────────────────────────────────────────────────────────────

  describe('create', () => {
    const createDto: CreateAnimeDto = {
      title: 'Naruto',
      slug: 'naruto',
    };

    it('should create anime and emit entity.mutated event', async () => {
      mockPrismaService.anime.create.mockResolvedValue(mockAnime);

      const result = await service.create(createDto);

      expect(mockPrismaService.anime.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ title: 'Naruto', slug: 'naruto' }),
          include: { genres: true },
        }),
      );
      expect(mockEventEmitter.emit).toHaveBeenCalledWith(
        'entity.mutated',
        expect.objectContaining({ entity: 'anime', action: 'created' }),
      );
      expect(result).toEqual(mockAnime);
    });

    it('should connect genres when genreIds are provided', async () => {
      const dtoWithGenres: CreateAnimeDto = {
        ...createDto,
        genreIds: [1, 2, 3],
      };
      mockPrismaService.anime.create.mockResolvedValue({
        ...mockAnime,
        genres: [{ id: 1 }, { id: 2 }, { id: 3 }],
      });

      await service.create(dtoWithGenres);

      expect(mockPrismaService.anime.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            genres: {
              connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
            },
          }),
        }),
      );
    });

    it('should not include genres connect when genreIds is empty', async () => {
      const dtoNoGenres: CreateAnimeDto = {
        ...createDto,
        genreIds: [],
      };
      mockPrismaService.anime.create.mockResolvedValue(mockAnime);

      await service.create(dtoNoGenres);

      const callArg = mockPrismaService.anime.create.mock.calls[0][0];
      expect(callArg.data).not.toHaveProperty('genres');
    });

    it('should propagate prisma error on create failure', async () => {
      mockPrismaService.anime.create.mockRejectedValue(
        new Error('Unique constraint failed'),
      );

      await expect(service.create(createDto)).rejects.toThrow(
        'Unique constraint failed',
      );
    });
  });

  // ─── findAll ──────────────────────────────────────────────────────────────────

  describe('findAll', () => {
    it('should return all anime ordered by createdAt asc', async () => {
      const animeList = [mockAnime, { ...mockAnime, id: 'uuid-anime-2' }];
      mockPrismaService.anime.findMany.mockResolvedValue(animeList);

      const result = await service.findAll();

      expect(mockPrismaService.anime.findMany).toHaveBeenCalledWith({
        orderBy: { createdAt: 'asc' },
      });
      expect(result).toHaveLength(2);
      expect(result).toEqual(animeList);
    });

    it('should return empty array when no anime exists', async () => {
      mockPrismaService.anime.findMany.mockResolvedValue([]);

      const result = await service.findAll();

      expect(result).toEqual([]);
    });
  });

  // ─── findOne ──────────────────────────────────────────────────────────────────

  describe('findOne', () => {
    it('should return an anime by ID', async () => {
      mockPrismaService.anime.findUnique.mockResolvedValue(mockAnime);

      const result = await service.findOne('uuid-anime-1');

      expect(mockPrismaService.anime.findUnique).toHaveBeenCalledWith({
        where: { id: 'uuid-anime-1' },
      });
      expect(result).toEqual(mockAnime);
    });

    it('should throw NotFoundException when anime is not found', async () => {
      mockPrismaService.anime.findUnique.mockResolvedValue(null);

      await expect(service.findOne('nonexistent-id')).rejects.toThrow(
        NotFoundException,
      );
      await expect(service.findOne('nonexistent-id')).rejects.toThrow(
        'Anime with ID nonexistent-id not found',
      );
    });
  });

  // ─── update ───────────────────────────────────────────────────────────────────

  describe('update', () => {
    const updateDto: UpdateAnimeDto = { title: 'Naruto Shippuden' };

    it('should update anime and emit entity.mutated event', async () => {
      const updatedAnime = { ...mockAnime, title: 'Naruto Shippuden' };
      mockPrismaService.anime.update.mockResolvedValue(updatedAnime);

      const result = await service.update('uuid-anime-1', updateDto);

      expect(mockPrismaService.anime.update).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { id: 'uuid-anime-1' },
          data: expect.objectContaining({ title: 'Naruto Shippuden' }),
          include: { genres: true },
        }),
      );
      expect(mockEventEmitter.emit).toHaveBeenCalledWith(
        'entity.mutated',
        expect.objectContaining({ entity: 'anime', action: 'updated' }),
      );
      expect(result).toEqual(updatedAnime);
    });

    it('should connect genres when genreIds are provided in update', async () => {
      const dtoWithGenres: UpdateAnimeDto = { genreIds: [4, 5] };
      mockPrismaService.anime.update.mockResolvedValue(mockAnime);

      await service.update('uuid-anime-1', dtoWithGenres);

      expect(mockPrismaService.anime.update).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            genres: { connect: [{ id: 4 }, { id: 5 }] },
          }),
        }),
      );
    });

    it('should propagate prisma error on update failure', async () => {
      mockPrismaService.anime.update.mockRejectedValue(
        new Error('Record not found'),
      );

      await expect(service.update('bad-id', updateDto)).rejects.toThrow(
        'Record not found',
      );
    });
  });

  // ─── remove ───────────────────────────────────────────────────────────────────

  describe('remove', () => {
    it('should delete anime and emit entity.mutated event', async () => {
      mockPrismaService.anime.delete.mockResolvedValue(mockAnime);

      const result = await service.remove('uuid-anime-1');

      expect(mockPrismaService.anime.delete).toHaveBeenCalledWith({
        where: { id: 'uuid-anime-1' },
      });
      expect(mockEventEmitter.emit).toHaveBeenCalledWith(
        'entity.mutated',
        expect.objectContaining({ entity: 'anime', action: 'deleted' }),
      );
      expect(result).toEqual(mockAnime);
    });

    it('should propagate prisma error when anime does not exist', async () => {
      mockPrismaService.anime.delete.mockRejectedValue(
        new Error('Record to delete does not exist'),
      );

      await expect(service.remove('nonexistent-id')).rejects.toThrow(
        'Record to delete does not exist',
      );
    });
  });
});
