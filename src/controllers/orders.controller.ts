import { Request, Response } from 'express';
import { getAllOrders, createOrder } from '../services/orders.service';

export async function getAllOrdersController(_req:Request, res:Response):Promise<Response> {
  const orders = await getAllOrders();

  return res.status(200).json(orders);
}

export async function createOrderController(req: Request, res: Response): Promise<Response> {
  const userId = req.body.user.id;
  const { productsIds } = req.body;
  const order = await createOrder(userId, productsIds);

  return res.status(201).json(order);
}