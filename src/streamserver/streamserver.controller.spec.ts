import { Test, TestingModule } from '@nestjs/testing';
import { StreamserverController } from './streamserver.controller';
import { StreamserverService } from './streamserver.service';
import { NotFoundException } from '@nestjs/common';
import { ApiResponse } from '../common/dto/api-response.dto';
import { CreateStreamserverDto } from './dto/create-streamserver.dto';
import { UpdateStreamserverDto } from './dto/update-streamserver.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';

describe('StreamserverController', () => {
  let controller: StreamserverController;

  const mockStreamserverService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
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
      controllers: [StreamserverController],
      providers: [
        {
          provide: StreamserverService,
          useValue: mockStreamserverService,
        },
      ],
    })
      .overrideInterceptor(CacheInterceptor)
      .useValue({ intercept: jest.fn((ctx, next) => next.handle()) })
      .compile();

    controller = module.get<StreamserverController>(StreamserverController);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // ─── POST /streamserver ───────────────────────────────────────────────────────

  describe('POST /streamserver (create)', () => {
    const createDto: CreateStreamserverDto = {
      mirrorId: 'uuid-mirror-1',
      platform: 'vidstream',
      embedUrl: 'https://embed.example.com/video123',
    };

    it('should return ApiResponse with created stream server', async () => {
      mockStreamserverService.create.mockResolvedValue(mockServer);

      const result = await controller.create(createDto);

      expect(mockStreamserverService.create).toHaveBeenCalledWith(createDto);
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data).toEqual(mockServer);
      expect(result.message).toBe('Successfully created stream server');
    });

    it('should propagate service errors', async () => {
      mockStreamserverService.create.mockRejectedValue(
        new Error('Foreign key constraint failed'),
      );

      await expect(controller.create(createDto)).rejects.toThrow(
        'Foreign key constraint failed',
      );
    });
  });

  // ─── GET /streamserver ────────────────────────────────────────────────────────

  describe('GET /streamserver (findAll)', () => {
    it('should return ApiResponse with list of stream servers', async () => {
      const serverList = [
        mockServer,
        { ...mockServer, id: 'uuid-server-2', platform: 'mp4upload' },
      ];
      mockStreamserverService.findAll.mockResolvedValue(serverList);

      const result = await controller.findAll();

      expect(mockStreamserverService.findAll).toHaveBeenCalled();
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data).toHaveLength(2);
      expect(result.message).toBe('Successfully retrieved all stream servers');
    });

    it('should return empty array when no servers exist', async () => {
      mockStreamserverService.findAll.mockResolvedValue([]);

      const result = await controller.findAll();

      expect(result.data).toEqual([]);
    });
  });

  // ─── GET /streamserver/:id ────────────────────────────────────────────────────

  describe('GET /streamserver/:id (findOne)', () => {
    it('should return ApiResponse with stream server data', async () => {
      mockStreamserverService.findOne.mockResolvedValue(mockServer);

      const result = await controller.findOne('uuid-server-1');

      expect(mockStreamserverService.findOne).toHaveBeenCalledWith(
        'uuid-server-1',
      );
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data).toEqual(mockServer);
      expect(result.message).toBe('Successfully retrieved stream server details');
    });

    it('should propagate NotFoundException when stream server is not found', async () => {
      mockStreamserverService.findOne.mockRejectedValue(
        new NotFoundException('Stream server with ID nonexistent not found'),
      );

      await expect(controller.findOne('nonexistent')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  // ─── PATCH /streamserver/:id ──────────────────────────────────────────────────

  describe('PATCH /streamserver/:id (update)', () => {
    const updateDto: UpdateStreamserverDto = {
      embedUrl: 'https://embed.example.com/new-video',
    };

    it('should return ApiResponse with updated stream server', async () => {
      const updated = {
        ...mockServer,
        embedUrl: 'https://embed.example.com/new-video',
      };
      mockStreamserverService.update.mockResolvedValue(updated);

      const result = await controller.update('uuid-server-1', updateDto);

      expect(mockStreamserverService.update).toHaveBeenCalledWith(
        'uuid-server-1',
        updateDto,
      );
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data.embedUrl).toBe('https://embed.example.com/new-video');
      expect(result.message).toBe('Successfully updated stream server');
    });

    it('should propagate service error during update', async () => {
      mockStreamserverService.update.mockRejectedValue(
        new Error('Update failed'),
      );

      await expect(
        controller.update('uuid-server-1', updateDto),
      ).rejects.toThrow('Update failed');
    });
  });

  // ─── DELETE /streamserver/:id ─────────────────────────────────────────────────

  describe('DELETE /streamserver/:id (remove)', () => {
    it('should return ApiResponse with deleted stream server data', async () => {
      mockStreamserverService.remove.mockResolvedValue(mockServer);

      const result = await controller.remove('uuid-server-1');

      expect(mockStreamserverService.remove).toHaveBeenCalledWith(
        'uuid-server-1',
      );
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.data).toEqual(mockServer);
      expect(result.message).toBe('Successfully deleted stream server');
    });

    it('should propagate error if stream server does not exist', async () => {
      mockStreamserverService.remove.mockRejectedValue(
        new Error('Record to delete does not exist'),
      );

      await expect(controller.remove('bad-id')).rejects.toThrow(
        'Record to delete does not exist',
      );
    });
  });
});
