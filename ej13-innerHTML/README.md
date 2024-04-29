# Ejemplo 13: Completar la maquetacion utilizando la propiedad innerHTML.

## Introduccion

En el ejemplo, vamos a completar el contenido del:

```
<ul id="devicesList" class="collection"></ul>
```

Utilizando el texto en formato _jSON_ del archivo _devices.txt_.

## Completar el maquetado

Para ello, vamos a crear una nueva clase dentro de _main.ts_ y le daremos la capacidad de utilizar nuestro _framework_:

```
// Clase Main que se utiliza para completar el maquetado de la pagina
class ViewMainPage {
  // Haremos que con el mismo objeto de la clase Main pueda utilizar nuestro framework
  myf: MyFramework;
  constructor(myf: MyFramework) {
    this.myf = myf;
  }
}
```

Luego, vamos a crear un metodo que puede encontrar el componente del tipo lista de la pagina y junto a los datos deserializados de _archivos.txt_, pueda completar el codigo _html_. Para lograrlo, se utilizara la propiedad _innerHTML_ del componente tipo lista.

```
// Clase Main que se utiliza para completar el maquetado de la pagina
class ViewMainPage {
  // Haremos que con el mismo objeto de la clase Main pueda utilizar nuestro framework
  myf: MyFramework;
  constructor(myf: MyFramework) {
    this.myf = myf;
  }
  // Metodo que va completar el maquetado con los datos deserializados
  showDevices(list: DeviceInt[]): void {
    // Encuentro el componente por su id utilizando el framework
    let devicesUl: HTMLElement = this.myf.getElementById("devicesList");
    let items: string = "";
    // Recorro todos los elementos deserializados
    for (let i in list) {
      // Esto sirve para hacer que un switch aparezca activado
      let checkedStr = "";
      if (list[i].state == "1") checkedStr = "checked";
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
  }
}
```

Finalmente, vamos a utilizar la clase y el metodo creados:

```
// Clase Main que utiliza la interfaz GETResponseListener
class Main implements GETResponseListener {
  myf: MyFramework;
  // Main debera llamar al metodo showDevices de ViewMainPage
  view: ViewMainPage;
  handleGETResponse(status: number, response: string) {
    if (status == 200) {
      let data: DeviceInt[] = JSON.parse(response);
      // Llamamos al metodo showDevices para que complete el maquetado
      this.view.showDevices(data);
    }
  }
  main(): void {
    this.myf = new MyFramework();
    // Llamamos al constructor de ViewMainPage y le pasamos el objeto que le permite usar el framework
    this.view = new ViewMainPage(this.myf);
    this.myf.requestGET("devices.txt", this);
  }
}

window.onload = () => {
  let m: Main = new Main();
  m.main();
};
```

Se recomienda repasar este ejercicio en detalle. Dado que integra muchos de los temas vistos hasta el momento, y es fundamental para que nuestra _web app_ pase de ser estatica a dinamica.

## Material complementario

https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
