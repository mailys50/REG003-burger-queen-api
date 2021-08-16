const User = require('../model/user-model');
const bcrypt = require('bcrypt');
module.exports = {
  getUsers: (req, resp, next) => {
  },
};

/* @query {String} [limit=10] Cantitad de elementos por página
* @query {String} [page=1] Página del listado a consultar