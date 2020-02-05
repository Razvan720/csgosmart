import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarranavegacionComponent } from './components/barranavegacion/barranavegacion.component';
import { BotonarmasComponent } from './components/botonarmas/botonarmas.component';




@NgModule({
  declarations: [
    AppComponent,
    BarranavegacionComponent,
    BotonarmasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
