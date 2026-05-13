// seedReferenceData.js — Seeds sector types, sector units, and member categories to TiDB Cloud
const dotenv = require('dotenv');
dotenv.config();

const { connectDB } = require('./config/db');
const SectorType = require('./models/SectorType');
const SectorUnit = require('./models/SectorUnit');
const MemberCategory = require('./models/MemberCategory');
const SectorUnitCategory = require('./models/SectorUnitCategory');

// ─── Member Categories (with "Members" suffix as required) ────────────────────
const MEMBER_CATEGORIES = [
  'Employee Members',
  'Government Employee Members',
  'Private Employee Members',
  'NGO Employee Members',
  'Embassy Employee Members',
  'Student Members',
  'Business Members',
  'Micro Business Members',
  'Small Business Members',
  'Medium Business Members',
  'Investor Members',
  'Non-Salary Members',
  'Farmer Members',
  'Pastoral Members',
  'Informal Worker Members',
  'Labor Members',
  'Wing Members',
  'Women Wing Members',
  'Youth Wing Members',
  'Special Members',
];

// ─── Sector Types with their Sector Units ─────────────────────────────────────
const SECTOR_STRUCTURE = [
  {
    name: 'Urban Sectors',
    units: [
      'Kebele',
      'Government Office',
      'Public Institution',
      'Health Facility',
      'Education Institution',
      'Private Company',
      'NGO',
      'Bank',
      'Embassy',
      'Micro Enterprise',
      'Small Business',
      'Medium Business',
      'Market',
      'Factory',
    ]
  },
  {
    name: 'Rural Sectors',
    units: [
      'Woreda',
      'Farming',
      'Pastoral',
      'Agro Activity',
      'Cooperative',
      'Local Market',
      'Labor',
      'Informal Work',
      'Self Employed',
      'Rural School',
      'Health Post',
    ]
  },
  {
    name: 'Wings',
    units: [
      'Women Wing',
      'Youth Wing',
    ]
  },
  {
    name: 'Special',
    units: [
      'Investor',
      'Special Category',
    ]
  },
];

// ─── Unit → Category mapping ───────────────────────────────────────────────────
// Maps each sector unit to which member categories apply to it
const UNIT_CATEGORY_MAP = {
  'Kebele':              ['Employee Members', 'Government Employee Members', 'Private Employee Members', 'Non-Salary Members', 'Informal Worker Members'],
  'Government Office':   ['Employee Members', 'Government Employee Members'],
  'Public Institution':  ['Employee Members', 'Government Employee Members', 'Private Employee Members'],
  'Health Facility':     ['Employee Members', 'Government Employee Members', 'Private Employee Members'],
  'Education Institution': ['Employee Members', 'Government Employee Members', 'Student Members'],
  'Private Company':     ['Employee Members', 'Private Employee Members', 'Business Members', 'Investor Members'],
  'NGO':                 ['Employee Members', 'NGO Employee Members'],
  'Bank':                ['Employee Members', 'Private Employee Members'],
  'Embassy':             ['Employee Members', 'Embassy Employee Members'],
  'Micro Enterprise':    ['Business Members', 'Micro Business Members'],
  'Small Business':      ['Business Members', 'Small Business Members'],
  'Medium Business':     ['Business Members', 'Medium Business Members'],
  'Market':              ['Business Members', 'Non-Salary Members', 'Informal Worker Members'],
  'Factory':             ['Employee Members', 'Investor Members'],
  'Woreda':              ['Employee Members', 'Government Employee Members'],
  'Farming':             ['Farmer Members', 'Non-Salary Members'],
  'Pastoral':            ['Pastoral Members', 'Non-Salary Members'],
  'Agro Activity':       ['Business Members', 'Farmer Members'],
  'Cooperative':         ['Business Members', 'Employee Members'],
  'Local Market':        ['Non-Salary Members', 'Informal Worker Members'],
  'Labor':               ['Labor Members', 'Non-Salary Members'],
  'Informal Work':       ['Informal Worker Members', 'Non-Salary Members'],
  'Self Employed':       ['Non-Salary Members', 'Informal Worker Members'],
  'Rural School':        ['Employee Members', 'Government Employee Members', 'Student Members'],
  'Health Post':         ['Employee Members', 'Government Employee Members'],
  'Women Wing':          ['Women Wing Members', 'Wing Members'],
  'Youth Wing':          ['Youth Wing Members', 'Wing Members', 'Student Members'],
  'Investor':            ['Investor Members'],
  'Special Category':    ['Special Members'],
};

async function seedReferenceData() {
  try {
    console.log('🌱 Connecting to TiDB Cloud...');
    await connectDB();

    // 1. Seed Member Categories
    console.log('\n📂 Seeding Member Categories...');
    const categoryMap = {};
    for (const name of MEMBER_CATEGORIES) {
      const [cat, created] = await MemberCategory.findOrCreate({ where: { name }, defaults: { name } });
      categoryMap[name] = cat;
      console.log(`  ${created ? '✅ Created' : '⏭ Exists'}: ${name}`);
    }

    // 2. Seed Sector Types + Units
    console.log('\n🏢 Seeding Sector Types & Units...');
    const unitMap = {}; // unit name → SectorUnit instance
    for (const sectorType of SECTOR_STRUCTURE) {
      const [type, typeCreated] = await SectorType.findOrCreate({
        where: { name: sectorType.name },
        defaults: { name: sectorType.name }
      });
      console.log(`  ${typeCreated ? '✅ Created Type' : '⏭ Exists Type'}: ${sectorType.name}`);

      for (const unitName of sectorType.units) {
        const [unit, unitCreated] = await SectorUnit.findOrCreate({
          where: { name: unitName, sectorTypeId: type.id },
          defaults: { name: unitName, sectorTypeId: type.id }
        });
        unitMap[unitName] = unit;
        console.log(`    ${unitCreated ? '✅ Created Unit' : '⏭ Exists Unit'}: ${unitName}`);
      }
    }

    // 3. Link Units to Categories
    console.log('\n🔗 Linking Sector Units to Member Categories...');
    for (const [unitName, categoryNames] of Object.entries(UNIT_CATEGORY_MAP)) {
      const unit = unitMap[unitName];
      if (!unit) { console.log(`  ⚠️  Unit not found: ${unitName}`); continue; }

      for (const catName of categoryNames) {
        const cat = categoryMap[catName];
        if (!cat) { console.log(`    ⚠️  Category not found: ${catName}`); continue; }

        const [, linkCreated] = await SectorUnitCategory.findOrCreate({
          where: { sectorUnitId: unit.id, memberCategoryId: cat.id }
        });
        if (linkCreated) console.log(`  ✅ Linked: ${unitName} → ${catName}`);
      }
    }

    // Summary
    const totalTypes = await SectorType.count();
    const totalUnits = await SectorUnit.count();
    const totalCats  = await MemberCategory.count();
    const totalLinks = await SectorUnitCategory.count();

    console.log('\n📊 Summary:');
    console.log(`  Sector Types:      ${totalTypes}`);
    console.log(`  Sector Units:      ${totalUnits}`);
    console.log(`  Member Categories: ${totalCats}`);
    console.log(`  Unit-Cat Links:    ${totalLinks}`);

    console.log('\n🎉 Reference data seeded successfully to TiDB Cloud!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
    process.exit(1);
  }
}

seedReferenceData();
