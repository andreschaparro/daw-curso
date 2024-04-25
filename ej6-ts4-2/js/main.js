var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        this.myf = new MyFramework();
        var b = this.myf.getElementById("boton");
        console.log(b);
        b.textContent = "Haceme Click";
        /**
         * Forma rapida de crear un Array alternativa a la vista
         * en el ejemplo 4 con new.
         */
        var users = [];
        users.push(new User(1, "juan@gmail.com", "Juan"));
        users.push(new User(2, "pedro@gmail.com", "Pedro"));
        users.push(new User(3, "carlos@gmail.com", "Carlos"));
        this.mostrarUsers(users);
    };
    Main.prototype.mostrarUsers = function (users) {
        /**
         * Alternativa con bucle for
         *
         * let items:string="";
         * for(let i in users) {
         *  users[i].printInfo();
         *  items+="<li>" + users[i].name + " " + users[i].email + "</li>";
         * }
         * let ul:HTMLElement = this.myf.getElementById("listaUsuarios");
         * ul.innerHTML = items;
         */
        /**
         * El .join("") cumple la misma funcion del += de la alternativa anterior
         */
        var strTemplate = "".concat(users.map(function (item) { return "<li>".concat(item.name, " ").concat(item.mail, "</li>"); }).join(""));
        var ul = this.myf.getElementById("listaUsuarios");
        ul.innerHTML = strTemplate;
    };
    return Main;
}());
window.onload = function () {
    var m = new Main();
    m.main();
};
