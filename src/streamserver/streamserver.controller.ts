import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { StreamserverService } from './streamserver.service';
import { CreateStreamserverDto } from './dto/create-streamserver.dto';
import { UpdateStreamserverDto } from './dto/update-streamserver.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { ApiResponse } from 'src/common/dto/api-response.dto';
import { StreamserverEntity } from './entities/streamserver.entity';

@Controller('streamserver')
@UseInterceptors(CacheInterceptor)
export class StreamserverController {
  constructor(private readonly streamserverService: StreamserverService) {}

  @Post()
  async create(
    @Body() createStreamserverDto: CreateStreamserverDto,
  ): Promise<ApiResponse<StreamserverEntity>> {
    const newServer = await this.streamserverService.create(
      createStreamserverDto,
    );
    return new ApiResponse(newServer, 'Successfully created stream server');
  }

  @Get()
  async findAll(): Promise<ApiResponse<StreamserverEntity[]>> {
    const servers = await this.streamserverService.findAll();
    return new ApiResponse(
      servers,
      'Successfully retrieved all stream servers',
    );
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
  ): Promise<ApiResponse<StreamserverEntity>> {
    const server = await this.streamserverService.findOne(id);
    return new ApiResponse(
      server,
      'Successfully retrieved stream server details',
    );
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateStreamserverDto: UpdateStreamserverDto,
  ): Promise<ApiResponse<StreamserverEntity>> {
    const updateServer = await this.streamserverService.update(
      id,
      updateStreamserverDto,
    );
    return new ApiResponse(updateServer, 'Successfully updated stream server');
  }

  @Delete(':id')
  async remove(
    @Param('id') id: string,
  ): Promise<ApiResponse<StreamserverEntity>> {
    const deleteServer = await this.streamserverService.remove(id);
    return new ApiResponse(deleteServer, 'Successfully deleted stream server');
  }
}
