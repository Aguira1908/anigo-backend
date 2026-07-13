import { Test, TestingModule } from '@nestjs/testing';
import { EpisodeController } from './episode.controller';
import { EpisodeService } from './episode.service';
import { NotFoundException } from '@nestjs/common';
import { ApiResponse } from '../common/dto/api-response.dto';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { UpdateEpisodeDto } from './dto/update-episode.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';

describe('EpisodeController', () => {
  let controller: EpisodeController;

  const mockEpisodeService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
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
      controllers: [EpisodeController],
      providers: [{ provide: EpisodeService, useValue: mockEpisodeService }],
    })
      .overrideInterceptor(CacheInterceptor)
      .useValue({ intercept: jest.fn((ctx, next) => next.handle()) })
      .compile();

    controller = module.get<EpisodeController>(EpisodeController);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // ─── POST /episode ────────────────────────────────────────────────────────────

  describe('POST /episode (create)', () => {
    const createDto: CreateEpisodeDto = {
      animeId: 'uuid-anime-1',
      slug: 'naruto-ep-1',
      episodeNumber: 1,
    };

    it('should return ApiResponse with created episode', async () => {
      mockEpisodeService.create.mockResolvedValue(mockEpisode);

      const result = await controller.create(createDto);

      expect(mockEpisodeService.create).toHaveBeenCalledWith(createDto);
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data).toEqual(mockEpisode);
      expect(result.message).toBe('Successfully created episode');
    });

    it('should propagate service errors', async () => {
      mockEpisodeService.create.mockRejectedValue(
        new Error('Foreign key constraint failed'),
      );

      await expect(controller.create(createDto)).rejects.toThrow(
        'Foreign key constraint failed',
      );
    });
  });

  // ─── GET /episode ─────────────────────────────────────────────────────────────

  describe('GET /episode (findAll)', () => {
    it('should return ApiResponse with list of episodes', async () => {
      const episodeList = [
        mockEpisode,
        { ...mockEpisode, id: 'uuid-ep-2', episodeNumber: 2 },
      ];
      mockEpisodeService.findAll.mockResolvedValue(episodeList);

      const result = await controller.findAll();

      expect(mockEpisodeService.findAll).toHaveBeenCalled();
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data).toHaveLength(2);
      expect(result.message).toBe('Successfully retrieved all episodes');
    });

    it('should return empty array when no episodes exist', async () => {
      mockEpisodeService.findAll.mockResolvedValue([]);

      const result = await controller.findAll();

      expect(result.data).toEqual([]);
    });
  });

  // ─── GET /episode/:id ─────────────────────────────────────────────────────────

  describe('GET /episode/:id (findOne)', () => {
    it('should return ApiResponse with episode data', async () => {
      mockEpisodeService.findOne.mockResolvedValue(mockEpisode);

      const result = await controller.findOne('uuid-ep-1');

      expect(mockEpisodeService.findOne).toHaveBeenCalledWith('uuid-ep-1');
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data).toEqual(mockEpisode);
      expect(result.message).toBe('Successfully retrieved episode details');
    });

    it('should propagate NotFoundException when episode is not found', async () => {
      mockEpisodeService.findOne.mockRejectedValue(
        new NotFoundException('Episode with ID nonexistent not found'),
      );

      await expect(controller.findOne('nonexistent')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  // ─── PATCH /episode/:id ───────────────────────────────────────────────────────

  describe('PATCH /episode/:id (update)', () => {
    const updateDto: UpdateEpisodeDto = { title: 'Updated Episode' };

    it('should return ApiResponse with updated episode', async () => {
      const updated = { ...mockEpisode, title: 'Updated Episode' };
      mockEpisodeService.update.mockResolvedValue(updated);

      const result = await controller.update('uuid-ep-1', updateDto);

      expect(mockEpisodeService.update).toHaveBeenCalledWith(
        'uuid-ep-1',
        updateDto,
      );
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data.title).toBe('Updated Episode');
      expect(result.message).toBe('Successfully updated episode');
    });

    it('should propagate service error during update', async () => {
      mockEpisodeService.update.mockRejectedValue(new Error('Update failed'));

      await expect(
        controller.update('uuid-ep-1', updateDto),
      ).rejects.toThrow('Update failed');
    });
  });

  // ─── DELETE /episode/:id ──────────────────────────────────────────────────────

  describe('DELETE /episode/:id (remove)', () => {
    it('should return ApiResponse with deleted episode data', async () => {
      mockEpisodeService.remove.mockResolvedValue(mockEpisode);

      const result = await controller.remove('uuid-ep-1');

      expect(mockEpisodeService.remove).toHaveBeenCalledWith('uuid-ep-1');
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data).toEqual(mockEpisode);
      expect(result.message).toBe('Successfully deleted episode');
    });

    it('should propagate error if episode does not exist', async () => {
      mockEpisodeService.remove.mockRejectedValue(
        new Error('Record to delete does not exist'),
      );

      await expect(controller.remove('bad-id')).rejects.toThrow(
        'Record to delete does not exist',
      );
    });
  });
});
