class User{
    /**
     * Miembros privados
     */
    private _id:number;
    private _name:string;
    private _mail:string;
    private _isLogged:boolean;
    /**
     * Constructor 
     */
    constructor(id:number, name:string, mail:string){
        this._id = id;
        this._name = name;
        this._mail = mail;
        this._isLogged = false;
    }
    /**
     * Metodos setter
     */
    set id(id:number){
        this._id = id;
    }
    set name(name:string){
        this._name = name;
    }
    set mail(mail:string){
        this._mail = mail;
    }
    set isLogged(isLogged:boolean){
        this._isLogged = isLogged;
    }
    /**
     * Metodos getter
     */
    get id():number{
        return this._id;
    }
    get name():string{
        return this._name;
    }
    get mail():string{
        return this._mail;
    }
    get isLogged():boolean{
        return this._isLogged;
    }
    /**
     * Otros metodos
     */
    public printInfo():void{
        console.log("Nombre: "+ this.name + " email: "+ this.mail + " logged: "+ this.isLogged);
    }
}

class Main {
    main():void{
        console.log("Hola mundo");
        /**
         * Crear un Array que almacenara objetos del tipo User.
         */
        let usuarios:Array<User>;
        usuarios = new Array<User>();
        /**
         * Con push agregamos un objeto User al Array
         */
        usuarios.push(new User(1,"juan@juan.com","Juan"));
        usuarios.push(new User(2,"pepe@juan.com","Pepe"));
        usuarios.push(new User(3,"carlos@juan.com","Carlos"));
        /**
         * Con el bucle for iteramos el array
         */
        for(let i in usuarios){
            usuarios[i].printInfo();
        }
    }
}

window.onload = () => {
    let m:Main = new Main();
    m.main();
};