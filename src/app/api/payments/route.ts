import { NextResponse } from 'next/server';
import { Op } from 'sequelize';
import Member from '@/models/Member';
import Payment from '@/models/Payment';
import Receipt from '@/models/Receipt';
import SectorUnit from '@/models/SectorUnit';
import SectorType from '@/models/SectorType';
import MemberCategory from '@/models/MemberCategory';
import { validateAuth, authorize } from '@/middleware/apiAuth';

export async function GET(request: Request) {
  const user = await validateAuth(request);
  if (!user) return NextResponse.json({ success: false, message: 'Not authorized' }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 50;
  const memberId = searchParams.get('memberId');
  const status = searchParams.get('status');
  const branch = searchParams.get('branch');
  const cluster = searchParams.get('cluster');
  const sector = searchParams.get('sector');
  const membershipType = searchParams.get('membershipType');
  const sectorId = searchParams.get('sectorId');
  const categoryId = searchParams.get('categoryId');
  const sectorType = searchParams.get('sectorType');

  try {
    const where: any = {};
    if (memberId) where.memberId = memberId;
    if (status) where.status = status;

    const memberWhere: any = {};
    if (user.role === 'sector_officer' && user.sectorUnitId) {
      memberWhere.sectorUnitId = user.sectorUnitId;
    }
    if (branch) memberWhere.branch = branch;
    if (cluster) memberWhere.cluster = cluster;
    if (sector) memberWhere.sector = sector;
    if (membershipType) memberWhere.membershipType = membershipType;

    if (sectorId) {
      memberWhere.sectorUnitId = sectorId;
    } else if (sectorType) {
      const typeRec = await SectorType.findOne({ where: { name: sectorType } });
      if (typeRec) {
        const units = await SectorUnit.findAll({ where: { sectorTypeId: typeRec.id }, attributes: ['id'] });
        memberWhere.sectorUnitId = { [Op.in]: units.map(u => u.id) };
      }
    }
    if (categoryId) memberWhere.memberCategoryId = categoryId;

    const offset = (page - 1) * limit;
    const { count: total, rows: payments } = await Payment.findAndCountAll({
      where,
      include: [{
        model: Member,
        as: 'memberInfo',
        where: Object.keys(memberWhere).length > 0 ? memberWhere : undefined,
        include: [
          { model: SectorUnit, as: 'sectorUnit', attributes: ['name'] },
          { model: MemberCategory, as: 'memberCategory', attributes: ['name'] }
        ]
      }],
      offset,
      limit,
      order: [['paymentDate', 'DESC']]
    });

    const totalMemberCount = await Member.count({ where: memberWhere });
    const totalMonthlyRevenue = await Member.sum('contributionMonthlyFee', { where: memberWhere });
    const totalYearlyRevenue = await Member.sum('contributionAnnualFee', { where: memberWhere });

    return NextResponse.json({
      success: true,
      data: payments,
      summary: {
        totalMembers: totalMemberCount,
        totalMonthlyRevenue: totalMonthlyRevenue || 0,
        totalYearlyRevenue: totalYearlyRevenue || 0
      },
      pagination: { total, page, limit, pages: Math.ceil(total / limit) }
    });

  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const user = await validateAuth(request);
  if (!user || !authorize('admin', 'sector_officer')(user)) {
    return NextResponse.json({ success: false, message: 'Not authorized' }, { status: 401 });
  }

  try {
    const paymentData = await request.json();
    const memberWhere = isNaN(paymentData.member)
      ? { memberId: paymentData.member }
      : { id: Number(paymentData.member) };
    
    const member = await Member.findOne({ where: memberWhere });
    if (!member) {
      return NextResponse.json({ success: false, message: 'Member not found.' }, { status: 404 });
    }

    // Scoping check for sector officer
    if (user.role === 'sector_officer' && user.sectorUnitId && member.sectorUnitId !== user.sectorUnitId) {
      return NextResponse.json({ success: false, message: 'Access denied: Member not in your sector.' }, { status: 403 });
    }

    const receiptId = `RCP-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const payment = await Payment.create({
      receiptId,
      memberDbId: member.id,
      memberId: member.memberId,
      contributionDbId: paymentData.contribution || null,
      amount: paymentData.amount,
      currency: paymentData.currency || 'ETB',
      frequency: paymentData.frequency || 'Monthly',
      method: paymentData.method,
      paymentDate: paymentData.paymentDate || new Date(),
      periodMonth: paymentData.period?.month || paymentData.periodMonth,
      periodYear: paymentData.period?.year || paymentData.periodYear,
      receivedBy: paymentData.receivedBy || user.fullName,
      status: paymentData.status || 'Paid',
      notes: paymentData.notes || null
    });

    const receipt = await Receipt.create({
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

    return NextResponse.json({
      success: true,
      message: 'Payment recorded and receipt generated',
      data: { payment, receipt }
    }, { status: 201 });

  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
