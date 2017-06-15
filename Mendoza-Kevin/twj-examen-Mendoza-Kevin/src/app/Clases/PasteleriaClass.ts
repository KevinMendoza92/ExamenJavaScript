import {EmailValidator} from "@angular/forms";
/**
 * Created by kevme on 15/6/2017.
 */
export class PasteleriaClass{

  constructor(public id?:number,
              public Nombre?:string,
              public latitudDondeEmpezo?:number,
              public longitudDondeEmpezo?:number,
              public Ciudad?:string,
              public Correo?:string){
    this.Nombre=Nombre;
  }
}
