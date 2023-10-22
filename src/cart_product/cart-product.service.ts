import { Injectable } from '@nestjs/common';
import { CreateCartProductDto, UpdateCartProductDto } from './dto';
import { CartProduct } from './entities/cart_product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CartProductService {
  constructor(
    @InjectRepository(CartProduct)
    private readonly cartProductRepository: Repository<CartProduct>,
  ) {}

  async create(
    createCartProductDto: CreateCartProductDto,
  ): Promise<CartProduct> {
    const newCartProduct =
      this.cartProductRepository.create(createCartProductDto);
    return this.cartProductRepository.save(newCartProduct);
  }

  async findAll() {
    return `This action returns all cartProduct`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} cartProduct`;
  }

  async update(id: number, updateCartProductDto: UpdateCartProductDto) {
    return `This action updates a #${id} cartProduct`;
  }

  async remove(id: number) {
    return `This action removes a #${id} cartProduct`;
  }
}
