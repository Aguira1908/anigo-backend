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
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';

@Injectable()
export class GenreService {
  constructor(
    private readonly logger: PinoLogger,
    private readonly prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {
    this.logger.setContext(GenreService.name);
  }

  private async clearGenreCache(id?: number) {
    await this.cacheManager.del('/genre');
    if (id) {
      await this.cacheManager.del(`/genre/${id}`);
    }

    this.logger.info(
      `Invalidated cache for key: /genre ${id ? `and /genre/${id}` : ''}`,
    );
  }

  async create(createGenreDto: CreateGenreDto) {
    this.logger.info(
      `Attempting to create a new genre: ${createGenreDto.title}`,
    );

    const newGenre = await this.prisma.genre.create({
      data: createGenreDto,
    });

    this.logger.info(`Successfully created genre with ID: ${newGenre.id}`);
    await this.clearGenreCache();
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
    await this.clearGenreCache(id);
    return updatedGenre;
  }

  async remove(id: number) {
    this.logger.info(`Attempting to delete genre with ID: ${id}`);

    const deletedGenre = await this.prisma.genre.delete({ where: { id } });

    this.logger.info(`Successfully deleted genre with ID: ${id}`);
    await this.clearGenreCache(id);
    return deletedGenre;
  }
}
