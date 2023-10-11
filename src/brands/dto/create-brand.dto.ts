import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateBrandDto {
  @ApiProperty({
    description: 'Name of the brand',
    example: 'Hanes',
  })
  @IsString()
  name: string;
}
