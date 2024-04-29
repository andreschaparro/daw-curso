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
