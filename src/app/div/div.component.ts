import { Component } from '@angular/core';


// Esto es un decorator:
// Selector es el nombre de la etiqueta que vamos a crear
// templateUrl es donde tendremos el html de la etiqueta
// styleUrls es donde tendremos el css del html
@Component({
    selector: 'divison',
    templateUrl: './div.component.html',
    styleUrls: [ './div.component.css']
})

export class DivComponent {
    public divison = 'Hello from typescript';
    public paragraph: string;
    // Public, si usamos una private, no se puede mostrar pero la podemos utilizar
    // Aquí se utiliza ts, se puede definir un tipo de dato para una variable así:
    // nombre: string = 'Lo que sea' tipos, number, boolean, Array<tipo array si se quiere>
    // se puede poner tipo any para meterle lo que sea a el array

    // This is the first thing that is executed everytime the app is being opened
    constructor() {
        this.paragraph = 'This is a paragraph from a constructor, inside a component';
        // this.miFuncion();
        // Es una mala praxis llamar métodos desde el constructor
        // Solo debería ser usado para instanciar variables.
    }

    // Buena praxis de llamar funciones
    ngOnInit() {
        this.miFuncion();
    }


    miFuncion() {
        alert('Llamando un alert desde una función');
    }
}
