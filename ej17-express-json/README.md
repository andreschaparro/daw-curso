# Ejemplo 17: Manejo de archivos jSON con Express

## Creacion del archivo jSON

1. En el directorio del proyecto, crear un archivo llamado _datos.json_.
2. El contenido de _datos.json_ debe ser:

```
[
    { "id": 1, "name": "Lampara 1", "description": "Luz Living", "state": 1, "type": 0 },
    { "id": 2, "name": "Lampara 2", "description": "Luz Cocina", "state": 0, "type": 0 },
    { "id": 3, "name": "Velador", "description": "Velador Living", "state": 1, "type": 0 },
    { "id": 4, "name": "Persiana 1", "description": "Persiana Living", "state": 1, "type": 1 },
    { "id": 5, "name": "Persiana 2", "description": "Persiana Cocina", "state": 0, "type": 1 },
    { "id": 6, "name": "Persiana 3", "description": "Persiana Balcón", "state": 1, "type": 1 },
    { "id": 7, "name": "Lampara 3", "description": "Luz Balcon", "state": 1, "type": 0 }
]
```

## Lectura del archivo jSON con Express

```
var express = require('express');
var app = express();
// Se utiliza para parsear un request y que el objeto jSON este disponible en req.body
app.use(express.json());
// requite tambien se puede utilizar para cargar archivos json ademas de importar modulos
var datos = require('./datos.json');
app.listen(3000, function(req, res) {
    console.log("Servidor funcionando en el puerto 3000");
});
```
