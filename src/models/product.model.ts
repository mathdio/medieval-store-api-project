import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProduct } from '../interfaces/Product.interface';

export default async function create(product: IProduct) {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.products (name, amount)
    VALUES (?, ?)`,
    [name, amount],
  );

  return { id: insertId, ...product };
}