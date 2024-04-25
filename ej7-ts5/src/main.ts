class Main {
  myf: MyFramework;
  main(): void {
    this.myf = new MyFramework();
    let b: HTMLElement = this.myf.getElementById("boton");
    console.log(b);
    b.textContent = "Haceme Click";
    b.addEventListener("click", this.evento);
    /**
     * A veces es util preguntarnos que es this
     * para debug.
     */
    console.log("this en main:");
    console.log(this);
  }
  evento(ev:Event): void {
    console.log("se hizo click!");
    console.log("this en evento:");
    console.log(this);
  }
}

window.onload = () => {
  let m: Main = new Main();
  m.main();
};
