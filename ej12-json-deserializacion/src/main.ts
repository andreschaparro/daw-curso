// Inteface para generar un nuevo tipo de dato para deserializar
interface DeviceInt {
  id: string;
  name: string;
  description: string;
  state: string;
  type: string;
}

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
    // Voy a deserializar solo si se recibio el archivo correctamente
    if (status == 200) {
      // Creo un Array con el nuevo tipo de dato y deserializo el archivo
      let data: DeviceInt[] = JSON.parse(response);
      console.log(data);
    }
  }
  main(): void {
    this.myf = new MyFramework();
    let b: HTMLElement = this.myf.getElementById("boton");
    b.textContent = "Haceme Click";
    b.addEventListener("click", this);
    this.myf.requestGET("devices.txt", this);
  }
}

window.onload = () => {
  let m: Main = new Main();
  m.main();
};
