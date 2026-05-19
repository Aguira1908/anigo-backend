import { Test, TestingModule } from '@nestjs/testing';
import { StreamserverService } from './streamserver.service';

describe('StreamserverService', () => {
  let service: StreamserverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StreamserverService],
    }).compile();

    service = module.get<StreamserverService>(StreamserverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
