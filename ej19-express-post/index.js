var express = require('express');
var app = express();
// Se utiliza para parsear un request y que el objeto jSON este disponible en req.body
app.use(express.json());
var datos = require('./datos.json');
app.get('/devices', function(req,res,next){
    res.json(datos);
});
app.get('/devices/:id', function(req,res,next){
    let datosFiltrados = datos.filter(item => item.id == req.params.id);
    res.json(datosFiltrados);
});
// La funcion anonima va a resolver los request con el metodo POST a la url /devices
app.post('/devices', function(req, res, next) {
    // En req.body tengo los datos de id y state del switch que se toco y provoco el POST
    let datoFiltrado = datos.filter(item => item.id == req.body.id);
    // Cambio el estado del switch en memoria y devuelvo el jSON
    if (datoFiltrado.length > 0) {
        datoFiltrado[0].state = req.body.state;
    }
    res.json(datoFiltrado);
});
app.listen(3000, function(req, res) {
    console.log("Servidor funcionando en el puerto 3000");
});
