import * as ko from "knockout";

export class KoComponent {
    constructor(){
        
    }
    
    click(){
       this.text("I have just been clicked");  
    }
    
    text = ko.observable("I am a knockout component")
    
    static template = "<div data-bind='text: text, onClick: click'>I am a knockout component</div>"
}