import { Module } from '@nestjs/common';
import { BaseService } from './base.service';
import { BaseController } from './base.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Base } from './entities/base.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Base])],
  controllers: [BaseController],
  providers: [BaseService],
})
export class BaseModule {}
