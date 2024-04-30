# Ejemplo 20: Servidor dinamico

## Introduccion

Vamos a tomar los ejemplos 15 y 19 para construir un servidor dinamico, capaz de resolver:

- _Requests_ de archivos con el metodo _GET_.
- _Requests_ de procesamiento de datos con el metodo _POST_.

El servidor correra usando _NodeJS_. Ya no volveremos a utilizar el servidor estatico.

## Preparacion

1. Copiar todo el contenido del ejemplo 15 dentro de la carpeta de este proyecto.
2. Crear una carpeta llamada _ws_ dentro de la carpeta del proyecto.
3. Copiar todo el contenido del ejemplo 19 dentro de la carpeta _ws_.
4. Modificar el archivo _index.js_ para que pueda resolver los _request_ de archivos:

```
var express = require('express');
var app = express();
app.use(express.json());
// Agrega la funcionalidad de servidor estatico
app.use(express.static('.'));
var datos = require('./datos.json');
app.get('/devices', function(req,res,next){
    res.json(datos);
});
app.get('/devices/:id', function(req,res,next){
    let datosFiltrados = datos.filter(item => item.id == req.params.id);
    res.json(datosFiltrados);
});
app.post('/devices', function(req, res, next) {
    let datoFiltrado = datos.filter(item => item.id == req.body.id);
    if (datoFiltrado.length > 0) {
        datoFiltrado[0].state = req.body.state;
    }
    res.json(datoFiltrado);
});
app.listen(3000, function(req, res) {
    console.log("Servidor funcionando en el puerto 3000");
});
```

5. En el _main.ts_ modificar las _url_ para que los _request_ utilicen los recursos del servidor de _NodeJS_.
6. Modificar _interface DeviceInt_, para que los tipos de datos coincidan con los de _datos.json_.
7. Modificar el codigo, para que el precesamiento de los nuevos tipos de datos sea el correcto.

```
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

```

6. Modificar _MyFramework.ts_ para que envie un _jSON_ mediante la serializacion de _data_ y no un _DataForm_.

```
// Interface que debe implementar la clase que utilice el framework y que la obliga a definir el metodo handleGETResponse para procesar el archivo
interface GETResponseListener {
  handleGETResponse(status: number, response: string): void;
}

// Interface que debe implementar la clase que utilice el framework y que la obliga a definir el metodo handlePOSTResponse para procesar el response del servidor
interface POSTResponseListener {
  handlePOSTResponse(status: number, response: string): void;
}

// Clase MyFramework
class MyFramework {
  getElementById(id: string): HTMLElement {
    let el: HTMLElement;
    el = document.getElementById(id);
    return el;
  }
  getElementByEvent(evt: Event): HTMLElement {
    return <HTMLElement>evt.target;
  }
  // Metodo para hacer el request con la url y la interfaz, creada anteriormente e implementada por la clase que utiliza el framewrok, de donde obtendremos el metodo handleGETResponse para procesar el archivo
  requestGET(url: string, listener: GETResponseListener): void {
    // Resolucion asincronica por AJAX.
    let xhr: XMLHttpRequest;
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          listener.handleGETResponse(xhr.status, xhr.responseText);
        } else {
          listener.handleGETResponse(xhr.status, null);
        }
      }
    };
    xhr.open("GET", url, true);
    xhr.send(null);
  }
  // Metodo para hacer el request con la url, los datos, y la interfaz, creada anteriormente e implementada por la clase que utiliza el framewrok, de donde obtendremos el metodo handlePOSTResponse
  requestPOST(url: string, data: object, listener: POSTResponseListener): void {
    // Resolucion asincronica por AJAX.
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          listener.handlePOSTResponse(xhr.status, xhr.responseText);
        } else {
          listener.handlePOSTResponse(xhr.status, null);
        }
      }
    };
    // Forma de enviar directamente un jSON mediante la serializacion de data
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(data));
  }
}

```

7. Volver a realizar el proceso de transpilacion.
8. Abrir una terminal del tipo _Command Prompt_ en _VCS_ en el directorio del proyecto.
9. Ejecutar _node ws/index.js_.

**Se recomienda repasar este ejercicio en detalle. Dado que integra todos de los temas vistos hasta el momento.**
