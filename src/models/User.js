const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true, 
      lowercase: true, 
    },
    password: {
      type: String,
      required: true,
      minlength: 8,  // Minimum password length
    },
    phone: {
      type: String,
      required: true,
      validate: {
        validator: (phone) => /^[0-9]{10}$/.test(phone),  // Phone number must be valid
        message: 'Please enter a valid phone number',
      },
    },
    isActive: { type: Boolean, default: true },  // Active status (default is true)
    role: {
      type: String,
      enum: ['user', 'admin'],  
      default: 'user',
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

module.exports = mongoose.model('User', userSchema);
