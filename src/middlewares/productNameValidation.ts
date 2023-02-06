import { Request, Response, NextFunction } from 'express';

export default function productNameValidation(req: Request, _res: Response, next: NextFunction) {
  const { name } = req.body;

  if (!name) {
    const error = new Error('"name" is required');
    error.name = 'BAD_REQUEST';
    throw error;
  }

  if (typeof name !== 'string') {
    const error = new Error('"name" must be a string');
    error.name = 'UNPROCESSABLE_ENTITY';
    throw error;
  }

  if (name.length < 3) {
    const error = new Error('"name" length must be at least 3 characters long');
    error.name = 'UNPROCESSABLE_ENTITY';
    throw error;
  }

  next();
}