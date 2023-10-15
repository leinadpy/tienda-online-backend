import { Column, Entity, OneToOne } from 'typeorm';
import { BaseEntity } from '../../shared/base-entity';
import { Customer } from 'src/customers/entities/customer.entity';
import { ValidRoles } from 'src/auth/interfaces/valid-roles';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column('enum', {
    enum: ValidRoles,
    array: true,
    default: [ValidRoles.user],
  })
  roles: ValidRoles[];

  @OneToOne(() => Customer, (customer) => customer.user)
  customer: Customer;
}
