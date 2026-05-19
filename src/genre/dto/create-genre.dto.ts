import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

export class CreateGenreDto {
  @IsString()
  @IsNotEmpty({ message: 'Title is required' })
  title: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
