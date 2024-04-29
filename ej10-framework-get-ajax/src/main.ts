// Clase Main que utiliza las interfaces EventListenerObject y GETResponseListener
class Main implements EventListenerObject, GETResponseListener {
  myf: MyFramework;
  counter: number = 0;
  handleEvent(evt: Event): void {
    this.counter++;
    let btn: HTMLElement = this.myf.getElementByEvent(evt);
    btn.textContent = "Clicks: " + this.counter;
  }
  // Definicion de handleGETResponse que se debe hacer por implementar la interfaz GETResponseListener
  handleGETResponse(status: number, response: string) {
    // Solo imprime el contenido del archivo en la consola a modo de prueba
    console.log("Llego status:" + status + " response:" + response);
  }
  main(): void {
    this.myf = new MyFramework();
    let b: HTMLElement = this.myf.getElementById("boton");
    b.textContent = "Haceme Click";
    b.addEventListener("click", this);
    // Hacemos el request de "devices.txt", y como la clase Main implementa GETResponseListener, con pasarle this podremos recuperar la definicion de handleGETResponse en el framework
    this.myf.requestGET("devices.txt", this);
  }
}

window.onload = () => {
  let m: Main = new Main();
  m.main();
};
