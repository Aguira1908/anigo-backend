import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateStreamserverDto {
  @IsString({ message: 'mirrorId must be a string' })
  @IsNotEmpty({ message: 'mirrorId is required' })
  mirrorId: string;

  @IsString({ message: 'platform must be a string' })
  @IsNotEmpty({ message: 'platform is required' })
  platform: string;

  @IsString({ message: 'dataContent must be a string' })
  @IsOptional()
  dataContent?: string;

  @IsString({ message: 'embedUrl must be a string' })
  @IsOptional()
  embedUrl?: string;

  @IsString({ message: 'embedHtml must be a string' })
  @IsOptional()
  embedHtml?: string;
}
