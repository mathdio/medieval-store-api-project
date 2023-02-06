import { IProduct } from '../interfaces/Product.interface';
import create from '../models/product.model';

export default async function createProduct(product: IProduct): Promise<IProduct> {
  const newProduct = await create(product);
  return newProduct;
}