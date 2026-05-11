import { NextResponse } from 'next/server';
import Member from '@/models/Member';
import Payment from '@/models/Payment';
import Receipt from '@/models/Receipt';
import { validateAuth } from '@/middleware/apiAuth';

export async function GET(request: Request) {
  const user = await validateAuth(request);
  if (!user) return NextResponse.json({ success: false, message: 'Not authorized' }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 50;
  const memberId = searchParams.get('memberId');
  const status = searchParams.get('status');

  try {
    const where: any = {};
    if (memberId) where.memberId = memberId;
    if (status) where.status = status;

    const offset = (page - 1) * limit;
    const { count: total, rows: receipts } = await Receipt.findAndCountAll({
      where,
      include: [
        { model: Member, as: 'memberInfo', attributes: ['fullName', 'memberId', 'branch'] },
        { model: Payment, as: 'paymentInfo' }
      ],
      offset,
      limit,
      order: [['issuedAt', 'DESC']]
    });

    return NextResponse.json({
      success: true,
      data: receipts,
      pagination: { total, page, limit, pages: Math.ceil(total / limit) }
    });

  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
