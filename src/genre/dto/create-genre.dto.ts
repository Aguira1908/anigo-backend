import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

export class CreateGenreDto {
  @IsString({ message: 'Title must be a string' })
  @IsNotEmpty({ message: 'Title is required' })
  title: string;

  @IsBoolean({ message: 'isActive must be a boolean value' })
  @IsOptional()
  isActive?: boolean;
}
