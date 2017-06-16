
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

  }

  ngOnInit() {
  }

  arregloImagenes = [
    +    'https://vignette2.wikia.nocookie.net/star-wars-canon/images/1/1d/Luke_Skywalker_%28Jedi_Knight%29_%28Glove.png/revision/latest?cb=20160526003015',
    +    'http://vignette2.wikia.nocookie.net/starwars/images/0/00/Threepio_TFA_Fathead.png/revision/latest?cb=20161004004950',
    +    'https://vignette2.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png/revision/latest?cb=20161108040914',
    +    'https://s-media-cache-ak0.pinimg.com/originals/a7/99/2b/a7992b5f049b35fbf4b4d7c3145b2151.jpg',
    +    'http://vignette2.wikia.nocookie.net/starwars/images/0/0a/LMB.png/revision/latest?cb=20161003050632',
    +    'http://vignette2.wikia.nocookie.net/disney/images/7/76/Chirrut_Imwe.png/revision/latest/scale-to-width-down/2000?cb=20161014094553',
    +    'https://vignette1.wikia.nocookie.net/disney/images/e/e9/Poe_Dameron_Fathead.png/revision/latest?cb=20160207010549',
    +    'https://vignette1.wikia.nocookie.net/swmerchandise/images/e/ec/R5-D4_%2839070%29_P.gif/revision/latest?cb=20140618072248',
    +    'http://vignette3.wikia.nocookie.net/swmerchandise/images/2/26/Droid_Factory_Sandtrooper_a_p.gif/revision/latest?cb=20140516012732',
    +    'http://vignette2.wikia.nocookie.net/dominios-encantados/images/4/4e/Obi_Wan_8.png/revision/latest?cb=20150531162316&path-prefix=es'
  ];

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

