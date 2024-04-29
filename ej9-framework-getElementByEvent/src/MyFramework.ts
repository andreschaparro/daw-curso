// Clase MyFramework
class MyFramework {
  getElementById(id: string): HTMLElement {
    let el: HTMLElement;
    el = document.getElementById(id);
    return el;
  }
  getElementByEvent(evt: Event): HTMLElement {
    // Vamos a devolver el componente de la pagina que produce un determina evento
    return <HTMLElement>evt.target;
  }
}
