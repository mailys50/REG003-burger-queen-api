const bcrypt = require('bcrypt');
const User = require('../model/user-model');

module.exports = {
  getUsers: (req, resp, next) => {
  // Pagina a consultar
  // Limite de elementos por pagina
  // const url = `${req.protocol}://${req.get("host")}${req.path}`;
    const pageCurrent = parseInt(page, 10) || 1;
    const limitNumber = parseInt(limit, 10) || 10;
    const url = `${req.protocol}://${req.get('host')}${req.path}`;
  },

  postUser: (req, resp, next) => {
    const { email, password, roles } = req.body;
    const nuevoUsuario = new User({ email, password });
    User.save(err => {
      if(err){
      } else {
      }
    });
  },

  putUser: (req, res, next) => {
  },

  deleteUser: (req, res, next) => {
  },
};
// @query {String} [limit=10] Cantitad de elementos por página
// @query {String} [page=1] Página del listado a consultar