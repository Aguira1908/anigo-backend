import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMirrorDto } from './dto/create-mirror.dto';
import { UpdateMirrorDto } from './dto/update-mirror.dto';
import { PinoLogger } from 'nestjs-pino';
import { PrismaService } from 'src/prisma/prisma.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';
import { Prisma } from '@prisma/client';

@Injectable()
export class MirrorService {
  constructor(
    private readonly logger: PinoLogger,
    private readonly prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {
    this.logger.setContext(MirrorService.name);
  }

  private async clearMirrorCache(id?: string, episodeId?: string) {
    await this.cacheManager.del('/mirror');

    if (id) {
      await this.cacheManager.del(`/mirror/${id}`);
    }

    // Invalidate the parent Episode cache since it includes the Mirror data
    if (episodeId) {
      await this.cacheManager.del('/episode');
      await this.cacheManager.del(`/episode/${episodeId}`);
    }

    this.logger.info(
      `Invalidated cache for mirror ${id || 'all'} and parent episode ${episodeId || 'none'}`,
    );
  }

  async create(createMirrorDto: CreateMirrorDto) {
    this.logger.info(
      `Attempting to create a new mirror for episode ID: ${createMirrorDto.episodeId}`,
    );

    const newMirror = await this.prisma.mirror.create({
      data: createMirrorDto,
      include: {
        servers: true,
      },
    });

    await this.clearMirrorCache(newMirror.id, newMirror.episodeId);
    return newMirror;
  }

  async findAll() {
    this.logger.info('Fetching all mirrors');
    return this.prisma.mirror.findMany({
      orderBy: { createdAt: 'asc' },
    });
  }

  async findOne(id: string) {
    this.logger.info(`Fetching mirror with ID: ${id}`);

    const mirror = await this.prisma.mirror.findUnique({
      where: { id },
      include: { servers: true },
    });

    if (!mirror) {
      this.logger.warn(`Mirror with ID ${id} not found`);
      throw new ConflictException(`Mirror with ID ${id} not found`);
    }

    return mirror;
  }

  async update(id: string, updateMirrorDto: UpdateMirrorDto) {
    this.logger.info(`Attempting to update mirror with ID: ${id}`);

    const updateMirror = await this.prisma.mirror.update({
      where: { id },
      data: updateMirrorDto,
    });

    this.logger.info(`Successfully updated mirror with ID: ${id}`);
    await this.clearMirrorCache(updateMirror.id, updateMirror.episodeId);
    return updateMirror;
  }

  async remove(id: string) {
    this.logger.info(`Attempting to delete mirror with ID: ${id}`);

    const deletedMirror = await this.prisma.mirror.delete({ where: { id } });
    this.logger.info(`Successfully deleted mirror with ID: ${id}`);
    await this.clearMirrorCache(deletedMirror.id, deletedMirror.episodeId);

    // Cascade delete invalidations
    await this.cacheManager.del('/streamserver');

    return deletedMirror;
  }
}
