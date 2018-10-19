<template>
    <div class="header-title">
        <header class="search-header bc line-bottom">
            <i class="icon-left" v-on:click = "$router.go(-1)"></i>
            <h2 class="ellipsis">{{title}}</h2>
            <span class="header-contact-customer" @click="telShow"></span>
            <span class="header-nav" @click="isNavShow=!isNavShow"></span>
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
import ServicePop from './ServicePop'
import NavList from './NavList'
export default {
  name: 'HeaderTitle',
  components: {NavList,ServicePop},
  props: {
    title: String,
    name:{
      type: String,
      default: ''
    },
  },
  data () {
    return {
      isNavShow: false,
      isTelShow: false,
    }
  },
  methods: {
    closeNav () {
      this.isNavShow = false
    },
    closeTel () {
      this.isTelShow = false;
    },
    telShow () {
      this.isTelShow = !this.isTelShow

      if(this.isTelShow && this.name){ // 如果isTelShow=true 记录埋点
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
