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
    Main.prototype.handleGETResponse = function (status, response) {
        // Voy a deserializar solo si se recibio el archivo correctamente
        if (status == 200) {
            // Creo un Array con el nuevo tipo de dato y deserializo el archivo
            var data = JSON.parse(response);
            console.log(data);
        }
    };
    Main.prototype.main = function () {
        this.myf = new MyFramework();
        var b = this.myf.getElementById("boton");
        b.textContent = "Haceme Click";
        b.addEventListener("click", this);
        this.myf.requestGET("devices.txt", this);
    };
    return Main;
}());
window.onload = function () {
    var m = new Main();
    m.main();
};
