import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ModulousuarioModule } from './modulousuario/modulousuario.module';
import { AppComponent } from './app.component';
import { BarranavegacionComponent } from './components/usuario/barranavegacion/barranavegacion.component';
import { BotonarmasComponent } from './components/usuario/botonarmas/botonarmas.component';
import { MainusuarioComponent } from './components/usuario/mainusuario/mainusuario.component';
import { MainadminComponent } from './components/admin/mainadmin/mainadmin.component';
import { ArmasService } from './services/armas.service';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule


  ],
  providers: [
    ArmasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
