// Clase User
class User {
  private _id: number;
  private _name: string;
  private _mail: string;
  private _isLogged: boolean;
  // Metodo contructor
  constructor(id: number, name: string, mail: string) {
    this._id = id;
    this._name = name;
    this._mail = mail;
    this._isLogged = false;
  }
  // Metodos getter
  get id(): number {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get mail(): string {
    return this._mail;
  }
  get isLogged(): boolean {
    return this._isLogged;
  }
  // Metodos setter
  set id(id: number) {
    this._id = id;
  }
  set name(name: string) {
    this._name = name;
  }
  set mail(mail: string) {
    this._mail = mail;
  }
  set isLogged(isLogged: boolean) {
    this._isLogged = isLogged;
  }
  printInfo(): void {
    // Uso de los getter
    console.log(
      "Nombre: " +
        this.name +
        " mail: " +
        this.mail +
        " logged: " +
        this.isLogged
    );
  }
}

// Clase Main
class Main {
  main(): void {
    // Creacion de un array que alamacenara objetos del tipo User
    let usuarios: Array<User>;
    usuarios = new Array<User>();
    // Carga de objetos del tipo User al array
    usuarios.push(new User(1, "Juan", "juan@juan.com"));
    usuarios.push(new User(2, "Pepe", "pepe@juan.com"));
    usuarios.push(new User(3, "Carlos", "carlos@juan.com"));
    // Recorriendo todos los objetos del array con for
    for (let i in usuarios) {
      usuarios[i].printInfo();
    }
  }
}

window.onload = () => {
  let m: Main = new Main();
  m.main();
};
