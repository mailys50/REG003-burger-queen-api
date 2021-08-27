const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config');
const User = require('../model/user-model');

const { secret } = config;

// DONE: autenticar a la usuarix

module.exports.authUsers = async (req, resp, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(400);
  }

  const authUser = await User.findOne({ email });

  if (!authUser) {
    return next(404);
  }

  const authPassword = bcrypt.compareSync(password, authUser.password);
  if (!authPassword) {
    return resp.status(400).json({
      msg: 'Usuario / Password no son correctos - password',
    });
  }

  jwt.sign(
    {
      uid: authUser._id,
      email: authUser.email,
      roles: authUser.roles,
    },
    secret,
    {
      expiresIn: '4h',
    },
    (err, token) => {
      if (err) console.error(err);

      return resp.status(200).json({ token });
    },
  );
};
