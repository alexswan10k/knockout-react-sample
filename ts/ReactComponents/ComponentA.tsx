
import * as ko from "knockout";
import * as React from "react";
//import * as knockoutReact from "knockout-react";
// import * as reactMixin from "react-mixin";
import * as reactDOM from "react-dom";
// var knockoutMixin = knockoutReact.KnockoutMixin;

export class ReactComponent extends React.Component<number, {val: number}>
{
	constructor()
	{
		super();
		this.state = {val: 1};
	}

	handleClick = () => {
		console.log("I have been clicked");
		this.setState({ val: this.state.val + 1});
	}

	public render() {
		return (
			<div onClick={this.handleClick}>
				Hello world {this.state.val}
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
	componentDidMount() {
         ko.applyBindings({ 
             props: this.props, 
             state: this.state 
         }, reactDOM.findDOMNode(this));
    }
    componentWillUnmount() {
        ko.cleanNode(reactDOM.findDOMNode(this));
    }
	
	render(){
		return (<div> {this.props.children} </div>);
	}
}

export class SomeComponentList extends React.Component<number, {data: number[]}>{
	constructor(){
		super();
						var data = [];
		for(var i = 0; i < 10000; i++){
			data.push(i);
		}
		this.state = {data: data};
	}
	
	public render(){
		return (
			<div>
				{this.state.data.map(d =>
					<span>{d}</span>
				)}
			</div>	
		);
	}
}

export class SomeKoComponentList extends React.Component<number, {data: number[]}>{
	constructor(){
		super();
						var data = [];
		for(var i = 0; i < 10000; i++){
			data.push(i);
		}
		this.state = {data: data};
	}
	
	public render(){
		return (
			<div>
				{this.state.data.map(d =>
					<ToKnockout>
						<div data-bind>
							<div data-bind="text: 'I am rendered from knockout inside react!'"></div>
						</div>
					</ToKnockout>
				)}
			</div>	
		);
	}
}

//reactMixin(SomeComponentList, KnockoutMixin2);
