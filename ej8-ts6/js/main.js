var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        this.myf = new MyFramework();
        var b = this.myf.getElementById("boton");
        console.log(b);
        b.textContent = "Haceme Click";
        b.addEventListener("click", this.evento);
        /**
         * A veces es util preguntarnos que es this
         * para debug.
         */
        console.log("this en main:");
        console.log(this);
    };
    Main.prototype.evento = function (ev) {
        console.log("se hizo click!");
        console.log("this en evento:");
        console.log(this);
    };
    return Main;
}());
window.onload = function () {
    var m = new Main();
    m.main();
};
