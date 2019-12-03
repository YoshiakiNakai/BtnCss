//@ts-check
"use strict";

import React from "react";

/**  
 * WidthUnitComponentへ渡すWidthUnitの一単位を生成するためのコンストラクタ
 * @constructor
 * @param {string} unit
 * @param {number} step
 * @param {number} min
 * @param {string} type
 * @param {number} value
 */
export function wu(unit, step, min, type, value){
	this.unit = unit;
	this.step = step;
	this.min = min;
	this.type = type;
	this.value = value;
}

//<input>による入力と<select>による単位選択が行えるcomponent
export class WidthUnitComponent extends React.Component {
	//コンストラクタ
	constructor(props, context) {
		super(props, context);
		this.name = props.name;
		this.units = props.units;	//単位とその初期値、stepの初期値の配列
		this.state = Object.assign({},
			this.units.find(element => element.unit === props.unit)
		);
		this.unitChange = this.unitChange.bind(this);
		this.o_CompositeProperty = null;
		//console.log(this);
	}
	//コンポーネント生成時
	componentDidMount() {	//cssプロパティ変更クラスの登録
		this.o_CompositeProperty = new CompositeProperty(document.getElementsByName(this.name), this.name);
		this.o_CompositeProperty.changeProperty();
	}
	//コンポーネント更新時
	componentDidUpdate() {	//cssプロパティ更新
		//console.log(this.state);
		this.o_CompositeProperty.changeProperty();
	}
	//イベント
	onChange(property, event){	this.setState({ [property] : event.target.value }); }
	unitChange(event) {
		//console.log(this.state);
		let evUnit = event.target.value;
		this.setState(Object.assign({}, this.state,
			this.units.find(element => element.unit.trim() === evUnit),
		));
		//console.log(this.state);
	}
	//render
	render() {
		return (
			<span>
				<input name={this.name} value={this.state.value} type={this.state.type} min={this.state.min} step={this.state.step}
					disabled={this.props.disabled}
					onChange={this.onChange.bind(this, "value")}/>
				<select name={this.name} value={this.state.unit.trim()}
					onChange={this.unitChange}
					disabled={this.props.disabled}>
					{this.units.map( item => <option key={item.unit}>{item.unit}</option>)}
				</select>
			</span>
		);
	}
}
