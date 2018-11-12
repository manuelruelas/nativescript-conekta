import { Observable } from 'tns-core-modules/data/observable';
import { Conekta } from 'nativescript-conekta';
import { Card } from "nativescript-conekta/conekta.android";

export class HelloWorldModel extends Observable {
  public message: string;
  private conekta: Conekta;

  constructor() {
    super();

    this.conekta = new Conekta();
    this.conekta.generateToken().then((res:string)=>{
      console.log("DesdeEnfrente:", res);
    }).catch((error)=>{
      console.log(error);
    });
  }
}
