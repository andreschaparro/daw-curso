# Ejemplo 10: Framework metodo requestGET, AJAX

## Introduccion

En el ejemplo 2, vimos como se resolvia el armado de la _web app estatica_.

Ahora, vamos a necesitar hacer otro _request_ para pedir el archivo _devices.txt_. Pero este _request_, no se disparara de forma automatica durante el proceso de reconstruccion de la _web app_ en el navegador. Necesitaremos hacerlo de forma explicita desde nuestro programa.

El ejemplo, lo vamos a resolver pensado que nuestro _framework_ debe proveernos la capacidad de hacer un _request_ de forma manual y poder resolver el _response_ mediante un codigo escrito en nuestro programa.

## Creacion de una interfaz para procesar el response del servidor

El contenido que nos puede devolver el servidor es variado. En este caso es un archivo de texto, pero bien podria un archivo en formato _jSON_. Lo que cambiaria la forma de procesarlo en el programa.

Por ello, necesitamos crear una interfaz que obligue a la clase que la implementa el _framework_, a definir un metodo que reciba el codigo de _status_ y procesar el archivo. Asi, la implementacion del metodo le permitira al usuario del _framework_ procesarolo como desee.

```
// Interface que debe implementar la clase que utilice el framework y que la obliga a definir el metodo handleGETResponse para procesar el archivo
interface GETResponseListener {
  handleGETResponse(status: number, response: string): void;
}
```

## Creacion de un metodo en el framework para hacer el request

Hay que crear un metodo en la clase del _framework_ para poder hacer el _request_. Al mismo, hay que pasarle como parametros:

- La _url_ de donde se obtendra el archivo.
- La interfaz, creada anteriormente e implementada por la clase que utiliza el framewrok, de donde obtendremos el metodo para procesar el archivo.

Internamente, el metodo utilizara AJAX para resolver el _request_ y esperar el _response_ de forma asincronica. Aqui vemos, como el _framework_ nos vuelve a abstraer de otras problematicas.

```
// Interface que debe implementar la clase que utilice el framework y que la obliga a definir el metodo handleGETResponse para procesar el archivo
interface GETResponseListener {
  handleGETResponse(status: number, response: string): void;
}

// Clase MyFramework
class MyFramework {
  getElementById(id: string): HTMLElement {
    let el: HTMLElement;
    el = document.getElementById(id);
    return el;
  }
  getElementByEvent(evt: Event): HTMLElement {
    return <HTMLElement>evt.target;
  }
  // Metodo para hacer el request con la url y la interfaz, creada anteriormente e implementada por la clase que utiliza el framewrok, de donde obtendremos el metodo handleGETResponse para procesar el archivo
  requestGET(url: string, listener: GETResponseListener): void {
    // Resolucion asincronica por AJAX.
    let xhr: XMLHttpRequest;
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          listener.handleGETResponse(xhr.status, xhr.responseText);
        } else {
          listener.handleGETResponse(xhr.status, null);
        }
      }
    };
    xhr.open("GET", url, true);
    xhr.send(null);
  }
}
```

## Uso del framework

```
// Clase Main que utiliza las interfaces EventListenerObject y GETResponseListener
class Main implements EventListenerObject, GETResponseListener {
  myf: MyFramework;
  counter: number = 0;
  handleEvent(evt: Event): void {
    this.counter++;
    let btn: HTMLElement = this.myf.getElementByEvent(evt);
    btn.textContent = "Clicks: " + this.counter;
  }
  // Definicion de handleGETResponse que se debe hacer por implementar la interfaz GETResponseListener
  handleGETResponse(status: number, response: string) {
    // Solo imprime el contenido del archivo en la consola a modo de prueba
    console.log("Llego status:" + status + " response:" + response);
  }
  main(): void {
    this.myf = new MyFramework();
    let b: HTMLElement = this.myf.getElementById("boton");
    b.textContent = "Haceme Click";
    b.addEventListener("click", this);
    // Hacemos el request de "devices.txt", y como la clase Main implementa GETResponseListener, con pasarle this podremos recuperar la definicion de handleGETResponse en el framework
    this.myf.requestGET("devices.txt", this);
  }
}

window.onload = () => {
  let m: Main = new Main();
  m.main();
};
```

Se recomienda repasar este ejercicio en detalle. Dado que integra muchos de los temas vistos hasta el momento, y es fundamental saber como hacer un _request_ al sevidor.

## Material complementario

https://www.w3schools.com/js/js_ajax_intro.asp
