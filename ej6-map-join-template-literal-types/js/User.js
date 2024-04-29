// Clase User
var User = /** @class */ (function () {
    function User(id, name, mail) {
        this._id = id;
        this._name = name;
        this._mail = mail;
        this._isLogged = false;
    }
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
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
        console.log("Nombre: " +
            this.name +
            " mail: " +
            this.mail +
            " logged: " +
            this.isLogged);
    };
    return User;
}());
