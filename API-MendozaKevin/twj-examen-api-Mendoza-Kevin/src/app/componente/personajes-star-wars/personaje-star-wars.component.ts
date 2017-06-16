import {Component, Input, OnInit} from '@angular/core';
import {PersonajesSWInterface} from "../Interface/StarWars";

@Component({
  selector: 'app-planeta-star-wars',
  templateUrl: './personaje-star-wars.component.html',
  styleUrls: ['./personaje-star-wars.component.css']
})
export class PlanetaStarWarsComponent implements OnInit {

  @Input() personaje:PersonajesSWInterface;
  constructor() { }

  ngOnInit() {
  }

}

