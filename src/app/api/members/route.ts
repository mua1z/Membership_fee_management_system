import { NextResponse } from 'next/server';
import { Op } from 'sequelize';
import { sequelize } from '@/lib/db';
import Member from '@/models/Member';
import Payment from '@/models/Payment';
import SectorUnit from '@/models/SectorUnit';
import MemberCategory from '@/models/MemberCategory';
import Setting from '@/models/Setting';
import SectorType from '@/models/SectorType';
import ClassificationEngine from '@/utils/classificationEngine';
import { validateAuth, authorize } from '@/middleware/apiAuth';
import { flattenMemberData, generatePaymentSchedule } from '@/utils/memberHelpers';
import neo4j from 'neo4j-driver';
import { executeQuery } from '@/lib/neo4j';

export async function GET(request: Request) {
  const user = await validateAuth(request);
  if (!user) return NextResponse.json({ success: false, message: 'Not authorized' }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 50;
  const search = searchParams.get('search');
  const branch = searchParams.get('branch');
  const cluster = searchParams.get('cluster');
  const sector = searchParams.get('sector');
  const membershipType = searchParams.get('membershipType');
  const status = searchParams.get('status');
  const paymentStatus = searchParams.get('paymentStatus');
  const minSalary = searchParams.get('minSalary');
  const maxSalary = searchParams.get('maxSalary');
  const sectorId = searchParams.get('sectorId');
  const categoryId = searchParams.get('categoryId');
  const sectorType = searchParams.get('sectorType');
  const targetYear = Number(searchParams.get('billingYear')) || new Date().getFullYear();
  const targetMonth = Number(searchParams.get('billingMonth')) || new Date().getMonth() + 1;

  try {
    const skip = (page - 1) * limit;
    
    // Build Cypher query with filters
    let query = `
      MATCH (m:Member)
      OPTIONAL MATCH (m)-[:BELONGS_TO]->(u:SectorUnit)
      OPTIONAL MATCH (m)-[:HAS_CATEGORY]->(c:Category)
      WHERE 1=1
    `;
    const params: any = { skip: neo4j.int(skip), limit: neo4j.int(limit) };

    if (search) {
      query += ' AND (m.fullName CONTAINS $search OR m.memberId CONTAINS $search OR m.phone CONTAINS $search)';
      params.search = search;
    }
    if (branch) { query += ' AND m.branch = $branch'; params.branch = branch; }
    if (status) { query += ' AND m.status = $status'; params.status = status; }
    if (membershipType) { query += ' AND m.membershipType = $membershipType'; params.membershipType = membershipType; }

    // Add count and data retrieval
    const countRes = await executeQuery(`MATCH (m:Member) ${query.split('WHERE')[1].split('SKIP')[0]} RETURN count(m) as total`, params);
    const total = countRes.records[0].get('total').toNumber();

    query += ' RETURN m, u.name as sectorUnitName, c.name as categoryName ORDER BY m.fullName ASC SKIP $skip LIMIT $limit';
    const result = await executeQuery(query, params);

    const members = result.records.map(record => {
      const m = record.get('m').properties;
      return {
        ...m,
        sectorUnit: record.get('sectorUnitName') ? { name: record.get('sectorUnitName') } : null,
        memberCategory: record.get('categoryName') ? { name: record.get('categoryName') } : null,
        // Mock payment schedule for now to maintain UI compatibility
        paymentSchedule: [],
        paymentStatus: 'Unpaid' 
      };
    });

    return NextResponse.json({
      success: true,
      data: members,
      summary: { totalMembers: total, totalMonthlyRevenue: 0, totalYearlyRevenue: 0 },
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
    const memberData = await request.json();
    let settings = await Setting.findOne();
    if (!settings) settings = await Setting.create({});

    const classification = ClassificationEngine.autoClassifyAndCalculate(memberData, settings);

    const currentYear = new Date().getFullYear();
    const paymentDay = memberData.paymentDay || 1;
    const paymentSchedule = generatePaymentSchedule(currentYear, paymentDay);

    const flat = flattenMemberData({
      ...memberData,
      subType: classification.subType,
      classificationRuleId: classification.classificationRuleId,
      cluster: classification.cluster || memberData.cluster || 'N/A',
      contribution: {
        monthlyFee: classification.monthlyFee,
        percentage: classification.percentage,
        annualFee: classification.annualFee,
        hqShare: classification.hqShare,
        branchShare: classification.branchShare
      },
      netSalary: classification.netSalary,
      paymentSchedule
    });

    // If sector officer, enforce their sectorUnitId
    if (user.role === 'sector_officer' && user.sectorUnitId) {
      flat.sectorUnitId = user.sectorUnitId;
    }

    // Neo4j Create
    const id = Date.now(); // Simple ID for now
    await executeQuery(`
      CREATE (m:Member {
        id: $id,
        fullName: $fullName,
        memberId: $memberId,
        phone: $phone,
        membershipType: $membershipType,
        branch: $branch,
        sector: $sector,
        status: $status,
        monthlyFee: $monthlyFee,
        annualFee: $annualFee
      })
      WITH m
      OPTIONAL MATCH (u:SectorUnit {id: $unitId})
      FOREACH (ignore IN CASE WHEN u IS NOT NULL THEN [1] ELSE [] END |
        CREATE (m)-[:BELONGS_TO]->(u)
      )
      RETURN m
    `, {
      id,
      fullName: flat.fullName,
      memberId: flat.memberId,
      phone: flat.phone,
      membershipType: flat.membershipType,
      branch: flat.branch,
      sector: flat.sector,
      status: 'Active',
      monthlyFee: Number(flat.contributionMonthlyFee) || 0,
      annualFee: Number(flat.contributionAnnualFee) || 0,
      unitId: flat.sectorUnitId
    });

    return NextResponse.json({ success: true, message: 'Member created successfully in Neo4j', data: { ...flat, id } }, { status: 201 });

  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
