var express = require('express');
var app = express();
app.use(express.json());
// Agrega la funcionalidad de servidor estatico
app.use(express.static('.'));
var datos = require('./datos.json');
app.get('/devices', function(req,res,next){
    res.json(datos);
});
app.get('/devices/:id', function(req,res,next){
    let datosFiltrados = datos.filter(item => item.id == req.params.id);
    res.json(datosFiltrados);
});
app.post('/devices', function(req, res, next) {
    let datoFiltrado = datos.filter(item => item.id == req.body.id);
    if (datoFiltrado.length > 0) {
        datoFiltrado[0].state = req.body.state;
    }
    res.json(datoFiltrado);
});
app.listen(3000, function(req, res) {
    console.log("Servidor funcionando en el puerto 3000");
});
