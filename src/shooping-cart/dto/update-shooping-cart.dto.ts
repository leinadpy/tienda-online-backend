import { PartialType } from '@nestjs/swagger';
import { CreateShoopingCartDto } from './create-shooping-cart.dto';

export class UpdateShoopingCartDto extends PartialType(CreateShoopingCartDto) {}
