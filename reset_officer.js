
const { sequelize } = require('./backend/config/db');
const User = require('./backend/models/User');

async function resetOfficerPassword() {
  try {
    const officer = await User.findOne({ where: { email: 'aseliso@mcms.gov.et' } });
    if (officer) {
      console.log('Found officer user. Resetting password...');
      officer.password = 'officerpassword123';
      await officer.save();
      console.log('Password reset successfully for aseliso@mcms.gov.et');
      console.log('New Password: officerpassword123');
    }
  } catch (err) {
    console.error('Error:', err);
  } finally {
    process.exit();
  }
}

resetOfficerPassword();
