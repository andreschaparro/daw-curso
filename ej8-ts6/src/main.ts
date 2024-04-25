class Main implements EventListenerObject {
  myf: MyFramework;
  handleEvent(evt: Event): void {
    console.log("handleEvent");
    console.log("this en handleEvent:");
    console.log(this);
  }
  main(): void {
    this.myf = new MyFramework();
    let b: HTMLElement = this.myf.getElementById("boton");
    console.log(b);
    b.textContent = "Haceme Click";
    b.addEventListener("click", this);
    /**
     * A veces es util preguntarnos que es this
     * para debug.
     */
    console.log("this en main:");
    console.log(this);
  }
}

window.onload = () => {
  let m: Main = new Main();
  m.main();
};
