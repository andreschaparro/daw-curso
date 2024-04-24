# Ejemplo 3: Clases en typescript

## Introduccion

Crear una clase llamada *Main* con un metodo llamado *main*.

Crear una instancia de la clase *Main* y llamar al metodo *main*.

El metodo *main* debe hacer el _console.log("Hola Mundo")_.

## DOM

O modelo de objetos del navegador, nos sirve para acceder a cualquiera de los componentes de la pagina.

Todos los objetos comienzan con un objeto *window*. Ofrece metodos y propiedades para controlar la ventana del navegador.

### Propiedades

Por ejemplo, para acceder a la propiedad *document* hacemos *window.document* que contiene la pagina web que se esta mostrando.

Por otro lado, *document* tiene propiedades que son *arrays*. Como por ejemplo, un *array* con todas las imagenes de la pagina.

Si en el *html* le asinamos un *name* a un componente de la pagina, podemos acceder al mismo de 2 formas:

- *document.mi_form*.
- *document.form[x]*. Donde x es un numero entero.

### Metodos

- *onload*: se desata cuando la pagina termino de cargarse.