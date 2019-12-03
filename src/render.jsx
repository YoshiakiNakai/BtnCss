//@ts-check
"use strict";

import React from "react";
import ReactDOM from "react-dom";
//import { Provider, connect } from "react-redux";
//import { store } from "./redux";

import ColorCompontent from "./Color"
import LineStyleComponent from "./ExpandBorder"	//<xpdBd>が未移籍。store管理が必要
import {WidthUnitComponent, wu} from "./WidthUnit"
import TextDecoComponent from "./TextDeco"
import ErrorBoundary from "./ErrorBoundary"

//Rendering
{
	ReactDOM.render(
		<ColorCompontent name="htmlBg" value={cssStyle.getPropertyValue("--htmlBg").trim()}/>
		, l("htmlBgComponent"));
		ReactDOM.render(
			<ColorCompontent name="htmlCo" value={cssStyle.getPropertyValue("--htmlCo").trim()}/>
			, l("htmlCoComponent"));	
	ReactDOM.render(
		<ColorCompontent name="color" value={cssStyle.getPropertyValue("--color").trim()}/>
		, l("colorComponent"));
	ReactDOM.render(
		<ColorCompontent name="background" value={cssStyle.getPropertyValue("--background").trim()}/>
		, l("backgroundCompornent"));
	ReactDOM.render(<TextDecoComponent name="txDeco" 
			lineValue={cssStyle.getPropertyValue("--txDecoLine").trim()}
			styleValue={cssStyle.getPropertyValue("--txDecoStyle").trim()}
			colorValue={cssStyle.getPropertyValue("--txDecoColor").trim()} />
		, l("textDecoComponent"));
	
	
	ReactDOM.render(
		<LineStyleComponent name="outline"/>
		, l("outlineComponent"));
	
	//wu(unit, step, min, type, value)
	let units = [
		new wu("auto", 0,      0, "hidden", ""),
		new wu("px",  1,   -1000, "number", 5),
		new wu("%",   1,   -1000, "number", 0),
		new wu("em",  0.1, -1000, "number", 1),
		new wu("rem", 0.1, -1000, "number", 1),
		];
	ReactDOM.render(
		<WidthUnitComponent name="bottom" unit="px"  units={units}/>
		, l("bottomComponent"));
	ReactDOM.render(
		<WidthUnitComponent name="right" unit="px" units={units}/>
		, l("rightComponent"));

	units = [
		new wu("auto", 0,  0, "hidden", ""),
		new wu("px",  1,   0, "number", 100),
		new wu("%",   1,   0, "number", 100),
		new wu("em",  0.1, 0, "number", 10),
		new wu("rem", 0.1, 0, "number", 10),
		];
	ReactDOM.render(
		<WidthUnitComponent name="width" unit="auto"  units={units}/>
		, l("widthComponent"));
	units = [
		new wu("auto", 0,  0, "hidden", ""),
		new wu("px",  1,   0, "number", 100),
		new wu("%",   1,   0, "number", 100),
		new wu("em",  0.1, 0, "number", 15),
		new wu("rem", 0.1, 0, "number", 15),
		];
	ReactDOM.render(
		<WidthUnitComponent name="footW" unit="em"  units={units}/>
		, l("footWComponent"));
	units = [
		new wu("auto", 0,  0, "hidden", ""),
		new wu("px",  1,   0, "number", 20),
		new wu("%",   1,   0, "number", 10),
		new wu("em",  0.1, 0, "number", 2),
		new wu("rem", 0.1, 0, "number", 2),
		];
	ReactDOM.render(
		<WidthUnitComponent name="height" unit="auto" units={units}/>
		, l("heightComponent"));

	units = [
		new wu("px", 1, 0, "number", 16),
		new wu("%", 1, 0, "number", 100),
		new wu("em", 0.1, 0, "number", 1),
		new wu("rem", 0.1, 0, "number", 1),
		];
	ReactDOM.render(
		<WidthUnitComponent name="htmlFtSz" unit="px" units={units}/>
		, l("htmlFtSzComponent"));
	ReactDOM.render(
		<WidthUnitComponent name="ftSize" unit="px" units={units}/>
		, l("fontSizeComponent"));
	units = [
		new wu("px", 1, 0, "number", parseInt(cssStyle.getPropertyValue("--bdRadius").trim())),
		new wu("%", 1, 0, "number", 100),
		new wu("em", 0.1, 0, "number", 1),
		new wu("rem", 0.1, 0, "number", 1),
		];
	ReactDOM.render(
		<WidthUnitComponent name="bdRadius" unit="px" units={units}/>
		, l("borderRadiusComponent"));

	units = [
		new wu("px", 1, -1000, "number", 5),
		new wu("%", 1, -1000, "number", 1),
		new wu("em", 0.1, -1000, "number", 1),
		new wu("rem", 0.1, -1000, "number", 1),
		];
	ReactDOM.render(
		<WidthUnitComponent name="marginTop" unit="em" units={units}/>
		, l("marginTop"));
	ReactDOM.render(
		<WidthUnitComponent name="marginRight" unit="em" units={units}/>
		, l("marginRight"));
	ReactDOM.render(
		<WidthUnitComponent name="marginBottom" unit="em" units={units}/>
		, l("marginBottom"));
	ReactDOM.render(
		<WidthUnitComponent name="marginLeft" unit="em" units={units}/>
		, l("marginLeft"));
	ReactDOM.render(
		<WidthUnitComponent name="paddingTop" unit="em" units={units}/>
		, l("paddingTop"));
	ReactDOM.render(
		<WidthUnitComponent name="paddingRight" unit="em" units={units}/>
		, l("paddingRight"));
	ReactDOM.render(
		<WidthUnitComponent name="paddingBottom" unit="em" units={units}/>
		, l("paddingBottom"));
	ReactDOM.render(
		<WidthUnitComponent name="paddingLeft" unit="em" units={units}/>
		, l("paddingLeft"));
	
	//===========================================================
	//疑似
	//hover
	ReactDOM.render(
		<ColorCompontent name="hvCo" value={cssStyle.getPropertyValue("--hvCo").trim()}/>
		, l("hvCoComponent"));
	ReactDOM.render(
		<ColorCompontent name="hvBg" value={cssStyle.getPropertyValue("--hvBg").trim()}/>
		, l("hvBgComponent"));

	ReactDOM.render(
		<LineStyleComponent name="hvBdT"/>
		, l("hvBdTComponent"));
	ReactDOM.render(
		<LineStyleComponent name="hvBdR"/>
		, l("hvBdRComponent"));
	ReactDOM.render(
		<LineStyleComponent name="hvBdB"/>
		, l("hvBdBComponent"));
	ReactDOM.render(
		<LineStyleComponent name="hvBdL"/>
		, l("hvBdLComponent"));

	//active
	ReactDOM.render(
		<ColorCompontent name="actCo" value={cssStyle.getPropertyValue("--actCo").trim()}/>
		, l("actCoComponent"));
	ReactDOM.render(
		<ColorCompontent name="actBg" value={cssStyle.getPropertyValue("--actBg").trim()}/>
		, l("actBgComponent"));

	ReactDOM.render(
		<LineStyleComponent name="actBdT"/>
		, l("actBdTComponent"));
	ReactDOM.render(
		<LineStyleComponent name="actBdR"/>
		, l("actBdRComponent"));
	ReactDOM.render(
		<LineStyleComponent name="actBdB"/>
		, l("actBdBComponent"));
	ReactDOM.render(
		<LineStyleComponent name="actBdL"/>
		, l("actBdLComponent"));

}
