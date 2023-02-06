import { Request, Response, NextFunction } from 'express';

export default function loginValidate(req: Request, _res: Response, next: NextFunction) {
  const { username, password } = req.body;

  if (!username) {
    const error = new Error('"username" is required');
    error.name = 'BAD_REQUEST';
    throw error;
  }

  if (!password) {
    const error = new Error('"password" is required');
    error.name = 'BAD_REQUEST';
    throw error;
  }

  next();
}