import * as ko from "knockout";

export class KoTemplate {
    constructor(){

    }
    
    static template = "<div data-bind='template: {nodes: $componentTemplateNodes}'></div>"
}