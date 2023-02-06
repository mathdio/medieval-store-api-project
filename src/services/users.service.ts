import { IUser } from '../interfaces/User.interface';
import create from '../models/user.model';

export default async function createUser(user: IUser) {
  const newUser = await create(user);

  return newUser;
}