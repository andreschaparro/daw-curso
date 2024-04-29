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
    return ViewMainPage;
}());
// Clase Main que utiliza la interfaz GETResponseListener
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.handleGETResponse = function (status, response) {
        if (status == 200) {
            var data = JSON.parse(response);
            // Llamamos al metodo showDevices para que complete el maquetado
            this.view.showDevices(data);
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
