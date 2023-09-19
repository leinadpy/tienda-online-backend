import { Column, Entity, ManyToOne, OneToMany, OneToOne } from 'typeorm';

import { Status } from '../../enum/shopping-cart.enum';
import { BaseEntity } from '../../shared/base-entity';
import { CartProduct } from 'src/cart_product/entities/cart_product.entity';
import { Customer } from 'src/customers/entities/customer.entity';
import { Order } from 'src/orders/entities/order.entity';

@Entity({ name: 'shooping-cart' })
export class ShoppingCart extends BaseEntity {
  @Column({
    type: 'enum',
    enum:Status,
    default: Status.OPEN
  })
  status: Status;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  startedAt: Date;

  @OneToMany(() => CartProduct,(cart_product) => cart_product.shopping_cart)
  cart_products: CartProduct[];

  @ManyToOne(() => Customer, (customer) => customer.shopping_carts)
  customer:Customer;
 
  @OneToOne(() => Order, (order) => order.shopping_cart)
  order:Order;
  
}
