const Product = require('../model/Product-model');
const bcrypt = require('bcrypt');
module.exports = {

  getProducts: (req, resp, next) => {
      Product.find({}, (err, products) =>{
          if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
          if(!products) return resp.status(404).send({message: 'productos no existen'})
      
          resp.status(200).send(products)
        })

  },

  getProductId: (req, resp, next) => {
 let productId = req.params.productId

 Product.findById(productId, (err, product) =>{
     if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
     if(!product) return res.status(404).send({message:`El producto no existe`})

     resp.status(200).send({product})
 })
 
},

  postProduct: (req, res,next) => {
console.log("POST/products");
console.log((req.body));

    let product = new Product()
    product.name = req.body.name
    product.price = req.body.price
    product.image = req.body.image
    product.type = req.body.type
    product.dateEntry = req.body.dateEntry
    
    product.save((err, productStored)=> {
      if(err) res.status(500).send({message: `Error al salver en la base de datos: ${err}`})
   
      res.status(200).send({product:productStored})
    })
    
  },

  putProduct: (req, res,next) => {
  },

  deleteProduct: (req,res,next) => {
    let productId = req.params.productId

    Product.findById(productId, (err, product) => {
      if(err)  res.status(500).send({message: `Error al borrar producto: ${err}`})
    
      product.remove(err => {
        if(err) res.status(500).send({message:`Error al borrar producto: ${err}`});
        res.status(200).send({message: 'El producto ha sido eliminado'})
       
      })
     
 
      
  })
  

  },
};
// @query {String} [limit=10] Cantitad de elementos por página
// @query {String} [page=1] Página del listado a consultar