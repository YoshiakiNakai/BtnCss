//@ts-check
"use strict";

//関数省略
const l = document.getElementById.bind(document);
const setStyleProperty = document.documentElement.style.setProperty.bind(document.documentElement.style);

//グローバル変数
const btns = [l("btnA"), l("btnB"), l("btnN"), l("btnM")];
const cssStyle = getComputedStyle(document.querySelector(':root'));

//クラス
//要素のID名から、cssプロパティを変更する
function changeProperty(prefix, suffix){
	setStyleProperty("--"+this.id, prefix+this.value+suffix);
}

//複数の入力フォームを同一の値として管理する
function CompositeInputForm($collection, $propertyName){
	this.collection = $collection;
	this.propertyName = "--" + $propertyName;
	//複数あるinputの値を全て同一にする
	this.bindValue = (event) => {
		let value = event.target.value;
		this.collection.forEach(function(ele){
			ele.value = value;
		});
		setStyleProperty(this.propertyName, value);
	}
}
//複数入力項目がある部品群をまとめて管理する
function CompositeProperty($collection, $propertyName){
	this.collection = $collection;
	this.propertyName = "--" + $propertyName;
	//複数のプロパティを一つにまとめる
	this.changeProperty = () => {
		//console.log(this.collection);
		let sVal = new Set();
		this.collection.forEach(function(ele){
			//要素によって処理を分岐
			if(ele.tagName === "SELECT"){
				sVal.add(ele.options[ele.selectedIndex].textContent);
			}else{
				sVal.add(ele.value);
			}
		});
		let values = "";
		sVal.forEach((val) => {values += val});
		setStyleProperty(this.propertyName, values);
	}
}
