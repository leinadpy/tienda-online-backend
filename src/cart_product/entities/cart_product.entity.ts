import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../shared/base-entity';
//TODO: FK cart_id
//TODO: FK product_id
@Entity({ name: 'cart_product' })
export class CartProduct extends BaseEntity {
  @Column({
    type: 'varchar',
    length: 255,
  })
  quantity: number;
}
