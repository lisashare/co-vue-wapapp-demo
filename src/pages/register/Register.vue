<template>
  <div>
  <div class="login"  v-show="isShow==1">
    <div class="toast-tip" v-show="toastTip">
      {{errorMsg}}
    </div>
    <div class="header line-bottom">
      <span class="icon-back" @click="$router.go(-1)"></span>
      注册
    </div>
    <div class="form-frame">
      <div class="from-input">
        <input class="input1 tel1" type="tel" placeholder="手机号" maxlength="11" v-model="mobile" />
        <span class="icon-tel iconImg"><img src="/static/images/home/icon/icon_phone@3x.png" /></span>
      </div>
      <div class="from-input">
        <input  class="input1 password1" type="text" placeholder="验证码" v-model="code" />
        <span class="icon-code iconImg"><img src="/static/images/home/icon/icon_acthcode@3x.png" /></span>
        <span class="getcode" v-on:click="countDown">{{times}}<i v-if="vmiao">s</i></span>
      </div>
      <div class="from-input">
        <input class="input1 tel1 w70" type="password" placeholder="密 码（6~16位数字和字母）" v-model="password" />
        <span class="icon-tel iconImg"><img src="/static/images/home/icon/icon_lockclose@3x.png" /></span>
      </div>
      <div class="from-input">
        <input  class="input1 password1" type="text" placeholder="姓名（选填）" v-model="name" />
        <span class="icon-code iconImg"><img src="/static/images/home/icon/icon_name@3x.png" /></span>
      </div>
<!--       <router-link tag="div" to="/login" class="messageLoginBtn">账号登录</router-link> -->
      <!-- <div class="agreement">
        注册/登录即代表同意商机盒子的<router-link tag="a" to="/useragreement">《用户协议》</router-link>和<router-link tag="a" to="/privacyagreement">《隐私协议》</router-link>
        <span class="icon-agreement"></span>
      </div> -->
      <div class="agreement">
        注册/登录即代表同意商机盒子的<a href="javascript:void(0)" @click="agreement1IsShow">《用户协议》</a>和<a @click="agreement2IsShow">《隐私协议》</a>
        <!-- <span @click="agreementClick" :class="{'icon-agreement':!isSel,'icon-agreement-active': isSel}" ></span> -->
      </div>
      <div class="btnRegister" @click="usrRegister">注册</div>
    </div>
  </div>
  <user-agreement :agreement1="agreement1" @child-msg1="agreement1Close"></user-agreement>
  <privacy-agreement :agreement2="agreement2" @child-msg2="agreement2Close"></privacy-agreement>
  </div>
</template>

<script>
// import ToastTip from '@/pages/components/Toasttip'
import UserAgreement from '@/pages/useragreement/Useragreement'
import PrivacyAgreement from '@/pages/privacyagreement/Privacyagreement'
export default {
  name: 'Login',
  // components: {
  //   ToastTip
  // },
  components: {
    UserAgreement,
    PrivacyAgreement
  },
  data () {
    return {
      mobile: '',
      password: '',
      code: '',
      name: '',
      errorMsg: '',
      times: '获取验证码',
      timer: null,
      onOff: null,
      toastTip: false,
      //kgCode: true,
      agreement1: false,
      agreement2: false,
      isShow: 1,
      stopClick: true,
      vmiao: false,
      isSel: false
    }
  },
  computed: {
    /*text () {
      return this.times > 0 ? this.times + 's' :   "获取验证码"
    }*/
    text () {
      return this.times+'s'
    }
  },
  methods: {
    agreementClick () {
      this.isSel = !this.isSel
    },
    agreement1IsShow () {
      this.agreement1 = true
      this.isShow = 2
    },
    agreement1Close () {
      this.agreement1 = false
      this.isShow = 1
    },
    agreement2IsShow () {
      this.agreement2 = true
      this.isShow = 2
    },
    agreement2Close () {
      this.agreement2 = false
      this.isShow = 1
    },
    // 倒计时
    countDown () {
      if (this.validMobile()) {
        // console.log( this.stopClick )
        // this.stopClick = true
        this.sendCode()
        //console.log(this.onOff)
      }else{
        this.stopClick = false
      }
      /*if (this.onOff) {
        this.onOff = false
        const TIME_COUNT = 60
        clearInterval(this.timer)
        this.times = TIME_COUNT
        var that = this
        this.timer = setInterval(function () {
          that.times--
          // console.log( that.text )
          if (that.times <= 0) {
            clearInterval(that.timer)
            that.timer = null
            that.times = '获取验证码'
            that.onOff = true
          }
        }, 1000)
      }*/
    },
    // 手机号验证
    validMobile () {
      var reg = /^1[3|4|5|7|8|9|6]\d{9}$/;
      if (this.mobile == '' || !reg.test(this.mobile) || this.mobile.length != 11) {
        this.tipShow('请输入正确的手机号')
        this.kgCode = true
        return false
      }
      return true
    },
    // 验证码验证
    validCode () {
      if (this.code == '' || this.code.length < 6) {
        this.tipShow('验证码有误，请重新输入')
        return false
      }
      return true
    },
    // 密码验证
    validPassword () {
      // var reg = /^[A-Za-z0-9]{6,16}$/;
      var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
      // if( this.mobile=="" || reg.test(this.mobile) ){
      if (this.password == '' || !reg.test(this.password)) {
        this.tipShow('密码为 6-16 位数字和字母组合')
        return false
      }
      return true
    },
    //姓名验证
    validName () {
      var reg = /^[\u4e00-\u9fa5a-zA-Z]+$/;
      if ( this.name != '' && !reg.test(this.name) ) {
        this.tipShow('姓名为汉字、英文')
        return false
      }
      return true
    },
    // toast提示
    tipShow (tipmsg) {
      this.errorMsg = tipmsg
      this.toastTip = true
      var _this = this
      setTimeout(function () {
        _this.toastTip = false
        return false
      }, 2000)
    },
    sendCode () {
      // this.times = this.text
      var _this = this

      // if(_this.stopClick){
        if (typeof this.times == 'number') {
          return false
        }
        // console.log( typeof this.times == 'number' )
        this.$http.post(this.baseurl+'/sms/register/code', {
          'mobile': this.mobile
        }).then((res) => {

          const TIME_COUNT = 60
          clearInterval(this.timer)
          _this.times = TIME_COUNT
          _this.vmiao = true;
          _this.timer = setInterval(function () {
            _this.times--
            if (_this.times <= 0) {
              clearInterval(_this.timer)
              // _this.times = '获取验证码'
              _this.vmiao = false
              _this.times = '重新获取'
              // _this.stopClick = false

            }
          }, 1000)

        }).catch((e) => {
          // console.log(e);
          if (e.response) {
            // console.log(e.response.data.message)
            this.tipShow(e.response.data.message)
            // console.log(e.response.status);
            // console.log(e.response.headers);
          }
        })
      // }
    },
    usrRegister () {
      if ( this.validMobile() && this.validCode() && this.validPassword() && this.validName() ) {
        this.$http.post(this.baseurl+'/register', {
          'mobile': this.mobile,
          'password': this.password,
          'code': this.code,
          'name': this.name
        }).then((res) => {
          // console.log(res)
          this.tipShow('注册成功')

          window._vds.track("wap_registered"); // 埋点

          this.$router.push('/login');
        }).catch((e) => {
          // console.log(e)
          if (e.response) {
            // console.log(e.response.data.message)
            this.tipShow(e.response.data.message)
            _this.onOff = false
          }
        })
      }
    }

  }
}
</script>

<style lang="less" scoped>
  @rem: 50rem;
  .login {
    width: 100%;
    position: relative;
    left: 0;
    top: 0;
    .toast-tip {
      //font-size: 18/@rem;
      font-size: 24/@rem;
      color: #fff;
      width: 400/@rem;
      height: 44/@rem;
      text-align: center;
      line-height: 44/@rem;
      padding: 0 15/@rem;
      background: rgba(0,0,0,.6);
      border-radius: 22/@rem;
      position: absolute;
      left: 50%;
      bottom: 20%;
      margin-left: -200/@rem;
      //margin-top: -22/@rem;
      z-index: 1000;
      box-sizing: border-box;
    }
    .header {
      font-size: 36/@rem;
      color: #333;
      height: 88/@rem;
      line-height: 88/@rem;
      position: relative;
      text-align: center;
    }
    .logoImg {
      width: 190/@rem;
      height: 194/@rem;
      margin: 80/@rem auto 36/@rem;
      img {
        width: 190/@rem;
        height: 194/@rem;
      }
    }
    .form-frame {
       width: 100%;
       padding: 0 46/@rem;
       box-sizing: border-box;
       .from-input {
         height: 110/@rem;
         line-height: 110/@rem;
         border-bottom: 1px solid #d9d9d9;
         position: relative;
         .iconImg {
           position: absolute;
           left: 0/@rem;
           top: 50%;
           margin-top: -18/@rem;
         }
         .icon-tel, .icon-passw {
           display: inline-block;
           width: 36/@rem;
           height: 36/@rem;
           padding-left: 10/@rem;
           img {
             width: 36/@rem;
             height: 36/@rem;
             position: absolute;
             top: 0;
             left: 0;
           }
         }
         .icon-code {
           width: 42/@rem;
           height: 36/@rem;
           padding-left: 10/@rem;
           img {
             width: 42/@rem;
             height: 36/@rem;
             position: absolute;
             top: 0;
             left: 0;
           }
         }
         .input1 {
           font-size: 32/@rem;
           color: #999;
           padding-left: 66/@rem;
           vertical-align: middle;
         }
         .input1::-webkit-input-placeholder {
           font-size: 32/@rem;
           color: #999;
         }
         .getcode {
           font-size: 30/@rem;
           color: #35aeb6;
           width: 190/@rem;
           height: 68/@rem;
           line-height: 68/@rem;
           padding-left: 18/@rem;
           position: absolute;
           right: 0;
           top: 50%;
           transform: translate(0, -50%);
           border-left: 1px solid #d9d9d9;

         }
         .tel1 {}
         .w70 { width: 70%; }
         .password1 {}
       }
       .messageLoginBtn {
         font-size: 30/@rem;
         color: #999;
         text-align: right;
         line-height: 88/@rem;
         margin-bottom: 20/@rem;
       }
       .btnLogin, .btnRegister {
         font-size: 36/@rem;
         color: #fff;
         width: 658/@rem;
         height: 88/@rem;
         line-height: 88/@rem;
         text-align: center;
         margin: 42/@rem auto 0;
         border-radius: 44/@rem;
         box-sizing: border-box;
         /*border: 1px solid #d9d9d9;*/
       }
       .btnRegister {
         background: #35aeb6;
       }
       .agreement {
         font-size: 28/@rem;
         color: #666;
         //text-indent: 1.5em;
         line-height: 48/@rem;
         margin-top: 24/@rem;
         padding-left: 14/@rem;
         position: relative;
         .icon-agreement {
           width: 24/@rem;
           height: 24/@rem;
           position: absolute;
           left: 0/@rem;
           top: 12/@rem;
           background-image:url("/static/images/home/icon/btn_pigron_normal@3x.png");
           background-repeat: no-repeat;
           background-size: 24/@rem;
         }
         .icon-agreement-active {
           width: 24/@rem;
           height: 24/@rem;
           position: absolute;
           left: 0/@rem;
           top: 12/@rem;
           background-image:url("/static/images/home/icon/btn_pigeon_hover@3x.png");
           background-repeat: no-repeat;
           background-size: 24/@rem;
         }
         a {
           color: #0099cc;
           text-decoration: underline;
         }
       }
    }
  }
</style>
