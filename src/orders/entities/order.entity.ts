import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  //OneToOne,
  //JoinColumn,
} from 'typeorm';
//import { ShoppingCart } from '../../shopping-cart/entities/shopping-cart.entity.ts'; // Import your ShoppingCart entity here
import { BaseEntity } from 'typeorm';
@Entity({ name: 'orders' })
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
