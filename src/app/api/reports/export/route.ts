import { NextResponse } from 'next/server';
import Member from '@/models/Member';
import Payment from '@/models/Payment';
import Receipt from '@/models/Receipt';
import SectorUnit from '@/models/SectorUnit';
import MemberCategory from '@/models/MemberCategory';
import { validateAuth } from '@/middleware/apiAuth';

export async function GET(request: Request) {
  const user = await validateAuth(request);
  if (!user) return NextResponse.json({ success: false, message: 'Not authorized' }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const sectorId = user.role === 'sector_officer' ? user.sectorUnitId : searchParams.get('sectorId');

  try {
    const where: any = sectorId ? { sectorUnitId: sectorId } : {};

    const rawMembers = await Member.findAll({
      where,
      include: [
        { model: SectorUnit, as: 'sectorUnit', attributes: ['name'] },
        { model: MemberCategory, as: 'memberCategory', attributes: ['name'] }
      ]
    });

    const members = rawMembers.map(m => {
      const data = m.toJSON() as any;
      return {
        'Member ID': data.memberId,
        'Full Name': data.fullName,
        'Gender': data.gender,
        'Phone': data.phone,
        'Sector Unit': data.sectorUnit?.name || data.branch || '-',
        'Member Category': data.memberCategory?.name || '-',
        'Type': data.membershipType,
        'Sub Type': data.subType || '-',
        'Monthly Fee': data.contributionMonthlyFee,
        'Status': data.status,
        'Registration Date': data.registrationDate
      };
    });

    const rawPayments = await Payment.findAll({
      include: [{
        model: Member,
        as: 'memberInfo',
        attributes: ['fullName', 'memberId'],
        include: [{ model: SectorUnit, as: 'sectorUnit', attributes: ['name'] }]
      }]
    });

    const payments = rawPayments.map(p => {
      const data = p.toJSON() as any;
      return {
        'Receipt ID': data.receiptId,
        'Member Name': data.memberInfo?.fullName || '-',
        'Member ID': data.memberId,
        'Sector Unit': data.memberInfo?.sectorUnit?.name || '-',
        'Amount': data.amount,
        'Method': data.method,
        'Period': `${data.periodMonth}/${data.periodYear}`,
        'Payment Date': data.paymentDate,
        'Status': data.status
      };
    });

    const receipts = await Receipt.findAll();

    return NextResponse.json({
      success: true,
      data: { members, payments, receipts, exportedAt: new Date() }
    });

  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
