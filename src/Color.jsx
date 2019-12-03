//@ts-check
"use strict";

import React from "react";

//<input type="color">用Component
//備考：二つの部品を同一のものとして管理する。
//　　　reactでまとめて管理することで同じ値のname属性重複を避ける。//Vueの方が向いてそう。
export default class ColorCompontent extends React.Component {
	//コンストラクタ
	constructor(props, context) {
		super(props, context);
		this.name = props.name;
		this.o_composite = props.o_composite;
		this.state = {
			value: props.value,
		}
	}
	//コンポーネント更新時
	componentDidUpdate() {	//cssプロパティ更新
		if(this.o_composite){
			this.o_composite.changeProperty();
		}else{
			setStyleProperty("--"+this.name, this.state.value);
		}
	}
	//イベント
	onChange(property, event){	this.setState({ [property] : event.target.value }); }
	//render
	render() {return (
			<span>
				<input value={this.state.value} onChange={this.onChange.bind(this, "value")} disabled={this.props.disabled} type="color"/>
				<input value={this.state.value} className="colorComponent" onChange={this.onChange.bind(this, "value")} disabled={this.props.disabled} name={this.props.name}/>
			</span>
	);}
}
