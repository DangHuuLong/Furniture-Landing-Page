const mongoose = require('mongoose');

const ResetSchema = new mongoose.Schema(
  {
    code: String,
    resetToken: String,
    expiresAt: Date,
    verified: { type: Boolean, default: false },
    attempts: { type: Number, default: 0 },
    sentAt: Date,
  },
  { _id: false } 
);

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: 'customer' },
    reset: ResetSchema,
  },
  {
    timestamps: true, 
  }
);

const User = mongoose.model('User', UserSchema);
module.exports = User;
