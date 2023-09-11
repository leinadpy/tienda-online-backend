import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../shared/base-entity';
//TO DO: FK cart_id
//TO DO: FK product_id
@Entity({ name: 'brands' })
export class CartProduct extends BaseEntity {
  @Column({
    type: 'varchar',
    length: 255,
  })
  quantity: number;
}
