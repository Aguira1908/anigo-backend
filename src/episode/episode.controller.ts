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
import { EpisodeService } from './episode.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { UpdateEpisodeDto } from './dto/update-episode.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { ApiResponse } from 'src/common/dto/api-response.dto';
import { EpisodeEntity } from './entities/episode.entity';

@Controller('episode')
@UseInterceptors(CacheInterceptor)
export class EpisodeController {
  constructor(private readonly episodeService: EpisodeService) {}

  @Post()
  async create(
    @Body() createEpisodeDto: CreateEpisodeDto,
  ): Promise<ApiResponse<EpisodeEntity>> {
    const newEpisode = await this.episodeService.create(createEpisodeDto);
    return new ApiResponse(newEpisode, 'Successfully created episode');
  }

  @Get()
  async findAll(): Promise<ApiResponse<EpisodeEntity[]>> {
    const episode = await this.episodeService.findAll();
    return new ApiResponse(episode, 'Successfully retrieved all episodes');
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ApiResponse<EpisodeEntity>> {
    const episode = await this.episodeService.findOne(id);
    return new ApiResponse(episode, 'Successfully retrieved episode details');
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEpisodeDto: UpdateEpisodeDto,
  ): Promise<ApiResponse<EpisodeEntity>> {
    const updateEpisode = await this.episodeService.update(
      id,
      updateEpisodeDto,
    );
    return new ApiResponse(updateEpisode, 'Successfully updated episode');
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ApiResponse<EpisodeEntity>> {
    const removeEpisode = await this.episodeService.remove(id);
    return new ApiResponse(removeEpisode, 'Successfully deleted episode');
  }
}
