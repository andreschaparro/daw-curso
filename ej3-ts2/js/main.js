var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        console.log("Hola mundo");
    };
    return Main;
}());
/**
 * Forma de utilizar el DOM para llamar al metodo
 * onload de window y definir una funcion que
 * se ejecute cuando finaliza la carga de la pagina.
 *
 * Esta nueva forma es del tipo () => que
 * reemplaza a la forma utilizando function y que
 * no recibe argumentos ni devuelve nada.
 */
window.onload = function () {
    /**
     * nombre:tipo es la forma de declarar variables.
     *
     * let tiene validez dentro de las llaves donde fue definida.
     * de forma similar a una variable local de C.
     *
     * new invoca al constructor de Main().
     * que es implicito en este caso porque no lo definimos.
     *
     * Con el operador "." podemos llamar al metodo main de Main.
     */
    var m = new Main();
    m.main();
};
