webpackJsonp([8],{"6+vB":function(t,i){},XA87:function(t,i){},Y0ry:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=a("mHB0"),s=a("mn9N"),n=a("GPQ0"),l=(e.a,s.a,n.a,{name:"CaseSearch",components:{CaseListItem:e.a,mescroll:s.a,HeaderTitle:n.a},data:function(){return{title:"",listBrandByTitle:"",list:[],imgShow:!1}},methods:{phoneCall:function(){window.location.href="tel:010-53579588"},getBrandTitle:function(t){var i=this,a={title:this.listBrandByTitle,brandPageNum:t.num,brandPageSize:t.size,firstStageType:"06"},e={apiUrl:this.weburl+"mobile/info/getXList",params:a};this.$http.post(this.baseurl+"/brand/api",e).then(function(t){if(console.log(t),200==t.data.code){var a=t.data.data;i.$refs.mescroll.endSuccess(a.length),i.list=i.list.concat(t.data.data),0==a.length&&(i.imgShow=!0)}}).catch(function(t){i.$refs.mescroll.endErr()})}},created:function(){this.listBrandByTitle=this.$route.query.name,this.title="发现-"+this.listBrandByTitle}}),r={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"brand-search page-top"},[a("header-title",{attrs:{title:t.title}}),t._v(" "),a("div",{staticClass:"search-content"},[a("mescroll",{ref:"mescroll",attrs:{emptyKeyImg:1,upCallback:t.getBrandTitle,warpId:"index_scroll",id:"index_scroll"}},[a("ul",{ref:"content",staticClass:"brand-content"},t._l(t.list,function(t,i){return a("case-list-item",{key:i,attrs:{list:t}})}))]),t._v(" "),t.imgShow?a("div",{staticClass:"searchBg_nodata"}):t._e()],1)],1)},staticRenderFns:[]};var o=a("VU/8")(l,r,!1,function(t){a("XA87")},"data-v-3292e842",null);i.default=o.exports},mHB0:function(t,i,a){"use strict";var e=a("RzDf"),s=(e.a,{name:"CaseListItem",components:{ProManage:e.a},props:["list"],data:function(){return{collection:!1}},methods:{collectFn:function(){this.collection=!this.collection,this.collection&&console.log("收藏成功")}}}),n={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("li",{staticClass:"case-list-item",attrs:{infoId:t.list.infoId}},[a("router-link",{attrs:{to:{name:"casedetail",query:{infoId:t.list.infoId}},tag:"div"}},[a("div",{staticClass:"case_title"},[t._v(t._s(t.list.title))]),t._v(" "),t.list.vodEntity.cover?a("div",{staticClass:"img-wrap"},[a("img",{attrs:{width:"100%",height:"100%",src:t.list.vodEntity.cover}}),t._v(" "),a("div",{staticClass:"videoIcon"},[a("img",{attrs:{width:"100%",src:"/static/images/opportunity/branddetail/bofang.png",alt:""}})])]):a("div",{staticClass:"img-wrap"},[a("img",{attrs:{width:"100%",height:"100%",src:"/static/images/background_img/active.png"}}),t._v(" "),a("div",{staticClass:"videoIcon"},[a("img",{attrs:{width:"100%",src:"/static/images/opportunity/branddetail/bofang.png",alt:""}})])])]),t._v(" "),a("div",{staticClass:"tipbox"},[a("pro-manage",{attrs:{commentsNum:t.list.commentEntity.total,hasComment:!0,busId:t.list.infoId,supportStatus:t.list.likes,supportTotal:t.list.likeNum,isCollect:t.list.collFlag}})],1),t._v(" "),a("div",{staticClass:"masks"})],1)},staticRenderFns:[]};var l=a("VU/8")(s,n,!1,function(t){a("6+vB")},"data-v-308cc02a",null);i.a=l.exports}});
//# sourceMappingURL=8.03083cd8ef08ebec18fd.js.map