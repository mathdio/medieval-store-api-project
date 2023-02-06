import { Request, Response } from 'express';
import getAllOrders from '../services/orders.service';

export default async function getAllOrdersController(_req:Request, res:Response):Promise<Response> {
  const orders = await getAllOrders();

  return res.status(200).json(orders);
}