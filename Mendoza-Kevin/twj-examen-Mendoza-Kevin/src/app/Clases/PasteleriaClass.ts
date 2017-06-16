import {EmailValidator} from "@angular/forms";
/**
 * Created by kevme on 15/6/2017.
 */
export class PasteleriaClass{

  constructor(public id?:number,
              public nombre?:string,
              public ciudad?:string,
              public correo?:string,
              public createdAt?:Date,
              public updateAt?:Date){
    this.nombre=nombre;
  }
}
