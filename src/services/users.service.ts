import { IUser } from '../interfaces/User.interface';
import { create, login } from '../models/user.model';

export async function createUser(user: IUser) {
  const newUser = await create(user);

  return newUser;
}

export async function loginUser(user: { username: string, password: string }) {
  const userLoggedIn = await login(user);
  if (!userLoggedIn) {
    const error = new Error('Username or password invalid');
    error.name = 'UNAUTHORIZED';
    throw error;
  }

  return userLoggedIn;
}