// Clase Main
class Main {
  myf: MyFramework;
  main(): void {
    this.myf = new MyFramework();
    let b: HTMLElement = this.myf.getElementById("boton");
    b.textContent = "Haceme Click";
    // Forma rapida de crear un Array alternativa a la vista en el ejemplo 4 con new
    let usuarios: Array<User> = [];
    usuarios.push(new User(1, "Juan", "juan@juan.com"));
    usuarios.push(new User(2, "Pepe", "pepe@juan.com"));
    usuarios.push(new User(3, "Carlos", "carlos@juan.com"));
    this.mostrarUsers(usuarios);
  }

  mostrarUsers(users: Array<User>): void {
    // Uso de template-literal-types con `${}
    let strTemplate: string = `${users
      // Uso del metodo Map
      .map((item) => `<li>${item.name} ${item.mail}</li>`)
      // Uso del metodo Join
      .join("")}`;
    let ul: HTMLElement = this.myf.getElementById("listaUsuarios");
    ul.innerHTML = strTemplate;
  }
}

window.onload = () => {
  let m: Main = new Main();
  m.main();
};
