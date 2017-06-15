import { Component, OnInit } from '@angular/core';
import {PasteleriaClass} from "../../Clases/PasteleriaClass";


@Component({
  selector: 'app-pasteleria',
  templateUrl: './pasteleria.component.html',
  styleUrls: ['./pasteleria.component.css']
})
export class PasteleriaComponent implements OnInit {

  Nombre:string="";
  Ciudad:string="";
  Correo:string="";

  Pastelerias: PasteleriaClass[]=[];
  nuevaPasteleria: PasteleriaClass=new PasteleriaClass();

  constructor() { }

  ngOnInit() {
  }

  

}
