# Ejemplo 7: Listener y this

## Listener

Un _listener_ se asocia a un elemento _html_ y se queda esperando a que ocurra un evento. Por ejemplo, el evento _onClick_ en un _button_.

Y cuando se detecta, tiene asociado un metodo que que ejecutara como reaccion al evento.

```
// Clase Main
class Main {
  myf: MyFramework;
  main(): void {
    this.myf = new MyFramework();
    let b: HTMLElement = this.myf.getElementById("boton");
    b.textContent = "Haceme Click";
    // Creacion del Listener que se queda esperando a que ocurra el evento onClick sobre el boton
    b.addEventListener("click", this.evento);
    console.log("this en el metodo main es:");
    // This hace referencia al objeto que es desde donde se llamo a main
    console.log(this);
  }
  // Metodo evento que se ejecutara cuando el listener del boton detecte el evento onClick
  evento(ev: Event): void {
    console.log("se hizo click!");
    console.log("this en el metodo evento es:");
    // This hace referencia al boton que es desde donde se llamo a evento
    console.log(this);
  }
}

window.onload = () => {
  let m: Main = new Main();
  m.main();
};
```

## This

Como ya se vio anteriormente, la palabra reservada _this_ puede hacer referencia a varias cosas.

Siempre hay que tener en cuenta desde donde es invocada. Si es invocada desde el metodo de un objeto, puede hacer referencia a ese objeto.

Pero tambien, puede hacer referencia a un elemento _html_ si fue invocada desde una funcion asociada a un _listener_.

![this](/ej7-listener-this/this.png)

Como conclusion, podemos decir que siempre es conveniente imprimir en la consola que es _this_ para estar seguros que no estamos cometiendo errores en nuestro programa.

## Material complementario

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
