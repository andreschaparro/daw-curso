/**
 * Vemos como una misma clase puede implementar varias interfaces
 */

class Main implements EventListenerObject, GETResponseListener {
  myf: MyFramework;
  /**
   * Un atributo puede inicializarse de igual forma para todos los objetos de esta
   * forma sin necesidad de crear un constructor para hacerlo.
   */
  counter:number = 0;
  handleEvent(evt: Event): void {
    this.counter++;
    /**
     * Hacemos uso del framework para econtrar el boton
     * utilizando el Event.
     */
    let btn:HTMLElement = this.myf.getElementByEvent(evt);
    /**
     * Volvemos a modificar el html desde el typescript.
     */
    btn.textContent = "click:"+this.counter;
  }
  /**
   * Nuestra implementacion del metodo handleGETResponse
   * solo mostrara el contenido en la consola.
   */
  handleGETResponse(status:number,response:string){
    console.log("Llego status:"+status+" response:"+response);
  }
  main(): void {
    this.myf = new MyFramework();
    let b: HTMLElement = this.myf.getElementById("boton");
    console.log(b);
    b.textContent = "Haceme Click";
    b.addEventListener("click", this);
    /**
     * Aqui generamos el request con GET
     * para pedir el archivo devices.txt
     * como Main implementa GETResponseListener
     * el objeto GETResponseListener solicitado 
     * como segundo parametro es this.
     * 
     * El this nos obligara a hacer el metodo handleGETResponse
     * para *Main* que nos permitira procesar la respuesta cuando llegue
     * 
     * NOTA: Recordar que internamente trabaja de forma asincronica con AJAX
     * 
     * this.myf.requestGET("devices.txt",this);
     */

    /**
    * Alternativa con el metodo de promises.
    * 
    * Lafuncion anonima de .then se ejecuta en caso de resolve.
    * la clase HttpResponse la definimos nosotros y r llega a traves de
    * resolve(r) en el metodo requestGETProm del framework
    * 
    * La funcion anonima de .catch se ejecuta en caso de rejected.
    * la clase HttpResponse la definimos nosotros y reason llega a traves de
    * rejected(r) en el metodo requestGETProm del framework.
    */
    this.myf.requestGETProm("devices.txt").then((r:HttpResponse)=>{
          console.log("Llego status:"+r.state+" response:"+r.data);
          console.log("this vale:");
          console.log(this);
      }).catch((reason:HttpResponse)=>{
        console.error("Error:"+reason.state);
      });
  }
}

window.onload = () => {
  let m: Main = new Main();
  m.main();
};