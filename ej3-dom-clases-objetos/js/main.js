// Clase Main
var Main = /** @class */ (function () {
    function Main() {
        // atributo publico inicializado
        this.x = 0;
        // atributo privado
        this._z = 0;
    }
    // metodo publico
    Main.prototype.incrementar = function (n) {
        this.x += n;
        console.log("incrementar: " + this.x);
        //llamada al metodo privado
        this._privIncrementar(n);
        console.log("privIncrementar: " + this._z);
    };
    // metodo privado
    Main.prototype._privIncrementar = function (n) {
        this._z += n;
    };
    return Main;
}());
// Uso de DOM
window.onload = function () {
    // Creacion de un objeto de la clase Main
    var m = new Main();
    // Llamada la metodo publico
    m.incrementar(3);
};
