//https://www.npmjs.com/package/html-to-react

//import * as react from "react";
//declare module "html-to-react"
//{
//	export = HtmlToReact;	
//}

//declare namespace HtmlToReact {
//	class Parser
//	{
//		constructor(in: react);
//	}
//}

// interface KnockoutMixin extends react.Mixin<any, any> {
    
// }

// declare var KnockoutReactExport: {
//     KnockoutMixin: KnockoutMixin;
// }

// declare module "knockout-react" {
//     export = KnockoutReactExport;
// }
declare var obj: any;

declare module "knockout-react"{
    export = obj;
}

declare class ElemTemp extends Element{}
declare module ReactFauxDom{
    class Element extends ElemTemp{
        constructor(tag: string);
        toReact() : JSX.Element;
    }
    function createElement(type: string): Element;
}

declare module 'react-faux-dom' {
    //export default ReactFauxDom;
    export = ReactFauxDom;
}