import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { PinoLogger } from 'nestjs-pino';
import { PrismaService } from 'src/prisma/prisma.service';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { EntityMutatedEvent } from 'src/common/cache/entity-mutated.event';

@Injectable()
export class GenreService {
  constructor(
    private readonly logger: PinoLogger,
    private readonly prisma: PrismaService,
    private readonly eventEmitter: EventEmitter2,
  ) {
    this.logger.setContext(GenreService.name);
  }

  async create(createGenreDto: CreateGenreDto) {
    this.logger.info(
      `Attempting to create a new genre: ${createGenreDto.title}`,
    );

    const newGenre = await this.prisma.genre.create({
      data: createGenreDto,
    });

    this.logger.info(`Successfully created genre with ID: ${newGenre.id}`);
    this.eventEmitter.emit(
      'entity.mutated',
      new EntityMutatedEvent('genre', 'created', newGenre.id),
    );
    return newGenre;
  }

  async findAll() {
    this.logger.info(`Fetching all genres`);
    return this.prisma.genre.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    this.logger.info(`Fetching genre with ID: ${id}`);
    const genre = await this.prisma.genre.findUnique({ where: { id } });

    if (!genre) {
      this.logger.warn(`Genre with ID ${id} not found`);
      throw new NotFoundException(`Genre with ID ${id} not found`);
    }

    return genre;
  }

  async update(id: number, updateGenreDto: UpdateGenreDto) {
    this.logger.info(`Attempting to update genre with ID: ${id}`);

    const updatedGenre = await this.prisma.genre.update({
      where: { id },
      data: updateGenreDto,
    });

    this.logger.info(`Successfully updated genre with ID: ${id}`);
    this.eventEmitter.emit(
      'entity.mutated',
      new EntityMutatedEvent('genre', 'updated', id),
    );
    return updatedGenre;
  }

  async remove(id: number) {
    this.logger.info(`Attempting to delete genre with ID: ${id}`);

    const deletedGenre = await this.prisma.genre.delete({ where: { id } });

    this.logger.info(`Successfully deleted genre with ID: ${id}`);
    this.eventEmitter.emit(
      'entity.mutated',
      new EntityMutatedEvent('genre', 'deleted', id),
    );
    return deletedGenre;
  }
}
