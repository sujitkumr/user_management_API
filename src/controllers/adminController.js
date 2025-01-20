const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const SuperAdmin = require('../models/SuperAdmin');  // Importing the SuperAdmin model

exports.adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
   
    const admin = await SuperAdmin.findOne({ email, isSuperAdmin: true });
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Verify password using bcrypt
    const isMatch =  bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: admin._id, isSuperAdmin: true }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.status(200).json({
      message: 'Login successful',
      token,
    });
  } catch (error) {
    console.error('Error during admin login:', error); 
    res.status(500).json({ message: 'Internal server error' }); 
  }
};
//  * Get All Active Users
//  */
exports.getAllUsers = async (req, res) => {
  console.log('Reached getAllUsers handler');
  try {
    const users = await User.find({ isActive: true });
    res.status(200).json({
      message: 'Users retrieved successfully',
      users,
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: error.message });
  }
};

/**
 * Deactivate User
 */
exports.deactivateUser = async (req, res) => {
  try {
    const { userId } = req.params;

 
    const user = await User.findByIdAndUpdate(
      userId,
      { isActive: false },
      { new: true } 
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      message: 'User deactivated successfully',
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
