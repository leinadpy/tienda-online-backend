import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Brand } from './entities/brand.entity';

@ApiTags('brands')
@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The product has been successfully created.',
    type: Brand,
  })
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandsService.create(createBrandDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'The brand has been successfully retrieved.',
    type:[Brand],
  })
  findAll() {
    return this.brandsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'The product has been successfully retrieved.' })
  @ApiResponse({ status: 404, description: 'Product not found' })
  findOne(@Param('id') id: string, @Body() brandDto: CreateBrandDto) {
    return this.brandsService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'The product has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Product not found' })
  update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.brandsService.update(id, updateBrandDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brandsService.remove(id);
  }
}
