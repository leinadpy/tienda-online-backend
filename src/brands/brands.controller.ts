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
import { CreateBrandDto, UpdateBrandDto } from './dto';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Brand } from './entities/brand.entity';

@ApiTags('brands')
@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The Brand has been successfully created.',
    type: Brand,
  })
  create(@Body() createBrandDto: CreateBrandDto): Promise<Brand> {
    return this.brandsService.create(createBrandDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'The brands has been successfully retrieved.',
    type: [Brand],
  })
  findAll(): Promise<Brand[]> {
    return this.brandsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'The brand has been successfully retrieved.',
    type: Brand,
  })
  @ApiNotFoundResponse({ description: 'Brand not found' })
  findOne(@Param('id') id: string): Promise<Brand> {
    return this.brandsService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'The brand has been successfully updated.',
    type: Brand,
  })
  @ApiNotFoundResponse({ description: 'Brand not found' })
  update(
    @Param('id') id: string,
    @Body() updateBrandDto: UpdateBrandDto,
  ): Promise<Brand> {
    return this.brandsService.update(id, updateBrandDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'The brand has been successfully deleted.',
    type: Brand,
  })
  @ApiNotFoundResponse({ description: 'Brand not found' })
  remove(@Param('id') id: string): Promise<Brand> {
    return this.brandsService.remove(id);
  }
}
