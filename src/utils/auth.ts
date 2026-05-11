import jwt from 'jsonwebtoken';

export const generateToken = (userId: number) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET || 'fallback_secret', {
    expiresIn: process.env.JWT_EXPIRE || '30d'
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret') as { userId: number };
};
