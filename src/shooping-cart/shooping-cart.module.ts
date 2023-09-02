import { Module } from '@nestjs/common';
import { ShoopingCartService } from './shooping-cart.service';
import { ShoopingCartController } from './shooping-cart.controller';
import { TypeOrmModule} from "@nestjs/typeorm"
import { ShoopingCart } from "./entities/shooping-cart.entity"

@Module({
  imports: [TypeOrmModule.forFeature([ShoopingCart])],
  controllers: [ShoopingCartController],
  providers: [ShoopingCartService]
})
export class ShoopingCartModule {}
