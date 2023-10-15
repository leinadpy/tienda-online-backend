import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CartProductService } from './cart_product.service';
import { CreateCartProductDto } from './dto/create-cart_product.dto';
import { UpdateCartProductDto } from './dto/update-cart_product.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('cart-product')
@Controller('cart-product')
export class CartProductController {
  constructor(private readonly cartProductService: CartProductService) {}

  @Post()
  create(@Body() createCartProductDto: CreateCartProductDto) {
    return this.cartProductService.create(createCartProductDto);
  }

  @Get()
  findAll() {
    return this.cartProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartProductService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCartProductDto: UpdateCartProductDto,
  ) {
    return this.cartProductService.update(+id, updateCartProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartProductService.remove(+id);
  }
}
