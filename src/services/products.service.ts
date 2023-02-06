import { IProduct } from '../interfaces/Product.interface';
import { create, getAll } from '../models/product.model';

export async function createProduct(product: IProduct): Promise<IProduct> {
  const newProduct = await create(product);
  return newProduct;
}

export async function getAllProducts(): Promise<IProduct[]> {
  const products = await getAll();

  return products;
}