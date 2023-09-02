import { Injectable } from '@nestjs/common';
import { CreateShoopingCartDto } from './dto/create-shooping-cart.dto';
import { UpdateShoopingCartDto } from './dto/update-shooping-cart.dto';

@Injectable()
export class ShoopingCartService {
  create(createShoopingCartDto: CreateShoopingCartDto) {
    return 'This action adds a new shoopingCart';
  }

  findAll() {
    return `This action returns all shoopingCart`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shoopingCart`;
  }

  update(id: number, updateShoopingCartDto: UpdateShoopingCartDto) {
    return `This action updates a #${id} shoopingCart`;
  }

  remove(id: number) {
    return `This action removes a #${id} shoopingCart`;
  }
}
