# Ejemplo 4: Clases en typescript

## Atributos privados

Definir clase *User* con los atributos privados:

- *_id numerico*.
- *_name texto*.
- *_mail texto*.
- *isLogged booleano*.

**NOTA: a los atributos privados se les antepone _ al nombre para saber rapidamente si son privados o no al declararlos.**

Los atributos privados no pueden ser accedidos directamente mediante el operador *.*.

## Constructor

Definir el constructor de la clase *User* explicitamente. Este metodo se ejecutara al hacer el *new*.

Debe recibir:

- *id numerico*.
- *name texto*.
- *mail texto*.

Luego, deben inicializarse los atributos privados de la instancia de clase con los valores pasados.

La forma de referirse a la instancia de *User*, dentro de la propia clase, es con la palabra reservada *this*.

El atributos *isLogged* debe inicializarse siempre en *false*.

## Metodos setter

Se utilizan para modificar el valor de los atributos privados de una clase.

La sintaxis del metodo es: *set MiembroPrivado(MiembroPrivado:tipo)*.

Como vamos a modificar los valores de una instancia, recordar utilizar *this*.

Una vez hecho esto, podremos utilizar el operador *.* para modificar al atributos privado pero a traves de su *setter*.

## Metodos getter

Se utilizar para leer el valor de los atributos privados de una clase.

La sintaxis del metodo es: *get MiembroPrivado():tipo*.

Como vamos a leer los valores de una instancia, recordar utilizar *this*.

Una vez hecho esto, podremos utilizar el operador *.* para acceder al atributos privado pero a traves de su *getter*.

## Otros metodos

Crear un metodo llamado *printInfo* que imprima todos los atributos salvo el *id*.

Los metodos por defecto son publicos, es decir que se pueden acceder con el operador *.*.

Pero podrian declararse como privados, del mismo modo que los atributos. Para, ser mas explicitos podemos agregar la palabra *public* delante de los metodos publicos.

Utilizar los *getter* y *setter* para acceder a los miembros privados.

## Modificaciones para probar la clase User

En la clase *Main*, en el método *main* definir un *array* de 3 objetos *User*. Luego iterar el array 
y ejecutar el método *printInfo()* de cada objeto.