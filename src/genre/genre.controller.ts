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
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { ApiResponse } from 'src/common/dto/api-response.dto';
import { GenreEntity } from './entities/genre.entity';

@Controller('genre')
@UseInterceptors(CacheInterceptor)
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Post()
  async create(
    @Body() createGenreDto: CreateGenreDto,
  ): Promise<ApiResponse<GenreEntity>> {
    const newGenre = await this.genreService.create(createGenreDto);
    return new ApiResponse(newGenre, 'Successfully created genre');
  }

  @Get()
  async findAll(): Promise<ApiResponse<GenreEntity[]>> {
    const genres = await this.genreService.findAll();
    return new ApiResponse(genres, 'Successfully retrieved all genres');
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ApiResponse<GenreEntity>> {
    const genre = await this.genreService.findOne(+id);
    return new ApiResponse(genre, 'Successfully retrieved genre details');
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateGenreDto: UpdateGenreDto,
  ): Promise<ApiResponse<GenreEntity>> {
    const updateGenre = await this.genreService.update(+id, updateGenreDto);
    return new ApiResponse(updateGenre, 'Successfully updated genre');
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ApiResponse<GenreEntity>> {
    const deleteGenre = await this.genreService.remove(+id);
    return new ApiResponse(deleteGenre, 'Successfully deleted genre');
  }
}
