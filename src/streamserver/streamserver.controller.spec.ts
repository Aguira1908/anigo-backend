import { Test, TestingModule } from '@nestjs/testing';
import { StreamserverController } from './streamserver.controller';
import { StreamserverService } from './streamserver.service';

describe('StreamserverController', () => {
  let controller: StreamserverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StreamserverController],
      providers: [StreamserverService],
    }).compile();

    controller = module.get<StreamserverController>(StreamserverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
