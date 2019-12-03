//@ts-check
"use strict";

import React from "react";

import ColorCompontent from "./Color"

//<input>による入力と<select>による単位選択が行えるcomponent
export default class TextDecoComponent extends React.Component {
	//コンストラクタ
	constructor(props, context) {
		super(props, context);
		this.name = props.name;
		this.state = {
			lineValue: props.lineValue,
			styleChange: props.styleChange,
		};
		this.o_CompositeProperty = new CompositeProperty(document.getElementsByName(this.name), this.name);
	}
	//コンポーネント生成時
	componentDidMount() {	//cssプロパティ変更クラスの登録
		this.o_CompositeProperty.collection = document.getElementsByName(this.name);
		this.o_CompositeProperty.changeProperty();
	}
	//コンポーネント更新時
	componentDidUpdate() {	//cssプロパティ更新
		this.o_CompositeProperty.changeProperty();
	}
	//イベント
	onChange(property, event){	this.setState({ [property] : event.target.value }); }

	//render
	render() {
		const lineItems = ["none ", "underline ", "overline ", "line-through ", "blink "];
		const styleItems = ["solid ", "double ", "dotted ", "dashed ", "wavy "];
		return (
			<span>
				<select name={this.name} onChange={this.onChange.bind(this, "lineValue")}>
					{lineItems.map( item => <option key={item}>{item}</option>)}
				</select>
				<select name={this.name} onChange={this.onChange.bind(this, "styleValue")}>
					{styleItems.map( item => <option key={item}>{item}</option>)}
				</select>
				<ColorCompontent name={this.name} value={this.props.colorValue} o_composite={this.o_CompositeProperty}/>
			</span>
		);
	}
}