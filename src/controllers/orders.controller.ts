import { Request, Response } from 'express';
import { getAllOrders, createOrder } from '../services/orders.service';

function validateProductsIds(productsIds: number[]) {
  if (!productsIds) {
    const error = new Error('"productsIds" is required');
    error.name = 'BAD_REQUEST';
    throw error;
  }
  if (!Array.isArray(productsIds)) {
    const error = new Error('"productsIds" must be an array');
    error.name = 'UNPROCESSABLE_ENTITY';
    throw error;
  }
  if (productsIds.length < 1) {
    const error = new Error('"productsIds" must include only numbers');
    error.name = 'UNPROCESSABLE_ENTITY';
    throw error;
  }
}

export async function getAllOrdersController(_req:Request, res:Response):Promise<Response> {
  const orders = await getAllOrders();

  return res.status(200).json(orders);
}

export async function createOrderController(req: Request, res: Response): Promise<Response> {
  const userId = req.body.user.id;
  const { productsIds } = req.body;
  validateProductsIds(productsIds);
  
  const order = await createOrder(userId, productsIds);

  return res.status(201).json(order);
}