import getAll from '../models/order.model';

export default async function getAllOrders() {
  const orders = await getAll();

  return orders;
}