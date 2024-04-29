// Clase Main que utiliza las interfaces EventListenerObject y GETResponseListener
class Main {
    constructor() {
        this.counter = 0;
    }
    handleEvent(evt) {
        this.counter++;
        let btn = this.myf.getElementByEvent(evt);
        btn.textContent = "Clicks: " + this.counter;
    }
    handleGETResponse(status, response) {
        console.log("Llego status:" + status + " response:" + response);
    }
    main() {
        this.myf = new MyFramework();
        let b = this.myf.getElementById("boton");
        b.textContent = "Haceme Click";
        b.addEventListener("click", this);
        // this.myf.requestGET("devices.txt", this);
        // Uso de la promise para pedir el archivo "devices.txt" y los metods then y catch
        this.myf
            .requestGETProm("devices.txt")
            .then((r) => {
            console.log("Llego status:" + r.state + " response:" + r.data);
        })
            .catch((reason) => {
            console.error("Error:" + reason.state);
        });
    }
}
window.onload = () => {
    let m = new Main();
    m.main();
};
