import * as React from "react";

export class ReactLazy extends React.Component<{ promise: Promise<React.Component<any, any>>},{component: React.Component<any, any>}>{
	constructor(props :{ promise: Promise<React.Component<any, any>>}){
		super();
		this.state = null;
        props.promise.then(q => {
			this.setState({component: q});
		});
	}
	
	public render(){
		return (
			<span key="lazy">
				{this.state && this.state.component != null ? (React as any).createElement(this.state.component, null, this.props.children) : "" }
			</span>	
		);
	}
}