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
