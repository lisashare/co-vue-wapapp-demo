<template>
    <div class="header-title">
        <header class="search-header bc line-bottom">
            <i class="icon-left" v-on:click = "$router.go(-1)"></i>
            <h2 class="ellipsis">{{title}}</h2>
            <div @click="bus">
              <span class="header-contact-customer" @click="telShow"></span>
              <span class="header-nav" @click="isNavShow=!isNavShow"></span>
            </div>
        </header>
        <nav-list
            :closeNav="closeNav"
            :isNavShow="isNavShow">
        </nav-list>
        <service-pop
          :closeTel="closeTel"
          :isTelShow="isTelShow"
          :name="name">
        </service-pop>
    </div>
</template>
<script>
import Bus from '@/pages/components/bus.js'
import ServicePop from '@/pages/components/ServicePop'
import NavList from '@/pages/components/NavList'
export default {
  name: 'HeaderTitle',
  components: {NavList,ServicePop},
  props: {
    title: String,
    name:{
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isNavShow: false,
      isTelShow: false,
      message: ''
    }
  },
  methods: {
    bus () {
      // debugger
      Bus.$emit('videoHiden')
    },
    closeNav () {
      this.isNavShow = false
      Bus.$emit('imgHiden')
    },
    closeTel () {
      this.isTelShow = false
      Bus.$emit('imgHiden')
    },
    telShow () {
      this.isTelShow=!this.isTelShow

      if(this.isTelShow){ // 如果isTelShow=true 记录埋点
        window._vds.track("wap_ims",{ "source": this.name + "-电话按钮" });
      }
    }
  }
}
</script>
<style lang="less" scoped>
@rem: 50rem;
*{
    box-sizing: border-box;
}
.header-title{
  z-index:9;
}
</style>
