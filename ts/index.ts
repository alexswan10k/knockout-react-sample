import {KoComponent} from "./KnockoutComponents/KoComponent";
import {KoList} from "./KnockoutComponents/KoList";
import {KoTemplate} from "./KnockoutComponents/KoTemplate";
import {KoReactBridge} from "./KnockoutComponents/KoReactBridge";

import * as ko from "knockout";
import * as react from "react";
import * as reactDOM from "react-dom";
import * as reactFauxDom from "react-faux-dom";

import {SomeComponentList, TestComponentFullSample, KoFauxDomComponent} from "./ReactComponents/ComponentA";

console.log("I am working");

ko.components.register("ko-component", {
    viewModel: KoComponent,
    template: KoComponent.template
});
ko.components.register("ko-list", {
    viewModel: KoList,
    template: KoList.template
});
ko.components.register("ko-template", {
    viewModel: KoTemplate,
    template: KoTemplate.template
});

ko.components.register("ko-react-bridge", {
    viewModel: KoReactBridge,
    template: KoReactBridge.template
});

//let domElement = react.createElement("div");
//reactDOM.render(react.createElement(SomeComponentList), document.getElementById('react'));
//reactDOM.render(react.createElement(SomeKoComponentList), document.getElementById('react'));

//reactDOM.render(react.createElement(TestComponentFullSample), document.getElementById('react'));

//ko.applyBindings({}, document.getElementsByClassName("knockout")[0]);

//reactDOM.render(react.createElement(KoFauxDomComponent), document.getElementById('react'));



var div = reactFauxDom.createElement('div');
var theDocument = {
    documentElement: reactFauxDom.createElement('div'), 
    createTextNode: (text: string) => {
        var newElement = reactFauxDom.createElement('div');
        (newElement as any).ownerDocument = theDocument;
        (newElement as any).parentElement = this;//?
        (newElement as any).text = text;
        return newElement;
    }
};
(div as any).ownerDocument = theDocument;
(div as any).parentElement = theDocument.documentElement;

var innerDiv = reactFauxDom.createElement('div');
//(innerDiv as any).text = "not loaded yet from faux dom";
innerDiv.setAttribute('data-bind', "text: 'hello from faux dom'");
(innerDiv as any).ownerDocument = theDocument;
(innerDiv as any).parentNode = div; 

(div as any).children.push(innerDiv);
(div as any).childNodes.push(innerDiv);
(div as any).firstChild = innerDiv;

ko.applyBindings({}, div);
reactDOM.render(div.toReact(), document.getElementById('react'));
setTimeout(function() {
    reactDOM.render(div.toReact(), document.getElementById('react'));
}, 5000);