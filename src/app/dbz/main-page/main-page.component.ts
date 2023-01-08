import { Component } from '@angular/core';

export interface Personaje {
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
  
}
