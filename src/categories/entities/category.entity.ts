import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../shared/base-entity';
import { Product } from 'src/products/entities/product.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'categories' })
export class Category extends BaseEntity {
  @ApiProperty({
    description: 'Name of the category',
    example: "Women's Clothing - Tops - T-Shirts",
  })
  @Column()
  name: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
