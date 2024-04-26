# Ejemplo 4: Constructor, getter, setter, y arrays

## Constructor

Es un metodo que se llama cuando se crea el objeto con _new_.

No es obligatorio implementarlo, pero ser util para recibir parametros e inicializar algunos algunos atributos.

Es un metodo que no devuelve nada y se debe llamar _constructor_, que es una palabra reservada.

Como el constructor es un metodo de la clase, puede inicializar tanto atributos publicos como privados.

```
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
  printInfo(): void {
    console.log(
      "Nombre: " +
        this._name +
        " mail: " +
        this._mail +
        " logged: " +
        this._isLogged
    );
  }
}

window.onload = () => {
  let u1: User = new User(1, "Juan", "juan@juan.com");
  u1.printInfo();
};

```

## Getter

Es un metodo que se utiliza para poder leer el valor de un atributo privado de una clase por fuera de la misma.

Se antepote la palabra reservada _get_ a la implementacion del metodo.

No debe recibir ningun argumento.

Debe devolver el mismo tipo de dato que posee el atributo privado.

Luego, se utiliza como si el metodo fuese un atributo.

```
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
  printInfo(): void {
    console.log(
      "Nombre: " +
        this._name +
        " mail: " +
        this._mail +
        " logged: " +
        this._isLogged
    );
  }
}

window.onload = () => {
  let u1: User = new User(1, "Juan", "juan@juan.com");
  u1.printInfo();
  // Uso de los getter
  console.log("Metodo getter Nombre: " + u1.name);
  console.log("Metodo getter mail: " + u1.mail);
  console.log("Metodo getter logged: " + u1.isLogged);
};
```

## Setter

Es un metodo que se utiliza para poder modificar el valor de un atributo privado de una clase por fuera de la misma.

Se antepote la palabra reservada _set_ a la implementacion del metodo.

Debe recibir el mismo tipo de dato que posee el atributo privado

No debe devolver nada.

Luego, se utiliza como si el metodo fuese un atributo.

```
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
    console.log(
      "Nombre: " +
        this._name +
        " mail: " +
        this._mail +
        " logged: " +
        this._isLogged
    );
  }
}

window.onload = () => {
  let u1: User = new User(1, "Juan", "juan@juan.com");
  u1.printInfo();
  // Uso de los getter
  console.log("Metodo getter Nombre: " + u1.name);
  console.log("Metodo getter mail: " + u1.mail);
  console.log("Metodo getter logged: " + u1.isLogged);
  // Uso de los setter
  u1.name = "Pepe";
  u1.mail = "pepe@juan.com";
  console.log("Metodo getter Nombre: " + u1.name);
  console.log("Metodo getter mail: " + u1.mail);
  console.log("Metodo getter logged: " + u1.isLogged);
};
```

## Arrays

Un objeto de tipo _array_ se utiliza crear una lista de objetos de un determinado tipo.

Para recorrer todos los objetos que estan en el _array_, se puede utilizar el bucle _for_.

```
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
```

## Material complementario

https://www.typescriptlang.org/docs/handbook/2/classes.html#constructors

https://www.typescriptlang.org/docs/handbook/2/classes.html#getters--setters

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays
