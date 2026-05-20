import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateStreamserverDto } from './dto/create-streamserver.dto';
import { UpdateStreamserverDto } from './dto/update-streamserver.dto';
import { PinoLogger } from 'nestjs-pino';
import { PrismaService } from 'src/prisma/prisma.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';

@Injectable()
export class StreamserverService {
  constructor(
    private readonly logger: PinoLogger,
    private readonly prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {
    this.logger.setContext(StreamserverService.name);
  }

  private async clearStreamserverCache(id?: string) {
    await this.cacheManager.del('/streamserver');

    if (id) {
      await this.cacheManager.del(`/streamserver/${id}`);
    }

    this.logger.info(
      `Invalidated cache for key: /streamserver ${id ? `and /streamserver/${id}` : ''}`,
    );
  }

  async create(createStreamserverDto: CreateStreamserverDto) {
    this.logger.info(
      `Attempting to create a new stream server for mirror ID: ${createStreamserverDto.mirrorId}`,
    );

    const newServer = await this.prisma.streamServer.create({
      data: createStreamserverDto,
    });

    await this.clearStreamserverCache();
    return newServer;
  }

  async findAll() {
    this.logger.info('Fetching all stream servers');
    return this.prisma.streamServer.findMany({
      orderBy: { createdAt: 'asc' },
    });
  }

  async findOne(id: string) {
    this.logger.info(`Fetching stream server with ID: ${id}`);
    const server = await this.prisma.streamServer.findUnique({
      where: { id },
    });
    if (!server) {
      this.logger.warn(`User with ID ${id} not found`);
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return server;
  }

  async update(id: string, updateStreamserverDto: UpdateStreamserverDto) {
    this.logger.info(`Attempting to update stream server with ID: ${id}`);

    const updateServer = await this.prisma.streamServer.update({
      where: { id },
      data: updateStreamserverDto,
    });

    this.logger.info(`Successfully updated stream server with ID: ${id}`);
    await this.clearStreamserverCache(id);
    return updateServer;
  }

  async remove(id: string) {
    this.logger.info(`Attempting to delete stream server with ID: ${id}`);

    const deletedServer = await this.prisma.streamServer.delete({
      where: { id },
    });

    this.logger.info(`Successfully deleted stream server with ID: ${id}`);
    await this.clearStreamserverCache(id);
    return deletedServer;
  }
}
