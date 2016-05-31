import * as ko from "knockout";
import * as snabbdom from 'snabbdom';
import h = require('snabbdom/h');
import sClass = require("snabbdom/modules/class");
import sProps = require("snabbdom/modules/props");
import sStyle = require("snabbdom/modules/style");
import sEventListeners = require("snabbdom/modules/eventlisteners");
import sAttributes = require("snabbdom/modules/attributes");


const patch = snabbdom.init([
    sClass,
    sProps,
    sStyle,
    sEventListeners,
    sAttributes
]);

export class KoVirtualDom {
    params: any;
    constructor(params){
        this.params = params;
    }
    
    public static template = "<div data-bind='virtualDom: {}, props: params'></div>";
}

(ko as any).bindingHandlers.virtualDom = {
    init: function (el: Element, valueAccessor, allBindings, vm, bindingContext: KnockoutBindingContext) {
        var Component = ko.unwrap(valueAccessor());
        var props = ko.toJS(allBindings.get('props'));

        var nodes = bindingContext.$componentTemplateNodes;
        nodes.forEach(n => el.appendChild(n));
        
        var vNode = h(el as any, {});
        patch(vNode, el);
        ko.applyBindings(vm, vNode);
        
        setTimeout(() =>{
            patch(el, vNode);
        }, 1000);

        return { controlsDescendantBindings: true }; // important
    },

    update: function (el, valueAccessor, allBindings) {
        // var Component = ko.unwrap(valueAccessor());
        // var props = ko.toJS(allBindings.get('props'));
    }
};