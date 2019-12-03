//@ts-check
"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { store } from "./redux";
import { XPD_BD } from "./ActionTypes";

import ColorCompontent from "./Color"
import {WidthUnitComponent, wu} from "./WidthUnit"
import ErrorBoundary from "./ErrorBoundary"

//線のプロパティ編集を行うcomponent
//線のstyleと、太さ、色、を入力できるUIを生成する。
export default class LineStyleComponent extends React.Component {
	//コンストラクタ
	constructor(props, context) {
		super(props, context);
		this.name = props.name;
		this.state = {
			styleValue: cssStyle.getPropertyValue('--'+this.name+'Style').trim(),
			colorValue: cssStyle.getPropertyValue('--'+this.name+'Color').trim(),
			widthValue: parseInt(cssStyle.getPropertyValue('--'+this.name+'Width').trim()),
		};
		//console.log(this.state);
		this.o_CompositeProperty = new CompositeProperty(null, this.name);
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
		const items = ["none ", "hidden ", "solid ", "double ", "groove ", "ridge ", "inset ", "outset ", "dashed ", "dotted "];
		let units = [
			new wu("px ", 1, 0, "number", this.state.widthValue),
			new wu("% ", 1, 0, "number", 100),
			new wu("em ", 0.1, 0, "number", 0.5),
			new wu("rem ", 0.1, 0, "number", 0.5),
			];	
		return (
			<span>
				<select name={this.name} disabled={this.props.disabled}
					value={this.state.styleValue} onChange={this.onChange.bind(this, "styleValue")}>
					{items.map( item => <option key={item}>{item}</option>)}</select>
				<WidthUnitComponent name={this.name} unit="px " units={units}
					disabled={this.props.disabled}
					onChange={this.onChange.bind(this, "widthValue")}/>
				<ColorCompontent name={this.name} disabled={this.props.disabled}
					value={this.state.colorValue} o_composite={this.o_CompositeProperty} />
			</span>
		);
	}
}

//========================================================================
{
	//ActionCreator
	const xpdBdAction = () => {return {
		type: XPD_BD,
	};}

	//storeとpropsの連携
	//state
	const mapStateToProps = store => ({
		storeBdXpd: store.bdExpand
	});

	//Dispatcher
	const mapDispatchToProps = dispatch => {return {
		createXpdBdAction: () => dispatch(xpdBdAction()),
	};};

	//========================================================================
	//borderとその上下左右のプロパティをまとめて管理するための部品
	//this.eleNames = ["border", "bdTop", "bdRight", "bdBottom", "bdLeft"];
	const ExpandBorderComponent = (props) => {
		//expandによって、表示非表示のcssを切り替える
		let collapse = {};
		let labelClass = "";
		//展開状態でスタイルを変更する
		if(props.storeBdXpd){
			labelClass = "invalid";
		} else{
			Object.assign(collapse, {display: "none"});
		}
		return (
			<div><a className="link" onClick={props.createXpdBdAction}>＋</a>
				<label className={labelClass}><span className="fixTxWp">border:</span><LineStyleComponent name="border" disabled={props.storeBdXpd}/></label>
				<div style={collapse}>
					<div><label><span className="fixTxW">border-top:</span><LineStyleComponent name="bdTop" disabled={!props.storeBdXpd}/>;</label></div>
					<div><label><span className="fixTxW">border-right:</span><LineStyleComponent name="bdRight" disabled={!props.storeBdXpd}/>;</label></div>
					<div><label><span className="fixTxW">border-bottom:</span><LineStyleComponent name="bdBottom" disabled={!props.storeBdXpd}/>;</label></div>
					<div><label><span className="fixTxW">border-left:</span><LineStyleComponent name="bdLeft" disabled={!props.storeBdXpd}/>;</label></div>
				</div>
			</div>
		);
	}

	//connect
	const ExpandBorderContainer = connect(mapStateToProps, mapDispatchToProps)(ExpandBorderComponent);

	ReactDOM.render(
		<Provider store={store}>
			<ExpandBorderContainer/>
		</Provider>, l("expandBorderContainer"));
}
