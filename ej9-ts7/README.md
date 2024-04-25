# Ejemplo 9: Ampliacion de nuestro framework para encontrar ante el disparo de un evento que HTMLElement lo produjo.

Modificamos la clase *MyFramework* agregando el metodo *getElementByEvent(evt:Event): HTMLElement*.

Ver comentarios en el codigo.

Recapitulando, nuestro framework nos permite ubicar el *HTMLElemnt* por *id* o por disparo de *Event*, sin necesidad de recurrir al *DOM* directamente.