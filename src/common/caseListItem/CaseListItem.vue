<template>
    <li :infoId = 'list.infoId' class="case-list-item">
        <!-- <router-link :to = "{name:'casedetail',query:{infoId:list.infoId}}"
    tag = "div">-->
        <div @click="goDetail">
          <div class="case_title">{{list.title}}</div>
          <div class="img-wrap" v-if="list.vodEntity.cover">
              <img width="100%" height="100%" :src="list.vodEntity.cover">
              <div class="videoIcon">
                  <img width="100%" src="/static/images/opportunity/branddetail/bofang.png" alt="">
              </div>
          </div>
          <div class="img-wrap" v-else>
              <img width="100%" height="100%" src="/static/images/background_img/active.png" />
              <div class="videoIcon">
                  <img width="100%" src="/static/images/opportunity/branddetail/bofang.png" alt="">
              </div>
          </div>
        </div>
        <!-- </router-link> -->
        <div class="tipbox">
            <!-- <div class="pinglun fr">
                <i class="fa fa-commenting-o"></i>
                <i class="pinglun-icon"></i>
                <span class="pinglu-num">{{list.commentEntity.total}}</span>
            </div>
            <div class="showcang fr" @click="collectFn">
                <i class="shoucang-icon" :class="{'shoucang-icon-hover':collection}"></i>收藏
            </div> -->
            <pro-manage
              :commentsNum="list.commentEntity.total"
              :hasComment="true"
              :busId="list.infoId"
              :supportStatus="list.likes"
              :supportTotal="list.likeNum"
              :isCollect="list.collFlag"
              :title="list.title"
            ></pro-manage>
        </div>
        <div class="masks"></div>

    </li>
</template>
<script>
import ProManage from '@/common/proManage/ProManage'

export default {
  name: 'CaseListItem',
  components:{
    ProManage
  },
  props: ['list'],
  data () {
    return {
      collection: false
    }
  },
  methods: {
    goDetail () {
        window._vds.track("wap_find_list",{ "fx_name": this.list.title });
        this.$router.push({name:'casedetail',query:{infoId:this.list.infoId}})
    },
    //收藏
    collectFn () {
      this.collection = !this.collection;
      if(this.collection){
        // console.log('收藏成功');
      }
    }
  }
}
</script>
<style lang="less" scoped>
@rem: 50rem;
*{
    box-sizing: border-box;
}
.case-list-item{
    position:relative;
    overflow: hidden;
    .img-wrap{
        position:relative;
        width: 100%;
        height: auto;
        overflow: hidden;
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
}
// 视频标题
.case_title{
    padding:24/@rem 20/@rem;
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
    font-size: 28/@rem;
    b{
       font-weight: 700;
    }
}
// tip
.tipbox{
    //width:100%;
    //color:#999999;
    //clear:both;
    //overflow: hidden;
    //padding:24/@rem 20/@rem;
    //font-size:28/@rem;
    position: relative;
    height: 90/@rem;
    .showcang {
      font-size: 24/@rem;
      display: inline-block;
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
    .pinglun{
        font-size: 24/@rem;
        display: flex;
        align-items: center;
        height: 32/@rem;
        .pinglun-icon {
          width: 25/@rem;
          height: 24/@rem;
          background-image: url('/static/images/opportunity/icon/icon_talk@2x.png');
          background-repeat: no-repeat;
          background-size: 25/@rem 24/@rem;
          display: inline-block;
        }
        .pinglu-num{
            padding-left: 10/@rem;
        }
    }
}
.masks {
    height: 1em;
    width: 100%;
    background: #eff3f7;
    border-top: 1px solid #dae0e6;
    border-bottom: 1px solid #dae0e6;
}
</style>
