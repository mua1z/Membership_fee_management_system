import { NextResponse } from 'next/server';
import { QueryTypes } from 'sequelize';
import { sequelize } from '@/lib/db';
import Member from '@/models/Member';
import SectorUnit from '@/models/SectorUnit';
import { validateAuth } from '@/middleware/apiAuth';

export async function GET(request: Request) {
  const user = await validateAuth(request);
  if (!user) return NextResponse.json({ success: false, message: 'Not authorized' }, { status: 401 });

  try {
    const Q = QueryTypes.SELECT;
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;

    // Sector scoping
    const sectorId = user.role === 'sector_officer' ? user.sectorUnitId : null;
    const esc = sectorId ? sequelize.escape(sectorId) : null;

    const memberWhere = sectorId ? ` AND sectorUnitId = ${esc} ` : '';
    const mWhere = sectorId ? ` AND m.sectorUnitId = ${esc} ` : '';
    const payWhere = sectorId ? ` AND memberDbId IN (SELECT id FROM members WHERE sectorUnitId = ${esc}) ` : '';
    const pWhere = sectorId ? ` AND p.memberDbId IN (SELECT id FROM members WHERE sectorUnitId = ${esc}) ` : '';

    // Counts
    const [totalRow] = await sequelize.query(`SELECT COUNT(*) AS cnt FROM members WHERE 1=1 ${memberWhere}`, { type: Q }) as any[];
    const totalMembers = Number(totalRow?.cnt) || 0;

    const [activeRow] = await sequelize.query(`SELECT COUNT(*) AS cnt FROM members WHERE status = 'Active' ${memberWhere}`, { type: Q }) as any[];
    const activeMembers = Number(activeRow?.cnt) || 0;

    const [paidThisMonthRaw] = await sequelize.query(
      `SELECT COUNT(DISTINCT memberDbId) AS count FROM payments WHERE periodYear = ? AND periodMonth = ? ${payWhere}`,
      { replacements: [currentYear, currentMonth], type: Q }
    ) as any[];
    const paidThisMonth = Number(paidThisMonthRaw?.count) || 0;
    const pendingPayments = totalMembers - paidThisMonth;

    const [defaulterRaw] = await sequelize.query(`
      SELECT COUNT(*) AS count 
      FROM members m
      LEFT JOIN payments p
        ON m.id = p.memberDbId AND p.periodMonth = ? AND p.periodYear = ? AND p.status = 'Paid'
      WHERE p.id IS NULL AND m.status = 'Active' ${mWhere}
    `, { replacements: [currentMonth, currentYear], type: Q }) as any[];
    const defaultedMembers = Number(defaulterRaw?.count) || 0;

    // Revenue
    const [yearlyRow] = await sequelize.query(`SELECT COALESCE(SUM(amount),0) AS total FROM payments WHERE periodYear = ? ${payWhere}`, { replacements: [currentYear], type: Q }) as any[];
    const [monthlyRow] = await sequelize.query(`SELECT COALESCE(SUM(amount),0) AS total FROM payments WHERE periodYear = ? AND periodMonth = ? ${payWhere}`, { replacements: [currentYear, currentMonth], type: Q }) as any[];

    // Members by type
    const membersByType = await sequelize.query(`SELECT membershipType AS _id, COUNT(*) AS count FROM members WHERE 1=1 ${memberWhere} GROUP BY membershipType`, { type: Q });

    // Members by Sector Unit
    const membersByBranch = await sequelize.query(`
      SELECT su.name AS _id, COUNT(*) AS count 
      FROM members m
      LEFT JOIN sector_units su ON m.sectorUnitId = su.id
      WHERE 1=1 ${mWhere}
      GROUP BY su.name
    `, { type: Q });

    // Members by Sector Type
    const membersByCluster = await sequelize.query(`
      SELECT st.name AS _id, COUNT(*) AS count 
      FROM members m
      LEFT JOIN sector_units su ON m.sectorUnitId = su.id
      LEFT JOIN sector_types st ON su.sectorTypeId = st.id
      WHERE 1=1 ${mWhere}
      GROUP BY st.name
    `, { type: Q });

    // Members by Sector (ranked)
    const membersBySector = await sequelize.query(`
      SELECT su.name AS _id, COUNT(*) AS count 
      FROM members m
      LEFT JOIN sector_units su ON m.sectorUnitId = su.id
      WHERE m.sectorUnitId IS NOT NULL ${mWhere}
      GROUP BY su.name ORDER BY count DESC
    `, { type: Q });

    // Payment trend
    const paymentTrend = await sequelize.query(`
      SELECT YEAR(paymentDate) AS year, MONTH(paymentDate) AS month,
             SUM(amount) AS revenue, COUNT(*) AS count
      FROM payments
      WHERE paymentDate >= DATE_SUB(NOW(), INTERVAL 12 MONTH) ${payWhere}
      GROUP BY YEAR(paymentDate), MONTH(paymentDate)
      ORDER BY year ASC, month ASC
    `, { type: Q }) as any[];

    // Top contributors
    const topContributorsRaw = await Member.findAll({
      attributes: ['fullName', 'memberId', 'contributionMonthlyFee', 'branch', 'sector'],
      where: sectorId ? { sectorUnitId: sectorId } : {},
      include: [{ model: SectorUnit, as: 'sectorUnit' }],
      order: [['contributionMonthlyFee', 'DESC']],
      limit: 10
    });
    const topContributors = topContributorsRaw.map(m => ({
      fullName: m.fullName,
      memberId: m.memberId,
      branch: (m as any).sectorUnit?.name || m.sector || m.branch || '-',
      contribution: { monthlyFee: Number(m.contributionMonthlyFee) || 0 }
    }));

    // Revenue by member type
    const revenueByType = await sequelize.query(`
      SELECT m.membershipType AS _id, SUM(p.amount) AS totalRevenue
      FROM payments p
      JOIN members m ON p.memberDbId = m.id
      WHERE 1=1 ${pWhere}
      GROUP BY m.membershipType
    `, { type: Q });

    // Members by Category
    const membersByCategory = await sequelize.query(`
      SELECT COALESCE(mc.name, m.membershipType) AS _id, COUNT(*) AS count
      FROM members m
      LEFT JOIN member_categories mc ON m.memberCategoryId = mc.id
      WHERE 1=1 ${mWhere}
      GROUP BY COALESCE(mc.name, m.membershipType)
      ORDER BY count DESC
    `, { type: Q });

    return NextResponse.json({
      success: true,
      data: {
        summary: {
          totalMembers,
          activeMembers,
          yearlyRevenue: Number(yearlyRow?.total) || 0,
          monthlyRevenue: Number(monthlyRow?.total) || 0,
          pendingPayments,
          defaultedMembers
        },
        membersByType,
        membersByBranch,
        membersByCluster,
        membersBySector,
        membersByCategory,
        paymentTrend: paymentTrend.map(r => ({
          _id: { year: r.year, month: r.month },
          revenue: Number(r.revenue) || 0,
          count: Number(r.count) || 0
        })),
        topContributors,
        revenueByType,
        scopedToSector: !!sectorId
      }
    });

  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
