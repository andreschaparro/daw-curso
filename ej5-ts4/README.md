# Ejemplo 5: Creacion de un framework en otro archivo typescript y modificacion del HTML desde typescript

## Creacion del framework

Crear un archivo llamado _MyFramework.ts_ dentro de _src_. Dentro, hacer una clase llamada _MyFramework_ que tenga un metodo llamado _getElementById_.

El metodo _getElementById_ tendra un argumento llamado _id_ del tipo _String_ y retornara un objeto _HTMLElement_.

En su implementacion, utilizaremos el _DOM_ para llamar al metodo _getElementById_ de _document_, que mediante el argumento _id_, nos devolvera el componente de la pagina cuyo _id_ tenga el mismo valor y que sera retornado.

Por el momento, la idea del _framework_ es olvidarnos del _DOM_.

Porque como se deduce, nuestro _getElementById_ hace lo mismo que _document.getElementById_. Y es asi, que podriamos utilizar directamente la segunda opcion en _main.ts_ y funcionaria de igual forma.

Pero mas adelante, cuando se vuelva mas complejo el _framework_, se entendera con mas claridad como el mismo nos ayuda a agilizar el desarrollo de nuestra _web app_. Esto sera mediante abstraccion y reutilizacion del codigo.

## Utilizacion del framwork en main.ts

Dentro de la clase _Main_ definir un atributo publico del tipo _MyFramework_ llamado _myf_.

Pero, para poder utilizar _myf_, es necesario llamar a su constructor implicito con _new_. Sino, no existira el objeto y por lo tanto el metodo del mismo. Esto debe hacerse al invocar el metodo _main_ de nuestro objeto _Main_.

Luego, con _this.myf.getElementById_ podremos utilizar nuestro _framwork_.

## Modificacion del HTML desde typestript

Una vez que tenemos el objeto _HTMLElement_, y con alguno de sus metodos, vamos a poder modificar su codigo _html_. Como por ejemplo, con el metodo _textContent_.

**NOTA: cuando hagamos el proceso de transpilacion se resolveran las dependencias entre archivos de forma automatica.**

## Modificaciones en index.html

Agregar un boton con el _id "boton"_ en un contenedor aparte.

Agregar incluir _js/MyFramework.js_ luego de _js/main.js_.
