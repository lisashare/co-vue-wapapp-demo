<template>
  <div class="login">
    <div class="toast-tip" v-show="toastTip">
      {{errorMsg}}
    </div>
    <div class="header line-bottom">
      <span class="icon-back" @click="$router.go(-1)"></span>
      忘记密码
    </div>
    <div class="form-frame">
      <div class="from-input">
        <input class="input1 tel1" type="tel" placeholder="手机号" v-model="mobile" />
        <span class="icon-tel iconImg"><img src="/static/images/home/icon/icon_phone@3x.png" /></span>
      </div>
      <div class="from-input">
        <input  class="input1 password1" type="text" placeholder="验证码" v-model="code" />
        <span class="icon-code iconImg"><img src="/static/images/home/icon/icon_acthcode@3x.png" /></span>
        <span class="getcode" @click="countDown">{{text}}</span>
      </div>
      <div class="from-input">
        <input class="input1 tel1" type="password" placeholder="新密码（至少6位）" v-model="password" />
        <span class="icon-tel iconImg"><img src="/static/images/home/icon/icon_lockclose@3x.png" /></span>
      </div>
      <div class="btnRegister" @click="findPwd">提交</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      mobile: '',
      code: '',
      password: '',
      errorMsg: '',
      times: '获取验证码',
      timer: null,
      onOff: null,
      toastTip: false
    }
  },
  computed: {
    text () {
      return this.times > 0 ? this.times + 's' : '获取验证码'
    }
  },
  methods: {
    // 倒计时
    countDown () {
      if (this.validMobile()) {
        this.sendCode()
        console.log(222)
        if (this.onOff) {
          this.onOff = false
          /*const TIME_COUNT = 60
          clearInterval(this.timer)
          this.times = TIME_COUNT
          var that = this

          this.timer = setInterval(function () {
            that.times--
            // console.log( that.text )
            console.log(33333)
            if (that.times <= 0) {
              clearInterval(that.timer)
              that.timer = null
              that.times = '获取验证码'
              that.onOff = true
            }
          }, 1000)*/
        }
      }
    },
    // 手机号验证
    validMobile () {
      if (this.mobile == '' || this.mobile.length != 11) {
        this.tipShow('请输入正确的手机号')
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
    // toast提示
    tipShow (tipmsg) {
      this.errorMsg = tipmsg
      this.toastTip = true
      var _this = this
      setTimeout(function () {
        _this.toastTip = false
        return false
      }, 1000)
    },
    // 发送验证码
    sendCode () {
      this.onOff = true
      console.log(1)
      var _this = this
      this.$http.post(this.baseurl+'/sms/resetpassword/code', {
        'mobile': this.mobile
      }).then((res) => {
        console.log(res)
        _this.onOff = true

        const TIME_COUNT = 60
        clearInterval(this.timer)
        this.times = TIME_COUNT
        var that = this

        this.timer = setInterval(function () {
          that.times--
          // console.log( that.text )
          console.log(33333)
          if (that.times <= 0) {
            clearInterval(that.timer)
            that.timer = null
            that.times = '获取验证码'
            that.onOff = true
          }
        }, 2000)

      }).catch((e) => {
        console.log(e)
        if (e.response) {
          console.log(e.response.data.message)
          this.tipShow(e.response.data.message)
          this.onOff = false
        }
      })
    },
    // 密码找回
    findPwd () {
      if (this.validMobile() && this.validCode() && this.validPassword()) {
        this.$http.post(this.baseurl+'/password/reset', {
          'mobile': this.mobile,
          'code': this.code,
          'password': this.password
        }).then((res) => {
          console.log(res)
          // this.tipShow('修改成功')
          this.$router.push('/login')
        }).catch((e) => {
          console.log(e)
          if (e.response) {
            console.log(e.response.data.message)
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
      bottom: -20%;
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
      // border-bottom: 1px solid #b2b2b2;
      .icon-back {
        position:absolute;
        top: 0;
        left: 0;
        width: 64/@rem;
        height: 88/@rem;
        background-image:url('/static/images/common/icon_back@3x.png');
        background-size: 16/@rem 28/@rem;
        background-position:center center;
        background-repeat: no-repeat;
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
           top: 0/@rem;
         }
         .icon-tel, .icon-passw {
           width: 36/@rem;
           height: 36/@rem;
           padding-left: 10/@rem;
           img {
             width: 36/@rem;
             height: 36/@rem;
           }
         }
         .icon-code {
           width: 42/@rem;
           height: 36/@rem;
           padding-left: 10/@rem;
           img {
             width: 42/@rem;
             height: 36/@rem;
           }
         }
         .input1 {
           font-size: 32/@rem;
           color: #999;
           padding-left: 66/@rem;
           /*border: 1px solid red;*/
         }
         .input1::-webkit-input-placeholder {
           font-size: 32/@rem;
           color: #999;
         }
         .getcode {
           font-size: 30/@rem;
           color: #35aeb6;
           width: 200/@rem;
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
         height: 88/@rem;
         line-height: 88/@rem;
         padding-left: 50/@rem;
         position: relative;
         .icon-agreement {
           width: 24/@rem;
           height: 24/@rem;
           position: absolute;
           left: 10/@rem;;
           img {
             width: 24/@rem;
             height: 24/@rem;
           }
         }
         a {
           color: #0099cc;
         }
       }
    }
  }
</style>
