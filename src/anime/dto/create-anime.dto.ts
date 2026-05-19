import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEnum,
  IsNumber,
  IsBoolean,
  IsDateString,
  IsArray,
} from 'class-validator';
import { AnimeStatus } from '@prisma/client';

export class CreateAnimeDto {
  @IsString()
  @IsNotEmpty({ message: 'Title is required' })
  title: string;

  @IsString()
  @IsOptional()
  titleJapan?: string;

  @IsString()
  @IsNotEmpty({ message: 'Slug is required' })
  slug: string;

  @IsString()
  @IsOptional()
  type?: string;

  @IsString()
  @IsOptional()
  coverImage?: string;

  @IsEnum(AnimeStatus, { message: 'Status must be a valid AnimeStatus value' })
  @IsOptional()
  status?: AnimeStatus;

  @IsString()
  @IsOptional()
  studio?: string;

  @IsNumber({}, { message: 'Total episodes must be a number' })
  @IsOptional()
  totalEpisodes?: number;

  @IsDateString({}, { message: 'Release date must be a valid date string' })
  @IsOptional()
  releaseDate?: string | Date;

  @IsNumber({}, { message: 'Rating must be a number' })
  @IsOptional()
  rating?: number;

  @IsString()
  @IsOptional()
  synopsis?: string;

  @IsString()
  @IsOptional()
  url?: string;

  @IsBoolean({ message: 'isActive must be a boolean value' })
  @IsOptional()
  isActive?: boolean;

  @IsArray({ message: 'genreIds must be an array' })
  @IsNumber({}, { each: true, message: 'Each genreId must be a number' })
  @IsOptional()
  genreIds?: number[];
}
