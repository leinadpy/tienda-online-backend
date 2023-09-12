import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../shared/base-entity';

@Entity({ name: 'categories' })
export class Category extends BaseEntity {
  @Column()
  name: string;
}
