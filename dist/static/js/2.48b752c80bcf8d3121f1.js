webpackJsonp([2],{"4Vku":function(t,e){},"5kXC":function(t,e,i){"use strict";var s=i("7+uW");e.a=new s.a},ASbv:function(t,e){},NJtC:function(t,e){},RZfM:function(t,e){},fYA9:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("6lib");var s=i("E46z"),a=i("5kXC"),o=i("+tmA"),n=i("mnV9"),r=(n.a,o.a,{name:"HeaderTitle",components:{NavList:n.a,ServicePop:o.a},props:["title"],data:function(){return{isNavShow:!1,isTelShow:!1,message:""}},methods:{bus:function(){a.a.$emit("videoHiden")},phoneCall:function(){window.location.href="tel:010-53579588"},closeNav:function(){this.isNavShow=!1,a.a.$emit("imgHiden")},closeTel:function(){this.isTelShow=!1,a.a.$emit("imgHiden")}}}),d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-title"},[i("header",{staticClass:"search-header bc line-bottom"},[i("i",{staticClass:"icon-left",on:{click:function(e){t.$router.go(-1)}}}),t._v(" "),i("h2",{staticClass:"ellipsis"},[t._v(t._s(t.title))]),t._v(" "),i("div",{on:{click:t.bus}},[i("span",{staticClass:"header-contact-customer",on:{click:function(e){t.isTelShow=!t.isTelShow}}}),t._v(" "),i("span",{staticClass:"header-nav",on:{click:function(e){t.isNavShow=!t.isNavShow}}})])]),t._v(" "),i("nav-list",{attrs:{closeNav:t.closeNav,isNavShow:t.isNavShow}}),t._v(" "),i("service-pop",{attrs:{closeTel:t.closeTel,isTelShow:t.isTelShow}})],1)},staticRenderFns:[]};var c=i("VU/8")(r,d,!1,function(t){i("RZfM")},"data-v-00b38e6e",null).exports,l={name:"VideoPlay",props:["listVideo"],data:function(){return{videoShow:!0,imgShow:!1,videoIconshow:!1,controlshow:"controls",isPlay:!1,message:""}},mounted:function(){var t=this;a.a.$on("videoHiden",function(e){t.videoHiden()}),a.a.$on("imgHiden",function(e){t.imgHiden()})},methods:{videoHiden:function(){this.videoShow=!1,this.imgShow=!0,"android"==navigator.userAgent.toLowerCase().match(/Android/i)&&(console.log("安卓"),this.videoIconshow=!0)},imgHiden:function(){this.videoShow=!0,this.imgShow=!1,"android"==navigator.userAgent.toLowerCase().match(/Android/i)&&(console.log("安卓"),this.videoIconshow=!0)},videobtnshow:function(){var t=navigator.userAgent.toLowerCase();"iphone os"==t.match(/iPhone\sOS/i)?console.log("ios"):"android"==t.match(/Android/i)&&(console.log("安卓"),this.videoIconshow=!0,this.controlshow=!1)},playClick:function(){this._dom=document.getElementById("video1"),this.isPlay=!this.isPlay,this._dom.play(),this.videoIconshow=!1}},created:function(){this.videobtnshow()}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.listVideo?i("div",{staticClass:"videoBody"},[i("div",{staticClass:"videoC"},[t.videoShow?i("video",{attrs:{id:"video1",poster:t.listVideo.cover||"/static/images/background_img/active.png",controls:t.controlshow}},[i("source",{attrs:{src:t.listVideo.hdUrl,type:"video/mp4"}})]):t._e(),t._v(" "),t.videoIconshow?i("div",{staticClass:"videoIcon",on:{click:function(e){t.playClick()}}},[i("img",{attrs:{width:"100%",src:"/static/images/opportunity/branddetail/bofang.png",alt:""}})]):t._e(),t._v(" "),t.imgShow?i("div",{staticClass:"imgbox"},[i("img",{attrs:{src:t.listVideo.cover||"/static/images/background_img/active.png"}})]):t._e()])]):t._e()},staticRenderFns:[]};var v=i("VU/8")(l,m,!1,function(t){i("NJtC")},"data-v-4f285ced",null).exports,u={name:"RecommendVideo",props:["swiper","seriesId","seriesNum"],data:function(){var t=this;return{video:"",showVideo:!1,swiperOption:{slidesPerView:2,spaceBetween:22,pagination:{},observeParents:!0,observer:!0,on:{slideChange:function(){t.swiper.length!==t.seriesNum&&t.imageLoadOver()}}},info:{seriesId:this.seriesId,pageNum:1,pageSize:10,userId:""},lists:this.swiper,imageSwiper:""}},methods:{imageLoadOver:function(){var t=this;if(this.imageSwiper&&this.imageSwiper.pageNum==this.imageSwiper.pages)return!1;this.info.pageNum=this.info.pageNum+1;var e={params:this.info};this.$http.post(this.baseurl+"/discovery/getseriesinfolist",e).then(function(e){if(200==e.data.code){t.imageSwiper=e.data.data;var i=e.data.data.list;t.lists=t.lists.concat(i)}})},flushCom:function(){window.location.reload()}},created:function(){}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommend-video"},[i("swiper",{staticClass:"swiperY",attrs:{options:t.swiperOption}},t._l(t.lists,function(e,s){return i("swiper-slide",{key:s,staticClass:"swiper"},[e.vodEntity?i("a",[e.vodEntity.cover?i("img",{attrs:{src:e.vodEntity.cover||"/static/images/background_img/active.png"}}):t._e(),t._v(" "),i("p",[i("router-link",{attrs:{to:{name:"casedetail",query:{infoId:e.informationId}},tag:"img",width:"100%",src:"/static/images/opportunity/branddetail/bofang.png",alt:""},nativeOn:{click:function(e){return t.flushCom(e)}}})],1)]):t._e(),t._v(" "),e.title?i("div",{staticClass:"title"},[t._v(t._s(e.title))]):t._e()])}))],1)},staticRenderFns:[]};var p=i("VU/8")(u,h,!1,function(t){i("ASbv")},"data-v-172a9ad2",null).exports,f={name:"RecommendVideo",props:["swiper"],data:function(){var t=this;return{video:"",showVideo:!1,swiperOption:{slidesPerView:2,spaceBetween:22,pagination:{el:".swiper-pagination",clickable:!0},onSlideChangeEnd:function(e){t.page=e.realIndex+1,t.index=e.realIndex}}}},methods:{flushCom:function(){window.location.reload()}},created:function(){}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommend-video"},[i("swiper",{staticClass:"swiperY",attrs:{options:t.swiperOption}},t._l(t.swiper,function(e,s){return i("swiper-slide",{key:s,staticClass:"swiper"},[e.vodEntity?i("a",[e.vodEntity.cover?i("router-link",{attrs:{to:{name:"casedetail",query:{infoId:e.informationId}},tag:"img",src:e.vodEntity.cover||"/static/images/background_img/active.png"},nativeOn:{click:function(e){return t.flushCom(e)}}}):t._e()],1):t._e(),t._v(" "),e.title?i("div",{staticClass:"title"},[t._v(t._s(e.title))]):t._e()])}))],1)},staticRenderFns:[]};var g=i("VU/8")(f,_,!1,function(t){i("wX23")},"data-v-41c964d5",null).exports,w=i("mn9N"),C=(w.a,{name:"caseComment",components:{mescroll:w.a},props:["totalNum"],data:function(){return{lists:[],loading:!0,boxShow:!0,bottomShow:!1,upAuto:!1,info:{pageNum:1,pageSize:10},myTip:1,emptyKeyImg:1}},methods:{commentData:function(t){var e=this,i=this.info;i.pageNum=t.num,i.pageSize=t.size,i.informationId=this.$route.query.infoId,i.sortFlag="desc";var s={params:i};this.$http.post(this.baseurl+"/discovery/commentlist",s).then(function(i){if(console.log(i),200==i.data.code){var s=i.data.data,a=i.data.data.list;e.$refs.mescroll.endSuccess(s.length),e.$refs.mescroll.endSuccess(s.total),a&&(e.lists=e.lists.concat(i.data.data.list)),s.length<t.size&&(e.bottomShow=!0),s.total<t.size&&(e.bottomShow=!0)}}).catch(function(t){e.$refs.mescroll.endErr()})},showComment:function(){this.loading=!1},hideComment:function(){this.loading=!0,this.bottomShow=!1}}}),y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"comment"},[i("h3",{staticClass:"title h80"},[t._v("跟帖")]),t._v(" "),i("p",{staticClass:"commentNum h80"},[t._v("评论 "),i("em",{staticClass:"red"},[t._v(t._s(this.totalNum))])]),t._v(" "),i("mescroll",{ref:"mescroll",attrs:{upCallback:t.commentData,emptyKeyImg:t.emptyKeyImg,myTip:t.myTip,warpId:"brand_comment_scroll3",id:"brand_comment_scroll3"}},[i("div",{staticClass:"commentList"},[t._l(t.lists,function(e,s){return t.boxShow?i("div",{key:s,ref:"content",refInFor:!0,staticClass:"itemCom"},[i("dl",{staticClass:"clear"},[i("dt",{staticClass:"avatar"},[i("img",{attrs:{width:"100%",src:e.userAvatar||"/static/images/opportunity/branddetail/default_head.png",alt:""}})]),t._v(" "),i("dd",{staticClass:"qaDetail"},[i("p",{staticClass:"username"},[t._v(t._s(e.name))]),t._v(" "),i("p",{staticClass:"question"},[t._v(t._s(e.commentContent))]),t._v(" "),i("span",{staticClass:"ctime"},[t._v(t._s(t._f("formatMsgTime")(e.commentTime)))]),t._v(" "),e.replyContent?i("div",{staticClass:"reply"},[i("p",{staticClass:"replyCon"},[i("span",{staticClass:"red"},[t._v("客服回复：")]),t._v(t._s(e.replyContent))])]):t._e()])])]):t._e()}),t._v(" "),t.bottomShow?i("p",{staticClass:"finishComment"},[t._v("已经全部加载完毕")]):t._e()],2)])],1)},staticRenderFns:[]};var I=i("VU/8")(C,y,!1,function(t){i("vK1t")},"data-v-728640e8",null).exports,S=(s.a,{name:"CaseDetail",components:{HeaderTitle:c,RecommendVideo:g,SeriesVideo:p,CaseComment:I,VideoPlay:v,Floating:s.a},data:function(){return{seriesInfoshow:!0,typeInfoshow:!0,title:"",loading:!0,infoId:"",videoId:"",typeInfo:[],seriesInfo:"",seriesName:"",caseComment:"",listVideo:"",obj:{},videoTitle:"",likeNum:"",supportTotal:"",seriesSum:"",totalNum:"",seriesId:"",seriesNum:""}},methods:{getInfoIdDetail:function(){var t=this,e={params:{informationId:this.infoId}};this.$http.post(this.baseurl+"/discovery/detail",e).then(function(e){t.obj=e.data.data[0].vodEntity,t.listVideo=e.data.data[0].vodEntity,t.seriesInfo=e.data.data[0].seriesResp,t.typeInfo=e.data.data[0].typeRecResp,t.seriesName=e.data.data[0].seriesName,t.caseComment=e.data.data[0].commentEntity,t.infoId=e.data.data[0].infoId,t.videoTitle=e.data.data[0].title,t.videoid=e.data.data[0].videoId,t.supportTotal=e.data.data[0].vodEntity.supportTotal,t.seriesSum=e.data.data[0].seriesNum,t.title=e.data.data[0].title,t.totalNum=e.data.data[0].commentEntity.total,t.loading=!1,t.seriesId=e.data.data[0].seriesId,t.seriesNum=e.data.data[0].seriesNum,t.seriesInfo||(t.seriesInfoshow=!1),t.typeInfo||(t.typeInfoshow=!1);var i={params:{videoId:t.videoid}};t.$http.post(t.baseurl+"/discovery/vodplaytimes",i).then(function(e){t.likeNum=e.data.data.num})})}},created:function(){this.infoId=this.$route.query.infoId,this.videoId=this.$route.query.videoId,this.getInfoIdDetail()},updated:function(){window.scroll(0,0)}}),N={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-top",attrs:{id:"CaseDetail"}},[i("header-title",{attrs:{title:t.title}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading-animation"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("p",[t._v("正在加载...")])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[t.listVideo?i("video-play",{attrs:{listVideo:t.listVideo}}):t._e(),t._v(" "),i("div",{staticClass:"content ub-fv"},[i("div",{staticClass:"CaseVideo"},[i("div",{staticClass:"videoName"},[t._v(t._s(t.videoTitle))]),t._v(" "),i("div",{staticClass:"videoNum"},[i("p",{staticClass:"playCount"},[t._v("播放"),i("em",{staticClass:"ulev0 cishu"},[t._v(t._s(t.likeNum))]),t._v("次")]),t._v(" "),i("p",{staticClass:"like"},[i("i",{staticClass:"fa fa-thumbs-o-up"}),i("span",[t._v(t._s(t.supportTotal))])])]),t._v(" "),i("div",{staticClass:"masks"})]),t._v(" "),t.seriesInfoshow?i("div",{staticClass:"video"},[i("h2",[i("span",{staticClass:"seriesName"},[t._v(t._s(t.seriesName))]),i("span",{staticClass:"seriesSum"},[t._v("共"),i("em",[t._v(t._s(t.seriesSum))]),t._v("集")])]),t._v(" "),t.seriesId?i("series-video",{attrs:{seriesId:t.seriesId,seriesNum:t.seriesNum,swiper:t.seriesInfo}}):t._e(),t._v(" "),i("div",{staticClass:"masks"})],1):t._e(),t._v(" "),t.typeInfoshow?i("div",{staticClass:"video"},[i("h2",[t._v("内容推荐")]),t._v(" "),t.typeInfo?i("recommend-video",{attrs:{swiper:t.typeInfo}}):t._e(),t._v(" "),i("div",{staticClass:"masks"})],1):t._e(),t._v(" "),i("case-comment",{attrs:{totalNum:t.totalNum}}),t._v(" "),i("floating")],1)],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading-img loading-logo"},[e("img",{attrs:{width:"100%",src:"/static/images/common/logo.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading-img loading-circle Rotation"},[e("img",{attrs:{width:"100%",src:"/static/images/common/circle.png",alt:""}})])}]};var b=i("VU/8")(S,N,!1,function(t){i("4Vku")},"data-v-79749e6a",null);e.default=b.exports},vK1t:function(t,e){},wX23:function(t,e){}});
//# sourceMappingURL=2.48b752c80bcf8d3121f1.js.map