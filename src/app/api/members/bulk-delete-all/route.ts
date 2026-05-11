import { NextResponse } from 'next/server';
import Member from '@/models/Member';
import Payment from '@/models/Payment';
import Receipt from '@/models/Receipt';
import Contribution from '@/models/Contribution';
import { validateAuth, authorize } from '@/middleware/apiAuth';

export async function POST(request: Request) {
  const user = await validateAuth(request);
  if (!user || !authorize('admin')(user)) {
    return NextResponse.json({ success: false, message: 'Not authorized' }, { status: 401 });
  }

  try {
    // Clear all related tables
    await Receipt.destroy({ where: {} });
    await Payment.destroy({ where: {} });
    await Contribution.destroy({ where: {} });
    
    const deletedCount = await Member.destroy({ where: {} });
    
    return NextResponse.json({ 
      success: true, 
      message: `All records (Members: ${deletedCount}) cleared successfully`,
      data: { deletedCount }
    });

  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
