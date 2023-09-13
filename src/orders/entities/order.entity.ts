import { BaseEntity } from 'src/shared/base-entity';
import {
  Column,
  Entity, //OneToOne,
  //JoinColumn,
} from 'typeorm';
//import { ShoppingCart } from '../../shopping-cart/entities/shopping-cart.entity.ts'; // Import your ShoppingCart entity here
@Entity({ name: 'orders' })
export class Order extends BaseEntity {
  @Column({ type: 'date' })
  order_date: Date;

  @Column()
  status: string;

  @Column()
  total: number;

  @Column()
  payment_method: string;

  @Column({ type: 'date' })
  send_date: Date;

  @Column({ type: 'date' })
  delivery_date: Date;

  @Column()
  delivery_address: string;

  // TODO: relaciones
  // @OneToOne(() => ShoppingCart, (ShoppingCart) => ShoppingCart.orders)
  // @JoinColumn({ name: 'shopping_cart_id' })
  // shoppingCart: ShoppingCart;
}
