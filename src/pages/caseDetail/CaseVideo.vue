<template>
    <div class="CaseVideo">
        <div class="videoName">{{videoObj.title}}</div>
        <div class="videoNum">
          <p class="playCount">播放<em class="ulev0 cishu">{{likeNum}}</em>次</p>
          <p class="like"><i class="fa fa-thumbs-o-up"></i><span>{{videoObj.supportTotal}}</span></p>
        </div>
        <div class="masks"></div>

    </div>
</template>

<script>
export default {
  name: 'CaseVideo',
  props: {
    videoObj: {
      type: Object,
      default: function () {
        return {
          title: ''
        }
      }
    },
    videoId: {
      type: String,
      default: function () {
        return ""
      }
    }
  },
  data() {
    return {
      // id: this.videoId,
      likeNum:""
    }
  },
  methods: {
    getcasevideo () {      
      let {videoId} = this
      console.log(this)
      let params ={
        "params": {
          "videoId": videoId
        }
      }
      this.$http.post(this.baseurl + '/discovery/vodplaytimes', params).then((res) => {
        console.log(res)
        this.likeNum=res.data.data.num
      })
    }
  },
  created () { 
    this.getcasevideo()
    console.log(this.videoId)
  }
}
</script>
<style lang="less" scoped>
@rem: 50rem;
.hide{display:none;}
.videobox{height: 420/@rem;}
.videobox video{width:100%;height:100%;}
.videobox img{max-width:100%;}
.videoName {
  font-size: 32/@rem;
  color: #333;
  padding: 22/@rem 24/@rem 28/@rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  background: #fff;
}
.videoNum {
  clear: both;
  height: 24/@rem;
  padding: 0 24/@rem 30/@rem;
  background: #fff;
}
.playCount {
  color: #999;
  float: left;
  font-size: 28/@rem;
}
.masks {
  height: 14/@rem;
  width: 100%;
  background: #eff3f7;
  border-top: 1px solid #dae0e6;
  border-bottom: 1px solid #dae0e6;
}
.like{float:right;font-size:30/@rem;color:#999;}
.like span{padding-left:10/@rem;}
</style>
