import { Column, Entity, OneToOne } from 'typeorm';
import { BaseEntity } from '../../shared/base-entity';
import { Customer } from 'src/customers/entities/customer.entity';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToOne(() => Customer, (customer) => customer.user)
  customer: Customer;
}
