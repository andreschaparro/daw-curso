// Clase Main que utiliza las interfaces EventListenerObject y GETResponseListener
var Main = /** @class */ (function () {
    function Main() {
        this.counter = 0;
    }
    Main.prototype.handleEvent = function (evt) {
        this.counter++;
        var btn = this.myf.getElementByEvent(evt);
        btn.textContent = "Clicks: " + this.counter;
    };
    // Definicion de handleGETResponse que se debe hacer por implementar la interfaz GETResponseListener
    Main.prototype.handleGETResponse = function (status, response) {
        // Solo imprime el contenido del archivo en la consola a modo de prueba
        console.log("Llego status:" + status + " response:" + response);
    };
    Main.prototype.main = function () {
        this.myf = new MyFramework();
        var b = this.myf.getElementById("boton");
        b.textContent = "Haceme Click";
        b.addEventListener("click", this);
        // Hacemos el request de "devices.txt", y como la clase Main implementa GETResponseListener, con pasarle this podremos recuperar la definicion de handleGETResponse en el framework
        this.myf.requestGET("devices.txt", this);
    };
    return Main;
}());
window.onload = function () {
    var m = new Main();
    m.main();
};
