import { BaseEntity } from 'src/shared/base-entity';
import { ShoppingCart } from 'src/shopping-cart/entities/shopping-cart.entity';
import { Column, Entity, OneToOne } from 'typeorm';
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

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  send_date: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  delivery_date: Date;

  @Column()
  delivery_address: string;

  @OneToOne(() => ShoppingCart, (shopping_cart) => shopping_cart.order)
  shopping_cart: ShoppingCart;
}
