import { Injectable } from '@nestjs/common';
import { CreateCartProductDto } from './dto/create-cart_product.dto';
import { UpdateCartProductDto } from './dto/update-cart_product.dto';

@Injectable()
export class CartProductService {
  create(createCartProductDto: CreateCartProductDto) {
    return 'This action adds a new cartProduct';
  }

  findAll() {
    return `This action returns all cartProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cartProduct`;
  }

  update(id: number, updateCartProductDto: UpdateCartProductDto) {
    return `This action updates a #${id} cartProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} cartProduct`;
  }
}
