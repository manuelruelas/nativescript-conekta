import { Observable } from 'tns-core-modules/data/observable';
import { Conekta } from 'nativescript-conekta';

export class HelloWorldModel extends Observable {
  public message: string;
  private conekta: Conekta;

  constructor() {
    super();

    this.conekta = new Conekta();
    this.message = this.conekta.message;
  }
}
