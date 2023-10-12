import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Product } from './entities/product.entity';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post()
   @ApiCreatedResponse({
    description: 'The product has been successfully created.',
    type: Product,
  })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'The products has been successfully retrieved.',
    type: [Product],
  })
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  // @ApiResponse({ description: 'The product has been successfully retrieved.' })
  // @ApiNotFoundResponse({ description: 'Product not found.' })
  @ApiResponse({ status: 200, description: 'The product has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Product not found' })
  findOne(@Param('id') id: string, @Body() productDto: CreateProductDto) {
    return this.productsService.findOne(id);
  }


  @Patch(':id')
  // @ApiResponse({ description: 'The product has been successfully updated.' })
  // @ApiNotFoundResponse({ description: 'Product not found.' })
  @ApiResponse({ status: 200, description: 'The product has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Product not found' })


  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  @ApiResponse({ description: 'The product has been successfully deleted.' })
  @ApiNotFoundResponse({ description: 'Product not found.' })
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
