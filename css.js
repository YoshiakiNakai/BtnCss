//@ts-check
"use strict";

//htmlのDOMの初期処理
//※btnの初期処理に関しては、storeを使用するためjsxで処理する。
window.onload = () => {
	/*	
		・イベントの登録を行う。
		・入力フォームの初期値設定を行う。基本はcssの値を初期値とする。
		※selectの初期値設定は諦める。cssが初期表示のため、htmlをcssに合わせる。
		※複合プロパティの初期値設定は諦める。
		※reactで生成するDOMは、reactにて処理する。
	*/

	//html文字フォント
	const e_htmlFtFamily = l("htmlFtFamily");
	e_htmlFtFamily.onchange = changeProperty.bind(e_htmlFtFamily, "", "");

	//表示するタグの切り替え
	l("selectBtnTag").onchange = function(event){
		switch(event.target.value){
			case "a":
				setStyleProperty("--tagA", "var(--display)");
				setStyleProperty("--tagB", "none");
				break;
			case "b":
				setStyleProperty("--tagA", "none");
				setStyleProperty("--tagB", "var(--display)");	
				break;
			default: break;
		}
	}
	//ボタンテキスト変更
	const e_inputBtnText = l("inputBtnText");
	btns.forEach(function(btn){
		btn.textContent = e_inputBtnText.value;
	});
	e_inputBtnText.onchange = (event) => {
		btns.forEach(function(btn){
			btn.textContent = event.target.value;
		});
	};
	//select要素。イベント登録のみ行う。cssとhtmlの値を合わせること。
	const e_position = l("position");
	e_position.onchange = changeProperty.bind(e_position, "", "");

	const e_display = l("display");
	e_display.onchange = changeProperty.bind(e_display, "", "");

	const e_ftWeight = l("ftWeight");
	e_ftWeight.onchange = changeProperty.bind(e_ftWeight, "", "");

	const e_txAlign = l("txAlign");
	e_txAlign.onchange = changeProperty.bind(e_txAlign, "", "");

	const e_cursor = l("cursor");
	e_cursor.onchange = changeProperty.bind(e_cursor, "", "");

	const e_margin = l("margin");
	e_margin.value = cssStyle.getPropertyValue('--margin').trim();
	e_margin.onchange = changeProperty.bind(e_margin, "", "");

	const e_padding = l("padding");
	e_padding.value = cssStyle.getPropertyValue('--padding').trim();
	e_padding.onchange = changeProperty.bind(e_padding, "", "");

	const e_transition = l("transition");
	e_transition.value = parseFloat(cssStyle.getPropertyValue('--transition').trim());
	e_transition.onchange = changeProperty.bind(e_transition, "", "s");

	const e_opacity = l("opacity");
	e_opacity.value = parseFloat(cssStyle.getPropertyValue('--opacity').trim());
	e_opacity.onchange = changeProperty.bind(e_opacity, "", "");

	//=============================================================
	//疑似
	//hover
	const e_hvMar = l("hvMar");
	e_hvMar.value = cssStyle.getPropertyValue('--hvMar').trim();
	e_hvMar.onchange = changeProperty.bind(e_hvMar, "", "");

	const e_hvPad = l("hvPad");
	e_hvPad.value = cssStyle.getPropertyValue('--hvPad').trim();
	e_hvPad.onchange = changeProperty.bind(e_hvPad, "", "");
	
	const e_hvTrans = l("hvTrans");
	e_hvTrans.value = parseFloat(cssStyle.getPropertyValue('--hvTrans').trim());
	e_hvTrans.onchange = changeProperty.bind(e_hvTrans, "", "s");

	//active
	const e_actMar = l("actMar");
	e_actMar.value = cssStyle.getPropertyValue('--actMar').trim();
	e_actMar.onchange = changeProperty.bind(e_actMar, "", "");

	const e_actPad = l("actPad");
	e_actPad.value = cssStyle.getPropertyValue('--actPad').trim();
	e_actPad.onchange = changeProperty.bind(e_actPad, "", "");
	
	const e_actTrans = l("actTrans");
	e_actTrans.value = parseFloat(cssStyle.getPropertyValue('--actTrans').trim());
	e_actTrans.onchange = changeProperty.bind(e_actTrans, "", "s");
	//before after
	const e_hvBfCnte = l("hvBfCnte");
	e_hvBfCnte.value = (cssStyle.getPropertyValue('--hvBfCnte')).replace(/"/g, '').trim();
	e_hvBfCnte.onchange = changeProperty.bind(e_hvBfCnte, '"', '"');
	
	const e_hvAfCnte = l("hvAfCnte");
	e_hvAfCnte.value = (cssStyle.getPropertyValue('--hvAfCnte')).replace(/"/g, '').trim();
	e_hvAfCnte.onchange = changeProperty.bind(e_hvAfCnte, '"', '"');
	
	const e_actBfCnte = l("actBfCnte");
	e_actBfCnte.value = (cssStyle.getPropertyValue('--actBfCnte')).replace(/"/g, '').trim();
	e_actBfCnte.onchange = changeProperty.bind(e_actBfCnte, '"', '"');
	
	const e_actAfCnte = l("actAfCnte");
	e_actAfCnte.value = (cssStyle.getPropertyValue('--actAfCnte')).replace(/"/g, '').trim();
	e_actAfCnte.onchange = changeProperty.bind(e_actAfCnte, '"', '"');
}
