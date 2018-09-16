<template>
  <div>
    <home-swiper :swiperList="appGet"></home-swiper>
    <!-- <home-swipersub :list="swiperList" :isVr="true">商机</home-swipersub> -->
    <home-swipersub :list="liveVideoList" :isVr="false">商评</home-swipersub>
    <home-guarantee></home-guarantee>
    <home-recommend></home-recommend>
    <floating></floating>
  </div>
</template>

<script>
import HomeSwiper from './components/Swiper'
import HomeSwipersub from './components/Swipersub'
import HomeGuarantee from './components/Guarantee'
import HomeRecommend from './components/Recommend'
import Floating from '@/common/floating/Floating'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeSwiper,
    HomeSwipersub,
    HomeGuarantee,
    HomeRecommend,
    Floating
  },
  data () {
    return {
      swiperList: [],
      paramJson: {
          "params": {
            "info_getNewsHot": {
              "userId": ""
            },
            "banner_appGet": {
              "pid": "0"
            },
            "vod_videoList": {
              "pageNum": "1",
              "sourceType": "0",
              "pageSize": "10"
            },
            "bus_videoList": {
              "pageNum": "1",
              "sourceType": "2",
              "pageSize": "10"
            },
            "brand_list": {
              "pageNum": "1",
              "searchType": "2",
              "type": "1",
              "cityCode": "131",
              "areaGbCode": "131",
              "pageSize": "10"
            },
            "activity_channelList": {
              "pageNum": "1",
              "pageSize": "5"
            },
            "vr_videoList": {
              "pageNum": "1",
              "pageSize": "10"
            },
            "vod_liveVideoList": {
              "pageNum": "1",
              "sourceType": "1",
              "pageSize": "10"
            }
          }
      },
      //banner轮播图
      appGet: [],
      //商评
      liveVideoList: [],
      //推荐
      // brandList: []
    }
  },
  methods: {
    //首页请求
    getHomeData () {
      this.$http.post(this.baseurl+'/home/api', this.paramJson).then(res => {
        if( res.data.code ==200 ){
          var data = res.data.data
          this.appGet = data.appGet
          this.liveVideoList = data.liveVideoList.data
        }
      })
    }
  },
  mounted () {
    this.getHomeData()
  }

}
</script>

<style lang="less" scoped></style>
