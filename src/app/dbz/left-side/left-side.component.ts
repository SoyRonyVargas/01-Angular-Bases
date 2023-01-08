import { Component, Input } from '@angular/core';
import { Personaje } from '../main-page/main-page.component';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'form-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent {

  // @Input() personajes: Personaje[] = []   

  constructor(
    private dbzService: DbzService
  ){

  }

  get personajes() {
    return this.dbzService.personajes
  }

}
