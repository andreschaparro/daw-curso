// Clase Main que utiliza la interfaz EventListenerObject
var Main = /** @class */ (function () {
    function Main() {
        this.counter = 0;
    }
    Main.prototype.handleEvent = function (evt) {
        this.counter++;
        // Buscamos el boton que produjo el evento onClick utilizando nuestro framework
        var btn = this.myf.getElementByEvent(evt);
        // Mostramos el numero de veces que se le hizo click en el texto del boton
        btn.textContent = "Clicks: " + this.counter;
    };
    Main.prototype.main = function () {
        this.myf = new MyFramework();
        var b = this.myf.getElementById("boton");
        b.textContent = "Haceme Click";
        b.addEventListener("click", this);
    };
    return Main;
}());
window.onload = function () {
    var m = new Main();
    m.main();
};
