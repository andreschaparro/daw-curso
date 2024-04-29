# Ejemplo 12: Proceso de deserializacion de un archivo jSON

## Introduccion

El ejemplo, va a hacer lo mismo que el ejemplo 10. Pero esta vez, el contenido del archivo _devices.txt_ va a ser un texto en el formato de serializacion _jSON_.

El formato _jSON_ tiene la siguiente sintaxis:

```
[
  {
    "id":"1",
    "name":"Lampara 1",
    "description":"Luz living",
    "state":"0",
    "type":"0"
  } ,
  ...
]
```

## Deserializacion

Primero, debe definirse un nuevo tipo de dato utlilizando una interfaz. El mismo, debe ser consistente con los campos y tipo de datos que conforman cada elemento del archivo _jSON_.

Segundo, debe crearse un _Array_ utilizando el nuevo tipo de dato.

Tercer, utilizar el metodo _parse_ del objeto llamado _JSON_ y pasarle como parametro el archivo devuelto por el servidor.

Finalmente, se guardan los valores retornados en el tercer paso dentro del _Array_.

```
// Inteface para generar un nuevo tipo de dato para deserializar
interface DeviceInt {
  id: string;
  name: string;
  description: string;
  state: string;
  type: string;
}

// Clase Main que utiliza las interfaces EventListenerObject y GETResponseListener
class Main implements EventListenerObject, GETResponseListener {
  myf: MyFramework;
  counter: number = 0;
  handleEvent(evt: Event): void {
    this.counter++;
    let btn: HTMLElement = this.myf.getElementByEvent(evt);
    btn.textContent = "Clicks: " + this.counter;
  }
  handleGETResponse(status: number, response: string) {
    // Voy a deserializar solo si se recibio el archivo correctamente
    if (status == 200) {
      // Creo un Array con el nuevo tipo de dato y deserializo el archivo
      let data: DeviceInt[] = JSON.parse(response);
      console.log(data);
    }
  }
  main(): void {
    this.myf = new MyFramework();
    let b: HTMLElement = this.myf.getElementById("boton");
    b.textContent = "Haceme Click";
    b.addEventListener("click", this);
    this.myf.requestGET("devices.txt", this);
  }
}

window.onload = () => {
  let m: Main = new Main();
  m.main();
};
```

## Material complementario

https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON
