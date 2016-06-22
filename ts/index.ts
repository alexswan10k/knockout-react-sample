import * as ko from "knockout";
import * as react from "react";
import * as reactDOM from "react-dom";


import KoReactBridge from "./KnockoutComponents/KoReactBridge/KoReactBridge";
import {init as registerKoInit} from "./KnockoutComponents/Generated/registergenerated";

const applyViewModelLoader =
{
    loadViewModel: (name, templateConfig, callback) => {
        if (!templateConfig)
            callback(null);

        //http://knockoutjs.com/documentation/component-loaders.html#loadviewmodelname-templateconfig-callback
        callback((params, componentInfo) =>
        {
            //templateConfig.default is the viewmodels constructor function. Not the ViewModel.
            return new templateConfig.default(params);
        });

    }
};


ko.options.deferUpdates = true;
registerKoInit();

ko.components.loaders.unshift(applyViewModelLoader);

function registerKo(name: string, path: string, viewModel: string) {
		ko.components.register(name,
		 {
			 template: { require: `${path}/${name}.html!text` },
			 viewModel: { require: `${path}/${viewModel}` },
			 synchronous: false
		 });
} 

registerKo("ko-component", "./ts/KnockoutComponents/KoComponent", "KoComponent");
registerKo("ko-list", "./ts/KnockoutComponents/KoList", "KoList");
registerKo("ko-template", "./ts/KnockoutComponents/KoTemplate", "KoTemplate");
//registerKo("ko-react-bridge", "./ts/KnockoutComponents/KoReactBridge", "KoReactBridge");
ko.components.register("ko-react-bridge", {
    viewModel: {default: KoReactBridge},
    template: { require: `./ts/KnockoutComponents/KoReactBridge/ko-react-bridge.html!text` }
});


//let domElement = react.createElement("div");
//reactDOM.render(react.createElement(SomeComponentList), document.getElementById('react'));
//reactDOM.render(react.createElement(SomeKoComponentList), document.getElementById('react'));

//reactDOM.render(react.createElement(TestComponentFullSample), document.getElementById('react'));
ko.applyBindings({}, document.getElementsByClassName("knockout")[0]);

if (!(String as any).prototype.startsWith) {
    (String as any).prototype.startsWith = function(searchString, position){
      position = position || 0;
      return this.substr(position, searchString.length) === searchString;
  };
}