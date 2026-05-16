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

  private async clearUserCache(id?: number) {
    await this.cacheManager.del('/user/');

    if (id) {
      await this.cacheManager.del(`/user/${id}`);
    }

    this.logger.info(
      `Cache invalidation for key: /user ${id ? `& /user/${id}` : ''}`,
    );
  }

  async create(createUserDto: CreateUserDto) {
    this.logger.info(`create new user: ${createUserDto.username}`);

    const existingUser = await this.prisma.user.findUnique({
      where: { username: createUserDto.username },
    });

    if (existingUser) {
      this.logger.warn(
        `fail create new user: Username ${createUserDto.username} existed `,
      );
      throw new ConflictException(
        `Username '${createUserDto.username}' sudah digunakan`,
      );
    }

    const newUser = await this.prisma.user.create({
      data: createUserDto,
    });

    this.logger.info(`succes create user with id: ${newUser.id}`);

    await this.clearUserCache(newUser.id);
    return newUser;
  }

  async findAll() {
    return this.prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      this.logger.warn(`user with id ${id} not found`);
      throw new NotFoundException(`user with id ${id} not found`);
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.findOne(id);

    const updateUser = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });

    await this.clearUserCache(id);
    return updateUser;
  }

  async remove(id: number) {
    await this.findOne(id);

    const deleteUser = await this.prisma.user.delete({ where: { id } });

    await this.clearUserCache(id);
    return deleteUser;
  }
}
