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
    return MyFramework;
}());
