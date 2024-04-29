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
        // Vamos a devolver el componente de la pagina que produce un determina evento
        return evt.target;
    };
    return MyFramework;
}());
