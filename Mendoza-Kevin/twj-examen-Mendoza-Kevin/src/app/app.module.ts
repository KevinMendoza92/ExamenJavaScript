import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PasteleriaComponent } from './Componentes/pasteleria/pasteleria.component';

@NgModule({
  declarations: [
    AppComponent,
    PasteleriaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PasteleriaComponent]
})
export class AppModule { }
