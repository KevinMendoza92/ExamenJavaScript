import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {InicioComponent} from "./componente/inicio/inicio.component";
import {PlanetaStarWarsComponent} from "./componente/personajes-star-wars/personaje-star-wars.component";
import {HeightComponent} from "./componente/height/height.component";
import {MassComponent} from "./componente/mass/mass.component";
import { GenderComponent } from './componente/gender/gender.component';
import {CreatedComponent} from "./componente/created/created.component";


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PlanetaStarWarsComponent,
    HeightComponent,
    MassComponent,
    GenderComponent,
    CreatedComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [InicioComponent]
})
export class AppModule { }
