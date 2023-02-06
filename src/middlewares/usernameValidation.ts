import { Request, Response, NextFunction } from 'express';

export function usernameValidation(req: Request, res: Response, next: NextFunction) {
  const { username } = req.body;

  if (!username) {
    const error = new Error('"username" is required');
    error.name = 'BAD_REQUEST';
    throw error;
  }

  if (typeof username !== 'string') {
    const error = new Error('"username" must be a string');
    error.name = 'UNPROCESSABLE_ENTITY';
    throw error;
  }

  if (username.length < 3) {
    const error = new Error('"username" length must be at least 3 characters long');
    error.name = 'UNPROCESSABLE_ENTITY';
    throw error;
  }

  next();
}

export function vocationValidation(req: Request, res: Response, next: NextFunction) {
  const { vocation } = req.body;

  if (!vocation) {
    const error = new Error('"vocation" is required');
    error.name = 'BAD_REQUEST';
    throw error;
  }

  if (typeof vocation !== 'string') {
    const error = new Error('"vocation" must be a string');
    error.name = 'UNPROCESSABLE_ENTITY';
    throw error;
  }

  if (vocation.length < 3) {
    const error = new Error('"vocation" length must be at least 3 characters long');
    error.name = 'UNPROCESSABLE_ENTITY';
    throw error;
  }

  next();
}

export function levelValidation(req: Request, res: Response, next: NextFunction) {
  const { level } = req.body;

  if (level < 1) {
    const error = new Error('"level" must be greater than or equal to 1');
    error.name = 'UNPROCESSABLE_ENTITY';
    throw error;
  }

  if (!level) {
    const error = new Error('"level" is required');
    error.name = 'BAD_REQUEST';
    throw error;
  }

  if (typeof level !== 'number') {
    const error = new Error('"level" must be a number');
    error.name = 'UNPROCESSABLE_ENTITY';
    throw error;
  }

  next();
}

export function passwordValidation(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;

  if (!password) {
    const error = new Error('"password" is required');
    error.name = 'BAD_REQUEST';
    throw error;
  }

  if (typeof password !== 'string') {
    const error = new Error('"password" must be a string');
    error.name = 'UNPROCESSABLE_ENTITY';
    throw error;
  }

  if (password.length < 8) {
    const error = new Error('"password" length must be at least 8 characters long');
    error.name = 'UNPROCESSABLE_ENTITY';
    throw error;
  }

  next();
}