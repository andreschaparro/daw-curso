// Clase Main
class Main {
  // atributo publico inicializado
  x: number = 0;
  // atributo publico sin inicializar
  y: number;
  // atributo privado
  private _z: number = 0;
  // metodo publico
  incrementar(n: number): void {
    this.x += n;
    console.log("incrementar: " + this.x);
    //llamada al metodo privado
    this._privIncrementar(n);
    console.log("privIncrementar: " + this._z);
  }
  // metodo privado
  private _privIncrementar(n: number): void {
    this._z += n;
  }
}

// Uso de DOM
window.onload = () => {
  // Creacion de un objeto de la clase Main
  let m: Main = new Main();
  // Llamada la metodo publico
  m.incrementar(3);
};
