
const { sequelize } = require('./backend/config/db');
const User = require('./backend/models/User');

async function resetAdminPassword() {
  try {
    const admin = await User.findOne({ where: { email: 'admin@mcms.gov.et' } });
    if (admin) {
      console.log('Found admin user. Resetting password...');
      admin.password = 'adminpassword123';
      await admin.save();
      console.log('Password reset successfully for admin@mcms.gov.et');
      console.log('New Password: adminpassword123');
    } else {
      console.log('Admin user not found. Creating one...');
      await User.create({
        username: 'admin',
        email: 'admin@mcms.gov.et',
        password: 'adminpassword123',
        fullName: 'System Administrator',
        role: 'admin'
      });
      console.log('Admin user created successfully.');
    }
  } catch (err) {
    console.error('Error:', err);
  } finally {
    process.exit();
  }
}

resetAdminPassword();
