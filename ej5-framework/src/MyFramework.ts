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
