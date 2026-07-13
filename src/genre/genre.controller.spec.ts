import { Test, TestingModule } from '@nestjs/testing';
import { GenreController } from './genre.controller';
import { GenreService } from './genre.service';
import { NotFoundException } from '@nestjs/common';
import { ApiResponse } from '../common/dto/api-response.dto';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';

describe('GenreController', () => {
  let controller: GenreController;

  const mockGenreService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  const mockGenre = {
    id: 1,
    title: 'Action',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenreController],
      providers: [{ provide: GenreService, useValue: mockGenreService }],
    })
      .overrideInterceptor(CacheInterceptor)
      .useValue({ intercept: jest.fn((ctx, next) => next.handle()) })
      .compile();

    controller = module.get<GenreController>(GenreController);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // ─── POST /genre ──────────────────────────────────────────────────────────────

  describe('POST /genre (create)', () => {
    const createDto: CreateGenreDto = { title: 'Action', isActive: true };

    it('should return ApiResponse with created genre', async () => {
      mockGenreService.create.mockResolvedValue(mockGenre);

      const result = await controller.create(createDto);

      expect(mockGenreService.create).toHaveBeenCalledWith(createDto);
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data).toEqual(mockGenre);
      expect(result.message).toBe('Successfully created genre');
    });

    it('should propagate service errors', async () => {
      mockGenreService.create.mockRejectedValue(
        new Error('Unique constraint failed'),
      );

      await expect(controller.create(createDto)).rejects.toThrow(
        'Unique constraint failed',
      );
    });
  });

  // ─── GET /genre ───────────────────────────────────────────────────────────────

  describe('GET /genre (findAll)', () => {
    it('should return ApiResponse with list of genres', async () => {
      const genreList = [
        mockGenre,
        { ...mockGenre, id: 2, title: 'Comedy' },
      ];
      mockGenreService.findAll.mockResolvedValue(genreList);

      const result = await controller.findAll();

      expect(mockGenreService.findAll).toHaveBeenCalled();
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data).toHaveLength(2);
      expect(result.message).toBe('Successfully retrieved all genres');
    });

    it('should return empty array when no genres exist', async () => {
      mockGenreService.findAll.mockResolvedValue([]);

      const result = await controller.findAll();

      expect(result.data).toEqual([]);
    });
  });

  // ─── GET /genre/:id ───────────────────────────────────────────────────────────

  describe('GET /genre/:id (findOne)', () => {
    it('should return ApiResponse with genre data (parses id to number)', async () => {
      mockGenreService.findOne.mockResolvedValue(mockGenre);

      // Controller passes +id (Number coercion) to service
      const result = await controller.findOne('1');

      expect(mockGenreService.findOne).toHaveBeenCalledWith(1);
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data).toEqual(mockGenre);
      expect(result.message).toBe('Successfully retrieved genre details');
    });

    it('should propagate NotFoundException when genre is not found', async () => {
      mockGenreService.findOne.mockRejectedValue(
        new NotFoundException('Genre with ID 999 not found'),
      );

      await expect(controller.findOne('999')).rejects.toThrow(NotFoundException);
    });
  });

  // ─── PATCH /genre/:id ─────────────────────────────────────────────────────────

  describe('PATCH /genre/:id (update)', () => {
    const updateDto: UpdateGenreDto = { title: 'Drama' };

    it('should return ApiResponse with updated genre (parses id to number)', async () => {
      const updated = { ...mockGenre, title: 'Drama' };
      mockGenreService.update.mockResolvedValue(updated);

      const result = await controller.update('1', updateDto);

      expect(mockGenreService.update).toHaveBeenCalledWith(1, updateDto);
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data.title).toBe('Drama');
      expect(result.message).toBe('Successfully updated genre');
    });

    it('should propagate service error during update', async () => {
      mockGenreService.update.mockRejectedValue(new Error('Update failed'));

      await expect(controller.update('1', updateDto)).rejects.toThrow(
        'Update failed',
      );
    });
  });

  // ─── DELETE /genre/:id ────────────────────────────────────────────────────────

  describe('DELETE /genre/:id (remove)', () => {
    it('should return ApiResponse with deleted genre (parses id to number)', async () => {
      mockGenreService.remove.mockResolvedValue(mockGenre);

      const result = await controller.remove('1');

      expect(mockGenreService.remove).toHaveBeenCalledWith(1);
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data).toEqual(mockGenre);
      expect(result.message).toBe('Successfully deleted genre');
    });

    it('should propagate error if genre does not exist', async () => {
      mockGenreService.remove.mockRejectedValue(
        new Error('Record to delete does not exist'),
      );

      await expect(controller.remove('999')).rejects.toThrow(
        'Record to delete does not exist',
      );
    });
  });
});
