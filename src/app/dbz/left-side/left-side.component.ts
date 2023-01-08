import { Component, Input } from '@angular/core';
import { Personaje } from '../main-page/main-page.component';

@Component({
  selector: 'form-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent {

  @Input() personajes: Personaje[] = []   

}
