import { Module } from '@nestjs/common';
import { StreamserverService } from './streamserver.service';
import { StreamserverController } from './streamserver.controller';

@Module({
  controllers: [StreamserverController],
  providers: [StreamserverService],
})
export class StreamserverModule {}
