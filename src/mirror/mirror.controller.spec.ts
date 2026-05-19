import { Test, TestingModule } from '@nestjs/testing';
import { MirrorController } from './mirror.controller';
import { MirrorService } from './mirror.service';

describe('MirrorController', () => {
  let controller: MirrorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MirrorController],
      providers: [MirrorService],
    }).compile();

    controller = module.get<MirrorController>(MirrorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
