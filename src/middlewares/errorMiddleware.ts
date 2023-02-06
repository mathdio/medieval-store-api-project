import { Request, Response, NextFunction } from 'express';

export default function errorMiddleware(
  error: Error,
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  const { name, message } = error;

  switch (name) {
    case 'BAD_REQUEST':
      return res.status(400).json({ message });
    case 'UNAUTHORIZED':
      return res.status(401).json({ message });
    case 'UNPROCESSABLE_ENTITY':
      return res.status(422).json({ message });
    default:
      console.log(error);
      return res.status(500);
  }

  next();
}