import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../shared/base-entity';
@Entity({ name: 'brands' })
export class Brand extends BaseEntity {
  @Column()
  name: string;
}
