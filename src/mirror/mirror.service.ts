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
import { EventEmitter2 } from '@nestjs/event-emitter';
import { EntityMutatedEvent } from 'src/common/cache/entity-mutated.event';

@Injectable()
export class MirrorService {
  constructor(
    private readonly logger: PinoLogger,
    private readonly prisma: PrismaService,
    private readonly eventEmitter: EventEmitter2,
  ) {
    this.logger.setContext(MirrorService.name);
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

    this.eventEmitter.emit(
      'entity.mutated',
      new EntityMutatedEvent('mirror', 'created', newMirror.id, {
        episodeId: createMirrorDto.episodeId,
      }),
    );
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
      throw new NotFoundException(`Mirror with ID ${id} not found`);
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
    this.eventEmitter.emit(
      'entity.mutated',
      new EntityMutatedEvent('mirror', 'updated', id, {
        episodeId: updateMirror.episodeId,
      }),
    );
    return updateMirror;
  }

  async remove(id: string) {
    this.logger.info(`Attempting to delete mirror with ID: ${id}`);

    const deletedMirror = await this.prisma.mirror.delete({ where: { id } });
    this.logger.info(`Successfully deleted mirror with ID: ${id}`);
    this.eventEmitter.emit(
      'entity.mutated',
      new EntityMutatedEvent('mirror', 'deleted', id, {
        episodeId: deletedMirror.episodeId,
      }),
    );
    return deletedMirror;
  }
}
