// require es una palabra reservada, que se utiliza para importar todo lo que haya sido exportado de un modulo
var express = require('express');
// Creamos un objeto de express para tener sus propiedades y metodos disponibles.
var app = express();

// resto del programa...

// El servidor va a correr en localhost:3000
app.listen(3000, function(req, res) {
    console.log("Servidor funcionando en el puerto 3000");
});