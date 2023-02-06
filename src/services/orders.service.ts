import { getAll, create } from '../models/order.model';

export async function getAllOrders() {
  const orders = await getAll();

  return orders;
}

export async function createOrder(userId: number, productsIds: number[]) {
  const order = await create(userId, productsIds);

  return order;
}
