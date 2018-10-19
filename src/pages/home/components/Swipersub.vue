<template>
  <div class="Searchsub" v-if="list[0]">
    <div class="title clear"><slot></slot><router-link  class="more" tag="span" to="/shangping">更多<em class="icon-rightarrow"></em></router-link></div>
    <div class="swiper-top">
      <router-link tag="a" :to="{name:'videodetail',query:{videoId:list[0].uuid}}" @click.native="goDetail(list[0].title)">
        <img :src="list[0].hitImage1" />
        <!-- <img v-if="isVr" class="vrImg" src="/static/images/home/icon/icon_VR.png" /> -->
      </router-link>
    </div>
    <div class="swiper-wrap">
      <swiper :options="swiperOption" ref="mySwiper" v-if="isShow">
        <swiper-slide class="swiper" v-for = "(slide, index) in list" :key = "index" v-if="index>0">
              <!-- <router-link :to="{name:'branddetail',query:{brandId:slide.attach.brandId}}" tag="img" :src="slide.cover" width="100%"></router-link> -->
              <router-link
                  tag="img"
                  v-if="slide.hitImage2"
                  :src="slide.hitImage2"
                  width="100%"
                  :to="{name:'videodetail',query:{videoId:slide.uuid}}"
                  @click.native="goDetail(slide.title)">
               </router-link>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
export default {
  name: 'HomeSwipersub',
  props: ['isVr', 'list'],
  data () {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 10,
        /* pagination: {
          notNextTick: true,
          el: '.swiper-pagination',
          clickable: true
        }, */
        /*autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },*/
        // loop: true
      }
    }
  },
  computed: {
    isShow () {
      return this.list.length
    }
  },
  methods:{
    goDetail (title) {
      window._vds.track("wap_review_list",{ "shangping": title,"act_source": "首页-商评"});
    }
  }
}
</script>

<style lang="less" scoped>
  @rem: 50rem;
  .Searchsub {
    padding-left:48/@rem;
    margin: 30/@rem auto 80/@rem;
    .title {
      font-size: 40/@rem;
      color: #333;
      width: 100%;
      line-height: 48/@rem;
      margin-bottom: 40/@rem;
      position: relative;
      span.more {
        font-size: 26/@rem;
        color: #999;
        float: right;
        width: 125/@rem;
        padding-right: 48/@rem;
        position: absolute;
        right: 0;
        .icon-rightarrow {
          width: 10/@rem;
          height: 16/@rem;
          background-image: url("/static/images/home/icon/icon_arrow_more@3x.png");
          background-repeat: no-repeat;
          background-size: 10/@rem 16/@rem;
          position: absolute;
          right: 48/@rem;
          top: 14/@rem;
        }

      }
    }
    .swiper-top {
      width: 654/@rem;
      height: 190/@rem;
      margin-bottom: 20/@rem;
      position: relative;
      img {
        width: 654/@rem;
        height: 190/@rem;
      }
      .vrImg {
        width: 58/@rem;
        height: 58/@rem;
        position: absolute;
        right: 28/@rem;
        bottom: 20/@rem;
      }
    }
    .swiper-wrap {
      .swiper-container {
        padding-right: 40/@rem;
      }
      .swiper-slide {
        width: 316/@rem;
        height: 178/@rem;
        img {
          width: 316/@rem;
          height: 178/@rem;
          border-radius: 10/@rem;
          overflow: hidden;
        }
      }
    }
  }
</style>
