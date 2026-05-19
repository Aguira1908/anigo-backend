import { Injectable } from '@nestjs/common';
import { CreateStreamserverDto } from './dto/create-streamserver.dto';
import { UpdateStreamserverDto } from './dto/update-streamserver.dto';

@Injectable()
export class StreamserverService {
  create(createStreamserverDto: CreateStreamserverDto) {
    return 'This action adds a new streamserver';
  }

  findAll() {
    return `This action returns all streamserver`;
  }

  findOne(id: number) {
    return `This action returns a #${id} streamserver`;
  }

  update(id: number, updateStreamserverDto: UpdateStreamserverDto) {
    return `This action updates a #${id} streamserver`;
  }

  remove(id: number) {
    return `This action removes a #${id} streamserver`;
  }
}
