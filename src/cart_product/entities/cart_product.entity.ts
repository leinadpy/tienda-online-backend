import { Column, Entity } from 'typeorm';
//TO DO: FK cart_id
//TO DO: FK product_id
@Entity({ name: 'brands' })
export class CartProduct {
  @Column({
    type: 'varchar',
    length: 255,
  })
  quantity: number;
}
