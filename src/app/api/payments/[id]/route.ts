import { NextResponse } from 'next/server';
import Payment from '@/models/Payment';
import Member from '@/models/Member';
import Receipt from '@/models/Receipt';
import { validateAuth, authorize } from '@/middleware/apiAuth';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const user = await validateAuth(request);
  if (!user) return NextResponse.json({ success: false, message: 'Not authorized' }, { status: 401 });

  try {
    const payment = await Payment.findByPk(params.id, {
      include: [{ model: Member, as: 'memberInfo', attributes: ['fullName', 'memberId', 'branch'] }]
    });
    if (!payment) return NextResponse.json({ success: false, message: 'Payment not found.' }, { status: 404 });
    return NextResponse.json({ success: true, data: payment });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const user = await validateAuth(request);
  if (!user || !authorize('admin', 'sector_officer')(user)) {
    return NextResponse.json({ success: false, message: 'Not authorized' }, { status: 401 });
  }

  try {
    const payment = await Payment.findByPk(params.id);
    if (!payment) return NextResponse.json({ success: false, message: 'Payment not found.' }, { status: 404 });

    const member = await Member.findByPk(payment.memberDbId);
    if (user.role === 'sector_officer' && user.sectorUnitId && member && member.sectorUnitId !== user.sectorUnitId) {
      return NextResponse.json({ success: false, message: 'Access denied' }, { status: 403 });
    }

    const updateData = await request.json();
    await payment.update(updateData);
    return NextResponse.json({ success: true, message: 'Payment updated successfully', data: payment });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const user = await validateAuth(request);
  if (!user || !authorize('admin', 'sector_officer')(user)) {
    return NextResponse.json({ success: false, message: 'Not authorized' }, { status: 401 });
  }

  try {
    const payment = await Payment.findByPk(params.id);
    if (!payment) return NextResponse.json({ success: false, message: 'Payment not found.' }, { status: 404 });

    const member = await Member.findByPk(payment.memberDbId);
    if (user.role === 'sector_officer' && user.sectorUnitId && member && member.sectorUnitId !== user.sectorUnitId) {
      return NextResponse.json({ success: false, message: 'Access denied' }, { status: 403 });
    }

    await Receipt.destroy({ where: { paymentDbId: payment.id } });
    await payment.destroy();
    
    return NextResponse.json({ success: true, message: 'Payment deleted successfully' });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
