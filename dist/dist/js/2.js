webpackJsonp([2],{

/***/ 302:
/* no static exports found */
/* all exports used */
/*!*******************************!*\
  !*** ./src/pages/Session.vue ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-3c749fe6","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/after-less-loader.js!less-loader!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector?type=styles&index=0!./Session.vue */ 379)

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./Session.vue */ 353),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-3c749fe6"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./Session.vue */ 371),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\items\\co-wangyi-Im-demo\\src\\pages\\Session.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Session.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c749fe6", Component.options)
  } else {
    hotAPI.reload("data-v-3c749fe6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 328:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/components/HeaderTitle.vue ***!
  \**********************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ServicePop = __webpack_require__(/*! ./ServicePop */ 350);

var _ServicePop2 = _interopRequireDefault(_ServicePop);

var _configs = __webpack_require__(/*! ../../configs */ 20);

var _configs2 = _interopRequireDefault(_configs);

var _NavList = __webpack_require__(/*! ./NavList */ 349);

var _NavList2 = _interopRequireDefault(_NavList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'HeaderTitle',
  components: { NavList: _NavList2.default, ServicePop: _ServicePop2.default },
  props: ['title'],
  data: function data() {
    return {
      isNavShow: false,
      isTelShow: false,
      icon1: _configs2.default.resourceUrl + 'im/icon_erji@3x.png',
      icon2: _configs2.default.resourceUrl + 'im/icon_classify@3x.png',
      icon3: _configs2.default.resourceUrl + 'im/icon_back@3x.png'
    };
  },

  methods: {
    phoneCall: function phoneCall() {
      window.location.href = 'tel:010-53579588';
    },
    closeNav: function closeNav() {
      this.isNavShow = false;
    },
    closeTel: function closeTel() {
      this.isTelShow = false;
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 329:
/* no static exports found */
/* all exports used */
/*!******************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/components/NavList.vue ***!
  \******************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _configs = __webpack_require__(/*! ../../configs */ 20);

var _configs2 = _interopRequireDefault(_configs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'NavList',
    props: ['isNavShow', "closeNav"],
    data: function data() {
        return {
            navs: [{ id: 1, title: '首页', url: _configs2.default.indexUrl + '#/', icon: 'icon1', img: _configs2.default.resourceUrl + 'im/icon_home@3x.png' }, { id: 2, title: '商机', url: _configs2.default.indexUrl + '#/opportunity', icon: 'icon2', img: _configs2.default.resourceUrl + 'im/icon_shangji@3x.png' }, { id: 3, title: 'VR看店', url: _configs2.default.indexUrl + '#/vr', icon: 'icon3', img: _configs2.default.resourceUrl + 'im/icon_vr@3x.png' }, { id: 4, title: '商评', url: _configs2.default.indexUrl + '#/shangping', icon: 'icon4', img: _configs2.default.resourceUrl + 'im/icon_shangping@3x.png' }, { id: 5, title: '发现', url: _configs2.default.indexUrl + '#/case', icon: 'icon5', img: _configs2.default.resourceUrl + 'im/icon_find@3x.png' }, { id: 6, title: '消息', url: '' + _configs2.default.homeUrl, icon: 'icon6', img: _configs2.default.resourceUrl + 'im/icon_xiaoxi@3x.png' }, { id: 7, title: '我的', url: _configs2.default.indexUrl + '#/my', icon: 'icon7', img: _configs2.default.resourceUrl + 'im/icon_me@3x.png' }],
            img8: _configs2.default.resourceUrl + 'im/icon_app@3x.png'
        };
    },

    methods: {
        downLoadApp: function downLoadApp() {
            window.location.href = _configs2.default.downLoad;
        }
    }
};
module.exports = exports['default'];

/***/ }),

/***/ 330:
/* no static exports found */
/* all exports used */
/*!*********************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/components/ServicePop.vue ***!
  \*********************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _cookie = __webpack_require__(/*! ../../utils/cookie */ 50);

var _cookie2 = _interopRequireDefault(_cookie);

var _utils = __webpack_require__(/*! ../../utils */ 26);

var _utils2 = _interopRequireDefault(_utils);

var _configs = __webpack_require__(/*! ../../configs */ 20);

var _configs2 = _interopRequireDefault(_configs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ServicePop',
  props: ["isTelShow", "closeTel"],
  data: function data() {
    return {
      icon3: _configs2.default.resourceUrl + 'im/pop_dianhuakefu@3x.png',
      icon4: _configs2.default.resourceUrl + 'im/icon_close@3x.png',
      icon5: _configs2.default.resourceUrl + 'im/icon_zixun@3x.png',
      icon6: _configs2.default.resourceUrl + 'im/icon_phone@3x.png',
      sendTime: '',
      readStatus: '',
      msgDetails: '',
      sessionId: ''
    };
  },

  methods: {
    phoneCall: function phoneCall() {
      window.location.href = 'tel:010-53579588';
    },
    goSession: function goSession() {
      var loginInfo = {
        uid: _cookie2.default.readCookie('uid'),
        sdktoken: _cookie2.default.readCookie('sdktoken')
      };
      this.sessionId = _cookie2.default.readCookie('sessionId');
      if (!loginInfo.uid) {
        window.location.href = _configs2.default.loginUrl;
      } else if (this.sessionId) {
        location.href = '#/chat/p2p-' + this.sessionId;
      }
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 333:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-55c70005","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/after-less-loader.js!./~/less-loader/lib/loader.js!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/ServicePop.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 2)(true);
// imports


// module
exports.push([module.i, "\n.servicePop .mask[data-v-55c70005] {\n  z-index: 10;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, .6);\n}\n.servicePop .popWrap[data-v-55c70005] {\n  width: 11.4rem;\n  height: 8rem;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  margin-left: -5.7rem;\n  margin-top: -4rem;\n  z-index: 11;\n}\n.servicePop .popWrap img[data-v-55c70005] {\n  width: 11.4rem;\n  height: 8rem;\n}\n.servicePop .popWrap .closeBtn[data-v-55c70005] {\n  width: 1.04rem;\n  height: 1.04rem;\n  position: absolute;\n  right: -0.16rem;\n  top: 0rem;\n}\n.servicePop .popWrap .btnBottom[data-v-55c70005] {\n  width: 10.36rem;\n  height: 1.46rem;\n  position: absolute;\n  bottom: 1.2rem;\n  left: 50%;\n  margin-left: -5.18rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n     -moz-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.servicePop .popWrap .btnBottom a[data-v-55c70005] {\n  font-size: 0.6rem;\n  color: #fff;\n  width: 4.96rem;\n  height: 1.46rem;\n  text-align: center;\n  display: inline-block;\n  border-radius: 6px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.servicePop .popWrap .btnBottom span[data-v-55c70005] {\n  display: inline-block;\n  background-repeat: no-repeat;\n}\n.servicePop .popWrap .btnBottom .online[data-v-55c70005] {\n  background: #f66d61;\n}\n.servicePop .popWrap .btnBottom .online .icon-tel[data-v-55c70005] {\n  margin-left: 0.68rem;\n  margin-right: 0.36rem;\n  width: 0.68rem;\n  height: 0.64rem;\n}\n.servicePop .popWrap .btnBottom .online .icon-tel img[data-v-55c70005] {\n  width: 100%;\n  height: 100%;\n}\n.servicePop .popWrap .btnBottom .call[data-v-55c70005] {\n  background: #2caeb7;\n}\n.servicePop .popWrap .btnBottom .call .icon-call[data-v-55c70005] {\n  margin-top: -0.06rem;\n  margin-left: 0.52rem;\n  margin-right: 0.4rem;\n  width: 0.68rem;\n  height: 0.68rem;\n}\n.servicePop .popWrap .btnBottom .call .icon-call img[data-v-55c70005] {\n  width: 100%;\n  height: 100%;\n}\n", "", {"version":3,"sources":["E:/items/co-wangyi-Im-demo/src/pages/components/ServicePop.vue"],"names":[],"mappings":";AAAA;EACE,YAAY;EACZ,gBAAgB;EAChB,OAAO;EACP,QAAQ;EACR,SAAS;EACT,UAAU;EACV,8BAA+B;CAChC;AACD;EACE,eAAe;EACf,aAAa;EACb,gBAAgB;EAChB,UAAU;EACV,SAAS;EACT,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;CACb;AACD;EACE,eAAe;EACf,aAAa;CACd;AACD;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,gBAAgB;EAChB,UAAU;CACX;AACD;EACE,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;EACf,UAAU;EACV,sBAAsB;EACtB,qBAAc;EAAd,sBAAc;EAAd,kBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,0BAA+B;EAA/B,uCAA+B;KAA/B,uBAA+B;MAA/B,uBAA+B;UAA/B,+BAA+B;CAChC;AACD;EACE,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,sBAAsB;EACtB,mBAAmB;EACnB,qBAAc;EAAd,sBAAc;EAAd,kBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,0BAAoB;EAApB,4BAAoB;KAApB,uBAAoB;MAApB,uBAAoB;UAApB,oBAAoB;CACrB;AACD;EACE,sBAAsB;EACtB,6BAA6B;CAC9B;AACD;EACE,oBAAoB;CACrB;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,oBAAoB;CACrB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,qBAAqB;EACrB,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,YAAY;EACZ,aAAa;CACd","file":"ServicePop.vue","sourcesContent":[".servicePop .mask {\n  z-index: 10;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n.servicePop .popWrap {\n  width: 11.4rem;\n  height: 8rem;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  margin-left: -5.7rem;\n  margin-top: -4rem;\n  z-index: 11;\n}\n.servicePop .popWrap img {\n  width: 11.4rem;\n  height: 8rem;\n}\n.servicePop .popWrap .closeBtn {\n  width: 1.04rem;\n  height: 1.04rem;\n  position: absolute;\n  right: -0.16rem;\n  top: 0rem;\n}\n.servicePop .popWrap .btnBottom {\n  width: 10.36rem;\n  height: 1.46rem;\n  position: absolute;\n  bottom: 1.2rem;\n  left: 50%;\n  margin-left: -5.18rem;\n  display: flex;\n  justify-content: space-between;\n}\n.servicePop .popWrap .btnBottom a {\n  font-size: 0.6rem;\n  color: #fff;\n  width: 4.96rem;\n  height: 1.46rem;\n  text-align: center;\n  display: inline-block;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n}\n.servicePop .popWrap .btnBottom span {\n  display: inline-block;\n  background-repeat: no-repeat;\n}\n.servicePop .popWrap .btnBottom .online {\n  background: #f66d61;\n}\n.servicePop .popWrap .btnBottom .online .icon-tel {\n  margin-left: 0.68rem;\n  margin-right: 0.36rem;\n  width: 0.68rem;\n  height: 0.64rem;\n}\n.servicePop .popWrap .btnBottom .online .icon-tel img {\n  width: 100%;\n  height: 100%;\n}\n.servicePop .popWrap .btnBottom .call {\n  background: #2caeb7;\n}\n.servicePop .popWrap .btnBottom .call .icon-call {\n  margin-top: -0.06rem;\n  margin-left: 0.52rem;\n  margin-right: 0.4rem;\n  width: 0.68rem;\n  height: 0.68rem;\n}\n.servicePop .popWrap .btnBottom .call .icon-call img {\n  width: 100%;\n  height: 100%;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 334:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-733956f2","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/after-less-loader.js!./~/less-loader/lib/loader.js!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/HeaderTitle.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 2)(true);
// imports


// module
exports.push([module.i, "\n*[data-v-733956f2] {\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n}\n.header-contact-customer img[data-v-733956f2], .header-nav img[data-v-733956f2] {\n  width: 100%;\n  height: 100%;\n}\n.header-contact-customer[data-v-733956f2] {\n  display: inline-block;\n  position: absolute;\n  right: 1.92rem;\n  top: 0;\n  width: 1.4rem;\n  height: 1.76rem;\n  text-align: center;\n  z-index: 3;\n}\n.header-contact-customer img[data-v-733956f2] {\n  width: 0.68rem;\n  height: 0.64rem;\n  margin-top: 0.56rem;\n}\n.header-nav[data-v-733956f2] {\n  display: inline-block;\n  width: 1.68rem;\n  height: 1.76rem;\n  text-align: center;\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 3;\n}\n.header-nav img[data-v-733956f2] {\n  width: 0.72rem;\n  height: 0.56rem;\n  margin-top: 0.6rem;\n}\n", "", {"version":3,"sources":["E:/items/co-wangyi-Im-demo/src/pages/components/HeaderTitle.vue"],"names":[],"mappings":";AAAA;EACE,4BAAuB;OAAvB,uBAAuB;CACxB;AACD;EAEE,YAAY;EACZ,aAAa;CACd;AACD;EACE,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,OAAO;EACP,cAAc;EACd,gBAAgB;EAChB,mBAAmB;EACnB,WAAW;CACZ;AACD;EACE,eAAe;EACf,gBAAgB;EAChB,oBAAoB;CACrB;AACD;EACE,sBAAsB;EACtB,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,mBAAmB;EACnB,OAAO;EACP,SAAS;EACT,WAAW;CACZ;AACD;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;CACpB","file":"HeaderTitle.vue","sourcesContent":["* {\n  box-sizing: border-box;\n}\n.header-contact-customer img,\n.header-nav img {\n  width: 100%;\n  height: 100%;\n}\n.header-contact-customer {\n  display: inline-block;\n  position: absolute;\n  right: 1.92rem;\n  top: 0;\n  width: 1.4rem;\n  height: 1.76rem;\n  text-align: center;\n  z-index: 3;\n}\n.header-contact-customer img {\n  width: 0.68rem;\n  height: 0.64rem;\n  margin-top: 0.56rem;\n}\n.header-nav {\n  display: inline-block;\n  width: 1.68rem;\n  height: 1.76rem;\n  text-align: center;\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 3;\n}\n.header-nav img {\n  width: 0.72rem;\n  height: 0.56rem;\n  margin-top: 0.6rem;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 335:
/* no static exports found */
/* all exports used */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-a397bff0","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/after-less-loader.js!./~/less-loader/lib/loader.js!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/NavList.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 2)(true);
// imports


// module
exports.push([module.i, "\n*[data-v-a397bff0] {\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n}\n.animated[data-v-a397bff0] {\n  -webkit-animation-duration: 0.7s;\n     -moz-animation-duration: 0.7s;\n          animation-duration: 0.7s;\n}\n.mask[data-v-a397bff0] {\n  z-index: 10;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, .6);\n}\n.nav-list .triangle[data-v-a397bff0] {\n  width: 0;\n  height: 0;\n  border-left: 0.48rem solid transparent;\n  border-right: 0.48rem solid transparent;\n  border-bottom: 0.48rem solid #ffffff;\n  position: absolute;\n  right: 0.44rem;\n  top: -0.24rem;\n}\n.nav-list nav[data-v-a397bff0] {\n  position: fixed;\n  top: 1.76rem;\n  left: 0;\n  right: 0;\n  width: auto;\n  z-index: 11;\n  background: #ffffff;\n  border-radius: 0 0 0.28rem 0.28rem;\n}\n.nav-list nav ul[data-v-a397bff0] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n  padding: 0.4rem 0.32rem 0.4rem;\n}\n.nav-list nav ul li[data-v-a397bff0] {\n  width: 3.58rem;\n  margin-top: 0.64rem;\n  text-align: center;\n}\n.nav-list nav ul li .nav-img[data-v-a397bff0] {\n  height: 1.16rem;\n  text-align: center;\n  line-height: 1.16rem;\n}\n.nav-list nav ul li .nav-img img[data-v-a397bff0] {\n  display: inline-block;\n}\n.nav-list nav ul li .nav-img .icon1[data-v-a397bff0] {\n  width: 1.12rem;\n  height: 1.16rem;\n}\n.nav-list nav ul li .nav-img .icon2[data-v-a397bff0] {\n  width: 1.16rem;\n  height: 1.16rem;\n}\n.nav-list nav ul li .nav-img .icon3[data-v-a397bff0] {\n  width: 1.12rem;\n  height: 1.12rem;\n}\n.nav-list nav ul li .nav-img .icon4[data-v-a397bff0] {\n  width: 1.04rem;\n  height: 1.16rem;\n}\n.nav-list nav ul li .nav-img .icon5[data-v-a397bff0] {\n  width: 44 50rem;\n  height: 1.16rem;\n}\n.nav-list nav ul li .nav-img .icon7[data-v-a397bff0] {\n  width: 1.08rem;\n  height: 1.14rem;\n}\n.nav-list nav ul li .nav-img .icon8[data-v-a397bff0], .nav-list nav ul li .nav-img .icon6[data-v-a397bff0] {\n  width: 1.12rem;\n  height: 1.16rem;\n}\n.nav-list nav ul li .title[data-v-a397bff0] {\n  display: inline-block;\n  font-size: 0.48rem;\n  color: #333333;\n  line-height: 1.6rem;\n  text-align: center;\n}\n", "", {"version":3,"sources":["E:/items/co-wangyi-Im-demo/src/pages/components/NavList.vue"],"names":[],"mappings":";AAAA;EACE,4BAAuB;OAAvB,uBAAuB;CACxB;AACD;EACE,iCAAyB;KAAzB,8BAAyB;UAAzB,yBAAyB;CAC1B;AACD;EACE,YAAY;EACZ,gBAAgB;EAChB,OAAO;EACP,SAAS;EACT,UAAU;EACV,QAAQ;EACR,8BAA+B;CAChC;AACD;EACE,SAAS;EACT,UAAU;EACV,uCAAuC;EACvC,wCAAwC;EACxC,qCAAqC;EACrC,mBAAmB;EACnB,eAAe;EACf,cAAc;CACf;AACD;EACE,gBAAgB;EAChB,aAAa;EACb,QAAQ;EACR,SAAS;EACT,YAAY;EACZ,YAAY;EACZ,oBAAoB;EACpB,mCAAmC;CACpC;AACD;EACE,qBAAc;EAAd,sBAAc;EAAd,kBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,wBAAgB;MAAhB,oBAAgB;UAAhB,gBAAgB;EAChB,sCAA8B;MAA9B,0BAA8B;UAA9B,8BAA8B;EAC9B,+BAA+B;CAChC;AACD;EACE,eAAe;EACf,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,gBAAgB;EAChB,mBAAmB;EACnB,qBAAqB;CACtB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,gBAAgB;EAChB,gBAAgB;CACjB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EAEE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,oBAAoB;EACpB,mBAAmB;CACpB","file":"NavList.vue","sourcesContent":["* {\n  box-sizing: border-box;\n}\n.animated {\n  animation-duration: 0.7s;\n}\n.mask {\n  z-index: 10;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n.nav-list .triangle {\n  width: 0;\n  height: 0;\n  border-left: 0.48rem solid transparent;\n  border-right: 0.48rem solid transparent;\n  border-bottom: 0.48rem solid #ffffff;\n  position: absolute;\n  right: 0.44rem;\n  top: -0.24rem;\n}\n.nav-list nav {\n  position: fixed;\n  top: 1.76rem;\n  left: 0;\n  right: 0;\n  width: auto;\n  z-index: 11;\n  background: #ffffff;\n  border-radius: 0 0 0.28rem 0.28rem;\n}\n.nav-list nav ul {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  padding: 0.4rem 0.32rem 0.4rem;\n}\n.nav-list nav ul li {\n  width: 3.58rem;\n  margin-top: 0.64rem;\n  text-align: center;\n}\n.nav-list nav ul li .nav-img {\n  height: 1.16rem;\n  text-align: center;\n  line-height: 1.16rem;\n}\n.nav-list nav ul li .nav-img img {\n  display: inline-block;\n}\n.nav-list nav ul li .nav-img .icon1 {\n  width: 1.12rem;\n  height: 1.16rem;\n}\n.nav-list nav ul li .nav-img .icon2 {\n  width: 1.16rem;\n  height: 1.16rem;\n}\n.nav-list nav ul li .nav-img .icon3 {\n  width: 1.12rem;\n  height: 1.12rem;\n}\n.nav-list nav ul li .nav-img .icon4 {\n  width: 1.04rem;\n  height: 1.16rem;\n}\n.nav-list nav ul li .nav-img .icon5 {\n  width: 44 50rem;\n  height: 1.16rem;\n}\n.nav-list nav ul li .nav-img .icon7 {\n  width: 1.08rem;\n  height: 1.14rem;\n}\n.nav-list nav ul li .nav-img .icon8,\n.nav-list nav ul li .nav-img .icon6 {\n  width: 1.12rem;\n  height: 1.16rem;\n}\n.nav-list nav ul li .title {\n  display: inline-block;\n  font-size: 0.48rem;\n  color: #333333;\n  line-height: 1.6rem;\n  text-align: center;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 338:
/* no static exports found */
/* all exports used */
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-55c70005"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/components/ServicePop.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "servicePop"
  }, [(_vm.isTelShow) ? _c('div', {
    staticClass: "mask",
    on: {
      "click": _vm.closeTel
    }
  }) : _vm._e(), _vm._v(" "), (_vm.isTelShow) ? _c('div', {
    staticClass: "popWrap",
    on: {
      "click": _vm.closeTel
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.icon3
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "closeBtn",
    attrs: {
      "src": _vm.icon4
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "btnBottom"
  }, [_c('a', {
    staticClass: "online",
    on: {
      "click": _vm.goSession
    }
  }, [_c('span', {
    staticClass: "icon-tel"
  }, [_c('img', {
    attrs: {
      "src": _vm.icon5
    }
  })]), _vm._v("\n        在线咨询\n      ")]), _vm._v(" "), _c('a', {
    staticClass: "call",
    attrs: {
      "href": "tel:010-53579588"
    }
  }, [_c('span', {
    staticClass: "icon-call"
  }, [_c('img', {
    attrs: {
      "src": _vm.icon6
    }
  })]), _vm._v("\n        拨打电话\n      ")])])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-55c70005", module.exports)
  }
}

/***/ }),

/***/ 339:
/* no static exports found */
/* all exports used */
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-733956f2"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/components/HeaderTitle.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header-title"
  }, [_c('header', {
    staticClass: "header line-bottom"
  }, [_c('i', {
    staticClass: "icon-left",
    on: {
      "click": function($event) {
        _vm.$router.back(-1)
      }
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.icon3,
      "alt": ""
    }
  })]), _vm._v(" "), _c('h2', [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('span', {
    staticClass: "header-contact-customer",
    on: {
      "click": function($event) {
        _vm.isTelShow = !_vm.isTelShow
      }
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.icon1
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "header-nav",
    on: {
      "click": function($event) {
        _vm.isNavShow = !_vm.isNavShow
      }
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.icon2
    }
  })])]), _vm._v(" "), _c('nav-list', {
    attrs: {
      "close-nav": _vm.closeNav,
      "is-nav-show": _vm.isNavShow
    }
  }), _vm._v(" "), _c('service-pop', {
    attrs: {
      "closeTel": _vm.closeTel,
      "isTelShow": _vm.isTelShow
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-733956f2", module.exports)
  }
}

/***/ }),

/***/ 340:
/* no static exports found */
/* all exports used */
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-a397bff0"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/components/NavList.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "nav-list"
  }, [_c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [(_vm.isNavShow) ? _c('div', {
    staticClass: "mask",
    on: {
      "click": _vm.closeNav
    }
  }) : _vm._e()]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [(_vm.isNavShow) ? _c('nav', {
    staticClass: "nav-group",
    on: {
      "click": _vm.closeNav
    }
  }, [_c('ul', [_vm._l((_vm.navs), function(nav) {
    return _c('li', {
      key: nav.id
    }, [_c('a', {
      attrs: {
        "href": nav.url
      }
    }, [_c('div', {
      staticClass: "nav-img"
    }, [_c('img', {
      class: nav.icon,
      attrs: {
        "src": nav.img
      }
    })]), _vm._v(" "), _c('span', {
      staticClass: "title"
    }, [_vm._v(_vm._s(nav.title))])])])
  }), _vm._v(" "), _c('li', {
    on: {
      "click": _vm.downLoadApp
    }
  }, [_c('div', {
    staticClass: "nav-img"
  }, [_c('img', {
    staticClass: "icon8",
    attrs: {
      "src": _vm.img8
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "title"
  }, [_vm._v("APP")])])], 2), _vm._v(" "), _c('span', {
    staticClass: "triangle"
  })]) : _vm._e()])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a397bff0", module.exports)
  }
}

/***/ }),

/***/ 343:
/* no static exports found */
/* all exports used */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-55c70005","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/after-less-loader.js!./~/less-loader/lib/loader.js!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/ServicePop.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-55c70005","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/after-less-loader.js!../../../~/less-loader/lib/loader.js!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./ServicePop.vue */ 333);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 3)("5092c281", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-55c70005\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/after-less-loader.js!../../../node_modules/less-loader/lib/loader.js!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ServicePop.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-55c70005\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/after-less-loader.js!../../../node_modules/less-loader/lib/loader.js!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ServicePop.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 344:
/* no static exports found */
/* all exports used */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-733956f2","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/after-less-loader.js!./~/less-loader/lib/loader.js!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/HeaderTitle.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-733956f2","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/after-less-loader.js!../../../~/less-loader/lib/loader.js!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./HeaderTitle.vue */ 334);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 3)("c96f11d4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-733956f2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/after-less-loader.js!../../../node_modules/less-loader/lib/loader.js!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HeaderTitle.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-733956f2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/after-less-loader.js!../../../node_modules/less-loader/lib/loader.js!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HeaderTitle.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 345:
/* no static exports found */
/* all exports used */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-a397bff0","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/after-less-loader.js!./~/less-loader/lib/loader.js!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/NavList.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-a397bff0","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/after-less-loader.js!../../../~/less-loader/lib/loader.js!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./NavList.vue */ 335);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 3)("cfd8f89e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a397bff0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/after-less-loader.js!../../../node_modules/less-loader/lib/loader.js!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NavList.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a397bff0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/after-less-loader.js!../../../node_modules/less-loader/lib/loader.js!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NavList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 348:
/* no static exports found */
/* all exports used */
/*!**********************************************!*\
  !*** ./src/pages/components/HeaderTitle.vue ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-733956f2","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/after-less-loader.js!less-loader!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./HeaderTitle.vue */ 344)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./HeaderTitle.vue */ 328),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-733956f2"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./HeaderTitle.vue */ 339),
  /* scopeId */
  "data-v-733956f2",
  /* cssModules */
  null
)
Component.options.__file = "E:\\items\\co-wangyi-Im-demo\\src\\pages\\components\\HeaderTitle.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] HeaderTitle.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-733956f2", Component.options)
  } else {
    hotAPI.reload("data-v-733956f2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 349:
/* no static exports found */
/* all exports used */
/*!******************************************!*\
  !*** ./src/pages/components/NavList.vue ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-a397bff0","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/after-less-loader.js!less-loader!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./NavList.vue */ 345)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./NavList.vue */ 329),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-a397bff0"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./NavList.vue */ 340),
  /* scopeId */
  "data-v-a397bff0",
  /* cssModules */
  null
)
Component.options.__file = "E:\\items\\co-wangyi-Im-demo\\src\\pages\\components\\NavList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] NavList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a397bff0", Component.options)
  } else {
    hotAPI.reload("data-v-a397bff0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 350:
/* no static exports found */
/* all exports used */
/*!*********************************************!*\
  !*** ./src/pages/components/ServicePop.vue ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-55c70005","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/after-less-loader.js!less-loader!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./ServicePop.vue */ 343)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./ServicePop.vue */ 330),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-55c70005"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./ServicePop.vue */ 338),
  /* scopeId */
  "data-v-55c70005",
  /* cssModules */
  null
)
Component.options.__file = "E:\\items\\co-wangyi-Im-demo\\src\\pages\\components\\ServicePop.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ServicePop.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-55c70005", Component.options)
  } else {
    hotAPI.reload("data-v-55c70005", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 353:
/* no static exports found */
/* all exports used */
/*!*******************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/Session.vue ***!
  \*******************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _cookie = __webpack_require__(/*! ../utils/cookie */ 50);

var _cookie2 = _interopRequireDefault(_cookie);

var _utils = __webpack_require__(/*! ../utils */ 26);

var _utils2 = _interopRequireDefault(_utils);

var _configs = __webpack_require__(/*! ../configs */ 20);

var _configs2 = _interopRequireDefault(_configs);

var _HeaderTitle = __webpack_require__(/*! ./components/HeaderTitle */ 348);

var _HeaderTitle2 = _interopRequireDefault(_HeaderTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: { HeaderTitle: _HeaderTitle2.default },
  data: function data() {
    return {
      showSessionList: false,
      title: '消息',
      delSessionId: null,
      stopBubble: false,
      noticeIcon: _configs2.default.noticeIcon,
      myGroupIcon: _configs2.default.defaultGroupIcon,
      myAdvancedIcon: _configs2.default.defaultAdvancedIcon,
      icon3: _configs2.default.resourceUrl + 'im/bg_adviser@3x.png',
      icon4: _configs2.default.resourceUrl + 'im/btn_guwen@3x.png',
      icon5: _configs2.default.resourceUrl + 'im/btn_phone@3x.png',
      icon6: _configs2.default.resourceUrl + 'im/icon_more@3x.png',
      sendTime: '',
      readStatus: '',
      msgDetails: ''
    };
  },
  created: function created() {
    window.localStorage.setItem("tempUrl", 'session');

    var loginInfo = {
      uid: _cookie2.default.readCookie('uid'),
      sdktoken: _cookie2.default.readCookie('sdktoken')
    };
    if (!loginInfo.uid) {
      this.showSessionList = false;
      this.$store.dispatch('hideLoading');
    } else {
      this.showSessionList = true;

      var accountMsg = _cookie2.default.readCookie('accountMsg');
      this.sendTime = _cookie2.default.readCookie('sendTime');
      this.readStatus = _cookie2.default.readCookie('readStatus');
      this.msgDetails = _cookie2.default.readCookie('msgDetails');
    }
  },

  computed: {
    sysMsgUnread: function sysMsgUnread() {
      var temp = this.$store.state.sysMsgUnread;
      var sysMsgUnread = temp.addFriend || 0;
      sysMsgUnread += temp.team || 0;
      var customSysMsgUnread = this.$store.state.customSysMsgUnread;
      return sysMsgUnread + customSysMsgUnread;
    },
    userInfos: function userInfos() {
      return this.$store.state.userInfos;
    },
    myInfo: function myInfo() {
      return this.$store.state.myInfo;
    },
    myPhoneId: function myPhoneId() {
      return '' + this.$store.state.userUID;
    },
    sessionlist: function sessionlist() {
      var _this = this;

      var sessionlist = this.$store.state.sessionlist.filter(function (item) {
        item.name = '';
        item.avatar = '';
        if (item.scene === 'p2p') {
          var userInfo = null;
          if (item.to !== _this.myPhoneId) {
            userInfo = _this.userInfos[item.to];
          } else {
            return false;
          }
          if (userInfo) {
            item.name = _utils2.default.getFriendAlias(userInfo);
            item.avatar = userInfo.avatar;
          }
        } else if (item.scene === 'team') {
          var teamInfo = null;
          teamInfo = _this.$store.state.teamlist.find(function (team) {
            return team.teamId === item.to;
          });
          if (teamInfo) {
            item.name = teamInfo.name;
            item.avatar = teamInfo.avatar || (teamInfo.type === 'normal' ? _this.myGroupIcon : _this.myAdvancedIcon);
          } else {
            item.name = '\u7FA4' + item.to;
            item.avatar = item.avatar || _this.myGroupIcon;
          }
        }
        var lastMsg = item.lastMsg || {};
        if (lastMsg.type === 'text') {
          item.lastMsgShow = lastMsg.text || '';
        } else if (lastMsg.type === 'custom') {
          item.lastMsgShow = _utils2.default.parseCustomMsg(lastMsg);
        } else if (lastMsg.scene === 'team' && lastMsg.type === 'notification') {
          item.lastMsgShow = _utils2.default.generateTeamSysmMsg(lastMsg);
        } else if (_utils2.default.mapMsgType(lastMsg)) {
          item.lastMsgShow = '[' + _utils2.default.mapMsgType(lastMsg) + ']';
        } else {
          item.lastMsgShow = '';
        }
        if (item.updateTime) {
          item.updateTimeShow = _utils2.default.formatDate(item.updateTime, true);
        }
        return item;
      });
      if (sessionlist.length) {
        this.showSessionList = true;
      }
      this.$store.dispatch('hideLoading');

      return sessionlist;
    }
  },
  methods: {
    goLogin: function goLogin() {
      window.location.href = _configs2.default.loginUrl;
    },
    phoneCall: function phoneCall() {
      window.location.href = 'tel:010-53579588';
    },
    enterSysMsgs: function enterSysMsgs() {
      if (this.hideDelBtn()) return;
      location.href = '#/sysmsgs';
    },
    enterChat: function enterChat(session) {
      if (this.hideDelBtn()) return;
      if (session && session.id) location.href = '#/chat/' + session.id;
    },
    enterMyChat: function enterMyChat() {
      location.href = '#/chat/p2p-' + this.myPhoneId;
    },
    deleteSession: function deleteSession() {
      if (this.delSessionId !== null) {
        this.$store.dispatch('deleteSession', this.delSessionId);
      }
    },
    showDelBtn: function showDelBtn(vNode) {
      var _this2 = this;

      if (vNode && vNode.data && vNode.data.attrs) {
        this.delSessionId = vNode.data.attrs.sessionId;
        this.stopBubble = true;
        setTimeout(function () {
          _this2.stopBubble = false;
        }, 20);
      }
    },
    hideDelBtn: function hideDelBtn() {
      if (this.delSessionId !== null && !this.stopBubble) {
        this.delSessionId = null;
        return true;
      }
      return false;
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 362:
/* no static exports found */
/* all exports used */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-3c749fe6","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/after-less-loader.js!./~/less-loader/lib/loader.js!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/Session.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 2)(true);
// imports


// module
exports.push([module.i, "\n* {\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n}\n.empty-list {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n     -moz-box-orient: vertical;\n     -moz-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n     -moz-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-top: 30%;\n}\n.empty-list img {\n  width: 100%;\n  height: 100%;\n}\n.empty-list .wait-user {\n  width: 6.24rem;\n  height: 6.9rem;\n}\n.empty-list .wait-btn {\n  margin-top: 0.6rem;\n  width: 5.58rem;\n  height: 1.44rem;\n}\n.empty-list .call-btn {\n  margin-top: 0.4rem;\n  width: 5.58rem;\n  height: 1.44rem;\n}\n.p-session .vux-cell-primary {\n  width: 9.4rem;\n}\n", "", {"version":3,"sources":["E:/items/co-wangyi-Im-demo/src/pages/Session.vue"],"names":[],"mappings":";AAAA;EACE,4BAAuB;OAAvB,uBAAuB;CACxB;AACD;EACE,qBAAc;EAAd,sBAAc;EAAd,kBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,6BAAuB;EAAvB,8BAAuB;EAAvB,+BAAuB;KAAvB,0BAAuB;KAAvB,2BAAuB;MAAvB,2BAAuB;UAAvB,uBAAuB;EACvB,yBAAwB;EAAxB,gCAAwB;KAAxB,sBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,0BAAoB;EAApB,4BAAoB;KAApB,uBAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,gBAAgB;CACjB;AACD;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,eAAe;EACf,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,cAAc;CACf","file":"Session.vue","sourcesContent":["* {\n  box-sizing: border-box;\n}\n.empty-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 30%;\n}\n.empty-list img {\n  width: 100%;\n  height: 100%;\n}\n.empty-list .wait-user {\n  width: 6.24rem;\n  height: 6.9rem;\n}\n.empty-list .wait-btn {\n  margin-top: 0.6rem;\n  width: 5.58rem;\n  height: 1.44rem;\n}\n.empty-list .call-btn {\n  margin-top: 0.4rem;\n  width: 5.58rem;\n  height: 1.44rem;\n}\n.p-session .vux-cell-primary {\n  width: 9.4rem;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 371:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-3c749fe6"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/Session.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-main p-session page-top"
  }, [_c('header-title', {
    attrs: {
      "title": _vm.title
    }
  }), _vm._v(" "), (_vm.showSessionList) ? _c('group', {
    staticClass: "u-list"
  }, [(_vm.msgDetails) ? _c('cell', {
    staticClass: "u-list-item",
    attrs: {
      "title": "通知",
      "inline-desc": _vm.msgDetails
    },
    nativeOn: {
      "click": function($event) {
        return _vm.enterSysMsgs($event)
      }
    }
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "slot": "icon",
      "src": _vm.noticeIcon
    },
    slot: "icon"
  }), _vm._v(" "), (_vm.sendTime) ? _c('span', {
    staticClass: "u-session-time"
  }, [_vm._v("\n        " + _vm._s(_vm.sendTime) + "\n      ")]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "u-session-right"
  }, [_c('img', {
    attrs: {
      "src": _vm.icon6,
      "alt": ""
    }
  })]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.readStatus > 0),
      expression: "readStatus > 0"
    }],
    staticClass: "u-unread"
  })]) : _vm._e(), _vm._v(" "), _vm._l((_vm.sessionlist), function(session, index) {
    return _c('cell', {
      directives: [{
        name: "touch",
        rawName: "v-touch:swipeleft",
        value: (_vm.showDelBtn),
        expression: "showDelBtn",
        arg: "swipeleft"
      }, {
        name: "touch",
        rawName: "v-touch:swiperight",
        value: (_vm.hideDelBtn),
        expression: "hideDelBtn",
        arg: "swiperight"
      }],
      key: session.id,
      staticClass: "u-list-item",
      attrs: {
        "title": session.name,
        "inline-desc": session.lastMsgShow,
        "sessionId": session.id
      },
      nativeOn: {
        "click": function($event) {
          _vm.enterChat(session)
        }
      }
    }, [_c('img', {
      staticClass: "u-circle",
      attrs: {
        "slot": "icon",
        "src": session.avatar
      },
      slot: "icon"
    }), _vm._v(" "), _c('span', {
      staticClass: "u-session-time"
    }, [_vm._v("\n        " + _vm._s(session.updateTimeShow) + "\n      ")]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (session.unread > 0),
        expression: "session.unread > 0"
      }],
      staticClass: "u-unread"
    }), _vm._v(" "), _c('span', {
      staticClass: "u-tag-del",
      class: {
        active: _vm.delSessionId === session.id
      },
      on: {
        "click": _vm.deleteSession
      }
    })])
  })], 2) : _c('div', {
    staticClass: "empty-list"
  }, [_c('div', {
    staticClass: "wait-user"
  }, [_c('img', {
    attrs: {
      "src": _vm.icon3,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "wait-btn",
    on: {
      "click": _vm.goLogin
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.icon4,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "call-btn"
  }, [_c('a', {
    attrs: {
      "href": "tel:010-53579588"
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.icon5,
      "alt": ""
    }
  })])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3c749fe6", module.exports)
  }
}

/***/ }),

/***/ 379:
/* no static exports found */
/* all exports used */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-3c749fe6","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/after-less-loader.js!./~/less-loader/lib/loader.js!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/Session.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-compiler?{"id":"data-v-3c749fe6","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/after-less-loader.js!../../~/less-loader/lib/loader.js!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector.js?type=styles&index=0!./Session.vue */ 362);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/vue-style-loader/lib/addStylesClient.js */ 3)("7476f45a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3c749fe6\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/after-less-loader.js!../../node_modules/less-loader/lib/loader.js!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Session.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3c749fe6\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/after-less-loader.js!../../node_modules/less-loader/lib/loader.js!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Session.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=2.js.map