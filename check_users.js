
const { sequelize } = require('./backend/config/db');
const User = require('./backend/models/User');

async function checkAndCreateAdmin() {
  try {
    const users = await User.findAll();
    console.log('Existing users in DB:');
    users.forEach(u => {
      console.log(`- Username: ${u.username}, Email: ${u.email}, Role: ${u.role}`);
    });

    if (users.length === 0) {
      console.log('No users found. Creating default admin...');
      const admin = await User.create({
        username: 'admin',
        email: 'admin@mcms.com',
        password: 'adminpassword123', // This will be hashed by the model beforeCreate hook
        fullName: 'System Administrator',
        role: 'admin'
      });
      console.log('Default admin created:');
      console.log('Email: admin@mcms.com');
      console.log('Password: adminpassword123');
    }
  } catch (err) {
    console.error('Error:', err);
  } finally {
    process.exit();
  }
}

checkAndCreateAdmin();
