// Crearemos un objeto de esta clase para guardar el resultado de una promise
class HttpResponse {
}
// Clase MyFramework
class MyFramework {
    getElementById(id) {
        let el;
        el = document.getElementById(id);
        return el;
    }
    getElementByEvent(evt) {
        return evt.target;
    }
    requestGET(url, listener) {
        let xhr;
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    listener.handleGETResponse(xhr.status, xhr.responseText);
                }
                else {
                    listener.handleGETResponse(xhr.status, null);
                }
            }
        };
        xhr.open("GET", url, true);
        xhr.send(null);
    }
    // Metodo para hace el request con promises que solo necesita la url y devuelve un objeto del tipo HttpResponse
    requestGETProm(url) {
        return new Promise((resolve, reject) => {
            let xhr;
            xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    // Creamos el objeto que se devolvera como respuesta
                    let r = new HttpResponse();
                    if (xhr.status == 200) {
                        r.state = xhr.status;
                        r.data = xhr.responseText;
                        // Hacemos que la promise cambie al estado de fulfilled y devolvemos el objeto con la respuesta
                        resolve(r);
                    }
                    else {
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
