import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsDate()
  order_date: Date;

  @IsString()
  status: string;

  @IsNumber()
  total: number;

  @IsString()
  payment_method: string;

  @IsDate()
  send_date: Date;

  @IsDate()
  delivery_date: Date;

  @IsString()
  delivery_address: string;
}
