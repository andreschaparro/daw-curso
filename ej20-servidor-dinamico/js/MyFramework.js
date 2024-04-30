// Clase MyFramework
var MyFramework = /** @class */ (function () {
    function MyFramework() {
    }
    MyFramework.prototype.getElementById = function (id) {
        var el;
        el = document.getElementById(id);
        return el;
    };
    MyFramework.prototype.getElementByEvent = function (evt) {
        return evt.target;
    };
    // Metodo para hacer el request con la url y la interfaz, creada anteriormente e implementada por la clase que utiliza el framewrok, de donde obtendremos el metodo handleGETResponse para procesar el archivo
    MyFramework.prototype.requestGET = function (url, listener) {
        // Resolucion asincronica por AJAX.
        var xhr;
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
    };
    // Metodo para hacer el request con la url, los datos, y la interfaz, creada anteriormente e implementada por la clase que utiliza el framewrok, de donde obtendremos el metodo handlePOSTResponse
    MyFramework.prototype.requestPOST = function (url, data, listener) {
        // Resolucion asincronica por AJAX.
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    listener.handlePOSTResponse(xhr.status, xhr.responseText);
                }
                else {
                    listener.handlePOSTResponse(xhr.status, null);
                }
            }
        };
        // Forma de enviar directamente un jSON serializando data
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify(data));
    };
    return MyFramework;
}());
