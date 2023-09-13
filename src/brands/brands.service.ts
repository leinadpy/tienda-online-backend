import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
  ) {}

  async create(createBrandDto: CreateBrandDto) {
    const newBrand = this.brandRepository.create(createBrandDto);

    return this.brandRepository.save(newBrand);
  }

  async findAll() {
    return this.brandRepository.find();
  }

  async findOne(id: string) {
    const brand = await this.brandRepository.findOneBy({ id });

    if (!brand) throw new NotFoundException(`Brand #${id} not found`);

    return brand;
  }

  async update(id: string, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  async remove(id: string) {
    return `This action removes a #${id} brand`;
  }
}
