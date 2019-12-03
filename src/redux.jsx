//@ts-check
"use strict";

//======================================================================
//Reducer
//actionとstateから、新しいstateを返す
import { XPD_BD, XPD_MAR, XPD_PAD } from "./ActionTypes";

function reducer(state, action) {
	//stateの変更はしないこと。pureな関数であること。
	//必ず、新しいstateを作成して返す
	//console.log(state); console.log(action);
	switch (action.type) {
	case XPD_BD:
		return Object.assign({}, state, {
			bdExpand: !state.bdExpand,
		});
	case XPD_MAR:
		return Object.assign({}, state, {
			marExpand: !state.marExpand,
		});
	case XPD_PAD:
		return Object.assign({}, state, {
			padExpand: !state.padExpand,
		});
	default:
		return state;
	}
	//return {a: fa(state.a, action), b: fb(state.b, action), }
}

//======================================================================
//store
import { createStore } from "redux";
//import reducer from "./reducer.jsx";

//役割
//stateの保持
//stateの取得、getState()を提供
//stateの更新、dispatch(action)を提供
//リスナーの登録、subscribe(listener)を提供

//stateとreducerの登録。dispatchされるとreducerを呼び出す。
export const store = createStore(reducer, {
	bdExpand: true,
	marExpand: false,
	padExpand: false,
});
