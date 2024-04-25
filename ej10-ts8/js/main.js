/**
 * Vemos como una misma clase puede implementar varias interfaces
 */
var Main = /** @class */ (function () {
    function Main() {
        /**
         * Un atributo puede inicializarse de igual forma para todos los objetos de esta
         * forma sin necesidad de crear un constructor para hacerlo.
         */
        this.counter = 0;
    }
    Main.prototype.handleEvent = function (evt) {
        this.counter++;
        /**
         * Hacemos uso del framework para econtrar el boton
         * utilizando el Event.
         */
        var btn = this.myf.getElementByEvent(evt);
        /**
         * Volvemos a modificar el html desde el typescript.
         */
        btn.textContent = "click:" + this.counter;
    };
    /**
     * Nuestra implementacion del metodo handleGETResponse
     * solo mostrara el contenido en la consola.
     */
    Main.prototype.handleGETResponse = function (status, response) {
        console.log("Llego status:" + status + " response:" + response);
    };
    Main.prototype.main = function () {
        this.myf = new MyFramework();
        var b = this.myf.getElementById("boton");
        console.log(b);
        b.textContent = "Haceme Click";
        b.addEventListener("click", this);
        /**
         * Aqui generamos el request con GET
         * para pedir el archivo devices.txt
         * como Main implementa GETResponseListener
         * el objeto GETResponseListener solicitado
         * como segundo parametro es this.
         *
         * El this nos obligara a hacer el metodo handleGETResponse
         * para *Main* que nos permitira procesar la respuesta cuando llegue
         *
         * NOTA: Recordar que internamente trabaja de forma asincronica con AJAX
         *
         */
        this.myf.requestGET("devices.txt", this);
    };
    return Main;
}());
window.onload = function () {
    var m = new Main();
    m.main();
};
