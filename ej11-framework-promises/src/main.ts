// Clase Main que utiliza las interfaces EventListenerObject y GETResponseListener
class Main implements EventListenerObject, GETResponseListener {
  myf: MyFramework;
  counter: number = 0;
  handleEvent(evt: Event): void {
    this.counter++;
    let btn: HTMLElement = this.myf.getElementByEvent(evt);
    btn.textContent = "Clicks: " + this.counter;
  }
  handleGETResponse(status: number, response: string) {
    console.log("Llego status:" + status + " response:" + response);
  }
  main(): void {
    this.myf = new MyFramework();
    let b: HTMLElement = this.myf.getElementById("boton");
    b.textContent = "Haceme Click";
    b.addEventListener("click", this);
    // this.myf.requestGET("devices.txt", this);
    // Uso de la promise para pedir el archivo "devices.txt" y los metods then y catch
    this.myf
      .requestGETProm("devices.txt")
      .then((r: HttpResponse) => {
        console.log("Llego status:" + r.state + " response:" + r.data);
      })
      .catch((reason: HttpResponse) => {
        console.error("Error:" + reason.state);
      });
  }
}

window.onload = () => {
  let m: Main = new Main();
  m.main();
};
