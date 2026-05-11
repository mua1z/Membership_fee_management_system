import { NextResponse } from 'next/server';
import { QueryTypes } from 'sequelize';
import { sequelize } from '@/lib/db';
import { validateAuth } from '@/middleware/apiAuth';
import { buildScope } from '@/utils/reportHelpers';

export async function GET(request: Request) {
  const user = await validateAuth(request);
  if (!user) return NextResponse.json({ success: false, message: 'Not authorized' }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const year = Number(searchParams.get('year')) || new Date().getFullYear();
  const sectorId = user.role === 'sector_officer' ? user.sectorUnitId : searchParams.get('sectorId');

  try {
    const Q = QueryTypes.SELECT;
    const { pWhere } = buildScope(sectorId);

    const yearlyData = await sequelize.query(
      `SELECT p.periodMonth AS _id,
              SUM(p.amount) AS monthlyRevenue,
              COUNT(*)      AS payments
       FROM payments p
       JOIN members m ON p.memberDbId = m.id
       WHERE p.periodYear = ? ${pWhere}
       GROUP BY p.periodMonth
       ORDER BY p.periodMonth ASC`,
      { replacements: [year], type: Q }
    ) as any[];

    const totalRevenue  = yearlyData.reduce((s, d) => s + Number(d.monthlyRevenue), 0);
    const totalPayments = yearlyData.reduce((s, d) => s + Number(d.payments),       0);

    return NextResponse.json({
      success: true,
      data: { year, totalRevenue, totalPayments, monthlyBreakdown: yearlyData }
    });

  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
