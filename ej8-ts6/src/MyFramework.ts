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
}
