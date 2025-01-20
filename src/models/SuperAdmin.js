// src/models/SuperAdmin.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const superAdminSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

superAdminSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10); 
  }
  next();
});

// Static method to compare passwords
superAdminSchema.statics.comparePassword = async function (providedPassword, storedHash) {
  console.log('DEBUGGING - Provided Password:', providedPassword);
  console.log('DEBUGGING - Stored Hash:', storedHash);
  try {
    const match = await bcrypt.compare(providedPassword, storedHash);
    console.log('DEBUGGING - Password Match:', match);
    return match;
  } catch (error) {
    console.error('DEBUGGING - Error during password comparison:', error);
    return false;
  }
};

const SuperAdmin = mongoose.model('SuperAdmin', superAdminSchema);
module.exports = SuperAdmin;
