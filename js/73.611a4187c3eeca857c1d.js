(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{"5yoo":function(e,t,o){"use strict";o.d(t,"a",function(){return r});var r=function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.layout={visibility:"visible"},this.paint={"circle-radius":6,"circle-color":"#3fb1e3","circle-opacity":1,"circle-blur":0,"circle-translate":[0,0],"circle-translate-anchor":"map","circle-pitch-scale":"map","circle-pitch-alignment":"viewport","circle-stroke-width":0,"circle-stroke-color":"#000","circle-stroke-opacity":1},Object.assign(this.paint,t),Object.assign(this.layout,o)}},CKgU:function(e,t,o){"use strict";var i=o("FuRH"),a=o("yIpb"),l=o("oCYn"),r=o("YKMj");function c(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(o){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=n(o);return function(e,t){{if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")}return function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e)}(this,r?(e=n(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=function(e,t,o,r){var n,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===("undefined"==typeof Reflect?"undefined":p(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var l=e.length-1;0<=l;l--)(n=e[l])&&(a=(i<3?n(a):3<i?n(t,o,a):n(t,o))||a);return 3<i&&a&&Object.defineProperty(t,o,a),a};function h(t,o){for(var e=arguments.length,r=new Array(2<e?e-2:0),n=2;n<e;n++)r[n-2]=arguments[n];var i=t.constructor.options;i.mixins&&i.mixins.forEach(function(e){e[o]&&(e=e[o]).call.apply(e,[t].concat(r))}),i[o]&&(i=i[o]).call.apply(i,[t].concat(r))}o=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(n,l["default"]);var e,t,o,r=u(n);function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),r.apply(this,arguments)}return e=n,(t=[{key:"mapTargetChanged",value:function(e,t){var o;e&&t&&e!==t&&(o=t||this.firstDefaultTarget,(t=i.a.$options.getMap(o))&&this.removeMap(t,o),i.a.$options.getMap(e)&&this.loadMap(e))}},{key:"mounted",value:function(){var e=this.getTargetName();this.firstDefaultTarget=e,i.a.$options.getMap(e)&&this.loadMap(e),i.a.$on("load-map",this.loadMapSucceed),a.a.$on("delete-map",this.removeMapSucceed)}},{key:"beforeDestroy",value:function(){this.removeMap(),i.a.$off("load-map",this.loadMapSucceed),a.a.$off("delete-map",this.removeMapSucceed)}},{key:"getFirstTarget",value:function(){var e,t;for(t in i.a.$options.getAllMaps())if(t){e=t;break}return e}},{key:"getTargetName",value:function(){var e=this.$parent,e=e&&e.$options.name&&-1!==["smwebmap","smncpmap"].indexOf(e.$options.name.toLowerCase())&&e.target;return this.mapTarget||e||this.getFirstTarget()}},{key:"loadMap",value:function(e){var t=this;this.firstDefaultTarget||(this.firstDefaultTarget=e),this.map=i.a.$options.getMap(e),this.webmap=i.a.$options.getWebMap(e),this.viewModel&&"function"==typeof this.viewModel.setMap&&this.viewModel.setMap({map:this.map,webmap:this.webmap,mapTarget:e}),h(this,"loaded",this.map,e),this.$nextTick(function(){t.$emit("loaded")})}},{key:"removeMap",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.map,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.getTargetName();e&&(this.viewModel&&this.viewModel.removed&&this.viewModel.removed(),h(this,"removed",e,t),this.map=null,this.webmap=null,this.firstDefaultTarget=null)}},{key:"loadMapSucceed",value:function(e,t){t===this.getTargetName()&&this.loadMap(t)}},{key:"removeMapSucceed",value:function(e){e===this.getTargetName()&&this.removeMap()}},{key:"mapNotLoadedTip",value:function(){return!this.map&&(this.$message.destroy(),this.$message.warning(this.$t("warning.unassociatedMap")),!0)}}])&&c(e.prototype,t),o&&c(e,o),n}();f([Object(r.Prop)()],o.prototype,"mapTarget",void 0),f([Object(r.Watch)("mapTarget")],o.prototype,"mapTargetChanged",null),o=f([r.Component],o),t.a=o},dbBt:function(e,t,o){"use strict";o.d(t,"a",function(){return r});var r=function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.layout={visibility:"visible"},this.paint={"fill-opacity":.8,"fill-color":"#3fb1e3","fill-translate":[0,0],"fill-antialias":!0,"fill-outline-color":"#3fb1e3","fill-translate-anchor":"map"},Object.assign(this.paint,t),Object.assign(this.layout,o)}},oMcV:function(e,t,o){"use strict";o.d(t,"a",function(){return r});var r=function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.layout={visibility:"visible","line-cap":"butt","line-join":"miter"},this.paint={"line-opacity":1,"line-color":"#3fb1e3","line-width":3,"line-blur":1},Object.assign(this.paint,t),Object.assign(this.layout,o)}},oTir:function(e,t,o){"use strict";var i=o("oCYn"),r=o("YKMj"),a=o("yIpb"),l=o("qAG6"),c=o("5ZGa");function s(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(o){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=n(o);return function(e,t){{if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")}return function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e)}(this,r?(e=n(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var h,d=function(e,t,o,r){var n,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===("undefined"==typeof Reflect?"undefined":f(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var l=e.length-1;0<=l;l--)(n=e[l])&&(a=(i<3?n(a):3<i?n(t,o,a):n(t,o))||a);return 3<i&&a&&Object.defineProperty(t,o,a),a},o=h=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(n,i["default"]);var e,t,o,r=p(n);function n(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(e=r.apply(this,arguments)).backgroundData="",e.textColorsData="",e.collapseCardBackgroundData="",e.collapseCardHeaderBgData="",e.subComponentSpanBgData="",e.tablePopupBgData="",e.colorGroupsData=[],e.themeStyleName=[],e}return e=n,(t=[{key:"getBackgroundStyle",get:function(){return{background:this.backgroundData}}},{key:"collapseCardBackgroundStyle",get:function(){return{background:this.collapseCardBackgroundData}}},{key:"collapseCardBackgroundLightStyle",get:function(){return{background:Object(c.b)({colorGroup:[this.collapseCardBackgroundData]})[2]}}},{key:"collapseCardHeaderBgStyle",get:function(){return{background:this.collapseCardHeaderBgData}}},{key:"subComponentSpanBgStyle",get:function(){return{background:this.subComponentSpanBgData}}},{key:"tablePopupBgStyle",get:function(){return{background:this.tablePopupBgData}}},{key:"getTextColorStyle",get:function(){return{color:this.textColorsData}}},{key:"headingTextColorStyle",get:function(){return{color:Object(l.g)(this.textColorsData,.85)}}},{key:"secondaryTextColorStyle",get:function(){return{color:Object(l.g)(this.textColorsData,.45)}}},{key:"disabledTextColorStyle",get:function(){return{color:Object(l.g)(this.textColorsData,.25)}}},{key:"getBackground",get:function(){return this.backgroundData}},{key:"getTextColor",get:function(){return this.textColorsData}},{key:"getColorStyle",get:function(){return function(e){return{color:this.colorGroupsData[e]}}}},{key:"getColor",get:function(){return function(e){return this.colorGroupsData[e]}}},{key:"themeStyleChanged",value:function(e){return e}},{key:"created",value:function(){this.initThemeData(),this.registerPropListener()}},{key:"mounted",value:function(){var o=this;a.a.$on("change-theme",function(e){o.getSelfProps().forEach(function(e){var t=o.getDataNameOfProp(e);o[t]=o.getRealColor(e)}),o.collapseCardHeaderBgData=o.getRealColor("collapseCardHeaderBg"),o.subComponentSpanBgData=o.getRealColor("subComponentSpanBg"),o.collapseCardBackgroundData=o.getRealColor("collapseCardBackground"),o.tablePopupBgData=o.getRealColor("messageBackground"),o.themeStyleChanged(),o.initNeedTheme(e)})}},{key:"initThemeData",value:function(){var o=this;this.getSelfProps().forEach(function(e){var t=o.getDataNameOfProp(e);o[t]=o[e]||o.getRealColor(e)}),this.collapseCardHeaderBgData=this.background||this.getRealColor("collapseCardHeaderBg"),this.subComponentSpanBgData=this.background||this.getRealColor("subComponentSpanBg"),this.collapseCardBackgroundData=this.background||this.getRealColor("collapseCardBackground"),this.tablePopupBgData=this.background||this.getRealColor("messageBackground")}},{key:"initNeedTheme",value:function(t){var o=this;this.themeStyleName.forEach(function(e){o[e]="primaryColor"===e?t.colorGroup&&t.colorGroup[0]:o.getRealColor(e)})}},{key:"registerPropListener",value:function(){var e=this,r=this;this.getSelfProps().forEach(function(o){e.$watch(o,function(e){var t=this.getDataNameOfProp(o);r[t]=e||this.getRealColor(o),"background"===o&&(r.collapseCardBackgroundData=e||this.getRealColor("collapseCardBackground"),r.collapseCardHeaderBgData=e||this.getRealColor("collapseCardHeaderBg"),r.subComponentSpanBgData=e||this.getRealColor("subComponentSpanBg"),r.tablePopupBgData=e||this.getRealColor("messageBackground"))})})}},{key:"getSelfProps",value:function(){return Object.keys(h.extendOptions.props)}},{key:"getRealColor",value:function(e){var t=a.a.$options.theme||{};if("colorGroup"===e||-1===t[e].indexOf("var"))return t[e];var o=Object(c.c)(t),o=window.getComputedStyle(document.querySelector(o)),e=t[e].replace(/var\((.+)\)/g,"$1");return o.getPropertyValue(e).trim()}},{key:"getDataNameOfProp",value:function(e){switch(e){case"textColor":return"textColorsData";case"colorGroup":return"colorGroupsData";default:return"".concat(e,"Data")}}}])&&s(e.prototype,t),o&&s(e,o),n}();d([Object(r.Prop)()],o.prototype,"background",void 0),d([Object(r.Prop)()],o.prototype,"textColor",void 0),d([Object(r.Prop)()],o.prototype,"colorGroup",void 0),d([Object(r.Emit)()],o.prototype,"themeStyleChanged",null),o=h=d([Object(r.Component)({name:"Theme"})],o),t.a=o},ooFd:function(e,t,o){"use strict";o.r(t);var r=o("oTir"),n=o("CKgU"),i=o("hdLw"),a=o.n(i);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(o){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=p(o);return function(e,t){{if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")}return function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e)}(this,r?(e=p(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f="#01ffff",h={circle:["circle-radius","circle-stroke-width"],line:["line-width"],fill:["line-width"]},d=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(n,a.a.Evented);var e,t,o,r=u(n);function n(e,t){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(o=r.call(this)).map=e,o.layers=t.layers||[],o.layerStyle=t.layerStyle||{},o.popup=null,o}return e=n,(t=[{key:"addPopup",value:function(e,t){return t&&(t.style.display="block",this.popup=new a.a.Popup({maxWidth:"none",className:"sm-mapboxgl-identify-popup sm-mapboxgl-tabel-popup",closeButton:!1}).setLngLat(e).setDOMContent(t).addTo(this.map)),this.popup}},{key:"addOverlayToMap",value:function(e,t){var o={circle:{"circle-color":f,"circle-opacity":.6,"circle-stroke-color":f,"circle-stroke-opacity":1},line:{"line-color":f,"line-opacity":1},fill:{"fill-color":f,"fill-opacity":.6,"fill-outline-color":f},symbol:{layout:{"icon-size":5}}},r=e.type,n=e.id,i=e.paint;-1!==n.indexOf("-strokeLine")&&"line"===r&&(r="fill",i={});var a=this._setDefaultPaintWidth(this.map,r,n,h[r],this.layerStyle);"circle"!==r&&"line"!==r&&"fill"!==r||(a=a[r],o=Object.assign({},e,{id:n+"-identify-SM-highlighted",type:r,paint:a&&a.paint||Object.assign({},i,o[r]),layout:a&&a.layout||{visibility:"visible"},filter:t}),this.map.addLayer(o)),"fill"===r&&(a=(a=a.strokeLine||a.stokeLine||{})&&a.paint||{"line-width":3,"line-color":f,"line-opacity":1},t=Object.assign({},e,{id:n+"-identify-SM-StrokeLine",type:"line",paint:a,layout:{visibility:"visible"},filter:t}),this.map.addLayer(t))}},{key:"removed",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.layers;this.removePopup(),this.removeOverlayer(e)}},{key:"removePopup",value:function(){this.popup&&this.popup.remove()&&(this.popup=null)}},{key:"removeOverlayer",value:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.layers;e&&e.forEach(function(e){t.map&&t.map.getLayer(e+"-identify-SM-highlighted")&&t.map.removeLayer(e+"-identify-SM-highlighted"),t.map&&t.map.getLayer(e+"-identify-SM-StrokeLine")&&t.map.removeLayer(e+"-identify-SM-StrokeLine")})}},{key:"_setDefaultPaintWidth",value:function(o,r,n,e,i){if(e)return e.forEach(function(e){var t;"fill"!==r?t=o.getLayer(n)&&o.getPaintProperty(n,e):r="stokeLine",i[r].paint[e]=i[r].paint[e]||t,void 0!==i[r].paint[e]&&""!==i[r].paint[e]||(i[r].paint[e]="circle-stroke-width"===e||"stokeLine"===r?2:8)}),i}}])&&c(e.prototype,t),o&&c(e,o),n}(),y=o("5yoo"),g=o("dbBt"),v=o("oMcV"),m=o("qAG6"),r={name:"SmIdentify",mixins:[n.a,r.a],props:{layers:{type:Array,default:function(){return[]}},fields:{type:Array,default:function(){return[]}},clickTolerance:{type:Number,default:5},layerStyle:{type:Object,default:function(){return{line:new v.a({"line-width":3,"line-color":"#409eff","line-opacity":1}),circle:new y.a({"circle-color":"#409eff","circle-opacity":.6,"circle-radius":8,"circle-stroke-width":2,"circle-stroke-color":"#409eff","circle-stroke-opacity":1}),fill:new g.a({"fill-color":"#409eff","fill-opacity":.6,"fill-outline-color":"#409eff"}),stokeLine:new v.a({"line-width":3,"line-color":"#409eff","line-opacity":1})}}},autoResize:{type:Boolean,default:!0},keyMaxWidth:{type:[Number,String],default:110},valueMaxWidth:{type:[Number,String],default:170},keyWidth:{type:[Number,String],default:110},valueWidth:{type:[Number,String],default:170}},data:function(){return{isHide:!0,popupProps:{}}},computed:{getWidthStyle:function(){var e={keyWidth:{},valueWidth:{}};return this.autoResize?(this.keyMaxWidth&&(e.keyWidth.maxWidth=this.keyMaxWidth+"px"),this.valueMaxWidth&&(e.valueWidth.maxWidth=this.valueMaxWidth+"px")):(this.keyWidth&&(e.keyWidth.width=this.keyWidth+"px"),this.valueWidth&&(e.valueWidth.width=this.valueWidth+"px")),e},layersOnMap:function(){var e=[];if(this.map)for(var t=0;t<this.layers.length;t++)this.map.getLayer(this.layers[t])&&e.push(this.layers[t]);return e}},watch:{layers:{handler:function(e,t){this.viewModel&&this.viewModel.removed(t),this.removeCursorEvent(t),this.setViewModel()}},layerStyle:function(){this.setViewModel()}},loaded:function(){var e=this;this.isHide=!0,this.changeCursorGrab=function(){return e.changeCursor("grab",e.map)},this.setViewModel()},removed:function(){this.map&&(this.map.off("click",this.sourceMapClickFn),this.map.off("mousemove",this.changeCursorPointer),this.map.off("mouseleave",this.changeCursorGrab)),this.viewModel&&this.viewModel.removed()},beforeDestroy:function(){this.$options.removed.call(this)},methods:{setViewModel:function(){this.layers&&(this.viewModel=new d(this.map,{mapTarget:this.getTargetName(),layers:this.layers,layerStyle:this.layerStyle}),this.map&&this.bindMapClick(this.map),this.changeClickedLayersCursor(this.layersOnMap))},bindMapClick:function(e){e.on("click",this.sourceMapClickFn)},sourceMapClickFn:function(e){this.viewModel.removeOverlayer(this.layers);var t,o,r=this.bindQueryRenderedFeatures(e);r[0]&&(t=this.layers&&this.layers.indexOf(r[0].layer.id),this.fields instanceof Array?"string"==typeof(o=this.fields[t])&&(o=this.fields):this.fields instanceof Object&&0===t&&(o=this.fields),this.layersMapClickFn(e,o||[],r[0]))},bindQueryRenderedFeatures:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.layersOnMap,o=e.target,e=[[e.point.x-this.clickTolerance,e.point.y-this.clickTolerance],[e.point.x+this.clickTolerance,e.point.y+this.clickTolerance]];return o.queryRenderedFeatures(e,{layers:t})},layersMapClickFn:function(e,t,o){e=e.target;this.addPopup(o,t);var r=["all"],n=["smx","smy","lon","lat","longitude","latitude","x","y","usestyle","featureinfo"];o._vectorTileFeature._keys.forEach(function(e){-1===n.indexOf(e.toLowerCase())&&void 0!==o.properties[e]&&r.push(["==",e,o.properties[e]])}),this.addOverlayToMap(o.layer,r),e.getLayer(o.layer.id+"-identify-SM-highlighted")&&e.setFilter(o.layer.id+"-identify-SM-highlighted",r)},addPopup:function(t,e){var o,r=this;this.popupProps={},t.properties&&(0<e.length?e.forEach(function(e){Object.prototype.hasOwnProperty.call(t.properties,e)&&(r.popupProps[e]=t.properties[e])}):this.popupProps=t.properties,o=Object(m.h)(t),this.$nextTick(function(){r.isHide=!1,r.viewModel.addPopup(o,r.$refs.Popup),Object(m.s)(r.tablePopupBgData)}))},addOverlayToMap:function(e,t){this.viewModel.addOverlayToMap(e,t)},changeClickedLayersCursor:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.map;e&&e.forEach(function(e){o.on("mousemove",e,t.changeCursorPointer),o.on("mouseleave",e,t.changeCursorGrab)})},changeCursor:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"grab",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.map;t&&t.getCanvas()&&(t.getCanvas().style.cursor=e)},changeCursorPointer:function(){this.changeCursor("pointer",this.map)},removeCursorEvent:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.layersOnMap;this.map&&(this.map.off("click",this.sourceMapClickFn),e.forEach(function(e){t.map.off("mousemove",e,t.changeCursorPointer),t.map.off("mouseleave",e,t.changeCursorGrab),t.changeCursor("grab",t.map)}))}}},o=o("KHd+"),r=Object(o.a)(r,function(){var r=this,e=r.$createElement,n=r._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"Popup",staticClass:"sm-component-identify",style:[r.tablePopupBgStyle,r.getTextColorStyle]},[n("ul",{class:[r.autoResize?"sm-component-identify__auto":"sm-component-identify__custom","sm-component-identify__content"]},r._l(r.popupProps,function(e,t,o){return n("li",{key:o,staticClass:"content"},[n("div",{staticClass:"left ellipsis",style:r.getWidthStyle.keyWidth,attrs:{title:t}},[r._v(r._s(t))]),r._v(" "),n("div",{staticClass:"right ellipsis",style:r.getWidthStyle.valueWidth,attrs:{title:e}},[r._v(r._s(e))])])}),0)])},[],!1,null,null,null);t.default=r.exports}}]);