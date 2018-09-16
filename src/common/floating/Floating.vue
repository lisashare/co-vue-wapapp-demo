<template>
  <div class="floating">
    <img @click="goChat" src="/static/images/home/bt_Consult@3x.png" alt="">
    <!-- <router-link tag="img" to="/chat" src="/static/images/home/bt_Consult@3x.png"></router-link> -->
  </div>
</template>

<script>
import config from '@/modules/http'
import utils from '@/modules/utils'
export default {
  name: 'Floating',
  data () {
    return {
      uid: '',
      mobile: '',
      sdktoken: ''
    }
  },
  methods: {
    getSessionId () {
      let params = {
        'params': {
          'customerIM': this.uid,
          'customerPhone': this.mobile
        }
      }
      this.$http.post(this.baseurl + '/im/getimaccount', params).then(res => {
        if(res.data.code == 200){
          let sessionId = res.data.data
          // utils.setSessionStore('sessionId', sessionId)

          utils.setCookie('sessionId', sessionId)
          // console.log(sessionId)
          // 跳转
          location.href = config.imChat + sessionId
          }
      })
    },
    goChat () {
      this.uid = utils.getCookie('uid')
      this.sdktoken = utils.getCookie('sdktoken')
      this.mobile = utils.getCookie('mobile')
      if (!this.uid && !this.mobile && !this.sdktoken) {
        this.$router.push({name: 'login'})
      } else {
        // location.href="http://localhost:3000/webdemo/h5/index.html#/chat/p2p-9c09d7a4417c406293a115a8e41901c9"
        this.getSessionId()
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @rem: 50rem;
  .floating {
    width: 150/@rem;
    height: 150/@rem;
    position: fixed;
    bottom: 112/@rem;
    right: 18/@rem;
    z-index: 2;
    img {
      width: 150/@rem;
      height: 150/@rem;
    }
  }
</style>
