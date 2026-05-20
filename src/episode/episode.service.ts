import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { UpdateEpisodeDto } from './dto/update-episode.dto';
import { PinoLogger } from 'nestjs-pino';
import { PrismaService } from 'src/prisma/prisma.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';

@Injectable()
export class EpisodeService {
  constructor(
    private readonly logger: PinoLogger,
    private readonly prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {
    this.logger.setContext(EpisodeService.name);
  }

  private async clearEpisodeCache(id?: string, animeId?: string) {
    await this.cacheManager.del('/episode');

    if (id) {
      await this.cacheManager.del(`/episode/${id}`);
    }

    // Invalidate parent Anime cache
    if (animeId) {
      await this.cacheManager.del('/anime');
      await this.cacheManager.del(`/anime/${animeId}`);
    }

    this.logger.info(
      `Invalidated cache for episode ${id || 'all'} and parent anime ${animeId || 'none'}`,
    );
  }

  async create(createEpisodeDto: CreateEpisodeDto) {
    this.logger.info(
      `Attempting to create a new episode: ${createEpisodeDto.slug}`,
    );

    const newEpisode = await this.prisma.episode.create({
      data: createEpisodeDto,
      include: {
        mirrors: true,
      },
    });

    await this.clearEpisodeCache(newEpisode.id, newEpisode.animeId);
    return newEpisode;
  }

  async findAll() {
    this.logger.info('Fetching all episodes');
    return this.prisma.episode.findMany({
      orderBy: { createdAt: 'asc' },
    });
  }

  async findOne(id: string) {
    this.logger.info(`Fetching episode with ID: ${id}`);
    const episode = await this.prisma.episode.findUnique({
      where: { id },
      include: { mirrors: true },
    });

    if (!episode) {
      this.logger.warn(`Episode with ID ${id} not found`);
      throw new NotFoundException(`Episode with ID ${id} not found`);
    }

    return episode;
  }

  async update(id: string, updateEpisodeDto: UpdateEpisodeDto) {
    this.logger.info(`Attempting to update episode with ID: ${id}`);

    const updateEpisode = await this.prisma.episode.update({
      where: { id },
      data: updateEpisodeDto,
    });

    this.logger.info(`Successfully updated episode with ID: ${id}`);

    await this.clearEpisodeCache(updateEpisode.id, updateEpisode.animeId);
    return updateEpisode;
  }

  async remove(id: string) {
    this.logger.info(`Attempting to delete episode with ID: ${id}`);

    const deletedEpisode = await this.prisma.episode.delete({ where: { id } });
    this.logger.info(`Successfully deleted episode with ID: ${id}`);
    await this.clearEpisodeCache(deletedEpisode.id, deletedEpisode.animeId);

    // Cascade delete invalidations
    await this.cacheManager.del('/mirror');
    await this.cacheManager.del('/streamserver');

    return deletedEpisode;
  }
}
