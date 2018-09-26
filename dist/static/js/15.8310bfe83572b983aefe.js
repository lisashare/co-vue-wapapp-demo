webpackJsonp([15],{Iq6M:function(e,t){},PmIv:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("9vbe"),o=s("bbS5"),a=(i.default,o.default,{name:"Login",components:{UserAgreement:i.default,PrivacyAgreement:o.default},data:function(){return{mobile:"",password:"",code:"",name:"",errorMsg:"",times:"获取验证码",timer:null,onOff:null,toastTip:!1,agreement1:!1,agreement2:!1,isShow:1,stopClick:!0,vmiao:!1,isSel:!1}},computed:{text:function(){return this.times+"s"}},methods:{agreementClick:function(){this.isSel=!this.isSel},agreement1IsShow:function(){this.agreement1=!0,this.isShow=2},agreement1Close:function(){this.agreement1=!1,this.isShow=1},agreement2IsShow:function(){this.agreement2=!0,this.isShow=2},agreement2Close:function(){this.agreement2=!1,this.isShow=1},countDown:function(){this.validMobile()?this.sendCode():this.stopClick=!1},validMobile:function(){return!(""==this.mobile||!/^1[3|4|5|7|8|9|6]\d{9}$/.test(this.mobile)||11!=this.mobile.length)||(this.tipShow("请输入正确的手机号"),this.kgCode=!0,!1)},validCode:function(){return!(""==this.code||this.code.length<6)||(this.tipShow("验证码有误，请重新输入"),!1)},validPassword:function(){return!(""==this.password||!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(this.password))||(this.tipShow("密码为 6-16 位数字和字母组合"),!1)},validName:function(){return!(""!=this.name&&!/^[\u4e00-\u9fa5a-zA-Z]+$/.test(this.name))||(this.tipShow("姓名为汉字、英文"),!1)},tipShow:function(e){this.errorMsg=e,this.toastTip=!0;var t=this;setTimeout(function(){return t.toastTip=!1,!1},2e3)},sendCode:function(){var e=this,t=this;if("number"==typeof this.times)return!1;console.log("number"==typeof this.times),this.$http.post(this.baseurl+"/sms/register/code",{mobile:this.mobile}).then(function(s){clearInterval(e.timer),t.times=60,t.vmiao=!0,t.timer=setInterval(function(){t.times--,t.times<=0&&(clearInterval(t.timer),t.vmiao=!1,t.times="重新获取")},1e3)}).catch(function(t){t.response&&(console.log(t.response.data.message),e.tipShow(t.response.data.message))})},usrRegister:function(){var e=this;this.validMobile()&&this.validCode()&&this.validPassword()&&this.validName()&&this.$http.post(this.baseurl+"/register",{mobile:this.mobile,password:this.password,code:this.code,name:this.name}).then(function(t){console.log(t),e.tipShow("注册成功"),e.$router.push("/login")}).catch(function(t){t.response&&(console.log(t.response.data.message),e.tipShow(t.response.data.message),_this.onOff=!1)})}}}),n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{directives:[{name:"show",rawName:"v-show",value:1==e.isShow,expression:"isShow==1"}],staticClass:"login"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.toastTip,expression:"toastTip"}],staticClass:"toast-tip"},[e._v("\n      "+e._s(e.errorMsg)+"\n    ")]),e._v(" "),s("div",{staticClass:"header line-bottom"},[s("span",{staticClass:"icon-back",on:{click:function(t){e.$router.go(-1)}}}),e._v("\n      注册\n    ")]),e._v(" "),s("div",{staticClass:"form-frame"},[s("div",{staticClass:"from-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],staticClass:"input1 tel1",attrs:{type:"tel",placeholder:"手机号",maxlength:"11"},domProps:{value:e.mobile},on:{input:function(t){t.target.composing||(e.mobile=t.target.value)}}}),e._v(" "),e._m(0)]),e._v(" "),s("div",{staticClass:"from-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],staticClass:"input1 password1",attrs:{type:"text",placeholder:"验证码"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}}),e._v(" "),e._m(1),e._v(" "),s("span",{staticClass:"getcode",on:{click:e.countDown}},[e._v(e._s(e.times)),e.vmiao?s("i",[e._v("s")]):e._e()])]),e._v(" "),s("div",{staticClass:"from-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input1 tel1 w70",attrs:{type:"password",placeholder:"密 码（6~16位数字和字母）"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),e._m(2)]),e._v(" "),s("div",{staticClass:"from-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"input1 password1",attrs:{type:"text",placeholder:"姓名（选填）"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),e._m(3)]),e._v(" "),s("div",{staticClass:"agreement"},[e._v("\n        注册/登录即代表同意商机盒子的"),s("a",{attrs:{href:"javascript:void(0)"},on:{click:e.agreement1IsShow}},[e._v("《用户协议》")]),e._v("和"),s("a",{on:{click:e.agreement2IsShow}},[e._v("《隐私协议》")])]),e._v(" "),s("div",{staticClass:"btnRegister",on:{click:e.usrRegister}},[e._v("注册")])])]),e._v(" "),s("user-agreement",{attrs:{agreement1:e.agreement1},on:{"child-msg1":e.agreement1Close}}),e._v(" "),s("privacy-agreement",{attrs:{agreement2:e.agreement2},on:{"child-msg2":e.agreement2Close}})],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon-tel iconImg"},[t("img",{attrs:{src:"/static/images/home/icon/icon_phone@3x.png"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon-code iconImg"},[t("img",{attrs:{src:"/static/images/home/icon/icon_acthcode@3x.png"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon-tel iconImg"},[t("img",{attrs:{src:"/static/images/home/icon/icon_lockclose@3x.png"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon-code iconImg"},[t("img",{attrs:{src:"/static/images/home/icon/icon_name@3x.png"}})])}]};var r=s("VU/8")(a,n,!1,function(e){s("Iq6M")},"data-v-e77cd02a",null);t.default=r.exports}});
//# sourceMappingURL=15.8310bfe83572b983aefe.js.map