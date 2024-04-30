var ViewMainPage = /** @class */ (function () {
    function ViewMainPage(myf) {
        this.myf = myf;
    }
    ViewMainPage.prototype.showDevices = function (list) {
        var devicesUl = this.myf.getElementById("devicesList");
        var items = "";
        for (var i in list) {
            var checkedStr = "";
            if (list[i].state == 1)
                checkedStr = "checked";
            switch (list[i].type) {
                case 0: // Lampara
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
                            // Convierto a string porque es un number
                            list[i].id.toString() +
                            "' " +
                            checkedStr +
                            " type='checkbox'>" +
                            "<span class='lever'></span>" +
                            "On" +
                            "</label>" +
                            "</div>" +
                            "</li>";
                    break;
                case 1: // Persiana
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
                            // Convierto a string porque es un number
                            list[i].id.toString() +
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
        devicesUl.innerHTML = items;
    };
    // Modificamos la funcion para que devuelva 1 o 0 en vez de true o false para que coincida con datos.json
    ViewMainPage.prototype.getSwitchStateById = function (id) {
        var el = this.myf.getElementById(id);
        if (el.checked === true) {
            return 1;
        }
        else {
            return 0;
        }
    };
    return ViewMainPage;
}());
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.handleEvent = function (evt) {
        var sw = this.myf.getElementByEvent(evt);
        console.log("Click en device: " + sw.id);
        var data = {
            // Remuevo el dev_ y me quedo con el numero y lo convierto a number
            id: parseInt(sw.id.split("_")[1]),
            state: this.view.getSwitchStateById(sw.id),
        };
        this.myf.requestPOST("devices", data, this);
    };
    Main.prototype.handleGETResponse = function (status, response) {
        if (status == 200) {
            var data = JSON.parse(response);
            this.view.showDevices(data);
            for (var i in data) {
                var sw = this.myf.getElementById(
                // Convierto a string porque es un number
                "dev_" + data[i].id.toString());
                sw.addEventListener("click", this);
            }
        }
    };
    Main.prototype.handlePOSTResponse = function (status, response) {
        // Enviamos a la consola la confimacion del comando si el response indica 200 OK
        if (status == 200) {
            console.log(response);
        }
    };
    Main.prototype.main = function () {
        this.myf = new MyFramework();
        this.view = new ViewMainPage(this.myf);
        // el get se hace a /devices
        this.myf.requestGET("devices", this);
    };
    return Main;
}());
window.onload = function () {
    var m = new Main();
    m.main();
};
