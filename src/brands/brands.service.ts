import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from './dto';
import { Brand } from './entities/brand.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
  ) {}

  async create(createBrandDto: CreateBrandDto): Promise<Brand> {
    const newBrand = this.brandRepository.create(createBrandDto);

    return this.brandRepository.save(newBrand);
  }

  async findAll(): Promise<Brand[]> {
    return this.brandRepository.find();
  }

  async findOne(id: string): Promise<Brand> {
    const brand = await this.brandRepository.findOneBy({ id });

    if (!brand) throw new NotFoundException(`Brand #${id} not found`);

    return brand;
  }

  async update(id: string, updateBrandDto: UpdateBrandDto): Promise<Brand> {
    const brand = await this.brandRepository.preload({
      id,
      ...updateBrandDto,
    });

    if (!brand) throw new NotFoundException(`Brand #${id} not found`);

    return this.brandRepository.save(brand);
  }

  async remove(id: string): Promise<Brand> {
    const brand = await this.findOne(id);

    await this.brandRepository.softDelete(id);

    return brand;
  }
}
