import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../shared/base-entity';
import { Product } from 'src/products/entities/product.entity';
import { ApiProperty } from '@nestjs/swagger';
@Entity({ name: 'brands' })
export class Brand extends BaseEntity {
  @ApiProperty({
    description: 'Name of the brand',
    example: 'Hanes',
  })
  @Column()
  name: string;

  @OneToMany(() => Product, (product) => product.brand)
  products: Product[];
}
