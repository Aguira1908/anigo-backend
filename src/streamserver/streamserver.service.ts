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
import { EventEmitter2 } from '@nestjs/event-emitter';
import { EntityMutatedEvent } from 'src/common/cache/entity-mutated.event';

@Injectable()
export class StreamserverService {
  constructor(
    private readonly logger: PinoLogger,
    private readonly prisma: PrismaService,
    private readonly eventEmitter: EventEmitter2,
  ) {
    this.logger.setContext(StreamserverService.name);
  }

  async create(createStreamserverDto: CreateStreamserverDto) {
    this.logger.info(
      `Attempting to create a new stream server for mirror ID: ${createStreamserverDto.mirrorId}`,
    );

    const newServer = await this.prisma.streamServer.create({
      data: createStreamserverDto,
    });

    this.eventEmitter.emit(
      'entity.mutated',
      new EntityMutatedEvent('streamserver', 'created', newServer.id, {
        mirrorId: createStreamserverDto.mirrorId,
      }),
    );
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
      this.logger.warn(`Stream server with ID ${id} not found`);
      throw new NotFoundException(`Stream server with ID ${id} not found`);
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
    this.eventEmitter.emit(
      'entity.mutated',
      new EntityMutatedEvent('streamserver', 'updated', id, {
        mirrorId: updateServer.mirrorId,
      }),
    );
    return updateServer;
  }

  async remove(id: string) {
    this.logger.info(`Attempting to delete stream server with ID: ${id}`);

    const deletedServer = await this.prisma.streamServer.delete({
      where: { id },
    });

    this.logger.info(`Successfully deleted stream server with ID: ${id}`);
    this.eventEmitter.emit(
      'entity.mutated',
      new EntityMutatedEvent('streamserver', 'deleted', id, {
        mirrorId: deletedServer.mirrorId,
      }),
    );
    return deletedServer;
  }
}
