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
import type { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class UserService {
  constructor(
    private readonly logger: PinoLogger,
    private readonly prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {
    this.logger.setContext(UserService.name);
  }

  private async clearUserCache(id?: string) {
    await this.cacheManager.del('/user');

    if (id) {
      await this.cacheManager.del(`/user/${id}`);
    }

    this.logger.info(`Invalidated cache for key: /user ${id ? `and /user/${id}` : ''}`);
  }

  async create(createUserDto: CreateUserDto) {
    this.logger.info(`Attempting to create a new user: ${createUserDto.username}`);

    const existingUser = await this.prisma.user.findUnique({
      where: { username: createUserDto.username },
    });

    if (existingUser) {
      this.logger.warn(`Failed to create user: Username '${createUserDto.username}' already exists`);
      throw new ConflictException(`Username '${createUserDto.username}' is already taken`);
    }

    const newUser = await this.prisma.user.create({
      data: createUserDto,
    });

    this.logger.info(`Successfully created user with ID: ${newUser.id}`);

    await this.clearUserCache();
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
    await this.findOne(id);

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });

    this.logger.info(`Successfully updated user with ID: ${id}`);
    await this.clearUserCache(id);
    return updatedUser;
  }

  async remove(id: string) {
    this.logger.info(`Attempting to delete user with ID: ${id}`);
    await this.findOne(id);

    const deletedUser = await this.prisma.user.delete({ where: { id } });

    this.logger.info(`Successfully deleted user with ID: ${id}`);
    await this.clearUserCache(id);
    return deletedUser;
  }
}
