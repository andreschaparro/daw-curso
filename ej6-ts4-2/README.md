# Ejemplo 6: Repaso de modificacion del HTML desde typescript, metodo maps para iterar Arrays, y otra forma de concatenar strings

## Introduccion

Vamos a mover la clase *User* del ejemplo 4 a un archivo externo llamado *User.ts*.

## Iteracion de un Array utilizando el bucle for

Hacer un metodo de la clase *Main* que se llame *mostrarUsers* y que reciba un *Array* de de objetos *User*.

En el codigo, hay una forma de iterar el *Array* ya vista utilizando el bucle *for* para mostrar la informacion de los objetos *User*.

Luego, utilizando nuestro *framework* buscaremos el componente *ul* en *index.html* que tiene el *id "listaUsuarios"* y se le inyectara un *li* por cada *User*.

Agregar un *ul* con el _id "listaUsuarios"_ en un contenedor aparte.

Agregar incluir _js/User.js_ en *index.html*.

## Iteracion de un Array con el metodo map

El metodo *map* de un *Array* nos permite definir una funcion que se ejecutara para cada elemento del mismo, y que sera declarada utilizando el operador *Fat Arrow*.

## Alternativa al operador + para contatenar strings

La forma con *${}*: 

    `<li>${item.name} ${item.mail}</li>`

Es equivalente a la siguiente con el operador *+*:

    "<li>" + users[i].name + " " + users[i].email + "</li>"

**NOTA: la forma con ${} requiere el uso de `` y no de "".**