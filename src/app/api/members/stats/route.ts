import { NextResponse } from 'next/server';
import { QueryTypes } from 'sequelize';
import { sequelize } from '@/lib/db';
import { validateAuth } from '@/middleware/apiAuth';

export async function GET(request: Request) {
  const user = await validateAuth(request);
  if (!user) return NextResponse.json({ success: false, message: 'Not authorized' }, { status: 401 });

  try {
    const [overall] = await sequelize.query(`
      SELECT
        COUNT(*)                                     AS totalMembers,
        SUM(status = 'Active')                       AS activeMembers,
        SUM(contributionMonthlyFee)                  AS totalMonthlyRevenue,
        SUM(contributionAnnualFee)                   AS totalAnnualRevenue
      FROM members
    `, { type: QueryTypes.SELECT }) as any[];

    const byType = await sequelize.query(
      `SELECT membershipType AS _id, COUNT(*) AS count FROM members GROUP BY membershipType`,
      { type: QueryTypes.SELECT }
    );

    const byBranch = await sequelize.query(
      `SELECT branch AS _id, COUNT(*) AS count FROM members GROUP BY branch`,
      { type: QueryTypes.SELECT }
    );

    return NextResponse.json({
      success: true,
      data: {
        overall: overall || { totalMembers: 0, activeMembers: 0, totalMonthlyRevenue: 0, totalAnnualRevenue: 0 },
        byType,
        byBranch
      }
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
