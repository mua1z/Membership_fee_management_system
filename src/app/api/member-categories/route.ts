import { NextResponse } from 'next/server';
import MemberCategory from '@/models/MemberCategory';
import { validateAuth } from '@/middleware/apiAuth';

export async function GET(request: Request) {
  const user = await validateAuth(request);
  if (!user) return NextResponse.json({ success: false, message: 'Not authorized' }, { status: 401 });

  try {
    const categories = await MemberCategory.findAll({ order: [['name', 'ASC']] });
    return NextResponse.json(categories);
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
