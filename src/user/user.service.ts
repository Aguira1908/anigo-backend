import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PinoLogger } from 'nestjs-pino';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { EntityMutatedEvent } from 'src/common/cache/entity-mutated.event';

@Injectable()
export class UserService {
  constructor(
    private readonly logger: PinoLogger,
    private readonly prisma: PrismaService,
    private readonly eventEmitter: EventEmitter2,
  ) {
    this.logger.setContext(UserService.name);
  }

  async create(createUserDto: CreateUserDto) {
    this.logger.info(
      `Attempting to create a new user: ${createUserDto.username}`,
    );

    const newUser = await this.prisma.user.create({
      data: createUserDto,
    });

    this.logger.info(`Successfully created user with ID: ${newUser.id}`);
    this.eventEmitter.emit(
      'entity.mutated',
      new EntityMutatedEvent('user', 'created', newUser.id),
    );
    return newUser;
  }

  async findAll() {
    this.logger.info(`Fetching all users`);
    return this.prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    this.logger.info(`Fetching user with ID: ${id}`);
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      this.logger.warn(`User with ID ${id} not found`);
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    this.logger.info(`Attempting to update user with ID: ${id}`);
    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });

    this.logger.info(`Successfully updated user with ID: ${id}`);
    this.eventEmitter.emit(
      'entity.mutated',
      new EntityMutatedEvent('user', 'updated', id),
    );
    return updatedUser;
  }

  async remove(id: string) {
    this.logger.info(`Attempting to delete user with ID: ${id}`);
    const deletedUser = await this.prisma.user.delete({ where: { id } });

    this.logger.info(`Successfully deleted user with ID: ${id}`);
    this.eventEmitter.emit(
      'entity.mutated',
      new EntityMutatedEvent('user', 'deleted', id),
    );
    return deletedUser;
  }
}
