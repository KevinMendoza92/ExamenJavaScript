import { Component, OnInit } from '@angular/core';
import {PasteleriaClass} from "../../Clases/PasteleriaClass";
import {Http} from "@angular/http";



@Component({
  selector: 'app-pasteleria',
  templateUrl: './pasteleria.component.html',
  styleUrls: ['./pasteleria.component.css']
})
export class PasteleriaComponent implements OnInit {

  Nombre:string="";
  ciudad:string="";
  correo:string="";

  pastelerias: PasteleriaClass[]=[];
  nuevaPasteleria:PasteleriaClass=new PasteleriaClass();

  constructor(private _http:Http){

  }
  ngOnInit() {
   this._http.get('http://localhost:1337/Pasteleria')
      .subscribe(
        respuesta => {
          let respJson:PasteleriaClass[]= respuesta.json();
          console.log("respuesta json:", respJson);
          this.pastelerias=respJson;
          console.log("pasteleria: ", this.pastelerias);
        },
        error => {
          console.log("Error", error)
        }
      )
  }

  crearPasteleria() {
    console.log("Datos de la pasteleria");

    this._http.post('http://localhost:1337/Pasteleria', this.nuevaPasteleria)
      .subscribe(
        respuesta => {
          let respuestaJson = respuesta.json();
          console.log('respuestaJson: ', respuestaJson);
          this.pastelerias.push(respuestaJson);
        },
        error => {
          console.log("Error", error)
        }
      )
  }}

