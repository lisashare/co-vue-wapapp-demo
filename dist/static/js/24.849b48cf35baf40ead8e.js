webpackJsonp([24],{"3nqS":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});s("6lib");var e=s("mn9N"),i=s("E46z"),n=s("GPQ0"),r=(e.a,i.a,n.a,{name:"Vr",components:{mescroll:e.a,Floating:i.a,HeaderTitle:n.a},data:function(){return{paramJson:{params:{pageNum:"1",pageSize:"10",sourceType:"-1"}},isNavShow:!1,isTelShow:!1,vrListData:[],title:"商评"}},methods:{phoneCall:function(){window.location.href="tel:010-53579588"},closeNav:function(){this.isNavShow=!1},closeTel:function(){this.isTelShow=!1},upCallback:function(t){var a=this,s=this.paramJson;s.params.pageNum=t.num,s.params.pageSize=t.size,this.$http.post(this.baseurl+"/home/vodvideos",s).then(function(t){if(console.log(t),console.log(t.data.data.list),200==t.data.code){var e=t.data.data,i=t.data.data.list;e.pages<s.params.pageNum&&(i.length=0),a.$refs.mescroll.endSuccess(i.length),a.vrListData=a.vrListData.concat(t.data.data.list)}}).catch(function(t){a.$refs.mescroll.endErr()})}}}),l={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"Vr"},[s("header-title",{attrs:{title:t.title}}),t._v(" "),s("mescroll",{ref:"mescroll",attrs:{upCallback:t.upCallback,warpId:"index_scroll",id:"index_scroll"}},[s("ul",{staticClass:"vrList"},t._l(t.vrListData,function(a,e){return s("router-link",{key:e,staticClass:"item",attrs:{tag:"li",to:{name:"videodetail",query:{videoId:a.uuid}}}},[s("h3",{staticClass:"title"},[t._v(t._s(a.title))]),t._v(" "),a.cover?s("div",{staticClass:"vrImgs"},[s("img",{attrs:{src:a.cover}}),t._v(" "),s("img",{staticClass:"vrImg",attrs:{src:"/static/images/home/icon/bofang.png"}})]):s("div",{staticClass:"vrImgs"},[s("img",{attrs:{src:"/static/images/background_img/active.png"}}),t._v(" "),s("img",{staticClass:"vrImg",attrs:{src:"/static/images/home/icon/bofang.png"}})]),t._v(" "),s("div",{staticClass:"footer"},[s("span",{staticClass:"commnent-icon"}),t._v(t._s(a.commentsNum)+"\n        ")])])}))]),t._v(" "),s("floating")],1)},staticRenderFns:[]};var o=s("VU/8")(r,l,!1,function(t){s("PDCd")},"data-v-1c136525",null);a.default=o.exports},PDCd:function(t,a){}});
//# sourceMappingURL=24.849b48cf35baf40ead8e.js.map