import { PartialType } from '@nestjs/mapped-types';
import { CreateMirrorDto } from './create-mirror.dto';

export class UpdateMirrorDto extends PartialType(CreateMirrorDto) {}
