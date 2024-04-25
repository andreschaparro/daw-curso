# Ejemplo 7: Listeners, callbacks, y debug de que es this

## Introduccion

Eliminar los archivos *User.ts* y *User.js*.

Eliminar el *ul* con el _id "listaUsuarios"_ en *index.html*.

Eliminar el incluir _js/User.js_ en *index.html*.

Restaurar el contenido de *main.ts* a como estaba en el ejemplo 5.

## Agregar un listener para saber si hicieron clic en el boton.

Usar el metodo *addEventListener* del boton.

El primer parametro a pasarle es "click".

El segundo parametro a pasarle es un metodo que se ejecutara cuando se registre el evento de clic, es decir una *callback*. Este metodo tendra la siguiente declaracion:

    metodo(ev:Event): void {}

## Consulta de que es this

En la imagen se ve que primero *this* hace referencia al metodo *main* y luego *this* hace referencia al boton.

![que_es_this](/ej7-ts5/que_es_this.png)