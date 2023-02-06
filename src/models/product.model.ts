import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { IProduct } from '../interfaces/Product.interface';

export async function create(product: IProduct): Promise<IProduct> {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.products (name, amount)
    VALUES (?, ?)`,
    [name, amount],
  );

  return { id: insertId, ...product };
}

export async function getAll(): Promise<IProduct[]> {
  const [result] = await connection.execute<IProduct[] & RowDataPacket[]>(
    'SELECT * FROM Trybesmith.products',
  );

  return result;
}