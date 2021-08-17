const User = require('../model/user-model');
const bcrypt = require('bcrypt');
module.exports = {
  getUsers: (req, resp, next) => {
  // Pagina a consultar
  // Limite de elementos por pagina
 
    // const url = `${req.protocol}://${req.get("host")}${req.path}`;
    const pageCurrent = parseInt(page, 10) || 1;
    const limitNumber = parseInt(limit, 10) || 10;
    const url = `${req.protocol}://${req.get('host')}${req.path}`;
  },

  postUser: (req, res,next) => {
    const { email, password, roles } = req.body
  },

  putUser: (req, res,next) => {
  },

  deleteUser: (req,res,next) => {
  },
};
// @query {String} [limit=10] Cantitad de elementos por página
// @query {String} [page=1] Página del listado a consultar