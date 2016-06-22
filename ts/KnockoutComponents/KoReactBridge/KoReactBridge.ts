import * as ko from "knockout";
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as htmlToReact from 'html-to-react';

import {ReactComponent, ToKnockout} from '../../ReactComponents/ComponentA';
import {ReactList} from '../../ReactComponents/ReactList';
import {ReactTemplate} from '../../ReactComponents/ReactTemplate';
import {ReactLazy} from "../../ReactComponents/ReactLazy";

export default class KoReactBridge {
    params: any;
    constructor(params){
        this.params = params;
    }
}

const parseWeakJson = (json: string) =>{
    
    var newJson = json[0] === '{' && json[json.length] === '}' 
        ? json 
        : '{' + json + '}';
        
    
    return JSON.parse(newJson.replace(/([A-z]+)\W?:/g, '"$1":'))
}

const mapParams = (obj: any) =>{
    var opt : any = {};
    for(var prop in obj){
        obj[prop];
        opt[prop] = parseWeakJson(obj[prop]);
    }
    return opt;
}

const processNodeDefinitions = new htmlToReact.ProcessNodeDefinitions(React);
const processingInstructions = [
    {
        shouldProcessNode: function(node) {
            return true; //node.parent && node.parent.name && node.parent.name === 'h1';
        },
        // processNode: function(node, children) {
        //     if(node.type === 'tag' && node.name === 'somecomponent')
        //         return SomeComponent;
            
        //     return node;//(node && node.data)? node.data.toUpperCase() : "";
        // }
        processNode: function(node, children){
            if(node.name === 'react-component')
                return React.createElement(ReactComponent, null, children);
            
            if(node.name === 'ko-test-component')
                return React.createElement(ToKnockout, null, React.createElement(node.name, null, children));    
                
            if(node.name === 'ko-test-list')
                return React.createElement(ToKnockout, null, React.createElement(node.name, null, children));
           
            if(node.name === 'react-list')
                return React.createElement(ReactList, mapParams(node.attribs), children);
                
            if(node.name === 'react-template')
                return React.createElement(ReactTemplate, null, children);

            if(node.name && node.name.startsWith("gen")){
                var pr : Promise<React.Component<any, any>> = (<any>window).System.import(`./ts/ReactComponents/Generated/${node.name}`)
                    .then(module => module.default);

                var pwrapper = {promise: pr};

                return React.createElement(ReactLazy, pwrapper, children);
            }
            
            return processNodeDefinitions.processDefaultNode(node, children);
        }
    }
];

const htmlToReactParser = new htmlToReact.Parser(React);

var isValidNode = function(elem) {
    return true;
};

(ko as any).bindingHandlers.react = {
    init: function (el, valueAccessor, allBindings, vm, bindingContext: KnockoutBindingContext) {
        var Component = ko.unwrap(valueAccessor());
        var props = ko.toJS(allBindings.get('props'));

        // render to react? initial setup maybe?
        
        var nodes = bindingContext.$componentTemplateNodes;
        const wrapperElement = document.createElement('div');
        
        nodes.map(n => wrapperElement.appendChild(n));
        
        const html = wrapperElement.outerHTML;
        
        const reactComponent = //htmlToReactParser.parse(html); 
            htmlToReactParser.parseWithInstructions(html, isValidNode, processingInstructions);

        //var prefabComponent = React.createElement(Component, props);
        ReactDOM.render(reactComponent, el);

        return { controlsDescendantBindings: true }; // important
    },

    update: function (el, valueAccessor, allBindings) {
        var Component = ko.unwrap(valueAccessor());
        var props = ko.toJS(allBindings.get('props'));

        // tell react to re-render?
    }
};
