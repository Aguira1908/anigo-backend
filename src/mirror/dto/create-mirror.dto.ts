import { Resolution } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateMirrorDto {
  @IsString({ message: 'episodeId must be a string' })
  @IsNotEmpty({ message: 'episodeId is required' })
  episodeId: string;

  @IsEnum(Resolution, {
    message: 'resolution must be a valid Resolution value',
  })
  @IsNotEmpty({ message: 'resolution is required' })
  resolution: Resolution;
}
