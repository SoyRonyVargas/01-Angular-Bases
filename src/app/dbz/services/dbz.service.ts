import { Injectable } from '@angular/core';
import { Personaje } from '../main-page/main-page.component';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private _personajes: Personaje[] = []

  constructor() { 
    console.log('servicio inicializado');
  }

  get personajes() : Personaje[] {
    return [...this._personajes]
  }

  agregarNuevoPersonaje( personaje : Personaje )
  {
    this._personajes.push(personaje)
  }


}
