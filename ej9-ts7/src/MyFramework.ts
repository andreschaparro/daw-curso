class MyFramework {
  getElementById(id: string): HTMLElement {
    /**
     * HTMLElement es un tipo de objeto que representa en
     * typestript la contracara de un componente html.
     */
    let el: HTMLElement;
    el = document.getElementById(id);
    return el;
  }
  getElementByEvent(evt:Event): HTMLElement {
    /**
     * El metodo target de un Event devuelve el
     * objeto que lo disparo que con <HTMLElement>
     * le estamos diciendo al transpilador que esperamos que
     * sea un HTMLElement.
     */
    return <HTMLElement>evt.target;
  }
}
