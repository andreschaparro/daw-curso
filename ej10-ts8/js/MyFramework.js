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
    /**
     * Metodo para hacer el request con el metodo GET de HTTP.
     * debemos pasar la url donde esta el recurso del servidor que solicitamos.
     * Y debemos pasarle un objeto del tipo GETResponseListener
     * que lo definimos antes como una interfaz.
     */
    MyFramework.prototype.requestGET = function (url, listener) {
        /**
         * Utilizamos el clasico XMLHttpRequest de AJAX generar el request
         * y esperar una respuesta de forma asincronica.
         *
         * La interfaz nos enmascarara este proceso asincronico.
         *
         * El que use el framework solo sabra que hay un metodo llamado requestGET y
         * que debe implementar la interfaz GETResponseListener y el metodo
         * handleGETResponse segun sus necesidades
         */
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    /**
                     * Utilizamos el metodo definido en la interfaz una
                     * vez que el AJAX se resolvio.
                    */
                    listener.handleGETResponse(xhr.status, xhr.responseText);
                }
                else {
                    /**
                     * Utilizamos el metodo definido en la interfaz si fallo
                     * el AJAX.
                    */
                    listener.handleGETResponse(xhr.status, null);
                }
            }
        };
        xhr.open('GET', url, true);
        xhr.send(null);
    };
    return MyFramework;
}());
