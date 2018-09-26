<template>
  <div class="proManage">
     <div class="dianzan lineBlock" @click="likeFn()">
       <i class="dianzan-icon" :class="{'dianzan-icon-hover': like}"></i><span>{{this.likeNum}}</span>
     </div>
     <div class="shoucang lineBlock" @click="collectFn()">
       <i class="shoucang-icon" :class="{'shoucang-icon-hover': collection}"></i>
       <span>收藏</span>
     </div>
     <div v-if="hasComment" class="comment lineBlock">
       <i class="commnent-icon"></i>
       <span>{{commentsNum}}</span>
     </div>
  </div>
</template>

<script>
import Vue from 'vue'
import utils from '@/modules/utils.js'
export default {
  name: 'ProManage',
  props:['hasComment','commentsNum','busId','supportStatus','supportTotal','isCollect'],
  data () {
    return {
      collection: false, //收藏
      like: false, //点赞
      likeNum: this.supportTotal
    }
  },
  methods: {
    //点赞
    likeFn () {
      // this.like = !this.like;
      // if(this.like){
      //   console.log('点赞成功');
      //   console.log( this.$route.name )
      // }

      //判断登录状态
      var accesstoken = utils.getCookie('accesstoken')
      if (!accesstoken) {
          this.$router.push({name: 'login'})
      }else{
        this.like = !this.like;
        //判断路由
        var type = '';
        if (this.$route.name == 'shangping' || this.$route.name == 'videodetail') {
          type = 'vod';
        }
        if (this.$route.name == 'case' || this.$route.name == 'casedetail') {
          type = 'discovery';
        }
        if(this.like){
          var params = {
              "type": type,   //discovery:发现，vod:商评
              "do":"add",                     //do=add：添加收藏；do=cancel，取消收藏
              "busId": this.busId  //商评或发现中的项
          }
          this.$http.post(this.baseurl + '/like',params).then(res => {
              if(res.data.code == 200){
                console.log(res)
                this.likeNum = res.data.data.total;
                utils.mobileTip({
                    "obj":Vue,
                    "content":"点赞成功"
                })
              }
          })
        }else{
          var params = {
              "type": type,   //discovery:发现，vod:商评
              "do":"cancel",                     //do=add：添加收藏；do=cancel，取消收藏
              "busId": this.busId  //商评或发现中的项
          }
          this.$http.post(this.baseurl + '/like',params).then(res => {
              if(res.data.code == 200){
                console.log(res)
                this.likeNum = res.data.data.total;
                utils.mobileTip({
                    "obj":Vue,
                    "content":"取消点赞"
                })
              }
          })
        }
      }

    },
    //收藏
    collectFn () {
      //判断登录状态
      var accesstoken = utils.getCookie('accesstoken')
      if (!accesstoken) {
          this.$router.push({name: 'login'})
      }else{
        this.collection = !this.collection;
        //判断路由
        var type = '';
        if (this.$route.name == 'shangping' || this.$route.name == 'videodetail') {
          type = 'vod';
        }
        if (this.$route.name == 'case' || this.$route.name == 'casedetail') {
          type = 'information';
        }
        if(this.collection){
          var params = {
              "type": type,   //请求源：information:发现，vod:商评
              "do":"add",                     //do=add：添加收藏；do=""，取消收藏
              "busId": this.busId  //商评或发现中的项
          }
          this.$http.post(this.baseurl + '/collect/collect',params).then(res => {
              if(res.data.code == 200){
                  this.attention = false
                  utils.mobileTip({
                      "obj":Vue,
                      "content":"收藏成功"
                  })
              }
          })
        }else{
          var params = {
              "type": type,   //请求源：information:发现，vod:商评
              "do":"",                     //do=add：添加收藏；do=""，取消收藏
              "busId": this.busId  //商评或发现中的项
          }
          this.$http.post(this.baseurl + '/collect/collect',params).then(res => {
              if(res.data.code == 200){
                  this.attention = false
                  utils.mobileTip({
                      "obj":Vue,
                      "content":"取消收藏"
                  })
              }
          })
        }
      }

    }//,
  },
  created () {
    this.isCollect ?  this.collection=true : this.collection=false;
    this.supportStatus ?  this.like=true : this.like=false;
    //console.log(  this.busId )
  }
}
</script>

<style lang="less" scoped>
  @rem: 50rem;
  .proManage {
    font-size: 24/@rem;
    color: #999;
    height: 90/@rem;
    line-height: 90/@rem;
    //text-align: right;
    position: absolute;
    right: 0;
    top: 0;
    .lineBlock {
      display: inline-block;
      margin-right: 24/@rem;
      .dianzan-icon {
        width: 25/@rem;
        height: 24/@rem;
        display: inline-block;
        background-image: url('/static/images/common/icon_dianzan@3x.png');
        background-repeat: no-repeat;
        background-size: 25/@rem 24/@rem;
        position: relative;
        top: 4/@rem;
        left: -10/@rem;
      }
      .dianzan-icon-hover {
        background-image: url('/static/images/common/icon_dianzan_hover@3x.png');
      }
      .shoucang-icon {
        width: 25/@rem;
        height: 24/@rem;
        display: inline-block;
        background-image: url('/static/images/common/icon_soucang@3x.png');
        background-repeat: no-repeat;
        background-size: 25/@rem 24/@rem;
        position: relative;
        top: 4/@rem;
        left: 0/@rem;
      }
      .shoucang-icon-hover {
        background-image: url('/static/images/common/icon_shoucang_hover@3x.png');
      }
      .commnent-icon {
        width: 25/@rem;
        height: 24/@rem;
        display: inline-block;
        background-image: url('/static/images/opportunity/icon/icon_talk@2x.png');
        background-repeat: no-repeat;
        background-size: 25/@rem 24/@rem;
        position: relative;
        top: 4/@rem;
        left: 0/@rem;
      }
    }
  }
</style>
