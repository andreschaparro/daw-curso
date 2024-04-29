// Clase Main
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        this.myf = new MyFramework();
        var b = this.myf.getElementById("boton");
        b.textContent = "Haceme Click";
        // Forma rapida de crear un Array alternativa a la vista en el ejemplo 4 con new
        var usuarios = [];
        usuarios.push(new User(1, "Juan", "juan@juan.com"));
        usuarios.push(new User(2, "Pepe", "pepe@juan.com"));
        usuarios.push(new User(3, "Carlos", "carlos@juan.com"));
        this.mostrarUsers(usuarios);
    };
    Main.prototype.mostrarUsers = function (users) {
        // Uso de template-literal-types con `${}
        var strTemplate = "".concat(users
            // Uso del metodo Map
            .map(function (item) { return "<li>".concat(item.name, " ").concat(item.mail, "</li>"); })
            // Uso del metodo Join
            .join(""));
        var ul = this.myf.getElementById("listaUsuarios");
        ul.innerHTML = strTemplate;
    };
    return Main;
}());
window.onload = function () {
    var m = new Main();
    m.main();
};
