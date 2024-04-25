class User {
    /**
     * Miembros privados
     */
    private _id: number;
    private _name: string;
    private _mail: string;
    private _isLogged: boolean;
    /**
     * Constructor
     */
    constructor(id: number, mail: string, name: string) {
      this._id = id;
      this._name = name;
      this._mail = mail;
      this._isLogged = false;
    }
    /**
     * Metodos setter
     */
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
    /**
     * Metodos getter
     */
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
    /**
     * Otros metodos
     */
    public printInfo(): void {
      console.log(
        "Nombre: " +
          this.name +
          " email: " +
          this.mail +
          " logged: " +
          this.isLogged
      );
    }
  }
  