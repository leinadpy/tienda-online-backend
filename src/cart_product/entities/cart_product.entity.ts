import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../shared/base-entity';
import { Product } from 'src/products/entities/product.entity';
import { ShoppingCart } from 'src/shopping-cart/entities/shopping-cart.entity';

@Entity({ name: 'cart_product' })
export class CartProduct extends BaseEntity {
  @Column()
  quantity: number;

  @ManyToOne(() => Product, (product) => product.cart_products)
  product: Product;

  @ManyToOne(() => ShoppingCart, (shopping_cart) => shopping_cart.cart_products)
  shopping_cart: ShoppingCart;
}
