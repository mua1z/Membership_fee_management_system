import { NextResponse } from 'next/server';
import { Op } from 'sequelize';
import { sequelize } from '@/lib/db';
import Member from '@/models/Member';
import Payment from '@/models/Payment';
import SectorUnit from '@/models/SectorUnit';
import MemberCategory from '@/models/MemberCategory';
import SectorType from '@/models/SectorType';
import { validateAuth } from '@/middleware/apiAuth';

export async function GET(request: Request) {
  const user = await validateAuth(request);
  if (!user) return NextResponse.json({ success: false, message: 'Not authorized' }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const month = searchParams.get('month');
  const year = searchParams.get('year');
  const search = searchParams.get('search');
  const branch = searchParams.get('branch');
  const cluster = searchParams.get('cluster');
  const sector = searchParams.get('sector');
  const membershipType = searchParams.get('membershipType');
  const paymentStatus = searchParams.get('paymentStatus');
  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 50;
  const sectorId = searchParams.get('sectorId');
  const sectorType = searchParams.get('sectorType');
  const categoryId = searchParams.get('categoryId');

  try {
    const targetMonth = month ? Number(month) : new Date().getMonth() + 1;
    const targetYear = year ? Number(year) : new Date().getFullYear();

    const memberWhere: any = {};
    if (user.role === 'sector_officer' && user.sectorUnitId) {
      memberWhere.sectorUnitId = user.sectorUnitId;
    }

    if (search) {
      memberWhere[Op.or] = [
        { fullName: { [Op.like]: `%${search}%` } },
        { memberId: { [Op.like]: `%${search}%` } }
      ];
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

    if (paymentStatus === 'Paid') {
      memberWhere.id = { [Op.in]: sequelize.literal(`(SELECT memberDbId FROM payments WHERE periodMonth = ${targetMonth} AND periodYear = ${targetYear} AND status = 'Paid')`) };
    } else if (paymentStatus === 'Unpaid') {
      memberWhere.id = { [Op.notIn]: sequelize.literal(`(SELECT memberDbId FROM payments WHERE periodMonth = ${targetMonth} AND periodYear = ${targetYear} AND status = 'Paid')`) };
    }

    const offset = (page - 1) * limit;
    const { count: total, rows: members } = await Member.findAndCountAll({
      where: memberWhere,
      include: [
        {
          model: Payment,
          as: 'payments',
          where: { periodMonth: targetMonth, periodYear: targetYear, status: 'Paid' },
          required: false
        },
        { model: SectorUnit, as: 'sectorUnit', attributes: ['name'] },
        { model: MemberCategory, as: 'memberCategory', attributes: ['name'] }
      ],
      offset,
      limit,
      order: [['fullName', 'ASC']]
    });

    const mappedMembers = members.map(m => {
      const obj = m.toJSON() as any;
      const currentPayment = (obj.payments && obj.payments.length > 0) ? obj.payments[0] : null;

      return {
        _id: obj.id,
        memberId: obj.memberId,
        fullName: obj.fullName,
        branch: obj.sectorUnit?.name || obj.sector || obj.branch,
        fee: obj.contribution?.monthlyFee || obj.contributionMonthlyFee || 0,
        paymentStatus: currentPayment ? 'Paid' : 'Unpaid',
        paymentDate: currentPayment ? currentPayment.paymentDate : null,
        paymentId: currentPayment ? currentPayment.id : null
      };
    });

    const totalMonthlyRevenue = await Member.sum('contributionMonthlyFee', { where: memberWhere });
    const totalYearlyRevenue = await Member.sum('contributionAnnualFee', { where: memberWhere });

    return NextResponse.json({
      success: true,
      data: mappedMembers,
      summary: {
        totalMembers: total,
        totalMonthlyRevenue: totalMonthlyRevenue || 0,
        totalYearlyRevenue: totalYearlyRevenue || 0
      },
      pagination: { total, page, limit, pages: Math.ceil(total / limit) },
      period: { month: targetMonth, year: targetYear }
    });

  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
