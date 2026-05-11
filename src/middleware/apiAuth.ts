import { NextResponse } from 'next/server';
import { verifyToken } from '@/utils/auth';
import User from '@/models/User';

export async function validateAuth(request: Request) {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = verifyToken(token);
    const user = await User.findByPk(decoded.userId);
    if (!user) return null;
    return user;
  } catch (error) {
    return null;
  }
}

export function authorize(...roles: string[]) {
  return (user: any) => {
    if (!user || !roles.includes(user.role)) {
      return false;
    }
    return true;
  };
}
