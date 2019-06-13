import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test22';
  public bandera:boolean;


  constructor(){
    this.bandera = true;
  }

  cambiarBoton(valor){
    this.bandera = valor;
  }


}
