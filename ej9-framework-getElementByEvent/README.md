# Ejemplo 9: Framework metodo getElementByEvent

## Introduccion

Le agregamos un metodo al framework para que cuando se produzca un evento, podamos identificar que componente de la pagina lo produzco.

```
// Clase MyFramework
class MyFramework {
  getElementById(id: string): HTMLElement {
    let el: HTMLElement;
    el = document.getElementById(id);
    return el;
  }
  getElementByEvent(evt: Event): HTMLElement {
    // Vamos a devolver el componente de la pagina que produce un determina evento
    return <HTMLElement>evt.target;
  }
}
```

## Uso del framework

```
// Clase Main que utiliza la interfaz EventListenerObject
class Main implements EventListenerObject {
  myf: MyFramework;
  counter: number = 0;
  handleEvent(evt: Event): void {
    this.counter++;
    // Buscamos el boton que produjo el evento onClick utilizando nuestro framework
    let btn: HTMLElement = this.myf.getElementByEvent(evt);
    // Mostramos el numero de veces que se le hizo click en el texto del boton
    btn.textContent = "Clicks: " + this.counter;
  }
  main(): void {
    this.myf = new MyFramework();
    let b: HTMLElement = this.myf.getElementById("boton");
    b.textContent = "Haceme Click";
    b.addEventListener("click", this);
  }
}

window.onload = () => {
  let m: Main = new Main();
  m.main();
};
```
