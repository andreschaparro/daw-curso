// Clase User
var User = /** @class */ (function () {
    // Metodo contructor
    function User(id, name, mail) {
        this._id = id;
        this._name = name;
        this._mail = mail;
        this._isLogged = false;
    }
    Object.defineProperty(User.prototype, "id", {
        // Metodos getter
        get: function () {
            return this._id;
        },
        // Metodos setter
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "mail", {
        get: function () {
            return this._mail;
        },
        set: function (mail) {
            this._mail = mail;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "isLogged", {
        get: function () {
            return this._isLogged;
        },
        set: function (isLogged) {
            this._isLogged = isLogged;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.printInfo = function () {
        // Uso de los getter
        console.log("Nombre: " +
            this.name +
            " mail: " +
            this.mail +
            " logged: " +
            this.isLogged);
    };
    return User;
}());
// Clase Main
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        // Creacion de un array que alamacenara objetos del tipo User
        var usuarios;
        usuarios = new Array();
        // Carga de objetos del tipo User al array
        usuarios.push(new User(1, "Juan", "juan@juan.com"));
        usuarios.push(new User(2, "Pepe", "pepe@juan.com"));
        usuarios.push(new User(3, "Carlos", "carlos@juan.com"));
        // Recorriendo todos los objetos del array con for
        for (var i in usuarios) {
            usuarios[i].printInfo();
        }
    };
    return Main;
}());
window.onload = function () {
    var m = new Main();
    m.main();
};
