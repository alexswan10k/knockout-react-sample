import * as React from "react";

export class ReactTemplate extends React.Component<number, number>{
	
	public render(){
		return (
			<span>
				{this.props.children}
			</span>	  
		);
	}
}