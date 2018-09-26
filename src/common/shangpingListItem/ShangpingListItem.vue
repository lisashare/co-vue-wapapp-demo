<template>
  <li class="item">
      <router-link tag="div" :to="{name:'videodetail',query:{videoId:item.uuid}}">
        <h3 class="title">{{item.title}}</h3>

        <div class="vrImgs" v-if="item.cover">
          <img :src="item.cover" />
          <img class="vrImg" src="/static/images/home/icon/bofang.png" />
        </div>
        <div class="vrImgs" v-else>
          <img src="/static/images/background_img/active.png" />
          <img class="vrImg" src="/static/images/home/icon/bofang.png" />
        </div>
      </router-link>
    <!-- <div class="proManage">
      <div class="dianzan lineBlock" @click="likeFn()">
        <i class="dianzan-icon" :class="{'dianzan-icon-hover':like}"></i><span>点赞</span>
      </div>
      <div class="shoucang lineBlock" @click="collectFn()">
        <i class="shoucang-icon" :class="{'shoucang-icon-hover':collection}"></i>
        <span>收藏</span>
      </div>
      <div class="comment lineBlock">
        <i class="commnent-icon"></i>
        <span>{{item.commentsNum}}</span>
      </div>
    </div> -->
    <div class="footer">
      <pro-manage
        :commentsNum="item.commentsNum"
        :hasComment="true"
        :busId="item.uuid"
        :supportStatus="item.supportStatus"
        :supportTotal="item.supportTotal"
        :isCollect="item.isCollect"
      ></pro-manage>
    </div>

  </li>
</template>

<script>
import ProManage from '@/common/proManage/ProManage'
export default {
  name: 'ShangpingListItem',
  components: {
    ProManage
  },
  props:['item'],
  data () {
    return {
      collection: false,
      like: false
    }
  },
  methods: {
    //点赞
    likeFn () {
      this.like = !this.like;
      if(this.like){
        console.log('点赞成功');
      }
    },
    //收藏
    collectFn () {
      this.collection = !this.collection;
      if(this.collection){
        console.log('收藏成功');
      }
    }
  }
}
</script>

<style lang="less" scoped>
@rem: 50rem;
.item {
  border-top: 1px solid #dae0e6;
  border-bottom: 1px solid #dae0e6;
  margin-bottom: 14/@rem;
  background: #fff;
  h3.title {
    font-size: 32/@rem;
    color: #333;
    height: 90/@rem;
    line-height: 90/@rem;
    text-indent: 24/@rem;
  }
  .vrImgs {
    width: 100%;
    height: 400/@rem;
    position: relative;
    img {
      width: 100%;
      height: 400/@rem;
    }
    .vrImg {
      width: 123/@rem;
      height: 123/@rem;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      img {
        width: 123/@rem;
        height: 123/@rem;
      }
    }
  }
  .footer {
    font-size: 24/@rem;
    color: #999;
    height: 90/@rem;
    line-height: 90/@rem;
    text-align: right;
    position: relative;
    //margin-right: 24/@rem;
    //.lineBlock {
    //  display: inline-block;
    //  margin-right: 24/@rem;
    //}
    //.dianzan {
    //  .dianzan-icon {
    //    width: 25/@rem;
    //    height: 24/@rem;
    //    background-image: url('/static/images/common/icon_dianzan@3x.png');
    //    background-repeat: no-repeat;
    //    background-size: 25/@rem 24/@rem;
    //    display: inline-block;
    //    position: relative;
    //    top: 4/@rem;
    //    left: -10/@rem;
    //  }
    //  .dianzan-icon-hover {
    //    background-image: url('/static/images/common/icon_dianzan_hover@3x.png');
    //  }
    //}
    //.shoucang {
    //  //display: inline-block;
    //  //margin-right: 24/@rem;
    //  .shoucang-icon {
    //    width: 25/@rem;
    //    height: 24/@rem;
    //    background-image: url('/static/images/common/icon_soucang@3x.png');
    //    background-repeat: no-repeat;
    //    background-size: 25/@rem 24/@rem;
    //    display: inline-block;
    //    position: relative;
    //    top: 4/@rem;
    //    left: -10/@rem;
    //  }
    //  .shoucang-icon-hover {
    //    background-image: url('/static/images/common/icon_shoucang_hover@3x.png');
    //  }
    //}
    //.commnent-icon {
    //  font-size: 24/@rem;
    //  width: 25/@rem;
    //  height: 24/@rem;
    //  background-image: url('/static/images/opportunity/icon/icon_talk@2x.png');
    //  background-repeat: no-repeat;
    //  background-size: 25/@rem 24/@rem;
    //  display: inline-block;
    //  position: relative;
    //  top: 4/@rem;
    //  left: -10/@rem;
    //}
  }
}
</style>
