import { ResultSetHeader } from 'mysql2';
import connection from './connection';

export async function getAll() {
  const [orders] = await connection.execute(
    `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.orders AS o
    INNER JOIN Trybesmith.products AS p
    ON o.id = p.order_id
    GROUP BY o.id`,
  );

  return orders;
}

export async function create(userId: number, productsIds: number[]) {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.orders (user_id)
    VALUES (?)`,
    [userId],
  );

  Promise.all(
    productsIds.map(async (product) => {
      await connection.execute(
        `UPDATE Trybesmith.products
         SET order_id = ?
         WHERE id = ?`,
        [insertId, product],
      );
    }),
  );

  return { userId, productsIds };
}