import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StreamserverService } from './streamserver.service';
import { CreateStreamserverDto } from './dto/create-streamserver.dto';
import { UpdateStreamserverDto } from './dto/update-streamserver.dto';

@Controller('streamserver')
export class StreamserverController {
  constructor(private readonly streamserverService: StreamserverService) {}

  @Post()
  create(@Body() createStreamserverDto: CreateStreamserverDto) {
    return this.streamserverService.create(createStreamserverDto);
  }

  @Get()
  findAll() {
    return this.streamserverService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.streamserverService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStreamserverDto: UpdateStreamserverDto) {
    return this.streamserverService.update(+id, updateStreamserverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.streamserverService.remove(+id);
  }
}
