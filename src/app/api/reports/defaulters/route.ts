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
    const { mWhere } = buildScope(sectorId);

    const defaulters = await sequelize.query(`
      SELECT m.*, su.name AS sectorUnitName
      FROM members m
      LEFT JOIN payments p
        ON m.id = p.memberDbId AND p.periodMonth = ? AND p.periodYear = ? AND p.status = 'Paid'
      LEFT JOIN sector_units su ON m.sectorUnitId = su.id
      WHERE p.id IS NULL AND m.status = 'Active' ${mWhere}
      ORDER BY m.contributionMonthlyFee DESC
    `, { replacements: [month, year], type: Q }) as any[];

    const totalOutstanding = defaulters.reduce((s, m) => s + (Number(m.contributionMonthlyFee) || 0), 0);

    return NextResponse.json({
      success: true,
      data: {
        totalDefaulters: defaulters.length,
        totalOutstanding,
        defaulters: defaulters.map(m => ({ ...m, branch: m.sectorUnitName || m.sector || m.branch }))
      }
    });

  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
