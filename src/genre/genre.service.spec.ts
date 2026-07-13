import { Test, TestingModule } from '@nestjs/testing';
import { GenreService } from './genre.service';
import { PrismaService } from '../prisma/prisma.service';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { NotFoundException } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

describe('GenreService', () => {
  let service: GenreService;

  const mockPrismaService = {
    genre: {
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

  const mockGenre = {
    id: 1,
    title: 'Action',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GenreService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: EventEmitter2, useValue: mockEventEmitter },
        { provide: PinoLogger, useValue: mockLogger },
      ],
    }).compile();

    service = module.get<GenreService>(GenreService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // ─── create ───────────────────────────────────────────────────────────────────

  describe('create', () => {
    const createDto: CreateGenreDto = {
      title: 'Action',
      isActive: true,
    };

    it('should create a genre and emit entity.mutated event', async () => {
      mockPrismaService.genre.create.mockResolvedValue(mockGenre);

      const result = await service.create(createDto);

      expect(mockPrismaService.genre.create).toHaveBeenCalledWith({
        data: createDto,
      });
      expect(mockEventEmitter.emit).toHaveBeenCalledWith(
        'entity.mutated',
        expect.objectContaining({ entity: 'genre', action: 'created' }),
      );
      expect(result).toEqual(mockGenre);
    });

    it('should propagate prisma error on create failure', async () => {
      mockPrismaService.genre.create.mockRejectedValue(
        new Error('Unique constraint failed'),
      );

      await expect(service.create(createDto)).rejects.toThrow(
        'Unique constraint failed',
      );
    });
  });

  // ─── findAll ──────────────────────────────────────────────────────────────────

  describe('findAll', () => {
    it('should return all genres ordered by createdAt desc', async () => {
      const genreList = [
        mockGenre,
        { ...mockGenre, id: 2, title: 'Comedy' },
      ];
      mockPrismaService.genre.findMany.mockResolvedValue(genreList);

      const result = await service.findAll();

      expect(mockPrismaService.genre.findMany).toHaveBeenCalledWith({
        orderBy: { createdAt: 'desc' },
      });
      expect(result).toEqual(genreList);
    });

    it('should return empty array when no genres exist', async () => {
      mockPrismaService.genre.findMany.mockResolvedValue([]);

      const result = await service.findAll();

      expect(result).toEqual([]);
    });
  });

  // ─── findOne ──────────────────────────────────────────────────────────────────

  describe('findOne', () => {
    it('should return a genre by numeric ID', async () => {
      mockPrismaService.genre.findUnique.mockResolvedValue(mockGenre);

      const result = await service.findOne(1);

      expect(mockPrismaService.genre.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
      expect(result).toEqual(mockGenre);
    });

    it('should throw NotFoundException when genre is not found', async () => {
      mockPrismaService.genre.findUnique.mockResolvedValue(null);

      await expect(service.findOne(999)).rejects.toThrow(NotFoundException);
      await expect(service.findOne(999)).rejects.toThrow(
        'Genre with ID 999 not found',
      );
    });
  });

  // ─── update ───────────────────────────────────────────────────────────────────

  describe('update', () => {
    const updateDto: UpdateGenreDto = { title: 'Drama' };

    it('should update genre and emit entity.mutated event', async () => {
      const updatedGenre = { ...mockGenre, title: 'Drama' };
      mockPrismaService.genre.update.mockResolvedValue(updatedGenre);

      const result = await service.update(1, updateDto);

      expect(mockPrismaService.genre.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: updateDto,
      });
      expect(mockEventEmitter.emit).toHaveBeenCalledWith(
        'entity.mutated',
        expect.objectContaining({ entity: 'genre', action: 'updated' }),
      );
      expect(result).toEqual(updatedGenre);
    });

    it('should propagate error if genre does not exist', async () => {
      mockPrismaService.genre.update.mockRejectedValue(
        new Error('Record to update not found'),
      );

      await expect(service.update(999, updateDto)).rejects.toThrow(
        'Record to update not found',
      );
    });
  });

  // ─── remove ───────────────────────────────────────────────────────────────────

  describe('remove', () => {
    it('should delete genre and emit entity.mutated event', async () => {
      mockPrismaService.genre.delete.mockResolvedValue(mockGenre);

      const result = await service.remove(1);

      expect(mockPrismaService.genre.delete).toHaveBeenCalledWith({
        where: { id: 1 },
      });
      expect(mockEventEmitter.emit).toHaveBeenCalledWith(
        'entity.mutated',
        expect.objectContaining({ entity: 'genre', action: 'deleted' }),
      );
      expect(result).toEqual(mockGenre);
    });

    it('should propagate error if genre does not exist', async () => {
      mockPrismaService.genre.delete.mockRejectedValue(
        new Error('Record to delete does not exist'),
      );

      await expect(service.remove(999)).rejects.toThrow(
        'Record to delete does not exist',
      );
    });
  });
});
