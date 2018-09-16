<template>
  <div class="Search">
    <div>
      <span class="icon-back" @click="$router.go(-1)"></span>
      <div class="input-search">
        <span class="icon-search"></span>
        <input class="txt" type="text" placeholder="请输入城市名" @click="toSearchCity" />
      </div>
      <span class="kefuBtn-icon"  @click="isTelShow=!isTelShow"></span>
      <span class="icon-nav" @click="isNavShow=!isNavShow"></span>
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
import NavList from '@/pages/components/NavList'
import ServicePop from '@/pages/components/ServicePop'
export default {
  name: 'CitySearch',
  components:{
    NavList,
    ServicePop
  },
  data () {
    return {
      isNavShow: false,
      isTelShow: false
    }
  },
  methods: {
    toSearchCity () {
      this.$router.push('/searchcity')
    },
    //客服电话
    phoneCall () {
      window.location.href = 'tel:010-53579588'
    },
    closeNav () {
      this.isNavShow = false;
    },
    closeTel () {
      this.isTelShow = false;
    }
  }
}
</script>

<style lang="less" scoped>
  @rem: 50rem;
  .Search {
    height: 88/@rem;
    padding: 16/@rem 24/@rem;
    border-bottom: 1px solid #d5d5d5;

    box-sizing: border-box;
    position: relative;
    z-index: 11;
    .icon-back {
        width: 30/@rem;
        height: 30/@rem;
        background-image: url("/static/images/home/icon/icon_arrow_left.png");
        background-repeat: no-repeat;
        background-size: 24/@rem 24/@rem;
        position: absolute;
        left: 24/@rem;
        top: 30/@rem;
    }
    .input-search {
      width: 500/@rem;
      height: 56/@rem;
      margin-left: 46/@rem;
      border-radius: 28/@rem;
      background: #eff3f7;
      position: relative;
      .icon-search {
        width: 28/@rem;
        height: 32/@rem;
        background-image: url("/static/images/home/icon/icon_search@2x.png");
        background-repeat: no-repeat;
        background-size: 28/@rem 32/@rem;
        position: absolute;
        left: 16/@rem;
        top: 12/@rem;
      }
      .txt {
        font-size: 26/@rem;
        color: #666;
        width: 396/@rem;
        height: 56/@rem;
        padding-left: 52/@rem;
        padding-right: 52/@rem;
        border-radius: 28/@rem;
        background: none;
        /*border: 1px solid red;*/
      }
    }
    .kefuBtn-icon {
      width: 36/@rem;
      height: 34/@rem;
      background-image: url('/static/images/opportunity/icon/icon_tel.png');
      background-repeat: no-repeat;
      background-size: 36/@rem 34/@rem;
      display: inline-block;
      position: absolute;
      top: 27/@rem;
      right: 104/@rem;
    }
    .icon-nav {
      width: 36/@rem;
      height: 34/@rem;
      background-image: url('/static/images/home/icon/icon-nav.png');
      background-repeat: no-repeat;
      background-size: 36/@rem 34/@rem;
      display: inline-block;
      position: absolute;
      top: 28/@rem;
      right: 24/@rem;
    }
  }
</style>
