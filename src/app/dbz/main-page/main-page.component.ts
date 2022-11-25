import { Component } from '@angular/core';

interface Personaje {
  nombre: string
  poder: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[] = []

  nuevo : Personaje = {
    nombre: "",
    poder: 0
  }

  agregar()
  {
    
    if( this.nuevo.nombre.trim().length === 0 ) return;

    this.personajes.push(this.nuevo)

    this.limpiar()

  }
  
  limpiar()
  {
    this.nuevo = {
      nombre: "",
      poder: 0
    }    
  }

}
