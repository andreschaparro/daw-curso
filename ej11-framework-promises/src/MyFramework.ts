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
