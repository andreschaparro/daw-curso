// Modificado segun datos.json
interface DeviceInt {
  id: number;
  name: string;
  description: string;
  state: number;
  type: number;
}

class ViewMainPage {
  myf: MyFramework;
  constructor(myf: MyFramework) {
    this.myf = myf;
  }
  showDevices(list: DeviceInt[]): void {
    let devicesUl: HTMLElement = this.myf.getElementById("devicesList");
    let items: string = "";
    for (let i in list) {
      let checkedStr = "";
      if (list[i].state == 1) checkedStr = "checked";
      switch (list[i].type) {
        case 0: // Lampara
          items +=
            "<li class='collection-item avatar'>" +
            "<img src='images/lightbulb.png' alt='' class='circle'>" +
            "<span class='title'>" +
            list[i].name +
            "</span>" +
            "<p>" +
            list[i].description +
            "</p>" +
            "<div class='switch secondary-content'>" +
            "<label>" +
            "Off" +
            "<input id='dev_" +
            // Convierto a string porque es un number
            list[i].id.toString() +
            "' " +
            checkedStr +
            " type='checkbox'>" +
            "<span class='lever'></span>" +
            "On" +
            "</label>" +
            "</div>" +
            "</li>";
          break;
        case 1: // Persiana
          items +=
            "<li class='collection-item avatar'>" +
            "<img src='images/window.png' alt='' class='circle'>" +
            "<span class='title'>" +
            list[i].name +
            "</span>" +
            "<p>" +
            list[i].description +
            "</p>" +
            "<div class='switch secondary-content'>" +
            "<label>" +
            "Off" +
            "<input id='dev_" +
            // Convierto a string porque es un number
            list[i].id.toString() +
            "' " +
            checkedStr +
            " type='checkbox'>" +
            "<span class='lever'></span>" +
            "On" +
            "</label>" +
            "</div>" +
            "</li>";
          break;
      }
    }
    devicesUl.innerHTML = items;
  }
  // Modificamos la funcion para que devuelva 1 o 0 en vez de true o false para que coincida con datos.json
  getSwitchStateById(id: string): number {
    let el: HTMLInputElement = <HTMLInputElement>this.myf.getElementById(id);
    if (el.checked === true) {
      return 1;
    } else {
      return 0;
    }
  }
}

class Main
  implements GETResponseListener, GETResponseListener, POSTResponseListener
{
  myf: MyFramework;
  view: ViewMainPage;
  handleEvent(evt: Event): void {
    let sw: HTMLElement = this.myf.getElementByEvent(evt);
    console.log("Click en device: " + sw.id);
    let data: object = {
      // Remuevo el dev_, me quedo con el numero y lo convierto a number
      id: parseInt(sw.id.split("_")[1]),
      state: this.view.getSwitchStateById(sw.id),
    };
    this.myf.requestPOST("devices", data, this);
  }
  handleGETResponse(status: number, response: string) {
    if (status == 200) {
      let data: DeviceInt[] = JSON.parse(response);
      this.view.showDevices(data);
      for (let i in data) {
        let sw: HTMLElement = this.myf.getElementById(
          // Convierto a string porque es un number
          "dev_" + data[i].id.toString()
        );
        sw.addEventListener("click", this);
      }
    }
  }
  handlePOSTResponse(status: number, response: string): void {
    // Enviamos a la consola la confimacion del comando si el response indica 200 OK
    if (status == 200) {
      console.log(response);
    }
  }
  main(): void {
    this.myf = new MyFramework();
    this.view = new ViewMainPage(this.myf);
    // el get se hace a /devices
    this.myf.requestGET("devices", this);
  }
}

window.onload = () => {
  let m: Main = new Main();
  m.main();
};
