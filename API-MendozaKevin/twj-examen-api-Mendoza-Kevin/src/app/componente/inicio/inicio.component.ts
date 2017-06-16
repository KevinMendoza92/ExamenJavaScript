
import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  personajes: any[]=[];

  constructor(private _http: Http) {
    //Inicia la clase
    //PERO EL COMPONENTE NO ESTA LISTO!!!
  }

  ngOnInit() {
  }

  cargarPersonajes() {
    this._http
      .get('http://swapi.co/api/people')
      // .map(response => response.json())
      .subscribe(
        (reponse) => {
          console.log('Response: ', reponse);
          console.log(reponse.json());
          let repuesta = reponse.json();
          console.log(repuesta.next);
          this.personajes = repuesta.results;
        },
        (error) => {
          console.log('Error: ', error);
        },
        () => {
          console.log('Finally');
        }
      );
  }
}

