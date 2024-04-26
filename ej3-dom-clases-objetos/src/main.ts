// Clase Main.
class Main {
  // Metodo que solo imprime un mensaje y no recibe argumentos.
  main(): void {
    console.log("Hola mundo desde el metodo main del objeto");
  }
}

// Ejemplo de uso de DOM.
window.onload = () => {
  // Declaracion de un objeto del tipo Main.
  let m: Main = new Main();
  // Invocamos el metodo main de nuestro objeto.
  m.main();
};
