import { Test, TestingModule } from '@nestjs/testing';
import { AnimeController } from './anime.controller';
import { AnimeService } from './anime.service';
import { NotFoundException } from '@nestjs/common';
import { ApiResponse } from '../common/dto/api-response.dto';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { AnimeStatus } from '@prisma/client';

describe('AnimeController', () => {
  let controller: AnimeController;

  const mockAnimeService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
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
      controllers: [AnimeController],
      providers: [{ provide: AnimeService, useValue: mockAnimeService }],
    })
      .overrideInterceptor(CacheInterceptor)
      .useValue({ intercept: jest.fn((ctx, next) => next.handle()) })
      .compile();

    controller = module.get<AnimeController>(AnimeController);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // ─── POST /anime ──────────────────────────────────────────────────────────────

  describe('POST /anime (create)', () => {
    const createDto: CreateAnimeDto = {
      title: 'Naruto',
      slug: 'naruto',
    };

    it('should return ApiResponse with created anime', async () => {
      mockAnimeService.create.mockResolvedValue(mockAnime);

      const result = await controller.create(createDto);

      expect(mockAnimeService.create).toHaveBeenCalledWith(createDto);
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data).toEqual(mockAnime);
      expect(result.message).toBe('Successfully created anime');
    });

    it('should propagate service errors', async () => {
      mockAnimeService.create.mockRejectedValue(
        new Error('Unique constraint failed'),
      );

      await expect(controller.create(createDto)).rejects.toThrow(
        'Unique constraint failed',
      );
    });
  });

  // ─── GET /anime ───────────────────────────────────────────────────────────────

  describe('GET /anime (findAll)', () => {
    it('should return ApiResponse with list of anime', async () => {
      const animeList = [mockAnime, { ...mockAnime, id: 'uuid-anime-2' }];
      mockAnimeService.findAll.mockResolvedValue(animeList);

      const result = await controller.findAll();

      expect(mockAnimeService.findAll).toHaveBeenCalled();
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data).toHaveLength(2);
      expect(result.message).toBe('Successfully retrieved all anime');
    });

    it('should return empty array when no anime exists', async () => {
      mockAnimeService.findAll.mockResolvedValue([]);

      const result = await controller.findAll();

      expect(result.data).toEqual([]);
    });
  });

  // ─── GET /anime/:id ───────────────────────────────────────────────────────────

  describe('GET /anime/:id (findOne)', () => {
    it('should return ApiResponse with anime data', async () => {
      mockAnimeService.findOne.mockResolvedValue(mockAnime);

      const result = await controller.findOne('uuid-anime-1');

      expect(mockAnimeService.findOne).toHaveBeenCalledWith('uuid-anime-1');
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data).toEqual(mockAnime);
      expect(result.message).toBe('Successfully retrieved anime details');
    });

    it('should propagate NotFoundException when anime is not found', async () => {
      mockAnimeService.findOne.mockRejectedValue(
        new NotFoundException('Anime with ID nonexistent not found'),
      );

      await expect(controller.findOne('nonexistent')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  // ─── PATCH /anime/:id ─────────────────────────────────────────────────────────

  describe('PATCH /anime/:id (update)', () => {
    const updateDto: UpdateAnimeDto = { title: 'Naruto Shippuden' };

    it('should return ApiResponse with updated anime', async () => {
      const updated = { ...mockAnime, title: 'Naruto Shippuden' };
      mockAnimeService.update.mockResolvedValue(updated);

      const result = await controller.update('uuid-anime-1', updateDto);

      expect(mockAnimeService.update).toHaveBeenCalledWith(
        'uuid-anime-1',
        updateDto,
      );
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data.title).toBe('Naruto Shippuden');
      expect(result.message).toBe('Successfully update anime');
    });

    it('should propagate service errors during update', async () => {
      mockAnimeService.update.mockRejectedValue(new Error('Update failed'));

      await expect(
        controller.update('uuid-anime-1', updateDto),
      ).rejects.toThrow('Update failed');
    });
  });

  // ─── DELETE /anime/:id ────────────────────────────────────────────────────────

  describe('DELETE /anime/:id (remove)', () => {
    it('should return ApiResponse with deleted anime data', async () => {
      mockAnimeService.remove.mockResolvedValue(mockAnime);

      const result = await controller.remove('uuid-anime-1');

      expect(mockAnimeService.remove).toHaveBeenCalledWith('uuid-anime-1');
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data).toEqual(mockAnime);
      expect(result.message).toBe('Successfully deleted anime');
    });

    it('should propagate error if anime does not exist', async () => {
      mockAnimeService.remove.mockRejectedValue(
        new Error('Record to delete does not exist'),
      );

      await expect(controller.remove('bad-id')).rejects.toThrow(
        'Record to delete does not exist',
      );
    });
  });
});
