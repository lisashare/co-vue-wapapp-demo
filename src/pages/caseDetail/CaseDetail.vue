<template>
    <div id="CaseDetail" class="page-top">
      <!-- 头部title start -->
      <header-title :title="title"></header-title>
      <!-- loading -->
      <div v-show="loading" class="loading-animation">
          <div class="loading-img loading-logo">
              <img width="100%" src="/static/images/common/logo.png" alt="">
          </div>
          <div class="loading-img loading-circle Rotation">
              <img width="100%" src="/static/images/common/circle.png" alt="">
          </div>
          <p>正在加载...</p>
      </div>
      <div v-show="!loading">
        <!-- 视频 -->
      	<video-play :listVideo="listVideo" v-if="listVideo" ></video-play>
  		  <div class="content ub-fv">
          <!-- 视频播放次数 -->
          <!-- <CaseVideo :video-obj="obj" :video-id="videoid"></CaseVideo> -->
          <div class="CaseVideo">
            <div class="videoName">{{videoTitle}}</div>
            <div class="videoNum">
              <p class="playCount">播放<em class="ulev0 cishu">{{likeNum}}</em>次</p>
              <!-- <p class="like"><i class="fa fa-thumbs-o-up"></i><span>{{supportTotal}}</span></p>
              <p class="shoucang" @click="collectFn"><i class="shoucang-icon" :class="{'shoucang-icon-hover':collection}"></i>收藏</p> -->
              <div class="likeWrap">
                <p class="likeWrapInner" v-if="likeNumber!==''">
                  <pro-manage
                    :commentsNum="0"
                    :hasComment="false"
                    :busId="infoId"
                    :supportStatus="likes"
                    :supportTotal="likeNumber"
                    :isCollect="collFlag"
                    :title="videoTitle"
                  ></pro-manage>
                </p>
              </div>
            </div>
            <div class="masks"></div>
          </div>
          <!-- 视频系列 -->
          <div class="video" v-if="seriesInfoshow">
              <h2><span class="seriesName">{{seriesName}}</span><span class="seriesSum">共<em>{{seriesSum}}</em>集</span></h2>
              <series-video v-if="seriesId" :seriesId="seriesId" :seriesNum="seriesNum" :swiper = "seriesInfo"></series-video>
              <div class="masks"></div>
          </div>
          <!-- 内容推荐 -->
          <div class="video" v-if="typeInfoshow">
              <h2>内容推荐</h2>
              <recommend-video v-if="typeInfo" :swiper = "typeInfo"></recommend-video>
              <div class="masks"></div>
          </div>
          <!-- 评论跟帖 -->
          <!-- <video-comment v-if="caseComment" :case-comment="caseComment"></video-comment> -->
      		<case-comment :totalNum="totalNum"></case-comment>
          <floating></floating>
      	</div>
      </div>
    </div>
</template>
<script>
//点赞、收藏
import ProManage from '@/common/proManage/ProManage'

//tip
import Vue from 'vue'
import utils from '@/modules/utils.js'

import Floating from '@/common/floating/Floating'

import HeaderTitle from './components/Header.vue'
import VideoPlay from './components/Play'

import SeriesVideo from './SeriesVideo'
import RecommendVideo from './RecommendVideo'
import CaseComment from './CaseComment'



export default {
  name: 'CaseDetail',
  components: {HeaderTitle,RecommendVideo,SeriesVideo,CaseComment,VideoPlay,Floating,ProManage},
  data () {
    return {
      collection: false, //收藏
      seriesInfoshow:true,
      typeInfoshow:true,
      title: '',
      loading: true,
      infoId: '',
      videoId: '',
      typeInfo:[],
      seriesInfo:"",
      seriesName:"",
      caseComment: '',
      listVideo:'',
      obj:{},
      videoTitle:"",
      likeNum:"",
      supportTotal:"",
      seriesSum:"",
      totalNum:"" ,
      seriesId:"",
      seriesNum:"",
      collFlag: "",
      //likes: "",
      likeNumber:""
    }
  },
  methods: {
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
    getInfoIdDetail () {
      let {infoId} = this
      let params = {
        'params': {
          'informationId': infoId
        }
      }
      this.$http.post(this.baseurl + '/discovery/detail', params).then((res) => {
        // console.log(res.data.data[0])
        console.log(res)
        this.obj = res.data.data[0].vodEntity
        this.listVideo = res.data.data[0].vodEntity
        this.seriesInfo = res.data.data[0].seriesResp
        this.typeInfo = res.data.data[0].typeRecResp
        this.seriesName = res.data.data[0].seriesName
        this.caseComment=res.data.data[0].commentEntity
        this.infoId=res.data.data[0].infoId
        this.videoTitle = res.data.data[0].title
        this.videoid = res.data.data[0].videoId
        this.supportTotal = res.data.data[0].vodEntity.supportTotal
        this.seriesSum = res.data.data[0].seriesNum
        this.title = res.data.data[0].title
        this.totalNum = res.data.data[0].commentEntity.total
        this.loading = false
        this.seriesId = res.data.data[0].seriesId
        this.seriesNum = res.data.data[0].seriesNum
        this.collFlag = res.data.data[0].collFlag
        this.likes = res.data.data[0].likes
        this.likeNumber = res.data.data[0].likeNum



        if(!this.seriesInfo){
          this.seriesInfoshow = false
        }
        if(!this.typeInfo){
          this.typeInfoshow = false
        }
        let params1 ={
          "params": {
            "videoId": this.videoid
          }
        }
        this.$http.post(this.baseurl + '/discovery/vodplaytimes', params1).then((res) => {
          // console.log(res)
          this.likeNum=res.data.data.num
          // console.log(this.likeNum)
        })

      })
    },
    // getcasevideo () {
    //   let {videoId} = this
    //   let params ={
    //     "params": {
    //       "videoId": videoId
    //     }
    //   }
    //   this.$http.post(this.baseurl + '/discovery/vodplaytimes', params).then((res) => {
    //     // console.log(res)
    //     this.likeNum=res.data.data.num
    //     // console.log(this.likeNum)
    //   })
    // }

  },
  created () {
    this.infoId = this.$route.query.infoId
    this.videoId = this.$route.query.videoId
    this.getInfoIdDetail()
    // this.getcasevideo()
    // console.log(this.infoId)
    // console.log(this.videoId)
  },
  updated() {
    window.scroll(0, 0);
  }
}

</script>
<style lang="less" scoped>
@rem: 50rem;
.video,.videoName,.videoNum,.like{
  box-sizing: content-box;
}
/* 品牌视频 */
.video h2 {
    font-weight: bold;
    font-size: 35/@rem;
    height: 35/@rem;
    text-align: center;
    padding-top:35/@rem;
    border-left-color:#5ab379;
    position:relative;
    box-sizing: content-box;
}
.masks {
  height: 14/@rem;
  width: 100%;
  background: #eff3f7;
  border-top: 1px solid #dae0e6;
  border-bottom: 1px solid #dae0e6;
}
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
.likeWrap {
  float: right;
  .likeWrapInner {
    width: 375/@rem;;
    height: 40/@rem;
    //border: 1px solid red;
    position: relative;
  }
  .likeWrapInner /deep/ .proManage {
    height: 40/@rem;
    line-height: 40/@rem;
  }
}
.shoucang {
  float:right;
  font-size:30/@rem;
  color:#999;
  margin-right: 24/@rem;
  .shoucang-icon {
    width: 25/@rem;
    height: 24/@rem;
    background-image: url('/static/images/common/icon_soucang@3x.png');
    background-repeat: no-repeat;
    background-size: 25/@rem 24/@rem;
    display: inline-block;
    margin-right: 10/@rem;
    position: relative;
    top: 3/@rem;
  }
  .shoucang-icon-hover {
    background-image: url('/static/images/common/icon_shoucang_hover@3x.png');
  }
}
.like{float:right;font-size:30/@rem;color:#999;}
.like span{padding-left:10/@rem;}
.seriesSum{
  color: #35aeb6;
  font-size:24/@rem;
  right:20/@rem;
  font-weight: normal;
  position: absolute;
  top:35/@rem;
}
.loading-animation{
    margin: 40% auto;
}
.seriesName{
  width: 70%;
  margin: 0 auto;
  overflow: hidden;
  display: block;
  white-space: nowrap;
  word-break: keep-all;
  text-overflow: ellipsis;
}
.content{
  padding-top:420/@rem;
}
</style>
