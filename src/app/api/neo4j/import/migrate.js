const Member = require('../../src/models/Member').default;
const Payment = require('../../src/models/Payment').default;
const SectorUnit = require('../../src/models/SectorUnit').default;
const MemberCategory = require('../../src/models/MemberCategory').default;
const { executeQuery } = require('../../src/lib/neo4j');

async function migrate() {
  console.log('Starting migration to Neo4j...');
  
  try {
    const [members, payments, units, categories] = await Promise.all([
      Member.findAll(),
      Payment.findAll(),
      SectorUnit.findAll(),
      MemberCategory.findAll()
    ]);

    console.log(`Found ${members.length} members, ${payments.length} payments, ${units.length} units, ${categories.length} categories.`);

    await executeQuery('MATCH (n) DETACH DELETE n');
    console.log('Cleared Neo4j database.');

    // Import Categories
    for (const cat of categories) {
      await executeQuery('CREATE (c:Category {id: $id, name: $name})', { id: cat.id, name: cat.name });
    }
    console.log('Imported Categories.');

    // Import Units
    for (const unit of units) {
      await executeQuery('CREATE (u:SectorUnit {id: $id, name: $name, type: $type})', { id: unit.id, name: unit.name, type: unit.type });
    }
    console.log('Imported Units.');

    // Import Members
    for (const member of members) {
      const m = member.toJSON();
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
        MATCH (c:Category {id: $categoryId})
        CREATE (m)-[:HAS_CATEGORY]->(c)
        WITH m
        MATCH (u:SectorUnit {id: $unitId})
        CREATE (m)-[:BELONGS_TO]->(u)
      `, {
        id: m.id,
        fullName: m.fullName,
        memberId: m.memberId,
        phone: m.phone,
        membershipType: m.membershipType,
        branch: m.branch,
        sector: m.sector,
        status: m.status,
        monthlyFee: m.contributionMonthlyFee,
        annualFee: m.contributionAnnualFee,
        categoryId: m.memberCategoryId,
        unitId: m.sectorUnitId
      });
    }
    console.log('Imported Members.');

    // Import Payments
    for (const payment of payments) {
      const p = payment.toJSON();
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
        amount: p.amount,
        method: p.method,
        month: p.periodMonth,
        year: p.periodYear,
        status: p.status,
        date: p.paymentDate?.toISOString(),
        memberId: p.memberDbId
      });
    }
    console.log('Imported Payments.');

    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

migrate();
