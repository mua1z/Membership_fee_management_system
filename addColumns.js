// addColumns.js
const { sequelize, connectDB } = require('./backend/config/db');

async function run() {
  try {
    await connectDB(); // This will still fail if sync alter is true, but I turned it on in db.js
    // Wait, if I turned on alter:true in db.js, connectDB will fail.
    // I should probably turn it off in db.js first or run raw query directly.
    
    console.log('Adding columns manually...');
    await sequelize.query('ALTER TABLE members ADD COLUMN IF NOT EXISTS sectorUnitId INT NULL');
    await sequelize.query('ALTER TABLE members ADD COLUMN IF NOT EXISTS memberCategoryId INT NULL');
    
    console.log('Columns added successfully');
    process.exit(0);
  } catch (err) {
    console.error('FAILED:', err);
    // If it failed because of the sync in connectDB, I'll try to just authenticate
    try {
        const { Sequelize } = require('sequelize');
        const s = new Sequelize('mcms', 'root', '', { host: 'localhost', dialect: 'mysql' });
        await s.authenticate();
        await s.query('ALTER TABLE members ADD COLUMN sectorUnitId INT NULL');
        await s.query('ALTER TABLE members ADD COLUMN memberCategoryId INT NULL');
        console.log('Columns added successfully (manual connection)');
        process.exit(0);
    } catch (e2) {
        console.error('Manual fallback failed:', e2);
        process.exit(1);
    }
  }
}

run();
