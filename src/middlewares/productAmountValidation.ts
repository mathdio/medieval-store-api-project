import { Request, Response, NextFunction } from 'express';

export default function productAmountValidation(req: Request, _res: Response, next: NextFunction) {
  const { amount } = req.body;

  if (!amount) {
    const error = new Error('"amount" is required');
    error.name = 'BAD_REQUEST';
    throw error;
  }

  if (typeof amount !== 'string') {
    const error = new Error('"amount" must be a string');
    error.name = 'UNPROCESSABLE_ENTITY';
    throw error;
  }

  if (amount.length < 3) {
    const error = new Error('"amount" length must be at least 3 characters long');
    error.name = 'UNPROCESSABLE_ENTITY';
    throw error;
  }

  next();
}