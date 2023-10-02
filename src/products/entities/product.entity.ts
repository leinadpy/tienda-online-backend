import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../shared/base-entity';
import { Category } from 'src/categories/entities/category.entity';
import { Brand } from 'src/brands/entities/brand.entity';
import { CartProduct } from 'src/cart_product/entities/cart_product.entity';

@Entity({ name: 'products' })
export class Product extends BaseEntity {
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

  @Column()
  price: number;

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

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @ManyToOne(() => Brand, (brand) => brand.products)
  brand: Brand;

  @OneToMany(() => CartProduct, (cart_product) => cart_product.product)
  cart_products: CartProduct[];
}
