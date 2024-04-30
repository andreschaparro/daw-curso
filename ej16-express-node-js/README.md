# Ejemplo 16: Como programar con Express en NodeJS

## Crear package.json

1. Crear un directorio para el proyecto.
2. Abrir una terminal del tipo _Command Prompt_ en _VCS_ en el directorio del proyecto.
3. Ejecutar _npm init_.
4. Como _package name_ completar _ejemplos_ y presionar _ENTER_.
5. Como _description_ completar _ejemplos_ y presionar _ENTER_.
6. Para el resto de la informacion que pida presionar _ENTER_.
7. Cuando pregunte _Is this OK?_ completamos _y_ y presionamos _ENTER_.

Lo hecho, crea un archivo llamado _package.json_ dentro del directorio del proyecto:

```
{
  "name": "ejemplos",
  "version": "1.0.0",
  "description": "ejemplos",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

## Instalar dependencias

1. Abrir una terminal del tipo _Command Prompt_ en _VCS_ en el directorio del proyecto.
2. Ejecutar _npm install express_.
3. Ejecutar _npm install sqlite3_.

Lo hecho, crea:

- Un archivo llamado _package-lock.json_ dentro del directorio del proyecto.
- Una carpeta llamada _node_modulos_ dentro del directorio del proyecto.
- Modifica el contenido del archivo _package.json_.

```
{
  "name": "ejemplos",
  "version": "1.0.0",
  "description": "ejemplos",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.19.2",
    "sqlite3": "^5.1.7"
  }
}
```

## Software para gestionar la base de datos graficamente

Instalar el _sqlitestudio_ portable de la siguiente pagina:

https://github.com/pawelsalawa/sqlitestudio/releases

## Creacion del archivo principal

1. Crear un archivo llamado _index.js_ en el directorio del proyecto.
2. El contenido minimo del archivo _index.js_ debera ser:

```
// require es una palabra reservada, que se utiliza para importar todo lo que haya sido exportado de un modulo
var express = require('express');
// Creamos un objeto de express para tener sus propiedades y metodos disponibles.
var app = express();

// resto del programa...

// El servidor va a correr en localhost:3000
app.listen(3000, function(req, res) {
    console.log("Servidor funcionando en el puerto 3000");
});
```

## Arranque del servidor

1. Abrir una terminal del tipo _Command Prompt_ en _VCS_ en el directorio del proyecto.
2. Ejecutar _node index.js_.

## Material complementario

Documentos que estan dentro de _/docs/nodejs_.

https://sqlitestudio.pl/

https://expressjs.com/
