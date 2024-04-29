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
