import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { createUser, loginUser } from '../services/users.service';

const { JWT_SECRET } = process.env;

export default async function createUserController(req: Request, res: Response): Promise<Response> {
  const user = req.body;
  const newUser = await createUser(user);

  const payload = {
    id: newUser.id,
    username: newUser.username,
  };
  const token = jwt.sign(payload, JWT_SECRET!);

  return res.status(201).json({ token });
}

export async function loginUserController(req: Request, res: Response): Promise<Response> {
  const user = req.body;
  const loggedInUser = await loginUser(user);

  const payload = {
    id: loggedInUser.id,
    username: loggedInUser.username,
  };
  const token = jwt.sign(payload, JWT_SECRET!);
  
  return res.status(200).json({ token });
}