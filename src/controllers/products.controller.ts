import { Request, Response } from 'express';
import createProduct from '../services/products.service';

export default async function createProductController(req:Request, res:Response):Promise<Response> {
  const product = req.body;
  const newProduct = await createProduct(product);

  return res.status(201).json(newProduct);
}