import { NextResponse } from 'next/server';
import { QueryTypes } from 'sequelize';
import { sequelize } from '@/lib/db';
import { validateAuth } from '@/middleware/apiAuth';
import { buildScope } from '@/utils/reportHelpers';

export async function GET(request: Request) {
  const user = await validateAuth(request);
  if (!user) return NextResponse.json({ success: false, message: 'Not authorized' }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const month = Number(searchParams.get('month')) || new Date().getMonth() + 1;
  const year = Number(searchParams.get('year')) || new Date().getFullYear();
  const sectorId = user.role === 'sector_officer' ? user.sectorUnitId : searchParams.get('sectorId');

  try {
    const Q = QueryTypes.SELECT;
    const { pWhere } = buildScope(sectorId);

    const [summary] = await sequelize.query(
      `SELECT COALESCE(SUM(p.amount),0) AS totalRevenue,
              COUNT(*)                  AS totalPayments,
              COALESCE(AVG(p.amount),0) AS avgPayment
       FROM payments p 
       JOIN members m ON p.memberDbId = m.id
       WHERE p.periodMonth = ? AND p.periodYear = ? ${pWhere}`,
      { replacements: [month, year], type: Q }
    ) as any[];

    const byType = await sequelize.query(
      `SELECT m.membershipType AS _id,
              SUM(p.amount)    AS totalRevenue,
              COUNT(*)         AS count
       FROM payments p
       JOIN members m ON p.memberDbId = m.id
       WHERE p.periodMonth = ? AND p.periodYear = ? ${pWhere}
       GROUP BY m.membershipType`,
      { replacements: [month, year], type: Q }
    );

    const byBranch = await sequelize.query(
      `SELECT COALESCE(su.name, m.sector, m.branch) AS _id,
              SUM(p.amount) AS totalRevenue,
              COUNT(*)      AS count
       FROM payments p
       JOIN members m ON p.memberDbId = m.id
       LEFT JOIN sector_units su ON m.sectorUnitId = su.id
       WHERE p.periodMonth = ? AND p.periodYear = ? ${pWhere}
       GROUP BY COALESCE(su.name, m.sector, m.branch)`,
      { replacements: [month, year], type: Q }
    );

    const byCategory = await sequelize.query(
      `SELECT COALESCE(mc.name, m.membershipType) AS _id,
              SUM(p.amount) AS totalRevenue,
              COUNT(*)      AS count
       FROM payments p
       JOIN members m ON p.memberDbId = m.id
       LEFT JOIN member_categories mc ON m.memberCategoryId = mc.id
       WHERE p.periodMonth = ? AND p.periodYear = ? ${pWhere}
       GROUP BY COALESCE(mc.name, m.membershipType)
       ORDER BY totalRevenue DESC`,
      { replacements: [month, year], type: Q }
    );

    return NextResponse.json({
      success: true,
      data: {
        period: { month, year },
        summary: summary || { totalRevenue: 0, totalPayments: 0, avgPayment: 0 },
        byType,
        byBranch,
        byCategory
      }
    });

  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
