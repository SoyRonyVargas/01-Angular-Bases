import { Personaje } from '../main-page/main-page.component';
import { DbzService } from '../services/dbz.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-side',
  templateUrl: './form-side.component.html',
  styleUrls: ['./form-side.component.css']
})
export class FormSideComponent {

  @Input() nuevo : Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(
    private dbzService: DbzService
  ){}

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter()

  agregar()
  {
    
    if( this.nuevo.nombre.trim().length === 0 ) return;

    // console.log(this.nuevo);

    this.dbzService.agregarNuevoPersonaje(this.nuevo)

    // this.onNuevoPersonaje.emit(this.nuevo)

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
