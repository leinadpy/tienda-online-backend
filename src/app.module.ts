import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CustomersModule } from './customers/customers.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { OrdersModule } from './orders/orders.module';
import { CategoriesModule } from './categories/categories.module';
import { BrandsModule } from './brands/brands.module';
import { CartProductModule } from './cart_product/cart_product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        STAGE: Joi.string().required(),
        DB_NAME: Joi.string().required(),
        DB_PORT: Joi.number().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_HOST: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRoot({
      ssl: process.env.STAGE === 'prod',
      extra: {
        ssl:
          process.env.STAGE === 'prod'
            ? {
                rejectUnauthorized: false,
              }
            : null,
      },
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    ProductsModule,
    CustomersModule,
    ShoppingCartModule,
    OrdersModule,
    CategoriesModule,
    BrandsModule,
    CartProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
