class Main {
  myf: MyFramework;
  main(): void {
    this.myf = new MyFramework();
    let b: HTMLElement = this.myf.getElementById("boton");
    console.log(b);
    b.textContent = "Haceme Click";
  }
}

window.onload = () => {
  let m: Main = new Main();
  m.main();
};
