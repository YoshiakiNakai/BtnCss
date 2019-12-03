//@ts-check
"use strict";

import { store } from "./redux";
import { XPD_MAR, XPD_PAD } from "./ActionTypes";

{
	//ActionCreators
	const xpdMarAction = () => {return {
		type: XPD_MAR,
	};}
	const xpdPadAction = () => {return {
		type: XPD_PAD,
	};}
	l('expandMargin').onclick = () => store.dispatch(xpdMarAction());
	l('expandPadding').onclick = () => store.dispatch(xpdPadAction());

	//btnのクラス更新
	classUpdate();
	const listener = store.subscribe(classUpdate);

	function classUpdate(){
		//console.log(store.getState());
		//border
		if(store.getState().bdExpand){
			btns.forEach(function(btn){
				btn.classList.add("bd");
			});
		}else{
			btns.forEach(function(btn){
				btn.classList.remove("bd");
			});
		}
		//margin
		if(store.getState().marExpand){
			l("collapseMargin").style.display = "block";
			l("marginLabel").classList.add("invalid");
			btns.forEach(function(btn){
				btn.classList.add("mar");
			});
		}else{
			l("collapseMargin").style.display = "none";
			l("marginLabel").classList.remove("invalid");
			btns.forEach(function(btn){
				btn.classList.remove("mar");
			});
		}

		//padding
		if(store.getState().padExpand){
			l("collapsePadding").style.display = "block";
			l("paddingLabel").classList.add("invalid");
			btns.forEach(function(btn){
				btn.classList.add("pad");
			});
		}else{
			l("collapsePadding").style.display = "none";
			l("paddingLabel").classList.remove("invalid");
			btns.forEach(function(btn){
				btn.classList.remove("pad");
			});
		}
	};
}
