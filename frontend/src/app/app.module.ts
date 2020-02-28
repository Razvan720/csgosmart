import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ModulousuarioModule } from './modulousuario/modulousuario.module';

/*Fontawesome*/
// import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
// import {  } from '@fortawesome/free-regular-svg-icons';
// import { faEdit } from '@fortawesome/free-solid-svg-icons';

/*Componentes*/
import { AppComponent } from './app.component';
import { BarranavegacionComponent } from './components/usuario/barranavegacion/barranavegacion.component';
import { BotonarmasComponent } from './components/usuario/botonarmas/botonarmas.component';
import { MainusuarioComponent } from './components/usuario/mainusuario/mainusuario.component';


/*Servicios*/
import { ArmasService } from './services/armas.service';
import { LoginComponent } from './components/admin/login/login.component';
import { ControlComponent } from './components/admin/control/control.component';




@NgModule({
  declarations: [
    AppComponent,
    BarranavegacionComponent,
    BotonarmasComponent,
    MainusuarioComponent,
    ControlComponent,
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    // FontAwesomeModule,
    AppRoutingModule,
    ModulousuarioModule,
    HttpClientModule
  ],
  providers: [
    ArmasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(library: FaIconLibrary){
    
  //   library.addIcons(
  //     faEdit
  //   );
  // }
 }
