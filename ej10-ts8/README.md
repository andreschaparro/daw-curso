# Ejemplo 10: Interfaces, metodo para hacer un GET, AJAX

## Introduccion

Nuestro servidor estatico, se llama asi, porque solo es capaz de devolver archivos, como por ejemplo *devices.txt*. Lo hace, ante un *request* hecho en alguno de sus recursos con el metodo *GET*. El *response* del mismo nos traera el archivo solicitado y un codigo de status.

Aunque no nos dieramos cuenta, siempre haciamos un *request* cuando ingresabamos a la *url* que nos aparecia en la *terminal cmd* al arrancar el servidor estatico. Al hacerlo, haciamos un *request* con el metodo *GET* del archivo *index.html*. Luego, ese archivo generaba los subsecuentes *request* para pedir los *.css* y *.js* que indica en su codigo.

Pero esta vez, deberemos forzar el pedido de *devices.txt* porque no esta indicada su carga automatica en el *index.html* desde el metodo *main*.

## Metodo para hacer el GET parte 1

El primer parametro sera la *url* donde se hara el *request* con el metodo *GET* para pedirle al servidor estatico el archivo *devices.txt*.

Internamente, el metodo lo resolvera con *AJAX* el problema de la respuesta asincronica.

Luego, se le pasaran los datos de la *response*, en si el codigo de *status* y el archivo de texto, al metodo *handleGETResponse* de la interfaz que lo implementamos dentro de nuestra clase *Main*.

## Interfaz

La interfaz es necesaria, para que otras clases puedan recibir el *response* del *request* e implementar el metodo *handleGETResponse* como quieran.

La implementacion del metodo, debe hacerse respetando los argumentos y lo que devuelve segun lo definido en la interfaz.

## Metodo para hacer el GET parte 2

Como segundo parametro debe pasarsele un objeto GETResponseListener.

Las interfaces permiten definir nuevos tipos de objetos y hacer que uno sea de varios tipos.

Entonces, si *Main* implementa *GETResponseListener*, bastara con que el segundo argumento sea *this* porque *Main* tambien sera del tipo *GETResponseListener*.

## Conclusiones

Para el usuario del *framework* bastara con llamar al metodo que hace el *GET* e implementar la interfaz y programar su
metodo *handleGETResponse*.

Los problemas de asincronismo y *AJAX*, asi como pasaba con el *DOM*, quedan encapsulados. Lo que simplifica el desarrollo de nuestro *main.ts*

Este ejemplo, es muy importarte porque:

- Comenzamos a utilizar el protocolo *HTTP*.
- Utilizamos el metodo *GET* conscientemente.
- Vimos como el servidor responde de forma asincronica.
- Vimos la sintaxis de *AJAX*.
- Utilizamos interfaces que es un conceptdo bastante abstracto.

En si, es el ejemplo mas basico de interaccion con un servidor.

## Material complementario:

https://www.w3schools.com/js/js_ajax_intro.asp
