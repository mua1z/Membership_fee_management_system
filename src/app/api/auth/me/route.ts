import { NextResponse } from 'next/server';
import User from '@/models/User';
import SectorUnit from '@/models/SectorUnit';
import { validateAuth } from '@/middleware/apiAuth';

export async function GET(request: Request) {
  const userId = await validateAuth(request);
  if (!userId) {
    return NextResponse.json({ success: false, message: 'Not authorized' }, { status: 401 });
  }

  try {
    const user = await User.findByPk(userId, {
      attributes: { exclude: ['password'] }
    });
    if (!user) {
      return NextResponse.json({ success: false, message: 'User not found.' }, { status: 401 });
    }

    let assignedSectorUnit = null;
    if (user.sectorUnitId) {
      assignedSectorUnit = await SectorUnit.findByPk(user.sectorUnitId);
    }

    const userData = user.toJSON();
    (userData as any).assignedSectorUnit = assignedSectorUnit;

    return NextResponse.json({ success: true, data: userData });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
