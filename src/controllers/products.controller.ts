import { Request, Response } from 'express';
import { createProduct, getAllProducts } from '../services/products.service';

export async function createProductController(req:Request, res:Response):Promise<Response> {
  const product = req.body;
  const newProduct = await createProduct(product);

  return res.status(201).json(newProduct);
}

export async function getAllProductsController(req: Request, res: Response): Promise<Response> {
  const products = await getAllProducts();

  return res.status(200).json(products);
}