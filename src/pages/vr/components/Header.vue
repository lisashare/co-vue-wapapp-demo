<template>
  <div class="Vr">
    <!-- <div class="vrHeader">
      <span class="arrowLeft-icon" v-on:click = "$router.go(-1)"></span>
      <h1 class="title">VR看店</h1>
      <span class="kefu-icon" @click="isTelShow=!isTelShow"></span>
      <span class="nav-icon" @click="isNavShow=!isNavShow"></span>
    </div>
    <nav-list
        :closeNav="closeNav"
        :isNavShow="isNavShow">
    </nav-list>
    <service-pop
        :closeTel="closeTel"
        :isTelShow="isTelShow">
    </service-pop> -->
    <header-title :title="title"></header-title>
  </div>
</template>

<script>
/*import NavList from '@/pages/components/NavList'
import ServicePop from '@/pages/components/ServicePop'*/
import HeaderTitle from '@/pages/components/HeaderTitle.vue'

export default {
  name: 'VrHeader',
  // props:["title"],
  components: {
    /*NavList,
    ServicePop,*/
    HeaderTitle
  },
  data () {
    return {
      isNavShow: false,
      isTelShow: false,
      title: 'VR看店'
    }
  },
  methods: {
    //客服电话
    phoneCall () {
      window.location.href = 'tel:010-53579588'
    },
    closeNav () {
      this.isNavShow = false;
    },
    closeTel () {
      this.isTelShow = false;
    },
  }
}
</script>

<style lang="less" scoped>
  @rem: 50rem;
  .Vr {
    width: 100%;
    .vrHeader {
      width: 100%;
      font-size: 36/@rem;
      color: #333;
      line-height: 40/@rem;
      text-align: center;
      padding: 22/@rem 0;
      border-bottom:1px solid #ccc;
      background: #fff;
      z-index: 1;
      position: fixed;
      left: 0;
      top: 0;
      h1.title {
        width: 400/@rem;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0 auto;
      }
      .arrowLeft-icon {
        width: 16/@rem;
        height: 30/@rem;
        background-image: url("/static/images/home/icon/icon_back@3x.png");
        background-repeat: no-repeat;
        background-size: 16/@rem 30/@rem;
        position: absolute;
        left: 24/@rem;
      }
      .kefu-icon, .nav-icon {
        display: inline-block;
        background-repeat: no-repeat;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      .kefu-icon {
        width: 34/@rem;
        height: 32/@rem;
        background-image: url('/static/images/common/icon_erji@3x.png');
        background-repeat: no-repeat;
        background-size: 34/@rem 32/@rem;
        right: 118/@rem;
      }
      .nav-icon {
        width: 38/@rem;
        height: 28/@rem;
        background-image: url('/static/images/common/icon_classify@3x.png');
        background-repeat: no-repeat;
        background-size: 38/@rem 28/@rem;
        right: 24/@rem;
      }
    }
  }
</style>
