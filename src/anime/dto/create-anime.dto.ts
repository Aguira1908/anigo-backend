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
  @IsString({ message: 'Title must be a string' })
  @IsNotEmpty({ message: 'Title is required' })
  title: string;

  @IsString({ message: 'TitleJapan must be a string' })
  @IsOptional()
  titleJapan?: string;

  @IsString({ message: 'Slug must be a string' })
  @IsNotEmpty({ message: 'Slug is required' })
  slug: string;

  @IsString({ message: 'Type must be a string' })
  @IsOptional()
  type?: string;

  @IsString({ message: 'CoverImage must be a string' })
  @IsOptional()
  coverImage?: string;

  @IsEnum(AnimeStatus, { message: 'Status must be a valid AnimeStatus value' })
  @IsOptional()
  status?: AnimeStatus;

  @IsString({ message: 'Studio must be a string' })
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

  @IsString({ message: 'Synopsis must be a string' })
  @IsOptional()
  synopsis?: string;

  @IsString({ message: 'Url must be a string' })
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
