import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    this.logger.log(`create new user: ${createUserDto.username}`);

    const existingUser = await this.prisma.user.findUnique({
      where: { username: createUserDto.username },
    });

    if (existingUser) {
      this.logger.warn(
        `fail create new user: Username ${createUserDto.username} existed `,
      );
    }

    const newUser = await this.prisma.user.create({
      data: createUserDto,
    });

    this.logger.log(`succes create user with id: ${newUser.id}`);
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
      this.logger.error(`user with id ${id} not found`);
      throw new NotFoundException(`user with id ${id} not found`);
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);

    if (!user) {
      this.logger.error(`user not found`);
      throw new NotFoundException('user not found');
    }

    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.user.delete({ where: { id } });
  }
}
