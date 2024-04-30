# Ejemplo 2: Como programar en Typescript

## Introduccion

Instalar la ultima version _LTS_ de _NodeJS_. La cual se puede bajar de la siguiente pagina:

https://nodejs.org/en

Luego, en una terminal del tipo _Command Prompt_ de _VCS_ ejecutar:

1. _npm install -g typescript_.
2. _npm install http-server -g_.

## Preparacion de un proyecto

1. Crear una carpeta llamada _src_ dentro del directorio de la _web app_.
2. Dentro de _src_ crear un archivo llamado _main.ts_.
3. Dentro de _src_ crear un archivo llamado _tsconfig.json_.
4. El contenido del archivo _tsconfig.json_ debera ser:

```
{
  "compilerOptions": {
    "target": "ES5",
    "sourceMap": false,
    "outDir": "../js/"
  }
}

```

5. En _index.html_ agregar la carga del script _main.js_ luego de cargar el _materialize.min.js_.

```
<!--JavaScript at end of body for optimized loading-->
<script src="js/materialize.min.js"></script>
<!--Carga del script resultante del proceso de transpilacion de nuestro main.ts-->
<script src="js/main.js"></script>
```

Dentro de _main.ts_ programaremos en _typescript_.

**NOTA: ES5 nos asegura la mayor compatibilidad con todos los navegadores.**

## Proceso de transpilacion para generar el script main.js a partir de main.ts

1. Abrir una terminal del tipo _Command Prompt_ en _VCS_ en el directorio de la _web app_.
2. Ejectuar _cd src_.
3. Ejectuar _tsc -watch_.
4. Si finaliza sin errores ejecutar con el teclado _CTRL+C_.

## Montar un servidor estatico para probar la web app

Un servidor estatico esta pensado para que:

1. El navegador haga un _request_ con el metodo _GET_ del protocolo _HTTP_ sobre uno de sus recursos, que se identifican por una _url_.
2. Que el navegador procese el _request_ y devuelva un _response_ que va a contener un archivo.
3. El navegador reciba el _response_ y procese en archivo en el navegador.

Dentro del _response_ tambien viene un codigo de _status_ que nos dice como se proceso el _request_. Donde, las codigos mas comunes son:

- _200 OK_.
- _400 Bad Request_.
- _401 Unauthorized_.
- _404 Not Found_.
- _408 Request Timeout_.
- _500 Internal Server Error_.

Como se deduce, si no se recibio _200 OK_, el navegador no contara con el archivo para ejecutar el paso 3.

Asi, para montar un servidor estatico que aloje nuestra _web app_:

1. Abrir una terminal del tipo _Command Prompt_ en _VCS_ en el directorio de la _web app_.
2. Ejecutar _http-server . -c-1_.
3. En la terminal van a aparecer las _url_ a traves de las cuales podemos acceder a la _web app_.
4. Hacemos _CTRL+click_ en alguna de ellas y automaticamente nos abrira la pagina en el navegador.

## Inspector de la pagina web

1. Clic derecho sobre el contenido de la pagina.
2. Clic en _Inspeccionar_.
3. Ir a la seccion de _Red_.
4. Refrescar la pagina.

Ahora vamos a poder ver el proceso de armado de la _web app_:

1. Hay un _request_ para pedir el archivo _index.html_ en el recurso _/_ del servidor que se hace automaticamente al introducir la _url_ en el navegador.
2. Llega el _response_ con el archivo _index.html_.
3. Cuando se lo procesa, se generan mas _request_ al servidor en el orden en que aparecen en el codigo _html_:

   - Uno para el archivo _materialize.min.css_ en el recurso _/css/materialize.min.css_.
   - Uno para el archivo _lightbulb.png_ en el recurso _/images/lightbulb.png_.
   - Uno para el archivo _window.png_ en el recurso _/images/window.png_.
   - Uno para el archivo _materialize.min.js_ en el recurso _/js/materialize.min.js_.
   - Uno para el archivo _main.js_ en el recurso _/js/main.js_.

4. Llegan las _response_ de forma asincronica, es decir no en el orden en que se pidieron.
5. Se termina de armar la _web app_.

Asi, es como interactuan un servidor y un cliente, que en este caso es un navegador, cuando se tiene una _web app estatica_.

![web app estatica](/ej2-typescript/web_app_estatica.png)

En la terminal donde se ejecuto el servidor estatico se podra ver como llegan los _request_ desde el navegador.

![servidor estatico](/ej2-typescript/servidor_estatico.png)

## Material complementario

https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server

https://developer.mozilla.org/en-US/docs/Web/HTTP

https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET

https://www.typescriptlang.org/docs/handbook/2/basic-types.html#tsc-the-typescript-compiler

https://www.npmjs.com/package/http-server
