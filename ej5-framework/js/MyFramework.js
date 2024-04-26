// Clase MyFramework
var MyFramework = /** @class */ (function () {
    function MyFramework() {
    }
    // Ejemplo de como abstraernos del uso de DOM
    MyFramework.prototype.getElementById = function (id) {
        // Vamos a devolver el componente de la pagina que tiene un determinado id.
        var el;
        el = document.getElementById(id);
        return el;
    };
    return MyFramework;
}());
