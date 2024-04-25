/**
 * Definiremos una interfaz para crear que otras clases deban implementar el metodo
 * handleGETResponse si o si.
 * 
 * El metodo handleGETResponse esta pensado para que cada clase lo implemente como quiera
 * pero respetando los argumentos y lo que devuelve.
 * 
 * En este caso se llama listener porque la idea es que se quede escuchando hasta que
 * llegue el response del servidor al pedido GET y luego la clase que lo implemente algo con
 * el codigo de status y el recurso compartido como un string que les llega.
 * 
 * Los tipicos codigos de status son: 200 OK, 404 NOT FOUND, 505 INTERNAL SERVER ERROR.
 */
interface GETResponseListener{
  handleGETResponse(status:number,response:string):void;
}

class MyFramework {
  getElementById(id: string): HTMLElement {
    /**
     * HTMLElement es un tipo de objeto que representa en
     * typestript la contracara de un componente html.
     */
    let el: HTMLElement;
    el = document.getElementById(id);
    return el;
  }
  getElementByEvent(evt:Event): HTMLElement {
    /**
     * El metodo target de un Event devuelve el
     * objeto que lo disparo que con <HTMLElement>
     * le estamos diciendo al transpilador que esperamos que
     * sea un HTMLElement.
     */
    return <HTMLElement>evt.target;
  }
  /**
   * Metodo para hacer el request con el metodo GET de HTTP.
   * debemos pasar la url donde esta el recurso del servidor que solicitamos.
   * Y debemos pasarle un objeto del tipo GETResponseListener 
   * que lo definimos antes como una interfaz.
   */
  requestGET(url:string, listener: GETResponseListener):void {
    /**
     * Utilizamos el clasico XMLHttpRequest de AJAX generar el request
     * y esperar una respuesta de forma asincronica.
     * 
     * La interfaz nos enmascarara este proceso asincronico.
     * 
     * El que use el framework solo sabra que hay un metodo llamado requestGET y
     * que debe implementar la interfaz GETResponseListener y el metodo 
     * handleGETResponse segun sus necesidades
     */
    let xhr: XMLHttpRequest;
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if(xhr.readyState == 4) {
        if(xhr.status == 200) {
          /** 
           * Utilizamos el metodo definido en la interfaz una
           * vez que el AJAX se resolvio.
          */
          listener.handleGETResponse(xhr.status,xhr.responseText);
        }
        else
        {
          /** 
           * Utilizamos el metodo definido en la interfaz si fallo
           * el AJAX.
          */
        listener.handleGETResponse(xhr.status,null);
        }
      }
    };
    xhr.open('GET', url, true);
    xhr.send(null);
  }
}
