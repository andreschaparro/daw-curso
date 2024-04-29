// Clase Main que utiliza la interfaz EventListenerObject
var Main = /** @class */ (function () {
    function Main() {
    }
    // La interfaz EventListenerObject nos obliga a implementar el metodo handleEvent
    Main.prototype.handleEvent = function (evt) {
        console.log("handleEvent");
    };
    Main.prototype.main = function () {
        this.myf = new MyFramework();
        var b = this.myf.getElementById("boton");
        b.textContent = "Haceme Click";
        // Con el uso de la interfaz, como metodo debemos indicar this, que hara qye se ejecute handleEvent cuando se produzca el evento onClick
        b.addEventListener("click", this);
    };
    return Main;
}());
window.onload = function () {
    var m = new Main();
    m.main();
};
