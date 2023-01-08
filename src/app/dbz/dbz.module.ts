import { MainPageComponent } from './main-page/main-page.component';
import { FormSideComponent } from './form-side/form-side.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { DbzService } from './services/dbz.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

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
  ],
  providers: [
    DbzService
  ]
})
export class DbzModule { }
