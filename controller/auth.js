const mongoose = require('mongoose');
const User = require('../model/user-model');
const service = require('../services');

module.exports = {
  signUp: (req, res, next) => {
    const user = new User ({
      email: req.body.email,
    });
    user.save((err) => {
      if (err) res.status(500).send({ message: `Error al crear el usuario: ${err}` });

      return res.status(200).send({ token: service.createToken(user) });
    });
  },
  signIn: (req, res, next) => {
  },
};
