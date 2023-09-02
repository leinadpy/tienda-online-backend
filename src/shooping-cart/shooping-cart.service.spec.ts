import { Test, TestingModule } from '@nestjs/testing';
import { ShoopingCartService } from './shooping-cart.service';

describe('ShoopingCartService', () => {
  let service: ShoopingCartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoopingCartService],
    }).compile();

    service = module.get<ShoopingCartService>(ShoopingCartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
