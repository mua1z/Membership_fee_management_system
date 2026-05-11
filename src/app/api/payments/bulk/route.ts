import { NextResponse } from 'next/server';
import Member from '@/models/Member';
import Payment from '@/models/Payment';
import Receipt from '@/models/Receipt';
import { validateAuth, authorize } from '@/middleware/apiAuth';

export async function POST(request: Request) {
  const user = await validateAuth(request);
  if (!user || !authorize('admin', 'sector_officer')(user)) {
    return NextResponse.json({ success: false, message: 'Not authorized' }, { status: 401 });
  }

  try {
    const paymentsData = await request.json();
    if (!Array.isArray(paymentsData) || paymentsData.length === 0) {
      return NextResponse.json({ success: false, message: 'Please provide an array of payments.' }, { status: 400 });
    }

    const createdPayments = [];
    const errors = [];

    for (let i = 0; i < paymentsData.length; i++) {
      try {
        const data = paymentsData[i];
        const memberWhere = isNaN(data.member) ? { memberId: data.member } : { id: Number(data.member) };
        const member = await Member.findOne({ where: memberWhere });

        if (!member) {
          errors.push({ index: i, error: 'Member not found' });
          continue;
        }

        // Scope check
        if (user.role === 'sector_officer' && user.sectorUnitId && member.sectorUnitId !== user.sectorUnitId) {
          errors.push({ index: i, error: 'Access denied: Member not in your sector' });
          continue;
        }

        const receiptId = `RCP-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;

        const payment = await Payment.create({
          receiptId,
          memberDbId: member.id,
          memberId: member.memberId,
          amount: data.amount,
          currency: data.currency || 'ETB',
          frequency: data.frequency || 'Monthly',
          method: data.method,
          paymentDate: data.paymentDate || new Date(),
          periodMonth: data.period?.month || data.periodMonth,
          periodYear: data.period?.year || data.periodYear,
          receivedBy: data.receivedBy || user.fullName,
          status: data.status || 'Paid',
          notes: data.notes || null
        });

        await Receipt.create({
          receiptId,
          paymentDbId: payment.id,
          memberDbId: member.id,
          memberId: member.memberId,
          memberName: member.fullName,
          amount: payment.amount,
          currency: payment.currency,
          periodMonth: payment.periodMonth,
          periodYear: payment.periodYear,
          paymentMethod: payment.method,
          issuedBy: payment.receivedBy,
          branch: member.branch
        });

        createdPayments.push(payment);
      } catch (err: any) {
        errors.push({ index: i, error: err.message });
      }
    }

    return NextResponse.json({
      success: true,
      message: `Processed ${createdPayments.length} payments`,
      data: createdPayments,
      errors: errors.length > 0 ? errors : undefined
    });

  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
