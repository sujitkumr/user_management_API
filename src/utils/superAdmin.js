const bcrypt = require('bcrypt');
const SuperAdmin = require('../models/SuperAdmin');

const seedSuperAdmin = async () => {
  try {
    // Ensure environment variables are available
    if (!process.env.SUPER_ADMIN_EMAIL || !process.env.SUPER_ADMIN_PASSWORD) {
      throw new Error('Environment variables SUPER_ADMIN_EMAIL or SUPER_ADMIN_PASSWORD are missing');
    }

    // Check if a Super Admin already exists
    const existingAdmin = await SuperAdmin.findOne({ isSuperAdmin: true });

    if (!existingAdmin) {
      // Hash the password for the Super Admin
      const hashedPassword = await bcrypt.hash(process.env.SUPER_ADMIN_PASSWORD, 10);

      // Create the Super Admin account
      await SuperAdmin.create({
        name: 'Super Admin',
        email: process.env.SUPER_ADMIN_EMAIL,
        password: hashedPassword,
        isSuperAdmin: true,
      });

      console.log(' Super Admin account created successfully with email:', process.env.SUPER_ADMIN_EMAIL);
    } else {
      console.log(' Super Admin account already exists');
    }
  } catch (error) {
    console.error('ERROR: Seeding Super Admin failed:', error.message);
  }
};

module.exports = seedSuperAdmin;
