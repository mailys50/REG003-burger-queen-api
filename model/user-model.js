const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema
const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      select: false,
      require: true,
    },
    signpDate:{
      type: Date,
      default: Date.now()
    },
    lastLogin:{
     Date
     
    },
    roles: { admin: { type: Boolean, default: false } },
  },
);

UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

module.exports = mongoose.model('User', UserSchema);
