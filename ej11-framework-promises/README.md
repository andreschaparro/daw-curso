# Ejemplo 11: Framework metodo requestGETProm, Promises

## Introduccion

Vamos a hacer lo mismo que en el ejemplo 10, pero con otro mecanismo llamado promesas o _promises_.

Una _promise_ o promesa, es un objeto que representa la eventual finalizacion o falla de una operacion asincronica, y su respuesta.

Asi, una _promise_ puede estar en uno de los siguientes estados:

- _pending_ que es el estado inicial, ni cumplido ni rechazado.
- _fulfilled_ que significa que la operacion se completo con exito.
- _rejected_ que significa que la operacion fallo.

Con el metodo _then_ de una _promise_, podemos ejecutar una funcion anonima con _Fat Arrow_ que haga algo con la respuesta en caso de exito.

O, con el metodo _catch_, podemos ejecutar una funcion anonima con _Fat Arrow_ que maneje los errores.

En _tsconfig.json_ cambiar _target_ a _ES6_ para usar _promises_.

```
interface GETResponseListener {
  handleGETResponse(status: number, response: string): void;
}

// Crearemos un objeto de esta clase para guardar el resultado de una promise
class HttpResponse {
  state: number;
  data: string;
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
  requestGET(url: string, listener: GETResponseListener): void {
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
  // Metodo para hace el request con promises que solo necesita la url y devuelve un objeto del tipo HttpResponse
  requestGETProm(url: string): Promise<HttpResponse> {
    return new Promise((resolve, reject) => {
      let xhr: XMLHttpRequest;
      xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          // Creamos el objeto que se devolvera como respuesta
          let r: HttpResponse = new HttpResponse();
          if (xhr.status == 200) {
            r.state = xhr.status;
            r.data = xhr.responseText;
            // Hacemos que la promise cambie al estado de fulfilled y devolvemos el objeto con la respuesta
            resolve(r);
          } else {
            r.state = xhr.status;
            r.data = null;
            // Hacemos que la promise cambie al estado de rejected y devolvemos el objeto con la respuesta
            reject(r);
          }
        }
      };
      xhr.open("GET", url, true);
      xhr.send(null);
    });
  }
}
```

## Uso del framework

```
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
```

## Material complementario:

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
