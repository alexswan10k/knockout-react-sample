
import * as ko from "knockout";
import * as React from "react";
//import * as knockoutReact from "knockout-react";
// import * as reactMixin from "react-mixin";
import * as reactDOM from "react-dom";
// var knockoutMixin = knockoutReact.KnockoutMixin;

import {ReactList} from "./ReactList";
import {ReactTemplate} from "./ReactTemplate";

export class ReactComponent extends React.Component<void, { val: number }>
{
	constructor() {
		super();
		this.state = { val: 1 };
	}

	handleClick = () => {
		console.log("I have been clicked");
		this.setState({ val: this.state.val + 1 });
	}

	public render() {
		return (
			<div onClick={this.handleClick}>
				Hello world {this.state.val}
				<SFComponent>
					<div>this is a test</div>
				</SFComponent>
				<SFComponent2 />
			</div>
		);
	}
}

// var KnockoutMixin2 = {
//     updateKnockout() {
//         this.__koTrigger(!this.__koTrigger());
//     },

//     componentDidMount() {
//         this.__koTrigger = ko.observable(true);
//         this.__koModel = ko.computed(function () {
//             this.__koTrigger(); // subscribe to changes of this... 

//             return {
//                 props: this.props,
//                 state: this.state
//             };
//         }, this);

//         ko.applyBindings(this.__koModel, this.getDOMNode());
//     },

//     componentWillUnmount() {
//         ko.cleanNode(this.getDOMNode());
//     },

//     componentDidUpdate() {
//         this.updateKnockout();
//     }
// };

export class ToKnockout extends React.Component<void, void>{
	getChildContext(){
		
	}
	
	componentDidMount() {
		ko.applyBindings(this.context, reactDOM.findDOMNode(this));
    }
    componentWillUnmount() {
        ko.cleanNode(reactDOM.findDOMNode(this));
    }

	render() {
		return (<div key="ko"> {this.props.children} </div>);
	}
}

export class SomeComponentList extends React.Component<number, { data: number[] }>{
	constructor() {
		super();
		var data = [];
		for (var i = 0; i < 20000; i++) {
			data.push(i);
		}
		this.state = { data: data };
	}

	public render() {
		return (
			<div>
				{this.state.data.map(d =>
					<ReactComponent key={d} />
				) }
			</div>
		);
	}
}

export const SFComponent = (props, context) => 
	<p>{props.children}</p>
	
export const SFComponent2 = (props, context) =>
	<div>General content</div>

React.createElement(SFComponent);

export class SomeKoComponentList extends React.Component<number, { data: number[] }>{
	constructor() {
		super();
		var data = [];
		for (var i = 0; i < 10000; i++) {
			data.push(i);
		}
		this.state = { data: data };
	}

	public render() {
		return (
			<div>
				{this.state.data.map(d =>
					<ToKnockout key={d}>
						<div data-bind>
							<div data-bind="text: 'I am rendered from knockout inside react!'"></div>
						</div>
					</ToKnockout>
				) }
			</div>
		);
	}
}

export class TestComponentFullSample extends React.Component<number, { data: number[] }>{

	public render() {
		return (
			<ReactList params={({ length: 4 }) }>
				<ReactList params={({ length: 100 }) }>
					<ReactTemplate>
						<ReactTemplate>
							<ReactTemplate>
								<ReactTemplate>
									<ReactList params={({ length: 12 }) }>
										<ReactTemplate>
											<ReactTemplate>
												<ReactTemplate>
													<ReactComponent></ReactComponent>
												</ReactTemplate>
											</ReactTemplate>
										</ReactTemplate>
									</ReactList>
								</ReactTemplate>
							</ReactTemplate>
						</ReactTemplate>
					</ReactTemplate>
				</ReactList>
			</ReactList>
		);
	}
}

//reactMixin(SomeComponentList, KnockoutMixin2);
