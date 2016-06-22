import * as ko from "knockout";

export default class KoComponent {
    constructor(){
        
    }
    
    click(){
       this.text("I have just been clicked");  
    }
    
    text = ko.observable("I am a knockout component");
}