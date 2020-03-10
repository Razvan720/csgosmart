import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ModulousuarioModule } from './modulousuario/modulousuario.module';


/*Componentes*/
import { AppComponent } from './app.component';
import { BarranavegacionComponent } from './components/usuario/barranavegacion/barranavegacion.component';
import { BotonarmasComponent } from './components/usuario/botonarmas/botonarmas.component';
import { MainusuarioComponent } from './components/usuario/mainusuario/mainusuario.component';


/*Servicios*/
import { ArmasService } from './services/armas.service';
import { LoginComponent } from './components/admin/login/login.component';
import { ControlComponent } from './components/admin/control/control.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MainusuarioComponent,
    BarranavegacionComponent,
    BotonarmasComponent,
    
    ControlComponent,
    LoginComponent,
   
        
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    ModulousuarioModule,
    
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ArmasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
