class Main {
  main(): void {
    console.log("Hola mundo");
  }
}
/**
 * Forma de utilizar el DOM para llamar al metodo
 * onload de window y definir una funcion que
 * se ejecute cuando finaliza la carga de la pagina.
 *
 * Esta nueva forma es del tipo () => que
 * reemplaza a la forma utilizando function y que
 * no recibe argumentos ni devuelve nada.
 * El operador => se llama Fat Arrow.
 */
window.onload = () => {
  /**
   * nombre:tipo es la forma de declarar variables.
   *
   * let tiene validez dentro de las llaves donde fue definida.
   * de forma similar a una variable local de C.
   *
   * new invoca al constructor de Main().
   * que es implicito en este caso porque no lo definimos.
   *
   * Con el operador "." podemos llamar al metodo main de Main.
   */
  let m: Main = new Main();
  m.main();
};
