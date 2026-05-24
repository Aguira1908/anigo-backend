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
import { EventEmitter2 } from '@nestjs/event-emitter';
import { EntityMutatedEvent } from 'src/common/cache/entity-mutated.event';

@Injectable()
export class AnimeService {
  constructor(
    private readonly logger: PinoLogger,
    private readonly prisma: PrismaService,
    private readonly eventEmitter: EventEmitter2,
  ) {
    this.logger.setContext(AnimeService.name);
  }

  async create(createAnimeDto: CreateAnimeDto) {
    this.logger.info(
      `Attempting to create a new anime: ${createAnimeDto.slug}`,
    );

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

    this.eventEmitter.emit(
      'entity.mutated',
      new EntityMutatedEvent('anime', 'created', newAnime.id),
    );
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
    this.eventEmitter.emit(
      'entity.mutated',
      new EntityMutatedEvent('anime', 'updated', id),
    );
    return updateAnime;
  }

  async remove(id: string) {
    this.logger.info(`Attempting to delete anime with ID: ${id}`);
    const deletedAnime = await this.prisma.anime.delete({ where: { id } });

    this.logger.info(`Successfully deleted anime with ID: ${id}`);
    this.eventEmitter.emit(
      'entity.mutated',
      new EntityMutatedEvent('anime', 'deleted', id),
    );
    return deletedAnime;
  }
}
