<template>
    <div class="header-title">
        <header class="search-header bc line-bottom">
            <i class="icon-left" v-on:click = "$router.go(-1)"></i>
            <h2 class="ellipsis">{{title}}</h2>
            <div @click="bus">
              <span class="header-contact-customer" @click="isTelShow=!isTelShow"></span>
              <span class="header-nav" @click="isNavShow=!isNavShow"></span>
            </div>
        </header>
        <nav-list
            :closeNav="closeNav"
            :isNavShow="isNavShow">
        </nav-list>
        <service-pop
          :closeTel="closeTel"
          :isTelShow="isTelShow">
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
  props: ['title'],
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
    phoneCall () {
      window.location.href = 'tel:010-53579588'
    },
    closeNav () {
      this.isNavShow = false
      Bus.$emit('imgHiden')
    },
    closeTel () {
      this.isTelShow = false
      Bus.$emit('imgHiden')
    },
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
