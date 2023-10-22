import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CartProductService } from './cart-product.service';
import { CreateCartProductDto, UpdateCartProductDto } from './dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CartProduct } from './entities/cart_product.entity';

@ApiTags('cart-product')
@Controller('cart-product')
export class CartProductController {
  constructor(private readonly cartProductService: CartProductService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The cart product has been successfully created.',
    type: CartProduct,
  })
  create(
    @Body() createCartProductDto: CreateCartProductDto,
  ): Promise<CartProduct> {
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
