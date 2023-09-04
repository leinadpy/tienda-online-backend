import { PartialType } from '@nestjs/swagger';
import { CreateCartProductDto } from './create-cart_product.dto';

export class UpdateCartProductDto extends PartialType(CreateCartProductDto) {}
