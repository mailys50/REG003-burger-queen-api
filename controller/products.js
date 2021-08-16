//Metodo http y codigo de respuestas
// 'use strict'
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express()
// const port = process.env.PORT || 8080

// //añadimos los middleware
// app.use(bodyParser.urlencoded({ extended: false}));
// app.use(bodyParser.json());


//Hacer api rest de una tienda ficticia online
//crearndo peticion tipo get para que muestre todos los productos
app.get('/api/product', (req, res) =>{
res.send(200,{products: []})
})

//crearndo peticion tipo post para subir  los productos
app.post('/api/product', (req, res) => {
console.log(req.body)
res.status(200).send({message: 'el producto se a recibido'})
})

//app.delete('/api/product', (req, res) => {
// });

app.listen(port, () =>{
    console.log(`API REST respondio correctamente en http://localhost:${port}`);
})