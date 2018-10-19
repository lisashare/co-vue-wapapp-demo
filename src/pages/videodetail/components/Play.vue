<template>
  <div class="videoBody" v-if="listVideo">
    <div class="videoC">
      <video id="video1" :poster="list.cover||'/static/images/background_img/active.png'" :controls="controlshow" v-if="videoShow">
        <!-- <source :src="list.hdUrl" type="video/mp4" /> -->
        <source :src="listVideo" type="video/mp4" />
      </video>
      <!-- 播放按钮 -->
      <div class="videoIcon" v-show="videoIconshow" v-on:click="playClick()">
        <img width="100%" src="/static/images/opportunity/branddetail/bofang.png" alt="">
      </div>
      <!-- 封皮图片 -->
      <div class="imgbox" v-if="imgShow"><img :src="list.cover||'/static/images/background_img/active.png'"></div>
    </div>

    <div class="des">
      <!-- <div class="shoucang" @click="collectFn"><span class="shoucang-icon" :class="{'shoucang-icon-hover':collection}"></span>收藏</div> -->
      <div class="shoucang">
        <pro-manage
          :commentsNum="0"
          :hasComment="false"
          :busId="list.uuid"
          :supportStatus="list.supportStatus"
          :supportTotal="list.supportTotal"
          :isCollect="list.isCollect"
          :title="list.title"
        ></pro-manage>
      </div>
      <p class="title">{{list.title}}</p>
      <!-- <div class="share">
        <p class="playCount">播放<em>55</em>次</p>
        <p class="commentNum"><span class="iconfont"></span><em>{{list.commentsNum}}</em></p>
      </div> -->
    </div>
  </div>
</template>
<script>
import ProManage from '@/common/proManage/ProManage'
import Bus from '@/pages/components/bus.js'
//tip
import Vue from 'vue'
import utils from '@/modules/utils.js'

export default {
  name: 'VideoPlay',
  props: ['list', 'videoId','listVideo'],
  components: {
    ProManage
  },
  data () {
    return {
      collection: false, //收藏
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
    //收藏
    collectFn () {
      this.collection = !this.collection;
      if(this.collection){
        console.log('收藏成功');
        utils.mobileTip({
            "obj":Vue,
            "content":"收藏成功"
        })
      }else{
        utils.mobileTip({
            "obj":Vue,
            "content":"取消收藏"
        })
      }
    },
    // 点击隐藏视频显示封皮
    videoHiden(){
      this.videoShow=false
      this.imgShow=true
      // 安卓显示播放按钮
      let ua = navigator.userAgent.toLowerCase();
      if(ua.match(/Android/i) == "android") {
        // 安卓
        // console.log("安卓")
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
        // console.log("安卓")
        this.videoIconshow=true //显示播放按钮
      }
    },
    videobtnshow(){
      //判断安卓还是ios播放按钮是否展示
      let ua = navigator.userAgent.toLowerCase();
      if (ua.match(/iPhone\sOS/i) == "iphone os") {
          // ios
          // console.log("ios")
          //不显示播放按钮,显示controls

      } else if(ua.match(/Android/i) == "android") {
          // 安卓
          // console.log("安卓")
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
    //console.log(this.list)
  }
}
</script>

<style lang="less" scoped>
   @rem: 50rem;
   .videoBody {
      width: 100%;
      background: #fff;
      margin-bottom: 14/@rem;
     .videoC {
      width: 100%;
      position: fixed;
      z-index: 8;
      height: 420/@rem;
      width: 100%;
      #video1 {
        width: 100%;
        height:420/@rem;
        background: #fff;
      }
      .videoIcon{
        position: absolute;
        left: 50%;
        top: 50%;
        width:128/@rem;
        height:128/@rem;
        margin-left:-64/@rem;
        margin-top:-64/@rem;
      }
     }
     .des {
       padding:420/@rem 25/@rem 0;
       border-bottom: 1px solid #dae0e6;
       .shoucang {
         position: relative;
         height: 36/@rem;
         margin-top: 14/@rem;
         //font-size: 24/@rem;
         //text-align: right;
         //margin-right: 24/@rem;
         //margin-top: 30/@rem;
         //.shoucang-icon {
         //  width: 25/@rem;
         //  height: 24/@rem;
         //  background-image: url('/static/images/common/icon_soucang@3x.png');
         //  background-repeat: no-repeat;
         //  background-size: 25/@rem 24/@rem;
         //  display: inline-block;
         //  margin-right: 10/@rem;
         //  position: relative;
         //  top: 3/@rem;
         //}
         //.shoucang-icon-hover {
         //  background-image: url('/static/images/common/icon_shoucang_hover@3x.png');
         //}
       }
       .shoucang /deep/ .proManage {
        height: 36/@rem;
        line-height: 36/@rem;
       }
       .title {
         font-size: 32/@rem;
         color: #333;
         height: 60/@rem;
         //margin-top: 30/@rem;
         margin-top: 10/@rem;
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
.imgbox{width:100%;height: 420/@rem;}
.imgbox img{width:100%;height:100%;}
</style>
