class Main {
  myf: MyFramework;
  main(): void {
    this.myf = new MyFramework();
    let b: HTMLElement = this.myf.getElementById("boton");
    console.log(b);
    b.textContent = "Haceme Click";
    /**
     * Forma rapida de crear un Array alternativa a la vista
     * en el ejemplo 4 con new.
     */
    let users:Array<User> = [];
    users.push(new User(1,"juan@gmail.com","Juan"));
    users.push(new User(2,"pedro@gmail.com","Pedro"));
    users.push(new User(3,"carlos@gmail.com","Carlos"));
    this.mostrarUsers(users);
  }
  mostrarUsers(users:Array<User>): void {
    /**
     * Alternativa con bucle for
     * 
     * let items:string="";
     * for(let i in users) {
     *  users[i].printInfo();
     *  items+="<li>" + users[i].name + " " + users[i].email + "</li>";
     * }
     * let ul:HTMLElement = this.myf.getElementById("listaUsuarios");
     * ul.innerHTML = items;
     */
    
    /**
     * El .join("") cumple la misma funcion del += de la alternativa anterior
     */
    let strTemplate:string = `${
      users.map((item) => `<li>${item.name} ${item.mail}</li>`).join("")
    }`;

    let ul:HTMLElement = this.myf.getElementById("listaUsuarios");
    ul.innerHTML = strTemplate;
  }
}

window.onload = () => {
  let m: Main = new Main();
  m.main();
};
