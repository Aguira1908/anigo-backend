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
import { EventEmitter2 } from '@nestjs/event-emitter';
import { EntityMutatedEvent } from 'src/common/cache/entity-mutated.event';

@Injectable()
export class EpisodeService {
  constructor(
    private readonly logger: PinoLogger,
    private readonly prisma: PrismaService,
    private readonly eventEmitter: EventEmitter2,
  ) {
    this.logger.setContext(EpisodeService.name);
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

    this.eventEmitter.emit(
      'entity.mutated',
      new EntityMutatedEvent('episode', 'created', newEpisode.id, {
        animeId: createEpisodeDto.animeId,
      }),
    );
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
    this.eventEmitter.emit(
      'entity.mutated',
      new EntityMutatedEvent('episode', 'updated', id, {
        animeId: updateEpisode.animeId,
      }),
    );
    return updateEpisode;
  }

  async remove(id: string) {
    this.logger.info(`Attempting to delete episode with ID: ${id}`);

    const deletedEpisode = await this.prisma.episode.delete({ where: { id } });
    this.logger.info(`Successfully deleted episode with ID: ${id}`);
    this.eventEmitter.emit(
      'entity.mutated',
      new EntityMutatedEvent('episode', 'deleted', id, {
        animeId: deletedEpisode.animeId,
      }),
    );
    return deletedEpisode;
  }
}
