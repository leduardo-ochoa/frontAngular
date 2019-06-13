import { Component } from '@angular/core';


@Component({
    selector: 'person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.css']
})

export class PersonComponent {
    public name = 'Luis';
    public id: number = 1234;
    public email = 'Leduardo.ochoa@udea.edu.co';
    public write;


constructor(){

    this.write = 'Estoy mostrando desde el constructor';
}


miFuncion(){

    var numerito = 5;

    var numerito2 = 3;

    var resultado = numerito+numerito2;

    console.log('El resultado de la función es = '+ resultado);

}

ngOnInit(){

    this.miFuncion();

}

}

