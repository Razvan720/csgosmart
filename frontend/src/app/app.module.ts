import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarranavegacionComponent } from './components/usuario/barranavegacion/barranavegacion.component';
import { BotonarmasComponent } from './components/usuario/botonarmas/botonarmas.component';
import { MainusuarioComponent } from './components/usuario/mainusuario/mainusuario.component';
import { MainadminComponent } from './components/admin/mainadmin/mainadmin.component';
import { LoginComponent } from './components/admin/login/login.component';
import { ControlComponent } from './components/admin/control/control.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ArmasService } from './services/armas.service';


@NgModule({
  declarations: [
    AppComponent,
    BarranavegacionComponent,
    BotonarmasComponent,
    MainusuarioComponent,
    MainadminComponent,
    LoginComponent,
    ControlComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    ArmasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
