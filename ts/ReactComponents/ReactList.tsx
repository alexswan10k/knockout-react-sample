import * as React from "react";

export class ReactList extends React.Component<{params: {length: number}}, {data: number[]}>{
	constructor(props: {params: {length: number}}){
		super();
		var data = [];
        const len = (props && props.params && props.params.length) 
            ? props.params.length 
            : 1000;
		for(var i = 0; i < len; i++){
			data.push(i);
		}
		this.state = {data: data};
	}
	
	public render(){
		return (
			<span>
				{
                    this.state.data.map(d =>
                        this.props.children)}
			</span>	
            
		);
	}
}