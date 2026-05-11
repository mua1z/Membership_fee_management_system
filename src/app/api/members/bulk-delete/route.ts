import { NextResponse } from 'next/server';
import { Op } from 'sequelize';
import Member from '@/models/Member';
import Payment from '@/models/Payment';
import Receipt from '@/models/Receipt';
import Contribution from '@/models/Contribution';
import { validateAuth, authorize } from '@/middleware/apiAuth';

export async function POST(request: Request) {
  const user = await validateAuth(request);
  if (!user || !authorize('admin', 'sector_officer')(user)) {
    return NextResponse.json({ success: false, message: 'Not authorized' }, { status: 401 });
  }

  try {
    const { ids } = await request.json();
    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ success: false, message: 'Please provide an array of member IDs.' }, { status: 400 });
    }

    const where: any = { id: { [Op.in]: ids } };

    // Sector officers restriction
    if (user.role === 'sector_officer' && user.sectorUnitId) {
      where.sectorUnitId = user.sectorUnitId;
    }

    const whereMembers = { memberDbId: { [Op.in]: ids } };
    await Receipt.destroy({ where: whereMembers });
    await Payment.destroy({ where: whereMembers });
    await Contribution.destroy({ where: whereMembers });

    const deletedCount = await Member.destroy({ where });
    
    return NextResponse.json({ 
      success: true, 
      message: `${deletedCount} members deleted successfully`,
      data: { deletedCount }
    });

  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
