import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({
    description: 'Name of the category',
    example: "Women's Clothing - Tops - T-Shirts",
  })
  @IsString()
  name: string;
}
