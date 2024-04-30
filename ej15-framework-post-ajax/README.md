# Ejemplo 15: Framework metodo requestPOST, AJAX

## Introduccion

En el ejemplo 2, vimos como se resolvia el armado de la _web app estatica_. Luego, en el ejemplo 10 le agregamos al _framework_ la capacidad de hacer un _request_ de forma manual y poder resolver el _response_ mediante un codigo escrito en nuestro programa.

Ahora, vamos a hacer que nuestro _framework_ pueda realizar otro tipo de _request_ utilizando el metodo _POST_. Este metodo se utiliza para enviar datos al servidor, donde los mismos deben ser precesados.

## Creacion de una interfaz para procesar el response del servidor

De forma similar a como paso con el metodo _GET_, necesitamos crear una interfaz que obligue a la clase que la implementa el _framework_, a definir un metodo que procese el _response_ pero del metodo _POST_. Asi, la implementacion del metodo le permitira al usuario del _framework_ procesarolo como desee.

```
// Interface que debe implementar la clase que utilice el framework y que la obliga a definir el metodo handlePOSTResponse para procesar el response del servidor
interface POSTResponseListener {
  handlePOSTResponse(status: number, response: string): void;
}
```

## Creacion de un metodo en el framework para hacer el request

Hay que crear un metodo en la clase del _framework_ para poder hacer el _request_. Al mismo, hay que pasarle como parametros:

- La _url_ de donde se obtendra el archivo.
- Los datos, que seran del tipo _object_ compuesto por elementos del tipo _key-value_.
- La interfaz, creada anteriormente e implementada por la clase que utiliza el framewrok, de donde obtendremos el metodo para procesar el _response_.

Internamente, el metodo utilizara AJAX para resolver el _request_ y esperar el _response_ de forma asincronica. Y, enviara los datos con el formato _key-value_ en un tipo de objeto _FormData_ que se utiliza con AJAX. Aqui vemos, como el _framework_ nos vuelve a abstraer de otras problematicas para el caso _POST_.

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
    // Enviamos los datos en formato key-value en un tipo de objeto FormData que se utiliza con AJAX
    let formData: FormData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
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
    xhr.open("POST", url);
    xhr.send(formData);
  }
}
```

## Uso del framework

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
  // Metodo para obtener el estado del switch en funcion de su id
  getSwitchStateById(id: string): boolean {
    let el: HTMLInputElement = <HTMLInputElement>this.myf.getElementById(id);
    return el.checked;
  }
}

// Clase Main que utiliza las interfaces GETResponseListener, GETResponseListener y POSTResponseListener
class Main
  implements GETResponseListener, GETResponseListener, POSTResponseListener
{
  myf: MyFramework;
  // Main debera llamar al metodo showDevices de ViewMainPage
  view: ViewMainPage;
  // La interfaz EventListenerObject nos obliga a implementar el metodo handleEvent
  handleEvent(evt: Event): void {
    // Buscamos el switch que produjo el evento onClick utilizando nuestro framework
    let sw: HTMLElement = this.myf.getElementByEvent(evt);
    console.log("Click en device: " + sw.id);
    // Obtenemos el estado del switch que se toco y lo guardamos en un objeto del tipo object que tendra pares key-value
    let data: object = {
      id: sw.id,
      state: this.view.getSwitchStateById(sw.id),
    };
    // url debera ser modificado a futuro...
    this.myf.requestPOST("url", data, this);
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
  // La interfaz POSTResponseListener nos obliga a implementar el metodo handlePOSTResponse
  handlePOSTResponse(status: number, response: string): void {
    // Solo se mostrara en la pantalla si se proceso correctamente el request en base al status del response
    if (status == 200) {
      console.log(response);
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

**Para probar este ejemplo, necesitaremos un servidor dinamico capaz de procesar los request del tipo POST. El como hacer este tipo de servidores, lo veremos mas adelante cuando estudiemos las tecnologicas del lado del servidor.**

## Material complementario

https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server

https://developer.mozilla.org/en-US/docs/Web/HTTP

https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST
