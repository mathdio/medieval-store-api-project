import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces/User.interface';
import connection from './connection';

export default async function create(user: IUser) {
  const { username, vocation, level, password } = user;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.users (username, vocation, level, password)
    VALUES (?, ?, ?, ?)`,
    [username, vocation, level, password],
  );

  return { id: insertId, username };
}