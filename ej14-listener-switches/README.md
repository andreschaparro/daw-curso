# Ejemplo 14: Utilizar un mismo listener para todos los switches

## Introduccion

El ejemplo, va a detectar el click sobre todos los switches de los "collection-item" avatar.

```
interface DeviceInt {
  id: string;
  name: string;
  description: string;
  state: string;
  type: string;
}

// Clase Main que se utiliza para completar el maquetado de la pagina
class ViewMainPage {
  // Haremos que con el mismo objeto de la clase Main pueda utilizar nuestro framework
  myf: MyFramework;
  constructor(myf: MyFramework) {
    this.myf = myf;
  }
  // Metodo que va completar el maquetado con los datos deserializados
  showDevices(list: DeviceInt[]): void {
    // Encuentro el componente por su id utilizando el framework
    let devicesUl: HTMLElement = this.myf.getElementById("devicesList");
    let items: string = "";
    // Recorro todos los elementos deserializados
    for (let i in list) {
      // Esto sirve para hacer que un switch aparezca activado
      let checkedStr = "";
      if (list[i].state == "1") checkedStr = "checked";
      // Generamos cada "collection-item" avatar
      switch (list[i].type) {
        case "0": // Lampara
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
            // Cada switch tendra un id distinto
            "<input id='dev_" +
            list[i].id +
            "' " +
            checkedStr +
            " type='checkbox'>" +
            "<span class='lever'></span>" +
            "On" +
            "</label>" +
            "</div>" +
            "</li>";
          break;
        case "1": // Persiana
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
            // Cada switch tendra un id distinto
            "<input id='dev_" +
            list[i].id +
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
    // Completamos el maquetado
    devicesUl.innerHTML = items;
  }
}

// Clase Main que utiliza las interfaces GETResponseListener y GETResponseListener
class Main implements GETResponseListener, GETResponseListener {
  myf: MyFramework;
  // Main debera llamar al metodo showDevices de ViewMainPage
  view: ViewMainPage;
  // La interfaz EventListenerObject nos obliga a implementar el metodo handleEvent
  handleEvent(evt: Event): void {
    // Buscamos el switch que produjo el evento onClick utilizando nuestro framework
    let sw: HTMLElement = this.myf.getElementByEvent(evt);
    console.log("Click en device: " + sw.id);
  }
  // La interfaz GETResponseListener nos obliga a implementar el metodo handleGETResponse
  handleGETResponse(status: number, response: string) {
    if (status == 200) {
      let data: DeviceInt[] = JSON.parse(response);
      // Llamamos al metodo showDevices para que complete el maquetado
      this.view.showDevices(data);
      // Creamos los listener para todos los switch
      for (let i in data) {
        // Buscamos el switch de cada "collection-item" avatar por id utilizando nuestro framework
        let sw: HTMLElement = this.myf.getElementById("dev_" + data[i].id);
        sw.addEventListener("click", this);
      }
    }
  }
  main(): void {
    this.myf = new MyFramework();
    // Llamamos al constructor de ViewMainPage y le pasamos el objeto que le permite usar el framework
    this.view = new ViewMainPage(this.myf);
    this.myf.requestGET("devices.txt", this);
  }
}

window.onload = () => {
  let m: Main = new Main();
  m.main();
};

```

Se recomienda repasar este ejercicio en detalle. Dado que integra todos los temas vistos hasta el momento.
