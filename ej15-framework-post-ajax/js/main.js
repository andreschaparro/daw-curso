// Clase Main que se utiliza para completar el maquetado de la pagina
var ViewMainPage = /** @class */ (function () {
    function ViewMainPage(myf) {
        this.myf = myf;
    }
    // Metodo que va completar el maquetado con los datos deserializados
    ViewMainPage.prototype.showDevices = function (list) {
        // Encuentro el componente por su id utilizando el framework
        var devicesUl = this.myf.getElementById("devicesList");
        var items = "";
        // Recorro todos los elementos deserializados
        for (var i in list) {
            // Esto sirve para hacer que un switch aparezca activado
            var checkedStr = "";
            if (list[i].state == "1")
                checkedStr = "checked";
            // Generamos cada "collection-item" avatar
            switch (list[i].type) {
                case "0": // Lampara
                    items +=
                        "<li class='collection-item avatar'>" +
                            "<img src='images/lightbulb.png' alt='' class='circle'>" +
                            "<span class='title'>" +
                            list[i].name +
                            "</span>" +
                            "<p>" +
                            list[i].description +
                            "</p>" +
                            "<div class='switch secondary-content'>" +
                            "<label>" +
                            "Off" +
                            // Cada switch tendra un id distinto
                            "<input id='dev_" +
                            list[i].id +
                            "' " +
                            checkedStr +
                            " type='checkbox'>" +
                            "<span class='lever'></span>" +
                            "On" +
                            "</label>" +
                            "</div>" +
                            "</li>";
                    break;
                case "1": // Persiana
                    items +=
                        "<li class='collection-item avatar'>" +
                            "<img src='images/window.png' alt='' class='circle'>" +
                            "<span class='title'>" +
                            list[i].name +
                            "</span>" +
                            "<p>" +
                            list[i].description +
                            "</p>" +
                            "<div class='switch secondary-content'>" +
                            "<label>" +
                            "Off" +
                            // Cada switch tendra un id distinto
                            "<input id='dev_" +
                            list[i].id +
                            "' " +
                            checkedStr +
                            " type='checkbox'>" +
                            "<span class='lever'></span>" +
                            "On" +
                            "</label>" +
                            "</div>" +
                            "</li>";
                    break;
            }
        }
        // Completamos el maquetado
        devicesUl.innerHTML = items;
    };
    // Metodo para obtener el estado del switch en funcion de su id
    ViewMainPage.prototype.getSwitchStateById = function (id) {
        var el = this.myf.getElementById(id);
        return el.checked;
    };
    return ViewMainPage;
}());
// Clase Main que utiliza las interfaces GETResponseListener, GETResponseListener y POSTResponseListener
var Main = /** @class */ (function () {
    function Main() {
    }
    // La interfaz EventListenerObject nos obliga a implementar el metodo handleEvent
    Main.prototype.handleEvent = function (evt) {
        // Buscamos el switch que produjo el evento onClick utilizando nuestro framework
        var sw = this.myf.getElementByEvent(evt);
        console.log("Click en device: " + sw.id);
        // Obtenemos el estado del switch que se toco y lo guardamos en un objeto del tipo object que tendra pares key-value
        var data = {
            id: sw.id,
            state: this.view.getSwitchStateById(sw.id),
        };
        // url debera ser modificado a futuro...
        this.myf.requestPOST("url", data, this);
    };
    // La interfaz GETResponseListener nos obliga a implementar el metodo handleGETResponse
    Main.prototype.handleGETResponse = function (status, response) {
        if (status == 200) {
            var data = JSON.parse(response);
            // Llamamos al metodo showDevices para que complete el maquetado
            this.view.showDevices(data);
            // Creamos los listener para todos los switch
            for (var i in data) {
                // Buscamos el switch de cada "collection-item" avatar por id utilizando nuestro framework
                var sw = this.myf.getElementById("dev_" + data[i].id);
                sw.addEventListener("click", this);
            }
        }
    };
    // La interfaz POSTResponseListener nos obliga a implementar el metodo handlePOSTResponse
    Main.prototype.handlePOSTResponse = function (status, response) {
        // Solo se mostrara en la pantalla si se proceso correctamente el request en base al status del response
        if (status == 200) {
            console.log(response);
        }
    };
    Main.prototype.main = function () {
        this.myf = new MyFramework();
        // Llamamos al constructor de ViewMainPage y le pasamos el objeto que le permite usar el framework
        this.view = new ViewMainPage(this.myf);
        this.myf.requestGET("devices.txt", this);
    };
    return Main;
}());
window.onload = function () {
    var m = new Main();
    m.main();
};
