import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ModulousuarioModule } from './modulousuario/modulousuario.module';
import { AppComponent } from './app.component';
import { BarranavegacionComponent } from './components/usuario/barranavegacion/barranavegacion.component';
import { BotonarmasComponent } from './components/usuario/botonarmas/botonarmas.component';
import { MainusuarioComponent } from './components/usuario/mainusuario/mainusuario.component';
import { MainadminComponent } from './components/admin/mainadmin/mainadmin.component';
import { LoginComponent } from './components/admin/login/login.component';
import { ControlComponent } from './components/admin/control/control.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminupdatesComponent } from './components/admin/adminupdates/adminupdates.component';
import { AdminarmasComponent } from './components/admin/adminarmas/adminarmas.component';
import { AdminmapasComponent } from './components/admin/adminmapas/adminmapas.component';
import { AdmincajasComponent } from './components/admin/admincajas/admincajas.component';


@NgModule({
  declarations: [
    AppComponent,
    BarranavegacionComponent,
    BotonarmasComponent,
    MainusuarioComponent,
    MainadminComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModulousuarioModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
