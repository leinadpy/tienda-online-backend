import { IsNumber, IsPositive } from 'class-validator';

export class CreateCartProductDto {
  @IsNumber()
  @IsPositive()
  quantity: number;
}
