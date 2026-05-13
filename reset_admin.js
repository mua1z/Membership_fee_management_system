
const { sequelize } = require('./backend/config/db');
const User = require('./backend/models/User');

async function resetAdminPassword() {
  try {
    const usersToReset = [
      { email: 'admin@mcms.gov.et', username: 'admin' },
      { email: 'superadmin@mcms.gov.et', username: 'superadmin' }
    ];

    for (const u of usersToReset) {
      const existing = await User.findOne({ where: { email: u.email } });
      if (existing) {
        console.log(`Resetting password for ${u.email}...`);
        existing.password = 'adminpassword123';
        await existing.save();
      } else {
        console.log(`Creating user ${u.email}...`);
        await User.create({
          username: u.username,
          email: u.email,
          password: 'adminpassword123',
          fullName: 'System Administrator',
          role: 'admin'
        });
      }
    }
    console.log('Admin users synchronized successfully.');

  } catch (err) {
    console.error('Error:', err);
  } finally {
    process.exit();
  }
}

resetAdminPassword();
