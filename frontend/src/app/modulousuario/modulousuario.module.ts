import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulousuarioRoutingModule } from './modulousuario-routing.module';
import { UpdatesComponent } from '../components/usuario/updates/updates.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    UpdatesComponent
  ],
  imports: [
    CommonModule,
    ModulousuarioRoutingModule,
    FontAwesomeModule
  ]
})
export class ModulousuarioModule { }
