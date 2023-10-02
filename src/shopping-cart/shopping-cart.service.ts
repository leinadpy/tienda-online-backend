import { Injectable } from '@nestjs/common';
import { CreateShoppingCartDto } from './dto/create-shopping-cart.dto';
import { UpdateShoppingCartDto } from './dto/update-shopping-cart.dto';

@Injectable()
export class ShoppingCartService {
  create(createShoppingCartDto: CreateShoppingCartDto) {
    return 'This action adds a new shoopingCart';
  }

  findAll() {
    return `This action returns all shoopingCart`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shoopingCart`;
  }

  update(id: number, updateShoopingCartDto: UpdateShoppingCartDto) {
    return `This action updates a #${id} shoopingCart`;
  }

  remove(id: number) {
    return `This action removes a #${id} shoopingCart`;
  }
}
