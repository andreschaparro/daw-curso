# Ejemplo 8: Interfaces y la palabra reservada implements

## Introduccion

Las interfaces permiten que un objeto tenga mas de un tipo y obligan a las clases a tener ciertos metodos y atributos.

Para utilizarlas, a continuacion del nombre de la clase colocamos *implements NombreDeLaInterfaz*.

Por ejemplo: *implements EventListenerObject*.

Al agregarlo a la clase, el *VCS* nos informara errores, indicando que metodos y atributos debemos definir dentro de la clase.

En este caso, nos dira que debemos implementar el metodo *handleEvent(evt: Event): void*. Que hara de funcion de *callback* y en *addEventListener* bastara con indicar *this* como segundo parametro.

## Consulta de que es this

Si analizamos *this*, vemos que no hay cambios respecto del ejemplo 7.

![que_es_this](/ej8-ts6/que_es_this.png)
