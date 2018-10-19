<template>
  <div class="floating">
    <img @click="goChat" src="/static/images/home/bt_Consult@3x.png" alt="">
  </div>
</template>

<script>
import config from '@/modules/http'
import utils from '@/modules/utils'
export default {
  name: 'Floating',
  props: {
    name:{
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      uid: '',
      mobile: '',
      sdktoken: '',
      
      // name: ''
    }
  },
  // created () {
  //   // 进入页面，获取this.$route.name数据
  //   var name = this.$route.name
  //   switch(name){
  //     case 'home' : this.name = '首页';console.log(this.name);break;
  //     case 'shangping' : this.name = '商评列表页';console.log(this.name);break;
  //     case 'videodetail' : this.name = '商评详情页';console.log(this.name);break;
  //     case 'vr' : this.name = 'VR列表';console.log(this.name);break;    
  //     case 'opportunity' : this.name = '商机列表';console.log(this.name);break;     
  //   }
  // },
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
      .catch((error) => {   // 登录被踢，返回401清除cookie跳转登录
          if(error.response.status == 401){
              utils.clearCookie()
              this.$router.push({name:'login'})       
          }
      })
    },
    goChat () {
      if(this.name == '商评详情页'){  // 埋点
        window._vds.track("wap_floats",{ "act_source": this.name ,"consult_detail_name": this.title });        
      }else if(this.name){
        window._vds.track("wap_floats",{ "act_source": this.name });
      }
      
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
