import { Component, Input } from '@angular/core';
import { Personaje } from '../main-page/main-page.component';

@Component({
  selector: 'app-form-side',
  templateUrl: './form-side.component.html',
  styleUrls: ['./form-side.component.css']
})
export class FormSideComponent {

  @Input() personajes : Personaje[] = []
  @Input() nuevo : Personaje = {
    nombre: '',
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
