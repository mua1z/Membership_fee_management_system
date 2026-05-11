import { NextResponse } from 'next/server';
import Member from '@/models/Member';
import Payment from '@/models/Payment';
import Receipt from '@/models/Receipt';
import { validateAuth, authorize } from '@/middleware/apiAuth';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const user = await validateAuth(request);
  if (!user) return NextResponse.json({ success: false, message: 'Not authorized' }, { status: 401 });

  try {
    const receipt = await Receipt.findByPk(params.id, {
      include: [
        { model: Member, as: 'memberInfo' },
        { model: Payment, as: 'paymentInfo' }
      ]
    });
    if (!receipt) return NextResponse.json({ success: false, message: 'Receipt not found.' }, { status: 404 });
    return NextResponse.json({ success: true, data: receipt });
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
    const updateData = await request.json();
    const [updated] = await Receipt.update(updateData, { where: { id: params.id } });
    if (!updated) return NextResponse.json({ success: false, message: 'Receipt not found.' }, { status: 404 });

    const receipt = await Receipt.findByPk(params.id);
    return NextResponse.json({ success: true, message: 'Receipt updated successfully', data: receipt });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
