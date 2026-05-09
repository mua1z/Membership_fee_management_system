
const { sequelize } = require('./backend/config/db');
const Member = require('./backend/models/Member');
const Payment = require('./backend/models/Payment');
const Receipt = require('./backend/models/Receipt');
const Contribution = require('./backend/models/Contribution');

async function testDelete() {
  try {
    const member = await Member.findOne();
    if (!member) {
      console.log('No members to delete');
      return;
    }
    console.log(`Attempting to delete member ID: ${member.id}`);
    
    // Manual cleanup
    const where = { memberDbId: member.id };
    await Receipt.destroy({ where });
    await Payment.destroy({ where });
    await Contribution.destroy({ where });
    
    await member.destroy();
    console.log('Success!');
  } catch (err) {
    console.error('Delete failed:', err);
  } finally {
    process.exit();
  }
}

testDelete();
