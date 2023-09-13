import {
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(6)
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsString()
  size: string;

  @IsString()
  color: string;

  @IsString()
  material: string;

  @IsNumber()
  stock: number;

  @IsString()
  @IsOptional()
  image_url?: string;

  @IsString()
  category_id: string;

  @IsString()
  brand_id: string;
}
