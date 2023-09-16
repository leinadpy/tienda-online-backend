import { Column, Entity, ManyToOne, OneToMany, OneToOne } from 'typeorm';

import { Status } from '../dto/create-shopping-cart.dto';
import { BaseEntity } from '../../shared/base-entity';
import { CartProduct } from 'src/cart_product/entities/cart_product.entity';
import { Customer } from 'src/customers/entities/customer.entity';
import { Order } from 'src/orders/entities/order.entity';

@Entity({ name: 'shooping-cart' })
export class ShoppingCart extends BaseEntity {
  @Column({
    type: 'enum',
    enum: ['OPEN', 'CLOSED', 'CANCELED'],
    default: 'OPEN',
  }) //Utilize un enum como decia el grafico con valores provisorios
  status: Status;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) //No se si es lo correcto
  startedAt: Date;

  @OneToMany(() => CartProduct,(cart_product) => cart_product.shopping_cart)
  cart_prudocts: CartProduct[];

  @ManyToOne(() => Customer, (customer) => customer.shopping_carts)
  customer:Customer;
 
  @OneToOne(() => Order, (order) => order.shopping_cart)
  order:Order;
  
}
