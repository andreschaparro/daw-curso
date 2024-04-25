var MyFramework = /** @class */ (function () {
    function MyFramework() {
    }
    MyFramework.prototype.getElementById = function (id) {
        /**
         * HTMLElement es un tipo de objeto que representa en
         * typestript la contracara de un componente html.
         */
        var el;
        el = document.getElementById(id);
        return el;
    };
    MyFramework.prototype.getElementByEvent = function (evt) {
        /**
         * El metodo target de un Event devuelve el
         * objeto que lo disparo que con <HTMLElement>
         * le estamos diciendo al transpilador que esperamos que
         * sea un HTMLElement.
         */
        return evt.target;
    };
    return MyFramework;
}());
