<template>
  <div class="Vr">
    <header-title :name="name" :title="title"></header-title>
    <mescroll ref="mescroll" :upCallback="upCallback"  warpId="index_scroll" id="index_scroll">
      <ul class="vrList">
        <!-- <li class="item"
            v-for="(item,index) of vrListData"
            :key="index"
            >
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
          <div class="footer">
            <div class="shoucang" @click="collectFn(item.uuid)"><span class="shoucang-icon" :class="{'shoucang-icon-hover':collection}"></span>收藏</div>
            <span class="commnent-icon"></span>{{item.commentsNum}}
          </div>
        </li> -->
        <shangping-list-item
            v-for="(item,index) of vrListData"
            :key="index"
            :item="item"
        ></shangping-list-item>
      </ul>
    </mescroll>
    <floating :name="name"></floating>
  </div>
</template>

<script>
import utils from '@/modules/utils.js'
import mescroll from '@/common/mescroll/Mescroll.vue' /* 分页组件 */
import Floating from '@/common/floating/Floating'
import HeaderTitle from '@/pages/components/HeaderTitle.vue'
import ShangpingListItem from '@/common/shangpingListItem/ShangpingListItem'
export default {
  name: 'Vr',
  components: {
    mescroll,
    Floating,
    HeaderTitle,
    ShangpingListItem
  },
  data () {
    return {
      paramJson: {
        "params": {
           "pageNum": "1",
           "pageSize": "10",
           "sourceType": "-1"
         }
      },
      vrListData: [],
      title: "商评",
      // collection: false
      name: '商评列表页'
    }
  },
  methods: {
    //收藏
    /*collectFn (uid) {
      this.collection = !this.collection;
      if(this.collection){
        console.log('收藏成功'+uid);
      }
    },*/
    // 上拉加载
    upCallback (page) {
      let { paramJson } = this
      paramJson.params.pageNum = page.num
      paramJson.params.pageSize = page.size
      this.$http.post(this.baseurl+'/home/vodvideos', paramJson).then((res) => {
        // console.log(res)
        // console.log(res.data.data.list)
        if (res.data.code == 200) {
          let tmp = res.data.data
          let list = res.data.data.list
          if ( tmp.pages < paramJson.params.pageNum ) {
            list.length = 0
          }
          this.$refs.mescroll.endSuccess(list.length)
          this.vrListData = this.vrListData.concat(res.data.data.list)
        }
      }).catch((error) => {
        this.$refs.mescroll.endErr()
      })
    }
  }//,
  /*mounted () {
    // this.getShangpingData();
  }*/
}
</script>

<style lang="less" scoped>
  @rem: 50rem;
  .Vr {
    width: 100%;
    .vrHeader {
      width: 100%;
      font-size: 36/@rem;
      color: #333;
      line-height: 40/@rem;
      text-align: center;
      padding: 22/@rem 0;
      border-bottom:1px solid #ccc;
      background: #fff;
      z-index: 1;
      position: fixed;
      left: 0;
      top: 0;
      .arrowLeft-icon {
        width: 16/@rem;
        height: 30/@rem;
        background-image: url("/static/images/home/icon/icon_back@3x.png");
        background-repeat: no-repeat;
        background-size: 16/@rem 30/@rem;
        position: absolute;
        left: 24/@rem;
      }
      .kefu-icon, .nav-icon {
        display: inline-block;
        background-repeat: no-repeat;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      .kefu-icon {
        width: 34/@rem;
        height: 32/@rem;
        background-image: url('/static/images/common/icon_erji@3x.png');
        background-repeat: no-repeat;
        background-size: 34/@rem 32/@rem;
        right: 118/@rem;
      }
      .nav-icon {
        width: 38/@rem;
        height: 28/@rem;
        background-image: url('/static/images/common/icon_classify@3x.png');
        background-repeat: no-repeat;
        background-size: 38/@rem 28/@rem;
        right: 24/@rem;
      }
    }
    .vrList {
      margin-top: 84/@rem;
      background: #eff3f7;
      //.item {}

    }
  }
</style>
