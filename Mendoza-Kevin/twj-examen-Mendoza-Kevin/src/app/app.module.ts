import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PasteleriaComponent } from './Componentes/pasteleria/pasteleria.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PasteleriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [PasteleriaComponent]
})
export class AppModule { }
