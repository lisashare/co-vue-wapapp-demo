<template>
  <div class="videoBody" v-if="listVideo">
    <div class="videoC">
      <video id="video1" :poster="listVideo.cover||'/static/images/background_img/active.png'" :controls="controlshow" v-if="videoShow">
        <!-- <source :src="list.hdUrl" type="video/mp4" /> -->
        <source :src="listVideo.hdUrl" type="video/mp4" />
      </video>
      <!-- 播放按钮 -->
      <div class="videoIcon" v-if="videoIconshow" v-on:click="playClick()">
        <img width="100%" src="/static/images/opportunity/branddetail/bofang.png" alt="">
      </div>
      <!-- 封皮图片 -->
      <div class="imgbox" v-if="imgShow"><img :src="listVideo.cover||'/static/images/background_img/active.png'"></div>
    </div>
  </div>
</template>
<script>
import Bus from '@/pages/components/bus.js'
export default {
  name: 'VideoPlay',
  props: ['listVideo'],
  data () {
    return {
      videoShow:true,//视频默认显示
      imgShow:false,//封皮默认不显示
      videoIconshow:false,
      controlshow:"controls",
      isPlay:false,
      message:  ''
    }
  },
  mounted() {
　let self = this
   Bus.$on('videoHiden', (e) => {
     self.videoHiden()
   })
   Bus.$on('imgHiden', (e) => {
     self.imgHiden()
   })
 },
  methods:{
    // 点击隐藏视频显示封皮
    videoHiden(){
      this.videoShow=false
      this.imgShow=true
      // 安卓显示播放按钮
      let ua = navigator.userAgent.toLowerCase();
      if(ua.match(/Android/i) == "android") {
        // 安卓
        console.log("安卓")
        this.videoIconshow=true //显示播放按钮
      }
    },
    // 点击隐藏视频显示封皮
    imgHiden(){
      this.videoShow=true
      this.imgShow=false
      // 安卓显示播放按钮
      let ua = navigator.userAgent.toLowerCase();
      if(ua.match(/Android/i) == "android") {
        // 安卓
        console.log("安卓")
        this.videoIconshow=true //显示播放按钮
      }
    },
    videobtnshow(){
      //判断安卓还是ios播放按钮是否展示
      let ua = navigator.userAgent.toLowerCase();
      if (ua.match(/iPhone\sOS/i) == "iphone os") {
          // ios
          console.log("ios")
          //不显示播放按钮,显示controls

      } else if(ua.match(/Android/i) == "android") {
          // 安卓
          console.log("安卓")
          this.videoIconshow=true //显示播放按钮
          this.controlshow=false //不显示controls
      }
    },
    playClick() {
    // 点击播放
        this._dom = document.getElementById('video1');
        this.isPlay = !this.isPlay;
        this._dom.play();
        this.videoIconshow=false //不显示播放按钮
    }
  },
  created(){
    this.videobtnshow();
  }
}
</script>

<style lang="less" scoped>
@rem: 50rem;
.videoBody {
  width: 100%;
  background: #fff;
  margin-bottom: 14/@rem;
  position: fixed;
  z-index: 8;
  .videoC {
    position: relative;
    height: 420/@rem;
    z-index: 1;
    #video1 {
      width: 100%;
      height:420/@rem;
    }
    .videoIcon{
      position: absolute;
      left: 50%;
      top: 50%;
      width:128/@rem;
      height:128/@rem;
      margin-left:-64/@rem;
      margin-top:-64/@rem;
      z-index:3
    }
  }
  .des {
    padding:0 25/@rem;
    border-bottom: 1px solid #dae0e6;
    .title {
    font-size: 32/@rem;
    color: #333;
    height: 50/@rem;
    margin-top: 30/@rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    background: #fff;
    }
    .share {
    position: relative;
    .playCount {
      font-size: 26/@rem;
      color: #999;
      height: 66/@rem;
      line-height: 66/@rem;
      margin-top: 18/@rem;
    }
    .commentNum {
      position: absolute;
      right:0;
      top: 15/@rem;
    }
    }
  }
}
.hide{display:none;}
.imgbox{width:100%;height: 420/@rem;position: relative;z-index: 2;}
.imgbox img{width:100%;height:100%;}
</style>
