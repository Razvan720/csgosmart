import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulousuarioRoutingModule } from './modulousuario-routing.module';
import { UpdatesComponent } from '../components/usuario/updates/updates.component';


@NgModule({
  declarations: [
    UpdatesComponent
  ],
  imports: [
    CommonModule,
    ModulousuarioRoutingModule
  ]
})
export class ModulousuarioModule { }
