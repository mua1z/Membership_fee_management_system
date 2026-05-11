import { NextResponse } from 'next/server';
import SectorUnit from '@/models/SectorUnit';
import MemberCategory from '@/models/MemberCategory';
import { validateAuth } from '@/middleware/apiAuth';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const user = await validateAuth(request);
  if (!user) return NextResponse.json({ success: false, message: 'Not authorized' }, { status: 401 });

  try {
    const unitWithCategories = await SectorUnit.findByPk(params.id, {
      include: [{
        model: MemberCategory,
        as: 'categories',
        through: { attributes: [] }
      }]
    }) as any;

    if (!unitWithCategories) {
      return NextResponse.json({ success: false, message: 'Sector unit not found' }, { status: 404 });
    }

    return NextResponse.json(unitWithCategories.categories || []);
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
