import { Module } from '@nestjs/common';
import { CartProductService } from './cart-product.service';
import { CartProductController } from './cart-product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartProduct } from './entities/cart_product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CartProduct])],
  controllers: [CartProductController],
  providers: [CartProductService],
})
export class CartProductModule {}
