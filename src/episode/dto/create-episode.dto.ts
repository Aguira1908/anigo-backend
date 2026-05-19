import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsDateString,
} from 'class-validator';

export class CreateEpisodeDto {
  @IsString({ message: 'animeId must be a string' })
  @IsNotEmpty({ message: 'animeId is required' })
  animeId: string;

  @IsString({ message: 'slug must be a string' })
  @IsNotEmpty({ message: 'slug is required' })
  slug: string;

  @IsString({ message: 'title must be a string' })
  @IsOptional()
  title?: string;

  @IsNumber({}, { message: 'episodeNumber must be a number' })
  @IsNotEmpty({ message: 'episodeNumber is required' })
  episodeNumber: number;

  @IsString({ message: 'mirrorLink must be a string' })
  @IsOptional()
  mirrorLink?: string;

  @IsString({ message: 'urlEpisode must be a string' })
  @IsOptional()
  urlEpisode?: string;

  @IsDateString({}, { message: 'releaseDate must be a valid date string' })
  @IsOptional()
  releaseDate?: string | Date;
}
