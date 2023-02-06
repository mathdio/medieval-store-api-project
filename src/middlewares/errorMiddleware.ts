import { Request, Response, NextFunction } from 'express';

export default function errorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { name, message } = error;

  switch (name) {
    case 'BAD_REQUEST':
      res.status(400).json({ message });
      break;
    case 'UNAUTHORIZED':
      res.status(401).json({ message });
      break;
    default:
      console.log(error);
      return res.status(500);
  }

  next();
}