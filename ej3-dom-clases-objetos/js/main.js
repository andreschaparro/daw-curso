// Clase Main.
var Main = /** @class */ (function () {
    function Main() {
    }
    // Metodo que solo imprime un mensaje y no recibe argumentos.
    Main.prototype.main = function () {
        console.log("Hola mundo desde el metodo main del objeto");
    };
    return Main;
}());
// Ejemplo de uso de DOM.
window.onload = function () {
    // Declaracion de un objeto del tipo Main.
    var m = new Main();
    // Invocamos el metodo main de nuestro objeto.
    m.main();
};
