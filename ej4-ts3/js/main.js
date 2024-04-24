var User = /** @class */ (function () {
    /**
     * Constructor
     */
    function User(id, name, mail) {
        this._id = id;
        this._name = name;
        this._mail = mail;
        this._isLogged = false;
    }
    Object.defineProperty(User.prototype, "id", {
        /**
         * Metodos getter
         */
        get: function () {
            return this._id;
        },
        /**
         * Metodos setter
         */
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
    /**
     * Otros metodos
     */
    User.prototype.printInfo = function () {
        console.log("Nombre: " + this.name + " email: " + this.mail + " logged: " + this.isLogged);
    };
    return User;
}());
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        console.log("Hola mundo");
        /**
         * Crear un Array que almacenara objetos del tipo User.
         */
        var usuarios;
        usuarios = new Array();
        /**
         * Con push agregamos un objeto User al Array
         */
        usuarios.push(new User(1, "juan@juan.com", "Juan"));
        usuarios.push(new User(2, "pepe@juan.com", "Pepe"));
        usuarios.push(new User(3, "carlos@juan.com", "Carlos"));
        /**
         * Con el bucle for iteramos el array
         */
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
