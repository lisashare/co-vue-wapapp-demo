webpackJsonp([1],{"+bJU":function(t,a){},"15C8":function(t,a){},"7zFX":function(t,a){},"9bBU":function(t,a,i){i("mClu");var s=i("FeBl").Object;t.exports=function(t,a,i){return s.defineProperty(t,a,i)}},C4MV:function(t,a,i){t.exports={default:i("9bBU"),__esModule:!0}},F0Xa:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=i("mvHQ"),e=i.n(s),n=i("bOdI"),r=i.n(n),o=i("7+uW"),d=i("6lib"),l=i("g5J/"),c=i("GPQ0"),p={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"brand-banner"},[a("swiper",{ref:"mySwiper-p1",staticClass:"brandImg img-bg",attrs:{options:this.swiperOption}},[this._l(this.brandImages,function(t,i){return a("swiper-slide",{key:i},[a("img",{attrs:{src:t.imgUrl,width:"100%"}})])}),this._v(" "),a("div",{staticClass:"swiper-pagination swiper-p1",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var v=i("VU/8")({props:["brandImages"],data:function(){return{swiperOption:{pagination:{el:".swiper-p1",type:"fraction",clickable:!0},autoplay:{delay:5e3,disableOnInteraction:!1},loop:!0,observeParents:!0,observer:!0},swiperSlides:""}}},p,!1,function(t){i("15C8")},"data-v-1fd7a938",null).exports,m={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"banner-image"},[a("swiper",{staticClass:"swiperY",attrs:{options:this.swiperOption}},this._l(this.lists,function(t,i){return a("swiper-slide",{key:i,staticClass:"swiper img-bg"},[a("img",{attrs:{width:"100%",height:"100%",preview:"0",src:t.imgUrl}})])}))],1)},staticRenderFns:[]};var u=i("VU/8")({name:"BannerImage",props:["swiper","brandId","busiType"],data:function(){return{imgIndex:"",swiperOption:{slidesPerView:2,spaceBetween:22,pagination:{},observeParents:!0,observer:!0},info:{brandId:this.brandId,busiType:this.busiType,pageNum:1,pageSize:10},lists:this.swiper.list,imageSwiper:""}},created:function(){this.swiper.size!==this.swiper.total&&(this.info.pageSize=this.swiper.total,this.imageLoadOver())},methods:{imageLoadOver:function(){var t=this,a={apiUrl:this.weburl+"mobile/share/listBrandImage",params:this.info};this.$http.post(this.baseurl+"/brand/api",a).then(function(a){200==a.data.code&&(t.imageSwiper=a.data.data,t.lists=a.data.data.list)})}}},m,!1,function(t){i("isqi")},"data-v-014ec3d8",null).exports,_={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"banner-image02"},[a("swiper",{staticClass:"swiperY",attrs:{options:this.swiperOption}},this._l(this.lists,function(t,i){return a("swiper-slide",{key:i,staticClass:"swiper img-bg"},[a("img",{attrs:{width:"100%",height:"100%",preview:"1",src:t.imgUrl}})])}))],1)},staticRenderFns:[]};var b=i("VU/8")({name:"BannerImage02",props:["swiper","brandId","busiType"],data:function(){return{imgIndex:"",swiperOption:{slidesPerView:2,spaceBetween:22,pagination:{},observeParents:!0,observer:!0},info:{brandId:this.brandId,busiType:this.busiType,pageNum:1,pageSize:10},lists:this.swiper.list,imageSwiper:""}},created:function(){this.swiper.size!==this.swiper.total&&(this.info.pageSize=this.swiper.total,this.imageLoadOver())},methods:{imageLoadOver:function(){var t=this,a={apiUrl:this.weburl+"mobile/share/listBrandImage",params:this.info};this.$http.post(this.baseurl+"/brand/api",a).then(function(a){200==a.data.code&&(t.imageSwiper=a.data.data,t.lists=a.data.data.list)})}}},_,!1,function(t){i("OrUB")},"data-v-18ad2c3d",null).exports,h={name:"GallaryVideo",props:["video"],created:function(){console.log(this.video)},methods:{handleVideoClick:function(){this.$emit("hidevideo")}}},f={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"gallary-video list_alertbox",on:{click:this.handleVideoClick}},[a("div",{staticClass:"bg_alertbox"},[this.video.videoUrl?a("div",{staticClass:"video3",attrs:{width:"100%"}},[a("video",{attrs:{id:"video",controls:"controls",preload:"",poster:this.video.coverdUrl}},[a("source",{attrs:{src:this.video.videoUrl,type:"video/mp4"}})])]):this._e()])])},staticRenderFns:[]};var g=i("VU/8")(h,f,!1,function(t){i("+bJU")},"data-v-4e4d2832",null).exports,C={name:"BannerVideo",props:["swiper","brandId"],components:{GallaryVideo:g},data:function(){var t=this;return{video:"",showVideo:!1,swiperOption:{slidesPerView:2,spaceBetween:22,pagination:{clickable:!0},observeParents:!0,observer:!0,on:{slideChange:function(){t.swiper.size!==t.swiper.total&&t.imageLoadOver()}}},info:{brandId:this.brandId,pageNum:1,pageSize:10},lists:this.swiper.list,imageSwiper:""}},methods:{imageLoadOver:function(){var t=this;if(this.imageSwiper&&this.imageSwiper.pageNum==this.imageSwiper.pages)return!1;this.info.pageNum=this.info.pageNum+1;var a={apiUrl:this.weburl+"mobile/share/listBrandVideo",params:this.info};this.$http.post(this.baseurl+"/brand/api",a).then(function(a){if(200==a.data.code){t.imageSwiper=a.data.data;var i=a.data.data.list;t.lists=t.lists.concat(i)}})},handleVideoClick:function(t){this.video=this.swiper.list[t],this.showVideo=!0},handleVideoClose:function(){this.showVideo=!1}}},w={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"banner-video"},[i("swiper",{staticClass:"swiperY",attrs:{options:t.swiperOption}},t._l(t.lists,function(a,s){return i("swiper-slide",{key:s,staticClass:"swiper"},[i("img",{attrs:{width:"100%",height:"100%",src:a.coverdUrl},on:{click:function(a){t.handleVideoClick(s)}}}),t._v(" "),i("p",[i("img",{attrs:{width:"100%",src:"/static/images/opportunity/branddetail/bofang.png"},on:{click:function(a){t.handleVideoClick(s)}}})])])})),t._v(" "),t.showVideo?i("gallary-video",{attrs:{video:t.video},on:{hidevideo:t.handleVideoClose}}):t._e()],1)},staticRenderFns:[]};var I=i("VU/8")(C,w,!1,function(t){i("NhYB")},"data-v-da9e410a",null).exports,y=i("mn9N"),k=(y.a,{name:"Comment",props:["popup","brandComment","brandId"],components:{mescroll:y.a},data:function(){return{loading:!0,bottomShow:!1,upAuto:!1,lists:this.brandComment.list,info:{brandId:this.brandId,pageNum:1,pageSize:10},myTip:1,emptyKeyImg:1}},methods:{commentData:function(t){var a=this,i=this.info;i.pageNum=t.num+1,i.pageSize=t.size;var s={apiUrl:this.weburl+"mobile/share/listBrandComment",params:i};this.$http.post(this.baseurl+"/brand/api",s).then(function(i){if(200==i.data.code){var s=i.data.data.list;a.$refs.mescroll.endSuccess(s.length),a.lists=a.lists.concat(i.data.data.list),s.length<t.size&&(a.bottomShow=!0)}}).catch(function(t){a.$refs.mescroll.endErr()})},showComment:function(){this.loading=!1},hideComment:function(){this.loading=!0,this.bottomShow=!1}}}),S={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"comment"},[i("h2",{staticClass:"item border bc"},[i("span",[t._v("评论区")]),t._v(" "),i("span",{staticClass:"question",on:{click:function(a){t.popup(2)}}},[i("img",{attrs:{src:"/static/images/opportunity/branddetail/icon_comment.png"}}),t._v("提问与评论")])]),t._v(" "),t.loading?i("div",{staticClass:"answerComent bc"},[t.lists?i("div",{staticClass:"answername"},[i("dl",{staticClass:"answerinfo over"},[i("dt",{staticClass:"avatar"},[i("div",{staticClass:"avatar-box img-bg over"},[i("img",{attrs:{width:"100%",src:t.lists[0].userImg?t.lists[0].userImg:"/static/images/opportunity/branddetail/default_head.png",alt:""}})])]),t._v(" "),i("dd",{staticClass:"avatarname"},[i("p",{staticClass:"avatarname-p position-re font-w7"},[i("span",[t._v(t._s(t.lists[0].userName))])]),t._v(" "),i("p",{staticClass:"answerwen"},[t._v(t._s(t.lists[0].content))]),t._v(" "),t.lists[0].reply.replyContent?i("div",{staticClass:"answerReturn"},[i("dl",{staticClass:"answerfounder over"},[i("dd",{staticClass:"kefuhuifu"},[t._m(0),t._v(" "),i("p",{staticClass:"hello"},[t._v(t._s(t.lists[0].reply.replyContent))])])])]):t._e()])])]):t._e(),t._v(" "),i("p",{staticClass:"allComment",on:{click:t.showComment}},[t._v("所有评论"),i("i",{staticClass:"fa fa-angle-down"})])]):t._e(),t._v(" "),t.loading?t._e():i("div",{staticClass:"answerComent bc position-re"},[i("mescroll",{ref:"mescroll",attrs:{upCallback:t.commentData,emptyKeyImg:t.emptyKeyImg,myTip:t.myTip,upAuto:t.upAuto,warpId:"brand_comment_scroll",id:"brand_comment_scroll"}},[i("div",{ref:"content",staticClass:"content-wrap"},t._l(t.lists,function(a,s){return i("div",{key:s,staticClass:"answername border-bt"},[i("dl",{staticClass:"answerinfo over"},[i("dt",{staticClass:"avatar"},[i("div",{staticClass:"avatar-box img-bg over"},[i("img",{attrs:{width:"100%",src:a.userImg||"/static/images/opportunity/branddetail/default_head.png",alt:""}})])]),t._v(" "),i("dd",{staticClass:"avatarname"},[i("p",{staticClass:"avatarname-p position-re font-w7"},[i("span",[t._v(t._s(a.userName))])]),t._v(" "),i("p",{staticClass:"answerwen"},[t._v(t._s(a.content))]),t._v(" "),a.reply.replyContent?i("div",{staticClass:"answerReturn"},[i("dl",{staticClass:"answerfounder over"},[i("dd",{staticClass:"kefuhuifu"},[i("p",{staticClass:"fl"},[i("span",[t._v("客服回复:  ")])]),t._v(" "),i("p",{staticClass:"hello"},[t._v(" "+t._s(a.reply.replyContent))])])])]):t._e(),t._v(" "),i("div",{staticClass:"time"},[t._v(t._s(t._f("formatMsgTime")(a.commentTime)))])])])])}))]),t._v(" "),t.bottomShow?i("p",{staticClass:"finishComment",on:{click:t.hideComment}},[t._v("已经全部加载完毕"),i("i",{staticClass:"fa fa-angle-up"})]):t._e()],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"fl"},[a("span",[this._v("客服回复:  ")])])}]};var T=i("VU/8")(k,S,!1,function(t){i("qo2F")},"data-v-2f5b2dd9",null).exports,$=(c.a,{name:"BrandDetail",components:{HeaderTitle:c.a,BrandBanner:v,BannerImage:u,BannerImage02:b,BannerVideo:I,BrandComment:T},data:function(){var t;return t={title:"",tab:[{id:1,title:"品牌详情"},{id:2,title:"资料官网"}],activetab:1,loading:1,brandId:"",brandInfo:"",brandImages:"",pointToAppCalcul:!1,pointToAppQuest:!1,brandComment:"",attention:!1,iframe:!0},r()(t,"activetab",!0),r()(t,"outurl",""),r()(t,"uid",""),r()(t,"mobile",""),r()(t,"sdktoken",""),r()(t,"accesstoken",""),t},filters:{item:function(t){for(var a="",i=t.length,s=0;s<i;s++)t[s]!==t[i-1]?a+=t[s]+" | ":a+=t[s];return a}},computed:{joinInvest:function(){var t=this.brandInfo.joinInvestMax,a=this.brandInfo.joinInvestMin;return t===a?t:a+"~"+t}},methods:{contactConsultant:function(){this.uid=d.a.getCookie("uid"),this.sdktoken=d.a.getCookie("sdktoken"),this.mobile=d.a.getCookie("mobile"),this.uid||this.mobile||this.sdktoken?this.getSessionId():this.$router.push({name:"login"})},getSessionId:function(){var t=this,a={params:{customerIM:this.uid,customerPhone:this.mobile}};this.$http.post(this.baseurl+"/im/getimaccount",a).then(function(a){if(200==a.data.code){var i=a.data.data;d.a.setCookie("sessionId",i);var s="";t.brandInfo.logo&&(s=t.brandInfo.logo);var n={sendBrandID:t.brandId,sendImageUrl:s,titleName:t.title,subTitle:t.joinInvest+"万"};d.a.setCookie("frombrand",e()(n)),location.href=l.a.imChat+i}})},handlerTabChange:function(t){this.activetab=t},getBrandIdDetail:function(){var t=this,a={brandId:this.brandId};this.$http.post(this.baseurl+"/home/detailbrand",a).then(function(a){200==a.data.code&&(t.brandInfo=a.data.data,t.loading=2,t.brandImages=a.data.data.promotes,t.brandComment=a.data.data.phoneComment,t.title=t.brandInfo.brandName,t.attention=a.data.data.attention,t.iframe=a.data.data.hasouturl,t.outurl=a.data.data.outurl)})},phoneCall:function(){window.location.href="tel:010-53579588"},setCertificate:function(){d.a.setSessionStore("brandInfo",this.brandInfo),this.$router.push({name:"authentication"})},mineAttention:function(){var t=this;if(this.accesstoken=d.a.getCookie("accesstoken"),this.accesstoken)if(this.attention){var a={do:"unfollow",busId:this.brandId};this.$http.post(this.baseurl+"/home/dobrandfollow",a).then(function(a){200==a.data.code&&(t.attention=!1,d.a.mobileTip({obj:o.a,content:"取消关注"}))}).catch(function(t){d.a.mobileTip({obj:o.a,content:"取消关注失败，请稍后重试"})})}else{a={do:"follow",busId:this.brandId};this.$http.post(this.baseurl+"/home/dobrandfollow",a).then(function(a){200==a.data.code&&(t.attention=!0,d.a.mobileTip({obj:o.a,content:"关注成功"}))}).catch(function(t){d.a.mobileTip({obj:o.a,content:"关注失败，请稍后重试"})})}else this.$router.push({name:"login"})},popup:function(t){1===t&&(this.pointToAppCalcul=!0),2===t&&(this.pointToAppQuest=!0),document.getElementsByTagName("body")[0].className="overHidden"},hide:function(t){1===t&&(this.pointToAppCalcul=!1),2===t&&(this.pointToAppQuest=!1),document.getElementsByTagName("body")[0].className=""}},created:function(){this.title=d.a.getSessionStore("brandtitle"),this.brandId=this.$route.query.brandId,this.brandId?(this.getBrandIdDetail(),""===this.title&&(this.title=this.brandInfo.brandName)):this.loading=3}}),x={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"brand-detail page-top"},[i("header-title",{attrs:{title:t.title}}),t._v(" "),1==t.loading?i("div",{staticClass:"loading-animation"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("p",[t._v("正在加载...")])]):3==t.loading?i("div",{staticClass:"babaliang"},[i("img",{attrs:{src:"/static/images/common/no_03.png",alt:""}})]):2==t.loading?i("div",{class:t.iframe?"change-content":""},[t.iframe?i("ul",{staticClass:"brand-tab"},t._l(t.tab,function(a){return i("li",{key:a.id,class:[t.activetab==a.id?"activetab":""],on:{click:function(i){t.handlerTabChange(a.id)}}},[t._v(t._s(a.title))])})):t._e(),t._v(" "),2==t.activetab?i("div",{staticClass:"iframeurl"},[i("iframe",{attrs:{src:t.outurl,scrolling:"auto",frameborder:"0",width:"100%",height:"100%"}})]):t._e(),t._v(" "),1==t.activetab?i("div",{staticClass:"detailurl"},[t.brandImages?i("brand-banner",{attrs:{brandImages:t.brandImages}}):t._e(),t._v(" "),i("div",{staticClass:"brand-introduce"},[i("div",{staticClass:"name border-bt over bc"},[t.brandInfo?i("div",{staticClass:"title ellipsis"},[t._v(t._s(t.brandInfo.company))]):t._e(),t._v(" "),i("div",{staticClass:"comments"},[i("div",{staticClass:"concern",on:{click:t.mineAttention}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.attention,expression:"!attention"}]},[t._m(2),t._v(" "),i("span",{staticClass:"concern-plus"},[t._v("关注")])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.attention,expression:"attention"}]},[t._m(3),t._v(" "),i("span",{staticClass:"concern-plus",staticStyle:{color:"#279683"}},[t._v("已关注")])])]),t._v(" "),i("span",{staticClass:"authentication",on:{click:t.setCertificate}},[i("i",{staticClass:"img-bg"}),t._v(" "),i("span",{staticClass:"authenticated"},[t._v("已认证")])])])]),t._v(" "),i("div",{staticClass:"intro border bc mar-bt"},[i("ul",{staticClass:"investment over"},[i("li",{staticClass:"investment-volume"},[t._m(4),t._v(" "),i("span",[t._v("预估总投资额")]),i("span",{staticClass:"money"},[t._v(t._s(t.brandInfo.invesmentAmount))])]),t._v(" "),i("li",{staticClass:"investment-info"},[i("ul",[t.brandInfo.joinInvestMax?i("li",{},[t._v("加盟费："+t._s(t.joinInvest)+"万")]):t._e(),t._v(" "),i("li",{},[t._v("店铺区域："+t._s(t.brandInfo.joinRequire))]),t._v(" "),i("li",{},[t._v("合同期限："+t._s(t.brandInfo.contractPeriod)+"年")]),t._v(" "),i("li",{},[t._v("关注人数："+t._s(t.brandInfo.focusCount)+"人")]),t._v(" "),i("li",{staticClass:"main-product"},[i("span",[t._v("主营产品：")]),t._v(" "),t.brandInfo.mainProductList?i("span",{staticClass:"main-item"},[t._v(t._s(t._f("item")(t.brandInfo.mainProductList)))]):t._e()])])]),t._v(" "),i("li",{staticClass:"investment-condition"},[i("div",{staticClass:"calculator",on:{click:function(a){t.popup(1)}}},[t._m(5),t._v(" "),i("p",[t._v("投资计算器")]),t._v(" "),t._m(6)]),t._v(" "),i("router-link",{staticClass:"area",attrs:{to:{name:"joinarea",query:{brandId:t.brandId}},tag:"div"}},[i("div",{staticClass:"button_addr"},[i("img",{staticClass:"button_address",attrs:{width:"100%",src:"/static/images/opportunity/branddetail/button_address.png"}})]),t._v(" "),i("p",[t._v("加盟区域")]),t._v(" "),i("div",{staticClass:"arrow"},[i("img",{attrs:{width:"100%",src:"/static/images/opportunity/branddetail/icon_arrow.png"}})])])],1)])]),t._v(" "),t.brandInfo.tableAnalysis?i("div",{staticClass:"profit border-bt bc mar-bt"},[i("h2",{staticClass:"item border"},[t._v("盈利预估")]),t._v(" "),i("div",{staticClass:"profit-table"},[i("table",[i("tbody",[i("tr",[i("td",[t._v("预估初始投资总额")]),i("td",[t._v(t._s(t.brandInfo.invesmentAmount))])]),t._v(" "),i("tr",[i("td",[t._v("预估客单价")]),i("td",[t._v(t._s(t.brandInfo.tableAnalysis.single)+"元/人")])]),t._v(" "),i("tr",[i("td",[t._v("预估日客流量")]),i("td",[t._v(t._s(t.brandInfo.tableAnalysis.dailyFlow)+"人/日")])]),t._v(" "),i("tr",[i("td",[t._v("预估月销售额")]),t._v(" "),i("td",[t._v(t._s(t.brandInfo.tableAnalysis.monthlySales)+"万元")])]),t._v(" "),i("tr",[i("td",[t._v("预估毛利率")]),i("td",[t._v(t._s(t.brandInfo.tableAnalysis.grossProfit)+"%")])]),t._v(" "),i("tr",[i("td",[t._v("预估回报周期")]),i("td",[t._v(t._s(t.brandInfo.returnCycleMin)+"~"+t._s(t.brandInfo.returnCycleMax)+"个月")])])])]),t._v(" "),i("p",[t._v("注：以上为预估数值，仅供参考。")])])]):t._e(),t._v(" "),t.brandInfo.advantageImg?i("div",[t.brandInfo.advantageImg.list?i("div",[t.brandInfo.advantageImg.list.length?i("div",{staticClass:"product border-bt bc mar-bt"},[i("h2",{staticClass:"item border"},[t._v("主打产品")]),t._v(" "),t.brandInfo?i("banner-image",{attrs:{busiType:"6",brandId:t.brandId,swiper:t.brandInfo.advantageImg}}):t._e()],1):t._e()]):t._e()]):t._e(),t._v(" "),t.brandInfo.outdoorScene?i("div",[t.brandInfo.outdoorScene.list?i("div",[t.brandInfo.outdoorScene.list.length?i("div",{staticClass:"scenery border-bt bc mar-bt"},[i("h2",{staticClass:"item border"},[t._v("门店实景")]),t._v(" "),t.brandInfo?i("banner-image02",{attrs:{busiType:"3",brandId:t.brandId,swiper:t.brandInfo.outdoorScene}}):t._e()],1):t._e()]):t._e()]):t._e(),t._v(" "),t.brandInfo.video?i("div",[t.brandInfo.video.list.length?i("div",{staticClass:"video border-bt bc mar-bt"},[i("h2",{staticClass:"item border"},[t._v("品牌视频")]),t._v(" "),t.brandInfo?i("banner-video",{attrs:{brandId:t.brandId,swiper:t.brandInfo.video}}):t._e()],1):t._e()]):t._e(),t._v(" "),t.brandInfo.founderRsp?i("div",{staticClass:"founder border-bt bc mar-bt"},[t.brandInfo.founderRsp?i("h2",{staticClass:"item border"},[i("span",[t._v("创始人问答区")]),t._v(" "),i("span",{staticClass:"question",on:{click:function(a){t.popup(2)}}},[i("img",{attrs:{src:"/static/images/opportunity/branddetail/icon_comment.png"}}),t._v("提问与评论")])]):t._e(),t._v(" "),t.brandInfo.founderRsp?i("div",{staticClass:"explain border-bt"},[i("div",{staticClass:"prople"},[i("div",{staticClass:"information over"},[i("p",{staticClass:"over"},[i("img",{attrs:{width:"100%",src:t.brandInfo.founderRsp.headUrl}})]),t._v(" "),i("h3",[t._v(t._s(t.brandInfo.founderRsp.founderName))]),t._v(" "),i("div",{staticClass:"label"},t._l(t.brandInfo.founderRsp.founderTag,function(a,s){return i("span",{key:s},[t._v(t._s(a))])}))]),t._v(" "),i("div",{staticClass:"synopsis"},[i("h3",[t._v(t._s(t.brandInfo.founderRsp.introduction))]),t._v(" "),i("p",[t._v(t._s(t.brandInfo.founderRsp.bewrite))])])])]):t._e(),t._v(" "),t.brandInfo.askRsp?i("div",{staticClass:"answer"},[i("h2",[i("span",[t._v("HOT")]),i("span",[t._v("精选问答")]),t._v(" "),i("span",{staticClass:"question",on:{click:function(a){t.popup(2)}}},[i("img",{attrs:{src:"/static/images/opportunity/branddetail/icon_comment.png"}}),t._v("提问与评论\n                        ")])]),t._v(" "),i("div",{staticClass:"answerComent"},t._l(t.brandInfo.askRsp,function(a,s){return i("div",{key:s,staticClass:"answername"},[i("dl",{staticClass:"answerinfo over"},[i("dt",{staticClass:"avatar"},[i("div",{staticClass:"avatar-box img-bg over"},[i("img",{attrs:{width:"100%",src:a.askHeadUrl,alt:""}})])]),t._v(" "),i("dd",{staticClass:"avatarname"},[i("p",{staticClass:"avatarname-p position-re font-w7"},[i("span",[t._v(t._s(a.askName))]),t._v(" "),t._m(7,!0)]),t._v(" "),i("p",{staticClass:"answerwen"},[t._v(t._s(a.problem))]),t._v(" "),i("div",{staticClass:"answerReturn position-re"},[i("div",{staticClass:"riangle-up"}),t._v(" "),i("dl",{staticClass:"answerfounder over"},[i("dt",{staticClass:"avatar"},[i("div",{staticClass:"avatar-box img-bg over"},[i("img",{attrs:{width:"100%",src:a.founderHeadUrl,alt:""}})])]),t._v(" "),i("dd",{},[i("p",{staticClass:"avatarname-p position-re font-w7"},[i("span",[t._v("创始人 "+t._s(a.founderName))]),t._m(8,!0)]),t._v(" "),i("p",{staticClass:"hello"},[t._v(t._s(a.answer))])])])])])])])}))]):t._e()]):t._e(),t._v(" "),t.brandComment.list?i("div",[t.brandComment.list.length?i("brand-comment",{attrs:{"brand-comment":t.brandComment,brandId:t.brandId,popup:t.popup}}):t._e()],1):t._e(),t._v(" "),i("div",{staticClass:"footer"},[i("div",{staticClass:"icon-button",on:{click:t.mineAttention}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.attention,expression:"!attention"}],staticClass:"icon-concern"},[t._m(9),t._v(" "),i("span",[t._v("关注")])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.attention,expression:"attention"}],staticClass:"icon-concern"},[t._m(10),t._v(" "),i("span",[t._v("关注")])])]),t._v(" "),i("div",{staticClass:"icon-contact",on:{click:t.contactConsultant}},[t._m(11),t._v(" "),i("span",[t._v("创业顾问")])])])])],1):t._e(),t._v(" "),t.pointToAppCalcul?i("div",{staticClass:"mask",on:{click:function(a){t.hide(1)}}},[i("img",{staticClass:"calculatorTag position",attrs:{src:"/static/images/opportunity/branddetail/fenxiang.png"}})]):t._e(),t._v(" "),t.pointToAppQuest?i("div",{staticClass:"mask",on:{click:function(a){t.hide(2)}}},[i("img",{staticClass:"questionTag position",attrs:{src:"/static/images/opportunity/branddetail/share.png"}})]):t._e()]):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"loading-img loading-logo"},[a("img",{attrs:{width:"100%",src:"/static/images/common/logo.png",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"loading-img loading-circle Rotation"},[a("img",{attrs:{width:"100%",src:"/static/images/common/circle.png",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("i",{staticClass:"img-bg"},[a("img",{attrs:{width:"100%",src:"/static/images/opportunity/branddetail/icon_attention_normal.png",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("i",{staticClass:"img-bg"},[a("img",{attrs:{width:"100%",src:"/static/images/opportunity/branddetail/icon_attention_hover@3x.png",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("i",[a("img",{attrs:{width:"100%",src:"/static/images/opportunity/branddetail/icon_rmb.png"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"button_cal"},[a("img",{staticClass:"button_address",attrs:{width:"100%",src:"/static/images/opportunity/branddetail/button_cal.png"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"arrow"},[a("img",{attrs:{width:"100%",src:"/static/images/opportunity/branddetail/icon_arrow.png"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("i",{staticClass:"wen"},[a("img",{attrs:{width:"100%",height:"100%",src:"/static/images/opportunity/branddetail/wen.png",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("i",{staticClass:"da"},[a("img",{attrs:{width:"100%",height:"100%",src:"/static/images/opportunity/branddetail/da.png",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("i",[a("img",{attrs:{src:"/static/images/common/icon_follow@2x.png",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("i",[a("img",{attrs:{src:"/static/images/common/icon_follow_hover@2x.png",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("i",[a("img",{attrs:{src:"/static/images/common/user_03.png",alt:""}})])}]};var B=i("VU/8")($,x,!1,function(t){i("7zFX")},"data-v-6f26c0b3",null);a.default=B.exports},NhYB:function(t,a){},OrUB:function(t,a){},bOdI:function(t,a,i){"use strict";a.__esModule=!0;var s,e=i("C4MV"),n=(s=e)&&s.__esModule?s:{default:s};a.default=function(t,a,i){return a in t?(0,n.default)(t,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[a]=i,t}},isqi:function(t,a){},mClu:function(t,a,i){var s=i("kM2E");s(s.S+s.F*!i("+E39"),"Object",{defineProperty:i("evD5").f})},qo2F:function(t,a){}});
//# sourceMappingURL=1.7330940cbf60f687b9ee.js.map