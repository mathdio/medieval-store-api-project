import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IUser } from '../interfaces/User.interface';
import connection from './connection';

export async function create(user: IUser) {
  const { username, vocation, level, password } = user;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.users (username, vocation, level, password)
    VALUES (?, ?, ?, ?)`,
    [username, vocation, level, password],
  );

  return { id: insertId, username };
}

export async function login(user: { username: string, password: string }) {
  const { username, password } = user;
  const [[userLoggedIn]] = await connection.execute<RowDataPacket[]>(
    `SELECT id, username
    FROM Trybesmith.users
    WHERE username = ?
    AND password = ?`,
    [username, password],
  );

  return userLoggedIn;
}