# Ejemplo 6: Metodos Map y Join de un Array, y template-literal-types

## Introduccion

El siguiente codigo, hecho con el bucle _for_, tiene como finalidad crear un _string_ a partir de los elementos de un _Array_:

```
let items:string="";
for(let i in users) {
    users[i].printInfo();
    items+="<li>" + users[i].name + " " + users[i].email + "</li>";
    }
```

El metodo _Map_ nos permite llamar a una funcion anonima, que se ejecutara para cada elemento del _Array_ generando un nuevo _Array_. Y en este caso, generara un _Array_ de _strings_.

Luego, podemos concatenar todos los elementos del _Array_ resultante utilizando el metodo _Join_.

Y finalmente, podemos incrustar este codigo dentro de un _template-literal-types_ que se utiliza para crear _strings_. Y de esta forma, obtener un el mismo resultado que en el codigo mostrado mas arriba:

```
let strTemplate: string = `${users
    .map((item) => `<li>${item.name} ${item.mail}</li>`)
    .join("")}`;
```

## Material complementario

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join

https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
