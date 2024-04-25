class MyFramework {
  getElementById(id: string): HTMLElement {
    /**
     * HTMLElement es del tipo objeto no primitivo.
     */
    let el: HTMLElement;
    el = document.getElementById(id);
    return el;
  }
}
