import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiResponse } from 'src/common/dto/api-response.dto';
import { UserEntity } from './entities/user.entity';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('user')
@UseInterceptors(CacheInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<ApiResponse<UserEntity>> {
    const newUser = await this.userService.create(createUserDto);
    return new ApiResponse(newUser, 'Successfully created user');
  }

  @Get()
  async findAll(): Promise<ApiResponse<UserEntity[]>> {
    const users = await this.userService.findAll();

    return new ApiResponse(users, 'Successfully retrieved all users');
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ApiResponse<UserEntity>> {
    const user = await this.userService.findOne(id);

    return new ApiResponse(user, 'Successfully retrieved user details');
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<ApiResponse<UserEntity>> {
    const updateUser = await this.userService.update(id, updateUserDto);

    return new ApiResponse(updateUser, 'Successfully updated user');
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ApiResponse<UserEntity>> {
    const deleteUser = await this.userService.remove(id);
    return new ApiResponse(deleteUser, 'Successfully deleted user');
  }
}
