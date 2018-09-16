<template>
  <div class="header-search" id="search">
    <div class="search-header bc line-bottom sear">
      <i class="icon-left" v-on:click = "$router.go(-1)"></i>
      <router-link to="/search" tag="div" class="search-inp">
          <i class="fdj"></i>
          <input type="search" name="search" class="name" autocomplete="off" :placeholder="placeholder"/>
      </router-link>
      <span class="header-contact-customer" @click="isTelShow=!isTelShow"></span>
      <span class="header-nav" @click="isNavShow=!isNavShow"></span>
    </div>
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
import ServicePop from './ServicePop'
import NavList from './NavList'
export default {
  name: 'HeaderSearch',
  components: {NavList,ServicePop},
  props: {
    placeholder: {
      type: String,
      default: '请输入关键字'
    }
  },
  data () {
    return {
      isNavShow: false,
      isTelShow: false
    }
  },
  methods: {
    phoneCall () {
      window.location.href = 'tel:010-53579588'
    },
    closeNav () {
      this.isNavShow = false
    },
    closeTel () {
      this.isTelShow = false;
    },
  }
}
</script>

<style lang="less" scoped>
  @rem: 50rem;
  *{
    box-sizing: border-box;
  }
.header-search{
  z-index:9;
}
</style>
