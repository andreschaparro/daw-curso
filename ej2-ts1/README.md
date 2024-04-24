# Ejemplo 2: Introduccion a Typescript, el proceso de transpilacion, y creacion de un servidor estatico

## Introduccion

Continuacion del ejercicio de maquetacion.

Instalar:

- **https://nodejs.org/en** ultima version _LTS_.

Luego, en una _terminal cmd_ de _VCS_ ejecutar:

1. _npm install -g typescript_.
2. _npm install http-server -g_.

## Preparacion de un proyecto

1. Crear una carpeta llamada _src_ dentro del directorio de la _web app_.
2. Dentro de _src_ crear un archivo llamado _main.ts_.
3. Dentro de _src_ crear un archivo llamado _tsconfig.json_.
4. Dentro de _tsconfig.json_ completar:

   {

   "compilerOptions": {

   "target": "ES5",

   "sourceMap": false,

   "outDir": "../js/"

   }

   }

5. En _index.html_ incluir _js/main.js_ luego de _js/materialize.min.js_.

**NOTA: utilizamos ES5 porque nos asegura la mayor compatibilidad con los browsers.**

# Programacion en TS

1. Dentro de _main.ts_ agregar _console.log("Hola Mundo")_.

# Proceso de transpilacion de TS a JS

1. Abrir una _terminal powersheel_ en _VCS_ en el directorio del proyecto.
2. Ejectuar _cd src_.
3. Ejectuar _tsc -watch_.

# Prueba de la web app con un servidor estatico

1. Ejecutar _cd .._ para volver al directorio del proyecto.
2. Ejecutar _http-server . -c-1_.

Abrir el link que aparece en la _terminal powersheel_ de _VCS_. En la consola del inspector de elementos deberia aparecer el mensaje de usuario _"Hola Mundo"_.
