# Ejemplo 3: Clases y metodos en typescript, y propiedades y metodos utilizando DOM

## Introduccion

Crear una clase llamada _Main_ con un metodo llamado _main_.

Crear una instancia de la clase _Main_ y llamar al metodo _main_.

El metodo _main_ debe hacer el _console.log("Hola Mundo")_.

## Introduccion DOM

DOM o modelo de objetos del navegador, nos sirve para acceder a cualquiera de los componentes de la pagina.

Todos los objetos comienzan con un objeto _window_. Ofrece metodos y propiedades para controlar la ventana del navegador.

### Propiedades DOM

Por ejemplo, para acceder a la propiedad _document_ hacemos _window.document_ que contiene la pagina web que se esta mostrando.

Por otro lado, _document_ tiene propiedades que son _arrays_. Como por ejemplo, un _array_ con todas las imagenes de la pagina.

Si en el _html_ le asinamos un _name_ a un componente de la pagina, podemos acceder al mismo de 2 formas:

- _document.mi_form_.
- _document.form[x]_. Donde x es un numero entero.

### Metodos DOM

- _onload_: se desata cuando la pagina termino de cargarse.
