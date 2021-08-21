// const mongoose = require('mongoose');
const userModel = require('../model/user-model');
const jwt = require('jsonwebtoken');
const config = require('../config');




module.exports = {
    postAuth: (req, resp) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return resp.status(400);
    }
    // TODO: autenticar a la usuarix

    userModel.findOne({ email: email, password: password }, (err, user) => {
      if (err) return resp.status(500).send({ message: `Error al realizar la petición: ${err}` });
      if (!user) return resp.status(404).send({ message: 'user no existen' });

      const token = jwt.sign({ uid: user._id }, config.secret);
      resp.status(200).send({ token })
    });
  
},
   
};
