import {KoComponent} from "./KnockoutComponents/KoComponent";
import {KoList} from "./KnockoutComponents/KoList";
import {KoTemplate} from "./KnockoutComponents/KoTemplate";
import {KoReactBridge} from "./KnockoutComponents/KoReactBridge";

import * as ko from "knockout";
import * as react from "react";
import * as reactDOM from "react-dom";

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
ko.applyBindings({}, document.getElementsByClassName("knockout")[0]);