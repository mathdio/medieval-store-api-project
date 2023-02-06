import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

export default function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;

  if (!token) {
    const error = new Error('Token not found');
    error.name = 'UNAUTHORIZED';
    throw error;
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET!);
    req.body.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}