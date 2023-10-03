import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../shared/base-entity';
import { Category } from 'src/categories/entities/category.entity';
import { Brand } from 'src/brands/entities/brand.entity';
import { CartProduct } from 'src/cart_product/entities/cart_product.entity';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

@Entity({ name: 'products' })
export class Product extends BaseEntity {
  @ApiProperty({
    description: 'Name of the product',
    example: 'T-Shirt',
    minimum: 6,
  })
  @Column({
    type: 'varchar',
    length: 150,
  })
  name: string;

  @ApiProperty({
    description: 'Description of the product',
    example: 'T-Shirt with a logo',
  })
  @Column({
    type: 'varchar',
    length: 255,
  })
  description: string;

  @ApiProperty({
    description: 'Price of the product',
    example: 10.99,
  })
  @Column()
  price: number;

  @ApiProperty({
    description: 'Size of the product',
    example: 'M',
  })
  @Column({
    type: 'varchar',
    length: 10,
  })
  size: string;

  @ApiProperty({
    description: 'Color of the product',
    example: 'red',
  })
  @Column({
    type: 'varchar',
    length: 10,
  })
  color: string;

  @ApiProperty({
    description: 'Material of the product',
    example: 'cotton',
  })
  @Column({
    type: 'varchar',
    length: 40,
  })
  material: string;

  @ApiProperty({
    description: 'Stock of the product',
    example: 10,
  })
  @Column({
    type: 'integer',
  })
  stock: number;

  @ApiPropertyOptional({
    description: 'Image url of the product',
    example: 'https://www.image.com/image.png',
  })
  @Column()
  image_url: string;

  @ApiProperty({
    description: 'Category id of the product',
    example: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
  })
  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @ApiProperty({
    description: 'Brand id of the product',
    example: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
  })
  @ManyToOne(() => Brand, (brand) => brand.products)
  brand: Brand;

  @OneToMany(() => CartProduct, (cart_product) => cart_product.product)
  cart_products: CartProduct[];
}
