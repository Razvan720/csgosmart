import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlRoutingModule } from './control-routing.module';

import { AdminupdatesComponent } from 'src/app/components/admin/adminupdates/adminupdates.component';
import { AdminarmasComponent } from 'src/app/components/admin/adminarmas/adminarmas.component';
import { AdminmapasComponent } from 'src/app/components/admin/adminmapas/adminmapas.component';
import { AdmincajasComponent } from 'src/app/components/admin/admincajas/admincajas.component';
import { ListaupdatesComponent } from 'src/app/components/admin/adminupdates/listaupdates/listaupdates.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [
    AdminupdatesComponent,
    AdminarmasComponent,
    AdminmapasComponent,
    AdmincajasComponent,
    ListaupdatesComponent,
    FontAwesomeModule

  ],
  imports: [
    CommonModule,
    ControlRoutingModule
  ]
})
export class ControlModule {
  constructor(library: FaIconLibrary) {

    library.addIcons(
      faEdit
    );
  }
}
