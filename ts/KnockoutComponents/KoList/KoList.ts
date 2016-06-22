import * as ko from "knockout";

export default class KoList {
    public items: number[];
    constructor(params: {length: number}){
        var data = [];
        const len = (params && params.length) ? params.length : 1000;
		for(var i = 0; i < len; i++){
			data.push(i);
		}
		this.items = data;
    }
}