class Main implements EventListenerObject {
  myf: MyFramework;
  /**
   * Un atributo puede inicializarse de igual forma para todos los objetos de esta
   * forma sin necesidad de crear un constructor para hacerlo.
   */
  counter:number = 0;
  handleEvent(evt: Event): void {
    this.counter++;
    /**
     * Hacemos uso del framework para econtrar el boton
     * utilizando el Event.
     */
    let btn:HTMLElement = this.myf.getElementByEvent(evt);
    /**
     * Volvemos a modificar el html desde el typescript.
     */
    btn.textContent = "click:"+this.counter;
  }
  main(): void {
    this.myf = new MyFramework();
    let b: HTMLElement = this.myf.getElementById("boton");
    console.log(b);
    b.textContent = "Haceme Click";
    b.addEventListener("click", this);
  }
}

window.onload = () => {
  let m: Main = new Main();
  m.main();
};
