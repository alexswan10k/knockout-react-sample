import * as React from "react";

export class ReactTemplate extends React.Component<void, number>{
	
	public render(){
		return (
			<span key="tmpl">
				{this.props.children}
			</span>	  
		);
	}
}