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
    const { memberWhere } = buildScope(sectorId);

    const [row] = await sequelize.query(
      `SELECT COALESCE(SUM(contributionHqShare),0)     AS totalHQ,
              COALESCE(SUM(contributionBranchShare),0) AS totalBranch
       FROM members WHERE status = 'Active' ${memberWhere}`,
      { type: Q }
    ) as any[];

    const totalHQ     = Number(row?.totalHQ)     || 0;
    const totalBranch = Number(row?.totalBranch) || 0;
    const grand       = totalHQ + totalBranch;

    return NextResponse.json({
      success: true,
      data: {
        year,
        hqShare:     { amount: totalHQ,     percentage: grand > 0 ? (totalHQ     / grand * 100).toFixed(2) : 0 },
        branchShare: { amount: totalBranch, percentage: grand > 0 ? (totalBranch / grand * 100).toFixed(2) : 0 },
        total: grand
      }
    });

  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
