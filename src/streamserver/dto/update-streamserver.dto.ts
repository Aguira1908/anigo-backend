import { PartialType } from '@nestjs/mapped-types';
import { CreateStreamserverDto } from './create-streamserver.dto';

export class UpdateStreamserverDto extends PartialType(CreateStreamserverDto) {}
