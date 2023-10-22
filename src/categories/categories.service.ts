import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from './dto';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const newCategory = this.categoryRepository.create(createCategoryDto);

    return this.categoryRepository.save(newCategory);
  }

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async findOne(id: string): Promise<Category> {
    const category = await this.categoryRepository.findOneBy({ id });

    if (!category) throw new NotFoundException(`Category #${id} not found`);

    return category;
  }

  async update(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    const category = await this.categoryRepository.preload({
      id,
      ...updateCategoryDto,
    });

    if (!category) throw new NotFoundException(`Category #${id} not found`);

    return this.categoryRepository.save(category);
  }

  async remove(id: string): Promise<Category> {
    const category = await this.findOne(id);

    await this.categoryRepository.softDelete(id);

    return category;
  }
}
