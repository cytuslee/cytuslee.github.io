(window.webpackJsonp=window.webpackJsonp||[]).push([[52,15],{EBC7:function(t,e,n){"use strict";n.r(e);var r=n("oCYn"),o=n("3Dh3"),a=n("zT9C"),s=n.n(a),a=n("XaGS"),i=n.n(a),p=n("GSdF"),c=n("FuRH"),a={props:{component:{type:Object,required:!0},defaultParams:{type:Object}},data:function(){return{componentId:null,renderProps:null}},computed:{background:function(){return-1!==this.excludeComponentsBackground.indexOf(this.component.componentType)?{}:Object(p.a)(this.component.propDatas)},subComponentList:function(){var t=this.$store.getters.components;return Object.values(t.mapSubComponent).map(function(t){return t.type})},excludeComponentsBackground:function(){return this.subComponentList.concat("Container")},mapsOnScreen:function(){return this.$store.getters.mapsOnScreen()},firstMapTarget:function(){return(this.$store.getters.mapsOnScreen()[0]||{}).value}},watch:{component:{handler:function(){var t=Object(o.d)(this.component.uri);this.componentId=r.default.component(t)?t:null},deep:!0,immediate:!0},"defaultParams.props":{handler:function(t,e){i()(t,e)||(this.renderProps=s()(this.defaultParams.props),-1===this.excludeComponentsBackground.indexOf(this.component.componentType)&&(this.renderProps.background=""),-1!==["LiquidFill","TimeRange"].indexOf(this.component.componentType)&&(this.renderProps.backgroundColor=this.renderProps.backgroundColorReplacer,delete this.renderProps.backgroundColorReplacer))},immediate:!0},mapsOnScreen:function(t,e){i()(t,e)||this.renderProps.mapTarget&&!c.a.$options.getMap(this.renderProps.mapTarget)&&(this.renderProps.mapTarget=this.firstMapTarget)}},created:function(){this.setDefaultMapTarget()},methods:{setDefaultMapTarget:function(){this.renderProps&&this.renderProps.hasOwnProperty("mapTarget")&&!this.renderProps.mapTarget&&(this.renderProps.mapTarget=this.getRelatedMapTarget())},getRelatedMapTarget:function(){var t=this.$store.getters,e=t.componentsOnScreen,n=t.gridLayout.content,t=t.activeComponentId;return Object(o.h)(e,n||[],t)}}},n=n("KHd+"),a=Object(n.a)(a,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{style:t.background},[e(t.componentId,t._b({tag:"component",style:t.defaultParams.style,attrs:{componentId:t.component.componentId}},"component",t.renderProps,!1))],1)},[],!1,null,null,null);e.default=a.exports},mbF7:function(t,e,n){"use strict";n.r(e);var r=n("EBC7"),o=n("XaGS"),a=n.n(o),c=n("PdSV"),u=n("4zwu"),r={mixins:[r.default],data:function(){return{nextUrl:void 0}},computed:{nextProps:function(){var t={};return void 0!==this.nextUrl&&(t.url=this.nextUrl),Object.assign({swf:"./static/video-js.swf"},this.renderProps,t)},listeners:function(){var t=this.component.componentId;return this.$store.getters.getListensByComponentId(t)}},watch:{"defaultParams.props.url":function(t,e){t!==e&&(this.nextUrl=t)},listeners:function(t,i){var p=this;t&&!a()(t,i)?t.forEach(function(t){var e,n=t.targetData.dataId,r=t.actionId,o=t.timestamp,a=t.blockEventLinkage,s=i&&i.find(function(t){return t.actionId===r});s&&s.timestamp===o||a||(n&&(e=p.$store.getters.getDataCache(n),e=(u.a.$options.getData(e.data).features||{}).features),e=c.b[t.type].callback(t,e),p.nextUrl=e)}):!t&&this.nextUrl&&(this.nextUrl=void 0)}}},n=n("KHd+"),r=Object(n.a)(r,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e(t.componentId,t._b({tag:"component",style:t.defaultParams.style,attrs:{componentId:t.component.componentId}},"component",t.nextProps,!1))],1)},[],!1,null,null,null);e.default=r.exports}}]);