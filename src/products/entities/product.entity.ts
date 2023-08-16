import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../shared/base-entity';

@Entity({ name: 'products' })
export class Product extends BaseEntity {
  @Column({
    type: 'varchar',
    length: 150,
  })
  name: string;
}
