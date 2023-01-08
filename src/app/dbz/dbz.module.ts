import { MainPageComponent } from './main-page/main-page.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormSideComponent } from './form-side/form-side.component';

@NgModule({
  declarations: [
    LeftSideComponent,
    MainPageComponent,
    FormSideComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent,
  ]
})
export class DbzModule { }
