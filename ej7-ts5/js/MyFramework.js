var MyFramework = /** @class */ (function () {
    function MyFramework() {
    }
    MyFramework.prototype.getElementById = function (id) {
        /**
         * HTMLElement es del tipo objeto no primitivo.
         */
        var el;
        el = document.getElementById(id);
        return el;
    };
    return MyFramework;
}());
