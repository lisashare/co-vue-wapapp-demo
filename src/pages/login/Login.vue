<template>
  <div>
  <div class="login" v-show="isShow==1" >
    <div class="toast-tip" v-show="toastTip">
      {{errorMsg}}
    </div>
    <div class="header line-bottom">
      <span class="icon-close" @click="$router.go(-1)"></span>
      账号登录
    </div>
    <div class="logoImg">
      <img src="/static/images/home/bg_shangjihezilogo@3x.png" />
    </div>
    <div class="form-frame">
      <div class="from-input">
        <input class="input1 tel1" type="tel" placeholder="手机号" maxlength="11" v-model="mobile" @input="validMobile" />
        <span class="icon-tel iconImg"><img src="/static/images/home/icon/icon_phone@3x.png" /></span>
      </div>
      <div class="from-input">
        <input  class="input1 password1" type="password" placeholder="密  码" v-model="password" @input="validMobile" />
        <span class="icon-passw iconImg"><img src="/static/images/home/icon/icon_lock@3x.png" /></span>
        <router-link tag="span" to="forgetpassword" class="forgetPw">忘记密码</router-link>
      </div>
      <div class="messageLoginBtn"><router-link tag="a" to="/messagelogin" >手机快捷登录</router-link></div>
      <div class="btnLogin" @click="getLoginData" :class="{activeState: isActive}">登录</div>
      <router-link tag="div" to="/register" class="btnRegister">注册</router-link>
      <!-- <div class="agreement">
        注册/登录即代表同意商机盒子的<router-link tag="a" to="/useragreement">《用户协议》</router-link>和<router-link tag="a" to="/privacyagreement">《隐私协议》</router-link>
        <span class="icon-agreement"></span>
      </div> -->
      <div class="agreement">
        注册/登录即代表同意商机盒子的<a href="javascript:void(0)" @click="agreement1IsShow">《用户协议》</a>和<a @click="agreement2IsShow">《隐私协议》</a>
        <!-- <span @click="agreementClick" :class="{'icon-agreement':!isSel,'icon-agreement-active': isSel}" ></span> -->
      </div>
    </div>
  </div>
  <user-agreement :agreement1="agreement1" @child-msg1="agreement1Close"></user-agreement>
  <privacy-agreement :agreement2="agreement2" @child-msg2="agreement2Close"></privacy-agreement>
  </div>
</template>

<script>
import config from '@/modules/http'
import utils from '@/modules/utils'
import UserAgreement from '@/pages/useragreement/Useragreement'
import PrivacyAgreement from '@/pages/privacyagreement/Privacyagreement'
export default {
  name: 'Login',
  components: {
    UserAgreement,
    PrivacyAgreement
  },
  data () {
    return {
      mobile: '',
      password: '',
      errorMsg: '',
      toastTip: false,
      isActive: false,
      agreement1: false,
      agreement2: false,
      isShow: 1,
      isSel: false
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
    //agreen
    /*volidAgreement () {
      if (this.isSel) {
        return true;
      }
      return false;
    },*/
    // 验证手机号
    validMobile () {
      var reg = /^1[3|4|5|7|8|9|6]\d{9}$/;
      if (this.mobile.length == 11 && reg.test(this.mobile) && this.password.length >= 6) {
        this.isActive = true
      } else {
        this.isActive = false
      }
      utils.setStore("temMobile",this.mobile)
      // console.log( utils.getStore("temMobile") )
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
    // 登录按钮
    getLoginData () {
      // this.isActive = true
      if ( this.isActive ) {

      if (this.mobile == '' && this.password == '') {
        // console.log('手机号或者密码不能为空')
        return false
      }
      // var sdkToken = md5(this.password)
      this.$http.post(this.baseurl+'/login', {
        'mobile': this.mobile,
        'password': this.password
      })
        .then((res) => {
          this.tipShow('登录成功')
          // console.log(res.data.data)
          var data = res.data.data
          //console.log( $route.params.path )
          //utils.setStore("tempUrl", $route.params.path)
          // console.log(data)
          utils.setCookie('accountId', data.account_id)
          utils.setCookie('mobile', this.mobile)
          utils.setCookie('accesstoken', data.access_token)
          utils.setCookie('uid', data.nim_id)
          utils.setCookie('sdktoken', data.nim_token)



          /*//返回原来页面
          if( utils.getStore("tempUrl") =='session' ){
            console.log('00000000000003')
            window.location.href="http://"+window.location.hostname+"/im.html#/session"
          }else if(utils.getStore("tempUrl") != 'session' && utils.getStore("tempUrl") != '' && utils.getStore("tempUrl") ){
            console.log('00000000000002')
            this.$router.push( {path: utils.getStore("tempUrl")})
          }else{
            console.log('00000000000001')
            this.$router.push({path: '/'})
          }*/

            //返回原来页面
            if( utils.getStore("tempUrl") =='session' ){

              // 判断是从消息页面进入，执行两个请求，成功再跳转
              this.getSessionId (data.nim_id,this.mobile,data.account_id)

            }else if(utils.getStore("tempUrl") != 'session' && utils.getStore("tempUrl") != '' && utils.getStore("tempUrl") ){
              this.$router.push( {path: utils.getStore("tempUrl")})
            }else{
              this.$router.push({path: '/'})
            }

        }).catch((e) => {
          // console.log(e)
          if (e.response) {
            // console.log(e.response.data.message)
            this.tipShow(e.response.data.message)
            // _this.onOff = false
          }
        })

      }
    },
    getSessionId (uid,mobile,accountId) {
      let params = {
        'params': {
          'customerIM': uid,
          'customerPhone': mobile
        }
      }
      this.$http.post(this.baseurl + '/im/getimaccount', params).then(res => {
          if(res.data.code == 200){
            // console.log(res.data.data)
            let sessionId = res.data.data
            this.sessionId = utils.setCookie('sessionId', sessionId)
            // 跳转
            this.getAccountId(accountId)
          }
      })
    },
    getAccountId(accountId){
       let params = {
        'params': {
          'accountId': accountId,
        }
      }
      this.$http.post(this.baseurl + '/im/notice', params).then(res => {
          if(res.data.code == 200){
            this.accountMsg = res.data.data

            let sendTime = res.data.data.sendTime
            utils.setCookie('sendTime', res.data.data.sendTime)

            let readStatus = res.data.data.readStatus
            utils.setCookie('readStatus', res.data.data.readStatus)

            let msgDetails =  res.data.data.msgDetails
            utils.setCookie('msgDetails', res.data.data.msgDetails)

            utils.setCookie('accountMsg',this.accountMsg)
            // 跳转
            // this.$router.back()
            // location.href = config.imSession

            // 成功跳转
            window.location.href="http://"+window.location.hostname+"/im.html#/session"

          }
      })
    },
  },
  beforeRouteEnter (to, from, next) {
    // console.log(111111111)
    // console.log(to)
    // console.log(from)
    // console.log( from.fullPath )
    if( from.path=='/login' || from.path=='/register' || from.path=='/messagelogin' || from.path=='/forgetpassword' ){
      utils.setStore("tempUrl", utils.getStore("tempUrl") )
    }else{
      if( from.path=='/' && from.name != 'home' ){
        utils.setStore("tempUrl", 'session')
      }else {
        utils.setStore("tempUrl", from.fullPath)
      }
      // utils.setStore("tempUrl", from.path)

    }
    // console.log( utils.getStore("tempUrl") )
    // console.log(33333333)
    // next(vm=>{
    //   if( utils.getStore("tempUrl") =='session' ){
    //     window.location.href="http://"+window.location.hostname+"im.html#/session"
    //   }else if(utils.getStore("tempUrl") != 'session' && utils.getStore("tempUrl") != '' && utils.getStore("tempUrl") ){
    //     vm.$router.push(utils.getStore("tempUrl"))
    //   }else{
    //     vm.$router.push('/')
    //   }
    // })
    next()
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
      font-size: 18/@rem;
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
      top: 50%;
      margin-left: -200/@rem;
      margin-top: -22/@rem;
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
      // border-bottom: 1px solid #b2b2b2;
      .icon-close {
        position:absolute;
        top: 0;
        left: 0;
        width: 64/@rem;
        height: 88/@rem;
        background-image:url('/static/images/common/icon_back@3x.png');
        background-repeat: no-repeat;
        background-size: 16/@rem 28/@rem;
        background-position:center center;
      }
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
         .input1 {
           font-size: 32/@rem;
           color: #999;
           padding-left: 66/@rem;
           /*border: 1px solid red;*/
           vertical-align: middle;
         }
         .input1::-webkit-input-placeholder {
           font-size: 32/@rem;
           color: #999;
         }
         .forgetPw {
           font-size: 30/@rem;
           color: #35aeb6;
           position: absolute;
           right: 0;
         }
         .tel1 {}
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
         color: #333;

         width: 658/@rem;
         height: 88/@rem;
         line-height: 88/@rem;
         text-align: center;
         margin: 30/@rem auto 0;
         border-radius: 44/@rem;
         box-sizing: border-box;
         border: 1px solid #d9d9d9;
       }
       .activeState {
        color: #fff;
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
         a {
           color: #0099cc;
           text-decoration: underline;
         }
       }
    }
  }
</style>
