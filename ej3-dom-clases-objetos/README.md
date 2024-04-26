# Ejemplo 3: DOM, clases y objetos

## DOM

El DOM o modelo de objetos del navegador, nos sirve para acceder a cualquiera de los componentes de la pagina.

Hay dos componentes que utilizaremos con mucha mas frecuencia: _window_ y _document_.

El componente _window_ nos ofrecera metodos y propiedades para controlar la ventana del navegador.

Por ejemplo, el metodo _onload_ se ejecuta cuando se termina de cargar la pagina. Es decir, cuando todos los _request_ al servidor fueron resueltos:

```
window.onload = () => {};
```

El componente _document_ tiene propiedades que son _arrays_. Por ejemplo, vamos a tener un _array_ con todos las _img_ de la pagina:

```
window.onload = () => {
  console.log(document.images[0]);
};
```

Tambien, tiene metodos muy utiles como _getElementById_. El mismo, nos permite obtener un componente de la pagina mediante el _id_ que le colocamos en el codigo _html_.

```
window.onload = () => {
  console.log(document.getElementById("nav-mobile"));
};
```

## Clases y objetos

El lenguaje _typecript_ nos permite utilizar programacion orienada a objeto o _POO_.

```
class MiClase {}
```

Una clase contendra atributos y metodos. Por defecto, todos son publicos. Pero, podrian definirse como privados para que solo se puedan acceder desde dentro de la clase. A todo lo que sea privado, se le suele anteponer un \_ en su nombre como convencion.

Los atributos se pueden inicializar directamente.

Ya sea que trabajemos con: variables, atributos, o argumentos de los metodos; debemos indicar su tipo de dato:

- _number_.
- _string_.
- _boolean_.
- _array_.
- _object_. Nos permite utilizar una clase como tipo de dato entre otras cosas.

Un metodo puede no recibir ningun argumento.

El valor retornado por un metodo puede ser _void_.

Las variables se definen con la palabra reservada _let_.

Para crear un objeto a partir de una clase utilizamos la palabra reservada _new_.

```
class MiClase {
  x: number = 0;
  y: number;
  private _z: number = 0;
  incrementar(n: number): void {
    this.x += n;
    console.log("incrementar: " + this.x);
    this._privIncrementar(n);
    console.log("privIncrementar: " + this._z);
  }
  private _privIncrementar(n: number): void {
    this._z += n;
  }
}

window.onload = () => {
  let miObj: MiClase = new MiClase();
  miObj.incrementar(3);
};
```

La palabra reservada _this_ puede hacer referencia a varias cosas. En este caso, nos permite acceder a los atributos de nuesto objeto. Mas adelante se vera en detalle.

## Material complementario

https://developer.mozilla.org/es/docs/Web/API/Window

https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

https://www.typescriptlang.org/docs/handbook/2/classes.html
