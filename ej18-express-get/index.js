var express = require('express');
var app = express();
app.use(express.json());
var datos = require('./datos.json');
// La funcion anonima va a resolver los request con el metodo GET a la url /devices
app.get('/devices', function(req,res,next){
    // la response se devuelve con el metodo json de res, cuando deseamos retornar un objeto jSON
    res.json(datos);
});
// La funcion anonima va a resolver los request con el metodo GET a la url /devices/id donde id se utilizara como filtro
app.get('/devices/:id', function(req,res,next){
    // Aqui nos quedamos con el elemento del array que esta dentro de datos.json cuyo id sea igual al id del request
    let datosFiltrados = datos.filter(item => item.id == req.params.id);
    res.json(datosFiltrados);
});
app.listen(3000, function(req, res) {
    console.log("Servidor funcionando en el puerto 3000");
});
