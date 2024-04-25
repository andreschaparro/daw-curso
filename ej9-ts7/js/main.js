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
        btn.textContent = "click:" + this.counter;
    };
    Main.prototype.main = function () {
        this.myf = new MyFramework();
        var b = this.myf.getElementById("boton");
        console.log(b);
        b.textContent = "Haceme Click";
        b.addEventListener("click", this);
    };
    return Main;
}());
window.onload = function () {
    var m = new Main();
    m.main();
};
