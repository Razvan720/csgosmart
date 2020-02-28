import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloadminRoutingModule } from './moduloadmin-routing.module';
import { LoginComponent } from '../components/admin/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ControlComponent } from '../components/admin/control/control.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    ControlComponent
  ],
  imports: [
    CommonModule,
    ModuloadminRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class ModuloadminModule { }
