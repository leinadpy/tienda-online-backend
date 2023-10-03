import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'Name of the product',
    example: 'T-Shirt',
    minimum: 6,
  })
  @IsString()
  @MinLength(6)
  name: string;

  @ApiProperty({
    description: 'Description of the product',
    example: 'T-Shirt with a logo',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Price of the product',
    example: 10.99,
  })
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({
    description: 'Size of the product',
    example: 'M',
  })
  @IsString()
  size: string;

  @ApiProperty({
    description: 'Color of the product',
    example: 'red',
  })
  @IsString()
  color: string;

  @ApiProperty({
    description: 'Material of the product',
    example: 'cotton',
  })
  @IsString()
  material: string;

  @ApiProperty({
    description: 'Stock of the product',
    example: 10,
  })
  @IsNumber()
  stock: number;

  @ApiPropertyOptional({
    description: 'Image url of the product',
    example: 'https://www.image.com/image.png',
  })
  @IsString()
  @IsOptional()
  image_url?: string;

  @ApiProperty({
    description: 'Category id of the product',
    example: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
  })
  @IsString()
  category_id: string;

  @ApiProperty({
    description: 'Brand id of the product',
    example: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
  })
  @IsString()
  brand_id: string;
}
