import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuloadminRoutingModule } from './moduloadmin-routing.module';
/*Fontawesome*/
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

/*Componentes*/
import { LoginComponent } from '../components/admin/login/login.component';
import { ControlComponent } from '../components/admin/control/control.component';


@NgModule({
  declarations: [
    LoginComponent,
    ControlComponent
  ],
  imports: [
    CommonModule,
    ModuloadminRoutingModule,
    FontAwesomeModule
 
  ]
})
export class ModuloadminModule {
  constructor(library: FaIconLibrary){
    
    library.addIcons(
      faEdit
    );
 }
}
