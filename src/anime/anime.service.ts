import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';
import { PinoLogger } from 'nestjs-pino';
import { PrismaService } from 'src/prisma/prisma.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';

@Injectable()
export class AnimeService {
  constructor(
    private readonly logger: PinoLogger,
    private readonly prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {
    this.logger.setContext(AnimeService.name);
  }

  private async clearAnimeCache(id?: string) {
    await this.cacheManager.del('/anime');

    if (id) {
      await this.cacheManager.del(`/anime/${id}`);
    }

    this.logger.info(
      `Invalidated cache for key: /anime ${id ? `and /anime/${id}` : ''}`,
    );
  }

  async create(createAnimeDto: CreateAnimeDto) {
    this.logger.info(
      `Attempting to create a new anime: ${createAnimeDto.slug}`,
    );

    const existingAnime = await this.prisma.anime.findUnique({
      where: { slug: createAnimeDto.slug },
    });

    if (existingAnime) {
      this.logger.warn(
        `Failed to create anime: Slug '${createAnimeDto.slug}' already exists`,
      );
      throw new ConflictException(
        `Anime slug '${createAnimeDto.slug}' is already taken`,
      );
    }

    const { genreIds, ...animeData } = createAnimeDto;

    const newAnime = await this.prisma.anime.create({
      data: {
        ...animeData,
        ...(genreIds && genreIds.length > 0
          ? {
              genres: {
                connect: genreIds.map((id) => ({ id })),
              },
            }
          : {}),
      },
      include: {
        genres: true,
      },
    });

    await this.clearAnimeCache();
    return newAnime;
  }

  async findAll() {
    this.logger.info(`Fetching all anime`);
    return this.prisma.anime.findMany({
      orderBy: { createdAt: 'asc' },
    });
  }

  async findOne(id: string) {
    this.logger.info(`Fetching anime with ID: ${id}`);
    const anime = await this.prisma.anime.findUnique({ where: { id } });
    if (!anime) {
      this.logger.warn(`Anime with ID ${id} not found`);
      throw new NotFoundException(`Anime with ID ${id} not found`);
    }

    return anime;
  }

  async update(id: string, updateAnimeDto: UpdateAnimeDto) {
    this.logger.info(`Attempting to update anime with ID: ${id}`);

    await this.findOne(id);

    const { genreIds, ...animeData } = updateAnimeDto;

    const updateAnime = await this.prisma.anime.update({
      where: { id },
      data: {
        ...animeData,
        ...(genreIds && genreIds.length > 0
          ? {
              genres: {
                connect: genreIds.map((id) => ({ id })),
              },
            }
          : {}),
      },
      include: {
        genres: true,
      },
    });

    this.logger.info(`Successfully updated anime with ID: ${id}`);
    await this.clearAnimeCache(id);
    return updateAnime;
  }

  async remove(id: string) {
    this.logger.info(`Attempting to delete anime with ID: ${id}`);
    await this.findOne(id);

    const deletedAnime = await this.prisma.anime.delete({ where: { id } });

    this.logger.info(`Successfully deleted anime with ID: ${id}`);
    await this.clearAnimeCache(id);
    return deletedAnime;
  }
}
