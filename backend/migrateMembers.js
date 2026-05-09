// migrateMembers.js — Assign existing 34 members to the 3 sector types
// Distributes ~11-12 members per sector type, assigns matching sector units & categories
require('dotenv').config();
const { connectDB, sequelize } = require('./config/db');

async function migrate() {
  await connectDB();

  // 1. Fetch sector types, units, and the pivot mapping
  const [sectorTypes] = await sequelize.query(`SELECT id, name FROM sector_types ORDER BY id`);
  console.log('Sector Types:', sectorTypes.map(t => `${t.id}: ${t.name}`));

  // Build a map: sectorTypeName → { typeId, units: [{ unitId, unitName, categories: [{ catId, catName }] }] }
  const typeMap = {};
  for (const st of sectorTypes) {
    const [units] = await sequelize.query(
      `SELECT id, name FROM sector_units WHERE sectorTypeId = ? ORDER BY id`, 
      { replacements: [st.id] }
    );

    const unitsWithCats = [];
    for (const u of units) {
      const [cats] = await sequelize.query(
        `SELECT mc.id, mc.name FROM member_categories mc
         JOIN sector_unit_categories suc ON suc.memberCategoryId = mc.id
         WHERE suc.sectorUnitId = ? ORDER BY mc.id`,
        { replacements: [u.id] }
      );
      unitsWithCats.push({ unitId: u.id, unitName: u.name, categories: cats });
    }
    typeMap[st.name] = { typeId: st.id, units: unitsWithCats };
  }

  // 2. Fetch all members ordered by id
  const [members] = await sequelize.query(`SELECT id, fullName, membershipType FROM members ORDER BY id`);
  console.log(`\nTotal members: ${members.length}`);

  if (members.length === 0) {
    console.log('No members to migrate.');
    process.exit(0);
  }

  // 3. Split members into 3 roughly equal groups
  const typeNames = Object.keys(typeMap); // e.g. ['Institution', 'Urban Woreda', 'Rural Cluster']
  const chunkSize = Math.ceil(members.length / typeNames.length);

  // Category matching logic: pick the best category based on membershipType
  function pickCategory(categories, membershipType) {
    const mt = (membershipType || '').toLowerCase();
    // Try to match based on membership type
    for (const cat of categories) {
      const cn = cat.name.toLowerCase();
      if (mt.includes('salary') && (cn.includes('employee member') || cn === 'employee')) return cat;
      if (mt === 'non-salary' && (cn.includes('resident') || cn.includes('farmer'))) return cat;
      if (mt === 'business' && cn.includes('enterprise')) return cat;
      if (mt === 'student' && cn.includes('student')) return cat;
      if (mt === 'investor' && cn.includes('investor')) return cat;
      if (mt === 'wing' && cn.includes('wing')) return cat;
    }
    // Fallback: first category
    return categories[0] || null;
  }

  let updated = 0;
  for (let g = 0; g < typeNames.length; g++) {
    const typeName = typeNames[g];
    const info = typeMap[typeName];
    const start = g * chunkSize;
    const end = Math.min(start + chunkSize, members.length);
    const group = members.slice(start, end);

    console.log(`\n--- ${typeName} (${group.length} members) ---`);

    for (let i = 0; i < group.length; i++) {
      const member = group[i];
      // Round-robin across units within this sector type
      const unit = info.units[i % info.units.length];
      const category = pickCategory(unit.categories, member.membershipType);

      if (!category) {
        console.log(`  ⚠ Skipping ${member.fullName} — no matching category in ${unit.unitName}`);
        continue;
      }

      await sequelize.query(
        `UPDATE members SET sectorUnitId = ?, memberCategoryId = ? WHERE id = ?`,
        { replacements: [unit.unitId, category.id, member.id] }
      );

      console.log(`  ✅ ${member.fullName} → ${unit.unitName} / ${category.name}`);
      updated++;
    }
  }

  console.log(`\n✅ Migration complete: ${updated}/${members.length} members updated.`);
  process.exit(0);
}

migrate().catch(err => {
  console.error('❌ Migration failed:', err);
  process.exit(1);
});
