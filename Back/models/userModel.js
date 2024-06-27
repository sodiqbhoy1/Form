// backend/models/User.js
const mongoose = require('mongoose'); // Importing mongoose
const bcrypt = require('bcryptjs'); // Importing bcryptjs to hash passwords

// Defining User schema
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Pre-save hook to hash the password before saving
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Creating User model from schema
const User = mongoose.model('studentDetails', UserSchema);

module.exports = User; // Exporting the User model
