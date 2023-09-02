import { Test, TestingModule } from '@nestjs/testing';
import { ShoopingCartController } from './shooping-cart.controller';
import { ShoopingCartService } from './shooping-cart.service';

describe('ShoopingCartController', () => {
  let controller: ShoopingCartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoopingCartController],
      providers: [ShoopingCartService],
    }).compile();

    controller = module.get<ShoopingCartController>(ShoopingCartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
