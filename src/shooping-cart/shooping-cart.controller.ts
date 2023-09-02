import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShoopingCartService } from './shooping-cart.service';
import { CreateShoopingCartDto } from './dto/create-shooping-cart.dto';
import { UpdateShoopingCartDto } from './dto/update-shooping-cart.dto';

@Controller('shooping-cart')
export class ShoopingCartController {
  constructor(private readonly shoopingCartService: ShoopingCartService) {}

  @Post()
  create(@Body() createShoopingCartDto: CreateShoopingCartDto) {
    return this.shoopingCartService.create(createShoopingCartDto);
  }

  @Get()
  findAll() {
    return this.shoopingCartService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shoopingCartService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShoopingCartDto: UpdateShoopingCartDto) {
    return this.shoopingCartService.update(+id, updateShoopingCartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoopingCartService.remove(+id);
  }
}
