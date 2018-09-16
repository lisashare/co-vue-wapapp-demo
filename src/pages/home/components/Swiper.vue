<template>
  <div class="bannerBox">
    <!-- 地址、客服、快捷菜单 start-->
    <div class="swiper-header">
      <!-- <router-link to="/city" tag="div" class="areaIcon">
        <span class="position-icon"></span>
        {{this.city}}
      </router-link> -->
      <!-- <div class="kefuIcon" @click="phoneCall"> -->
      <div class="kefuIcon" @click="isTelShow=!isTelShow">
        <span class="kefuBtn-icon"></span>
      </div>
      <div class="nav-icon" @click="isNavShow=!isNavShow">
        <span class="navBtn-icon"></span>
      </div>
    </div>
    <nav-list
        :closeNav="closeNav"
        :isNavShow="isNavShow">
    </nav-list>
    <service-pop
        :closeTel="closeTel"
        :isTelShow="isTelShow">
    </service-pop>
    <!-- 地址、客服、快捷菜单 end-->
    <!-- 搜索框 start-->
    <div class="HomeSearch">
      <router-link to="/homesearchone" tag="div" class="home-input">
         <span class="search-icon"></span>
         请输入关键字
      </router-link>
    </div>
    <!-- 搜索框 end-->
    <!-- banner轮播图 start-->
    <div class="app-banner img-background">
      <swiper :options="swiperOption" ref="mySwiper" v-if="isShow">
        <swiper-slide v-for = "(slide, index) in swiperList" :key = "index">
          <!-- <router-link :to="{name:'branddetail',query:{brandId:slide.attach.brandId}}" tag="img" :src="slide.iconHref" width="100%"></router-link> -->
          <!-- <router-link v-if="slide.optionType =='B' " :to="{name:'branddetail',query:{brandId:slide.attach.brandId}}" tag="img" :src="slide.iconHref" width="100%"></router-link>
          <router-link v-if="slide.optionType =='V' " :to="{name:'videodetail',query:{videoId:slide.attach.videoId}}" tag="img" :src="slide.iconHref" width="100%"></router-link>
          <router-link v-if="slide.optionType =='VR' " :to="{name:'vr'}" tag="img" :src="slide.iconHref" width="100%"></router-link>
          <router-link v-if="slide.optionType =='U' " :to="{name:''}" tag="img" :src="slide.iconHref" width="100%"></router-link> -->
          <img :src="slide.iconHref" width="100%" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- banner轮播图 end-->
    <!-- <div class="HomeSearch">
      <router-link to="/search" tag="div" class="home-input">
         <span class="search-icon"></span>
         请输入关键字
      </router-link>
    </div> -->
  </div>
</template>

<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { mapState, mapMutations } from 'vuex'
import NavList from '@/pages/components/NavList'
import ServicePop from '@/pages/components/ServicePop'
export default {
  name: 'HomeSwiper',
  props: ['swiperList'],
  components: {
    NavList,
    ServicePop
  },
  data () {
    return {
      isNavShow: false,
      isTelShow: false,
      point: {},
      // manual: false,
      // mk: null,
      swiperOption: {
        /* pagination: {
          notNextTick: true,
          el: '.swiper-pagination',
          clickable: true
        }, */
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        loop: true
      }
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
    handleCityClick (city) {
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations (['changeCity']),
    getPosition () {
     var _this = this;
     var geolocation = new BMap.Geolocation();
     geolocation.getCurrentPosition(function(r){
       if(this.getStatus() == BMAP_STATUS_SUCCESS){
         _this.mk = new BMap.Marker(r.point);
         _this.point = r.point;
           // _this.getAddress(r.point);
           _this.$http.post(this.baseurl+'/home/currentarea', {
             "searchType": "1",
             "lat": _this.point.lat,
             "lng": _this.point.lng
           }).then((res) => {
              console.log(res)
            })

         }else {
           alert('failed'+this.getStatus());
         }
     })
   },
    //获取地址信息，设置地址label
    getAddress (point) {
      var _this = this;
      var gc = new BMap.Geocoder();
      gc.getLocation(point, function(rs){
        var addComp = rs.addressComponents;
        var address =  addComp.province +  addComp.city + addComp.district + addComp.street + addComp.streetNumber;//获取地址
        // var address = addComp.city
        // if(!_this.manual){
          _this.handleCityClick( addComp.city )
        // }
        console.log(address);
      });
    }

  },
  computed: {
    isShow () {
      return this.swiperList.length
    },
    ...mapState(['city']),
    ...mapState(['manual'])
  },
  mounted () {
    if(!this.manual){
     // this.getPosition();
    }
  }
}
</script>

<style lang="less" scoped>
  @rem: 50rem;
  //背景图片
  .bannerBox  {
    .nav-list{
      /deep/ .triangle{
        right: 68/@rem; // 首页
      }
      /deep/ nav {
        top: 130/@rem; // 首页
      }
    }
    width: 100%;
    height: 470/@rem;
    position: relative;
    margin-bottom: 90/@rem;
    .swiper-header {
      width: 100%;
      height: 66/@rem;
      line-height: 66/@rem;
      z-index: 10;
      position: absolute;
      top: 50/@rem;
      /*border: 1px solid red;*/
      position: absolute;
      .areaIcon {
        font-size: 24/@rem;
        color: #fff;
        width: 180/@rem;
        height: 66/@rem;
        padding: 0 10/@rem;
        text-indent: 68/@rem;
        border-radius: 33/@rem;
        background: rgba(0,0,0,.7);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        position: absolute;
        left: 48/@rem;
        .position-icon {
          width: 24/@rem;
          height: 28/@rem;
          background-image: url('/static/images/home/icon/icon_zb@3x.png');
          background-repeat: no-repeat;
          background-size: 24/@rem 28/@rem;
          display: inline-block;
          position: absolute;
          left: 36/@rem;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      .kefuIcon {
        width: 66/@rem;
        height: 66/@rem;
        line-height: 66/@rem;
        //margin-right: 48/@rem;
        background: rgba(0,0,0,.7);
        border-radius: 33/@rem;
        position: absolute;
        right: 145/@rem;
        .kefuBtn-icon {
          width: 36/@rem;
          height: 34/@rem;
          background-image: url('/static/images/common/icon_erji_white@3x.png');
          background-repeat: no-repeat;
          //background-size: 36/@rem 34/@rem;
          background-size: 98%;
          display: inline-block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

      }
      .nav-icon {
        width: 66/@rem;
        height: 66/@rem;
        line-height: 66/@rem;
        background: rgba(0,0,0,.7);
        border-radius: 33/@rem;
        display: inline-block;
        position: absolute;
        top: 0;
        right: 48/@rem;
        .navBtn-icon {
          width: 36/@rem;
          height: 30/@rem;
          background-image: url('/static/images/common/icon_fenlei@3x.png');
          background-repeat: no-repeat;
          background-size: 36/@rem 30/@rem;
          display: inline-block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
    .img-background{
        background-image: url('/static/images/home/shouye_banner.png');
        background-size:100% 100%;
        background-position:center center;
        background-repeat:no-repeat;
        overflow: hidden;
    }
    .app-banner{
        width: 100%;
        height: 470/@rem;
        z-index: 1;
        .swiper-container{
            height: 100%;
            img {
              width: 100%;
              height: 470/@rem;
            }
        }
    }
    .HomeSearch {
      width: 100%;
      height: 114/@rem;
      display: flex;
      justify-content: center;
      position: absolute;
      left: 0;
      bottom: -57/@rem;
      z-index: 2;
      background-image: url('/static/images/home/icon/sousuo@3x.png');
      background-repeat: no-repeat;
      background-size: 656/@rem 114/@rem;
      background-position:center top;
      .home-input {
        font-size: 26/@rem;
        color: #999;
        width: 540/@rem;
        height: 88/@rem;
        padding-left: 80/@rem;
        line-height: 88/@rem;
        border-radius: 44/@rem;
        position: relative;
        .search-icon {
          width: 28/@rem;
          height: 34/@rem;
          background-image: url('/static/images/opportunity/icon/icon_search@2x.png');
          background-repeat: no-repeat;
          background-size: 28/@rem 34/@rem;
          position: absolute;
          left: 36/@rem;
          top: 50%;
          transform: translate(0, -50%);
        }
      }
    }
  }

</style>
