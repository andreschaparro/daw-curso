// Clase User
class User {
  private _id: number;
  private _name: string;
  private _mail: string;
  private _isLogged: boolean;
  constructor(id: number, name: string, mail: string) {
    this._id = id;
    this._name = name;
    this._mail = mail;
    this._isLogged = false;
  }
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
        this.name +
        " mail: " +
        this.mail +
        " logged: " +
        this.isLogged
    );
  }
}
