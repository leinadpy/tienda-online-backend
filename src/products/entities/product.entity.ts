import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../shared/base-entity';

@Entity({ name: 'products' })
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 150,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  description: string;
  @Column({
    type: 'varchar',
    length: 10,
  })
  price: string;
  @Column({
    type: 'varchar',
    length: 3,
  })
  size: string;
  @Column({
    type: 'varchar',
    length: 3,
  })
  color: string;
  @Column({
    type: 'varchar',
    length: 24,
  })
  material: string;
  @Column({
    type: 'integer',
  })
  stock: number;
  @Column({
    type: 'varchar',
    length: 255,
  })
  image_url: string;
  //TO DO: FK category_id
  //TO DO: FK brand_id
}
