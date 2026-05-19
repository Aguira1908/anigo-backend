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
import { AnimeService } from './anime.service';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { ApiResponse } from 'src/common/dto/api-response.dto';
import { AnimeEntity } from './entities/anime.entity';

@Controller('anime')
@UseInterceptors(CacheInterceptor)
export class AnimeController {
  constructor(private readonly animeService: AnimeService) {}

  @Post()
  async create(
    @Body() createAnimeDto: CreateAnimeDto,
  ): Promise<ApiResponse<AnimeEntity>> {
    const newAnime = await this.animeService.create(createAnimeDto);
    return new ApiResponse(newAnime, 'Successfully created anime');
  }

  @Get()
  findAll() {
    return this.animeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ApiResponse<AnimeEntity>> {
    const anime = await this.animeService.findOne(id);
    return new ApiResponse(anime, 'Successfully retrieved anime details');
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnimeDto: UpdateAnimeDto) {
    return this.animeService.update(id, updateAnimeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animeService.remove(id);
  }
}
