# Ejemplo 5: Necesidad de un framework

## Introduccion

Un _framework_ es un conjunto de herramientas que nos facilitaran el desarrollo de nuestras _web apps_.

El mismo, es necesario, porque nos dara:

- _Abstraccion_: que es el poder usarlo y no preocuparnos por como esta implementado. Como por ejemplo, olvidarnos del _DOM_.
- _Escalabilidad_: que es que nos permita agregarle nuevas caracteristicas a lo largo del tiempo.
- _Reusabilidad_: que es poder reutilizar sus caracteristicas permitiendonos reducir nuestro codigo y no tener que volver a inventar la rueda.
- _Estructura y Organizacion_: nos imponen una forma de hacer las cosas que se mantiene a lo largo de todo nuestro proyecto.

Nuestro framework estara en un archivo separado llamado _MyFramework.ts_.

La idea, es tener una clase donde esten implementadas todas las caracteristicas del _framework_ como metodos publicos.

```
// Clase MyFramework
class MyFramework {
  // Ejemplo de como abstraernos del uso de DOM
  getElementById(id: string): HTMLElement {
    // Vamos a devolver el componente de la pagina que tiene un determinado id.
    let el: HTMLElement;
    el = document.getElementById(id);
    return el;
  }
}
```

El tener otros archivos _typescript_ no afecta la operacion de transpilacion.

## Uso del framework

Para poder usar los metodos del _framework_:

1. Crear un objeto de la clase definida en el mismo.

```
// Clase Main
class Main {
  // En un atributo tendremos el objeto de la clase definida en nuestro framework.
  myf: MyFramework;
  main(): void {
    // Debemos llamar al constructor para poder empezar a utilizar los metodos del framework.
    this.myf = new MyFramework();
    let b: HTMLElement = this.myf.getElementById("boton");
    // Con este metodo podemos cambiar el texto del componente de la pagina encontrado por el framework.
    b.textContent = "Haceme Click";
  }
}

window.onload = () => {
  let m: Main = new Main();
  m.main();
};
```

2. En _index.html_ agregar la carga del script _MyFramework.js_ luego de cargar el _main.js_.

```
<!--JavaScript at end of body for optimized loading-->
<script src="js/materialize.min.js"></script>
<!--Carga del script resultante del proceso de transpilacion de nuestro main.ts-->
<script src="js/main.js"></script>
<!--Carga del script resultante del proceso de transpilacion de nuestro framework-->
<script src="js/MyFramework.js"></script>
```
