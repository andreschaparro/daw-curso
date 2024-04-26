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
