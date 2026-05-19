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

  private async clearEpisodeCache(id?: string) {
    await this.cacheManager.del('/episode');

    if (id) {
      await this.cacheManager.del(`/episode/${id}`);
    }

    this.logger.info(
      `Invalidated cache for key: /episode ${id ? `and /episode/${id}` : ''}`,
    );
  }

  async create(createEpisodeDto: CreateEpisodeDto) {
    this.logger.info(
      `Attempting to create a new episode: ${createEpisodeDto.slug}`,
    );

    const existingEpisode = await this.prisma.episode.findUnique({
      where: { slug: createEpisodeDto.slug },
    });

    if (existingEpisode) {
      this.logger.warn(
        `Failed to create episode: Slug '${createEpisodeDto.slug}' already exists`,
      );
      throw new ConflictException(
        `Episode slug '${createEpisodeDto.slug}' is already taken`,
      );
    }

    const newEpisode = await this.prisma.episode.create({
      data: createEpisodeDto,
      include: {
        mirrors: true,
      },
    });

    await this.clearEpisodeCache();
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
    const episode = await this.prisma.episode.findUnique({ where: { id } });

    if (!episode) {
      this.logger.warn(`Episode with ID ${id} not found`);
      throw new NotFoundException(`Episode with ID ${id} not found`);
    }

    return episode;
  }

  async update(id: string, updateEpisodeDto: UpdateEpisodeDto) {
    this.logger.info(`Attempting to update episode with ID: ${id}`);
    await this.findOne(id);

    const updateEpisode = await this.prisma.episode.update({
      where: { id },
      data: updateEpisodeDto,
    });

    this.logger.info(`Successfully updated episode with ID: ${id}`);

    await this.clearEpisodeCache(id);
    return updateEpisode;
  }

  async remove(id: string) {
    this.logger.info(`Attempting to delete episode with ID: ${id}`);
    await this.findOne(id);

    const deletedEpisode = await this.prisma.episode.delete({ where: { id } });
    this.logger.info(`Successfully deleted episode with ID: ${id}`);
    await this.clearEpisodeCache(id);
    return deletedEpisode;
  }
}
