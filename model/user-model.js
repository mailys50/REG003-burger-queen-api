const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
    roles: { admin: { type: Boolean, default: false } },
  },
);

UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

module.exports = mongoose.model('User', UserSchema);
// userSchema.methods.encryptPassword = async (password) => {
//   try {
//     const salt = await bcrypt.genSalt(10);
//     return await bcrypt.hash(password, salt);
//   } catch (err) {
//     console.error(err);
//   }
// };

// userSchema.methods.comparePassword = async function comparePassword(password) {
//   try {
//     return await bcrypt.compare(password, this.password);
//   } catch (err) {
//     console.error(err);
//   }
// };

// userSchema.plugin(uniqueValidator, {
//   message: '{PATH} debe de ser único',
// });

// userSchema.plugin(mongoosePaginate);
