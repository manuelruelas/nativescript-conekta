import { Common } from './conekta.common';
import * as applicationModule from "tns-core-modules/application";
declare var io;
export class Conekta extends Common {
    
    constructor(){
        super();
        
    }

    public generateToken():Promise<string>{
        return new Promise((resolve,reject)=>{
            let token;
            let card;
            io.conekta.conektasdk.Conekta.setPublicKey("key_KJysdbf6PotS2ut2");
            token = new io.conekta.conektasdk.Token(applicationModule.android.foregroundActivity);
            card = new io.conekta.conektasdk.Card("Fulanito Pérez", "4242424242424242", "332", "11", "2020");
            
            token.onCreateTokenListener(new io.conekta.conektasdk.Token.CreateToken({
                onCreateTokenReady(data){
                    if(data.has('id')){
                        console.log("SUCCESS");
                        resolve(data);
                    }else{
                        console.log("ERROR");
                        reject(data.toString());
                    }
                    
                }
            })
            );
            token.create(card);
        });
        

    }
}

export interface Card {
    name:string;
    number:string;
    month:string;
    year:string;
    ccv:string;
}