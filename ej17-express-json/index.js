var express = require('express');
var app = express();
// Se utiliza para parsear un request y que el objeto jSON este disponible en req.body
app.use(express.json());
// requite tambien se puede utilizar para cargar archivos json ademas de importar modulos
var datos = require('./datos.json');
app.listen(3000, function(req, res) {
    console.log("Servidor funcionando en el puerto 3000");
});