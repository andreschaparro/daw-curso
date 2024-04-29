# Ejemplo 8: Interfaces

## Introduccion

Las interfaces permiten que un objeto sea de mas de un tipo, y obligan a las clases a tener ciertos metodos y atributos.

Para utilizarlas, a continuacion del nombre de la clase debemos colocar la palabra reservada _implements_ seguido del nombre de la interfaz que van a utilizar.

Por ejemplo:

```
// Clase Main que utiliza la interfaz EventListenerObject
class Main implements EventListenerObject {
  myf: MyFramework;
  // La interfaz EventListenerObject nos obliga a implementar el metodo handleEvent
  handleEvent(evt: Event): void {
    console.log("handleEvent");
  }
  main(): void {
    this.myf = new MyFramework();
    let b: HTMLElement = this.myf.getElementById("boton");
    b.textContent = "Haceme Click";
    // Con el uso de la interfaz, como metodo debemos indicar this, que hara qye se ejecute handleEvent cuando se produzca el evento onClick
    b.addEventListener("click", this);
  }
}

window.onload = () => {
  let m: Main = new Main();
  m.main();
};
```

El _VCS_ nos indicara que metodos y atributos debemos definir dentro de la clase cuando utilizamos interfaces.

## Material complementario

https://www.typescriptlang.org/docs/handbook/2/objects.html#interfaces-vs-intersections

https://www.w3schools.com/typescript/typescript_aliases_and_interfaces.php
