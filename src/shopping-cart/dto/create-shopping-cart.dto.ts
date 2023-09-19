import { IsDate, IsString } from 'class-validator';
import { Status } from '../../enum/shopping-cart.enum';

export class CreateShoppingCartDto {
  @IsString()
  status: Status.OPEN;

  @IsDate()
  startedAt: Date;

  @IsString()
  customer_id: string;
}
