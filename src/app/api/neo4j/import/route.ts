import { NextRequest, NextResponse } from 'next/server'
import mysql from 'mysql2/promise'
import { executeQuery } from '@/lib/neo4j'

export async function POST(req: NextRequest) {
  try {
    // 1. Connect to MySQL
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || '',
      database: process.env.DB_NAME || 'mcms'
    })

    // 2. Fetch data
    const [members]: any = await connection.execute('SELECT * FROM members')
    const [payments]: any = await connection.execute('SELECT * FROM payments')
    const [units]: any = await connection.execute('SELECT * FROM sector_units')
    const [categories]: any = await connection.execute('SELECT * FROM member_categories')
    const [users]: any = await connection.execute('SELECT * FROM users')

    await connection.end()

    // 3. Clear Neo4j
    await executeQuery('MATCH (n) DETACH DELETE n')

    // 4. Import Users
    for (const u of users) {
      await executeQuery(`
        CREATE (user:User {
          id: $id,
          username: $username,
          email: $email,
          fullName: $fullName,
          role: $role,
          isActive: $isActive
        })
        WITH user
        OPTIONAL MATCH (unit:SectorUnit {id: $unitId})
        FOREACH (ignore IN CASE WHEN unit IS NOT NULL THEN [1] ELSE [] END |
          CREATE (user)-[:ASSIGNED_TO]->(unit)
        )
      `, {
        id: u.id,
        username: u.username,
        email: u.email,
        fullName: u.fullName,
        role: u.role,
        isActive: Boolean(u.isActive),
        unitId: u.sectorUnitId
      })
    }

    // 5. Import Categories
    for (const cat of categories) {
      await executeQuery('CREATE (c:Category {id: $id, name: $name})', { id: cat.id, name: cat.name })
    }

    // 5. Import Units
    for (const unit of units) {
      await executeQuery('CREATE (u:SectorUnit {id: $id, name: $name, sectorTypeId: $typeId})', { 
        id: unit.id, 
        name: unit.name || 'Unknown', 
        typeId: unit.sectorTypeId || 0 
      })
    }

    // 6. Import Members
    for (const m of members) {
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
        OPTIONAL MATCH (c:Category {id: $categoryId})
        FOREACH (ignore IN CASE WHEN c IS NOT NULL THEN [1] ELSE [] END |
          CREATE (m)-[:HAS_CATEGORY]->(c)
        )
        WITH m
        OPTIONAL MATCH (u:SectorUnit {id: $unitId})
        FOREACH (ignore IN CASE WHEN u IS NOT NULL THEN [1] ELSE [] END |
          CREATE (m)-[:BELONGS_TO]->(u)
        )
      `, {
        id: m.id,
        fullName: m.fullName || 'Anonymous',
        memberId: m.memberId || 'N/A',
        phone: m.phone || 'N/A',
        membershipType: m.membershipType || 'Special',
        branch: m.branch || 'Dire Dawa',
        sector: m.sector || 'N/A',
        status: m.status || 'Active',
        monthlyFee: Number(m.contributionMonthlyFee) || 0,
        annualFee: Number(m.contributionAnnualFee) || 0,
        categoryId: m.memberCategoryId || null,
        unitId: m.sectorUnitId || null
      })
    }

    // 7. Import Payments
    for (const p of payments) {
      await executeQuery(`
        CREATE (p:Payment {
          id: $id,
          amount: $amount,
          method: $method,
          periodMonth: $month,
          periodYear: $year,
          status: $status,
          paymentDate: $date
        })
        WITH p
        MATCH (m:Member {id: $memberId})
        CREATE (m)-[:MADE_PAYMENT]->(p)
      `, {
        id: p.id,
        amount: Number(p.amount) || 0,
        method: p.method,
        month: p.periodMonth,
        year: p.periodYear,
        status: p.status,
        date: p.paymentDate?.toISOString() || null,
        memberId: p.memberDbId
      })
    }

    return NextResponse.json({
      success: true,
      message: 'Data successfully migrated to Neo4j using raw SQL.',
      stats: {
        members: members.length,
        payments: payments.length,
        users: users.length
      }
    })
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}
