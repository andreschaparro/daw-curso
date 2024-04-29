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
