import { Test, TestingModule } from '@nestjs/testing';
import { MirrorController } from './mirror.controller';
import { MirrorService } from './mirror.service';
import { NotFoundException } from '@nestjs/common';
import { ApiResponse } from '../common/dto/api-response.dto';
import { CreateMirrorDto } from './dto/create-mirror.dto';
import { UpdateMirrorDto } from './dto/update-mirror.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { Resolution } from '@prisma/client';

describe('MirrorController', () => {
  let controller: MirrorController;

  const mockMirrorService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
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
      controllers: [MirrorController],
      providers: [{ provide: MirrorService, useValue: mockMirrorService }],
    })
      .overrideInterceptor(CacheInterceptor)
      .useValue({ intercept: jest.fn((ctx, next) => next.handle()) })
      .compile();

    controller = module.get<MirrorController>(MirrorController);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // ─── POST /mirror ─────────────────────────────────────────────────────────────

  describe('POST /mirror (create)', () => {
    const createDto: CreateMirrorDto = {
      episodeId: 'uuid-ep-1',
      resolution: Resolution.HD,
    };

    it('should return ApiResponse with created mirror', async () => {
      mockMirrorService.create.mockResolvedValue(mockMirror);

      const result = await controller.create(createDto);

      expect(mockMirrorService.create).toHaveBeenCalledWith(createDto);
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data).toEqual(mockMirror);
      expect(result.message).toBe('Successfully created mirror');
    });

    it('should propagate service errors', async () => {
      mockMirrorService.create.mockRejectedValue(
        new Error('Foreign key constraint failed'),
      );

      await expect(controller.create(createDto)).rejects.toThrow(
        'Foreign key constraint failed',
      );
    });
  });

  // ─── GET /mirror ──────────────────────────────────────────────────────────────

  describe('GET /mirror (findAll)', () => {
    it('should return ApiResponse with list of mirrors', async () => {
      const mirrorList = [
        mockMirror,
        { ...mockMirror, id: 'uuid-mirror-2', resolution: Resolution.FHD },
      ];
      mockMirrorService.findAll.mockResolvedValue(mirrorList);

      const result = await controller.findAll();

      expect(mockMirrorService.findAll).toHaveBeenCalled();
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data).toHaveLength(2);
      expect(result.message).toBe('Successfully retrieved all mirrors');
    });

    it('should return empty array when no mirrors exist', async () => {
      mockMirrorService.findAll.mockResolvedValue([]);

      const result = await controller.findAll();

      expect(result.data).toEqual([]);
    });
  });

  // ─── GET /mirror/:id ──────────────────────────────────────────────────────────

  describe('GET /mirror/:id (findOne)', () => {
    it('should return ApiResponse with mirror data', async () => {
      mockMirrorService.findOne.mockResolvedValue(mockMirror);

      const result = await controller.findOne('uuid-mirror-1');

      expect(mockMirrorService.findOne).toHaveBeenCalledWith('uuid-mirror-1');
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data).toEqual(mockMirror);
      expect(result.message).toBe('Successfully retrieved mirror details');
    });

    it('should propagate NotFoundException when mirror is not found', async () => {
      mockMirrorService.findOne.mockRejectedValue(
        new NotFoundException('Mirror with ID nonexistent not found'),
      );

      await expect(controller.findOne('nonexistent')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  // ─── PATCH /mirror/:id ────────────────────────────────────────────────────────

  describe('PATCH /mirror/:id (update)', () => {
    const updateDto: UpdateMirrorDto = { resolution: Resolution.FHD };

    it('should return ApiResponse with updated mirror', async () => {
      const updated = { ...mockMirror, resolution: Resolution.FHD };
      mockMirrorService.update.mockResolvedValue(updated);

      const result = await controller.update('uuid-mirror-1', updateDto);

      expect(mockMirrorService.update).toHaveBeenCalledWith(
        'uuid-mirror-1',
        updateDto,
      );
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data.resolution).toBe(Resolution.FHD);
      expect(result.message).toBe('Successfully updated mirror');
    });

    it('should propagate service error during update', async () => {
      mockMirrorService.update.mockRejectedValue(new Error('Update failed'));

      await expect(
        controller.update('uuid-mirror-1', updateDto),
      ).rejects.toThrow('Update failed');
    });
  });

  // ─── DELETE /mirror/:id ───────────────────────────────────────────────────────

  describe('DELETE /mirror/:id (remove)', () => {
    it('should return ApiResponse with deleted mirror data', async () => {
      mockMirrorService.remove.mockResolvedValue(mockMirror);

      const result = await controller.remove('uuid-mirror-1');

      expect(mockMirrorService.remove).toHaveBeenCalledWith('uuid-mirror-1');
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data).toEqual(mockMirror);
      expect(result.message).toBe('Successfully deleted mirror');
    });

    it('should propagate error if mirror does not exist', async () => {
      mockMirrorService.remove.mockRejectedValue(
        new Error('Record to delete does not exist'),
      );

      await expect(controller.remove('bad-id')).rejects.toThrow(
        'Record to delete does not exist',
      );
    });
  });
});
