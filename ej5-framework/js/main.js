// Clase Main
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        // Debemos llamar al constructor para poder empezar a utilizar los metodos del framework.
        this.myf = new MyFramework();
        var b = this.myf.getElementById("boton");
        // Con este metodo podemos cambiar el texto del componente de la pagina encontrado por el framework.
        b.textContent = "Haceme Click";
    };
    return Main;
}());
window.onload = function () {
    var m = new Main();
    m.main();
};
