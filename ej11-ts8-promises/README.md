# Ejemplo 11: Promesas

## Introduccion

La idea es hacer lo mismo que en el ejemplo anterior, pero con otro mecanismo distinto a interfaces.

Vamos a utilizar promesas.

Una *promise* o promesa es un objeto que representa la eventual finalización o falla de una operación asincrónica y su valor resultante.

Asi, puede estar en uno de los siguientes estados;

- *pending*  o pendiente. Es el estado inicial, ni cumplido ni rechazado.
- *fulfilled* o cumplida. Significa que la operación se completó con éxito.
- *rejected* o rechazada. Significa que la operación falló.

Con su metodo *.then* podemos ejecutar una funcion anonima con *Fat Arrow* que haga algo con el valor resultante para el caso de exito.

Con su metodo *.catch* podemos ejecutar una funcion anonima con *Fat Arrow* que maneje los errores.

Vamos a agregar este segundo mecanismo a nuestro *framework* y despues podemos usar el que mas nos guste.

Hay que resaltar que la sintaxis de *promises* es mas limpia que la de interfaces a la hora de leer el codigo.

## Material complementario:

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise