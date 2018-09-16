<template>
    <div class="app-banner img-background">
        <swiper :options="swiperOption" ref="mySwiper" v-if="isShow">
        <swiper-slide v-for = "(slide, index) in banners" :key = "index">
            <!-- <router-link :to="{name:'branddetail',query:{brandId:slide.attach.brandId}}" tag="img":src="slide.iconHref" width="100%"></router-link> -->
            <!-- <img @click="setTitle(slide.title,slide.attach.brandId)" :src="slide.iconHref" width="100%" /> -->
            <img :src="slide.iconHref" width="100%" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>
<script>
import utils from '@/modules/utils.js'
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../../../static/swiper/swiper.css'
// （如果你使用的是2.6.0以上的版本要自己手动去加载css）
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'AppBanner',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      isShow: false,
      swiperOption: {
        pagination: {
          notNextTick: true,
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        loop: true
      },
      banners: []
    }
  },
  methods: {
    getBanner () {
      let params = {
        'apiUrl': this.weburl + 'mobile/banner/get',
        'params': {pid: 5}
      }
      this.$http.post(this.baseurl + '/brand/api', params).then(res => {
        // console.log(res.data.data)
        let data = res.data.data
        if (res.data && data) {
          this.isShow = true
          this.banners = res.data.data
        }
      })
    },
    setTitle (title, id) {
      utils.setSessionStore('brandtitle', title)
      this.$router.push({name: 'branddetail', query: {brandId: id}})
    }
  },
  created () {
    this.getBanner()
  }
}
</script>
<style lang="less" scoped>
@rem: 50rem;
//背景图片
.img-background{
    background-image: url(/static/images/background_img/brand_top_banner.png);
    background-size:100% 420/@rem;
    background-position:center center;
    background-repeat:no-repeat;
    overflow: hidden;
}
.app-banner{
    width: 100%;
    height: 320/@rem;
    .swiper-container{
        height: 100%;
    }
}
</style>
