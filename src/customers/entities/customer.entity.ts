import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from '../../shared/base-entity';
import { ShoppingCart } from 'src/shopping-cart/entities/shopping-cart.entity';
import { User } from 'src/users/entities/user.entity';

@Entity({ name: 'customers' })
export class Customer extends BaseEntity {
  @Column()
  name: string;

  @Column()
  address: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'date' })
  register_date: Date;

  @OneToMany(() => ShoppingCart, (shopping_cart) => shopping_cart.customer)
  shopping_carts: ShoppingCart[];

  @OneToOne(() => User, (user) => user.customer)
  user: User;
}
