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
import { MirrorService } from './mirror.service';
import { CreateMirrorDto } from './dto/create-mirror.dto';
import { UpdateMirrorDto } from './dto/update-mirror.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { ApiResponse } from 'src/common/dto/api-response.dto';
import { MirrorEntity } from './entities/mirror.entity';

@Controller('mirror')
@UseInterceptors(CacheInterceptor)
export class MirrorController {
  constructor(private readonly mirrorService: MirrorService) {}

  @Post()
  async create(
    @Body() createMirrorDto: CreateMirrorDto,
  ): Promise<ApiResponse<MirrorEntity>> {
    const newMirror = await this.mirrorService.create(createMirrorDto);
    return new ApiResponse(newMirror, 'Successfully created mirror');
  }

  @Get()
  async findAll(): Promise<ApiResponse<MirrorEntity[]>> {
    const mirrors = await this.mirrorService.findAll();
    return new ApiResponse(mirrors, 'Successfully retrieved all mirrors');
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ApiResponse<MirrorEntity>> {
    const mirror = await this.mirrorService.findOne(id);
    return new ApiResponse(mirror, 'Successfully retrieved mirror details');
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMirrorDto: UpdateMirrorDto,
  ): Promise<ApiResponse<MirrorEntity>> {
    const updateMirror = await this.mirrorService.update(id, updateMirrorDto);
    return new ApiResponse(updateMirror, 'Successfully updated mirror');
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ApiResponse<MirrorEntity>> {
    const deleteMirror = await this.mirrorService.remove(id);
    return new ApiResponse(deleteMirror, 'Successfully deleted mirror');
  }
}
