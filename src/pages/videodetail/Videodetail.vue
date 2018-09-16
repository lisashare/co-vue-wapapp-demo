<template>
  <div class="wrap page-top">
    <video-header :title="videoTitle"></video-header>
    <div v-if="loading" class="loading-animation">
      <div class="loading-img loading-logo">
          <img width="100%" src="/static/images/common/logo.png" alt="">
      </div>
      <div class="loading-img loading-circle Rotation">
          <img width="100%" src="/static/images/common/circle.png" alt="">
      </div>
      <p>正在加载...</p>
    </div>
    <div v-else>
      <video-play :list="list" :listVideo="listVideo" ></video-play>
      <video-comment></video-comment>
    </div>
  <floating></floating>
  </div>
</template>

<script>
import utils from '@/modules/utils.js'

import VideoHeader from './components/Header'
import VideoPlay from './components/Play'
import VideoComment from './components/Comment'
import Floating from '@/common/floating/Floating'
export default {
  name: 'VideoDetail',
  components: {
    VideoPlay,
    VideoComment,
    VideoHeader,
    Floating
  },
  data () {
    return {
      list: {},
      listVideo: '',
      videoTitle: '',
      loading: true,
    }
  },
  methods: {
    getVideoDetailData () {
      this.$http.post(this.baseurl+'/home/voddetail', {
        "uuid": this.$route.query.videoId,
        "params": {
          "pageNum": "1",
          "pageSize": "1",
          "sourceType": "2"
        }
      }).then((res)=>{
        if (res.data.code == 200) {
          this.loading = false
          this.list = res.data.data
          this.listVideo = res.data.data.hdUrl
          this.videoTitle = res.data.data.title
        }
        console.log(this.videoTitle)
      })
    }
  },
  mounted () {
    this.getVideoDetailData()
    console.log(this.listVideo)
  },
  updated() {
    window.scroll(0, 0);
  }
}
</script>

<style lang="less" scoped>
  .loading-animation{
    margin: 40% auto;
  }
</style>
