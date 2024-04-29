// Clase Main
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        this.myf = new MyFramework();
        var b = this.myf.getElementById("boton");
        b.textContent = "Haceme Click";
        b.addEventListener("click", this.evento);
        console.log("this en el metodo main es:");
        console.log(this);
    };
    Main.prototype.evento = function (ev) {
        console.log("se hizo click!");
        console.log("this en el metodo evento es:");
        console.log(this);
    };
    return Main;
}());
window.onload = function () {
    var m = new Main();
    m.main();
};
