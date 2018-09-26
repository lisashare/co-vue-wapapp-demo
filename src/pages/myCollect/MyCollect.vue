<template>
  <div class="Vr">
    <!-- <div class="vrHeader">
      <span class="arrowLeft-icon" v-on:click = "$router.go(-1)"></span>
      视频-{{this.$route.query.search}}
      <span class="kefu-icon" @click="isTelShow=!isTelShow"></span>
      <span class="nav-icon" @click="isNavShow=!isNavShow"></span>
    </div>
    <nav-list
        :closeNav="closeNav"
        :isNavShow="isNavShow">
    </nav-list>
    <service-pop
        :closeTel="closeTel"
        :isTelShow="isTelShow">
    </service-pop> -->
    <header-title :title="title"></header-title>
    <mescroll ref="mescroll" :emptyKeyImg="emptyKeyImg" :upCallback="upCallback"  warpId="index_scroll" id="index_scroll">
      <ul class="vrList">
        <template v-for="(item,index) of vrListData">
          <router-link tag="li" class="item"
              v-if="item.busType=='vod' && item.vod"
              :key="index"
              :to="{name:'videodetail',query:{videoId:item.vod.uuid}}">
            <h3 class="title">{{item.vod.title}}</h3>
            <div class="vrImgs" v-if="item.vod.cover">
              <img :src="item.vod.cover" />
              <img class="vrImg" src="/static/images/home/icon/bofang.png" />
            </div>
            <div class="vrImgs" v-else>
              <img src="/static/images/background_img/active.png" />
              <img class="vrImg" src="/static/images/home/icon/bofang.png" />
            </div>
            <!-- <div class="footer">
              <span class="commnent-icon"></span>{{item.supportTotal}}
            </div> -->
          </router-link>
          <router-link tag="li" class="item"
              v-if="item.busType=='information' && item.information"
              :key="index"
              :to="{name:'casedetail',query:{infoId:item.information.infoId}}">
            <h3 class="title">{{item.information.title}}</h3>
            <div class="vrImgs" v-if="item.information.vodEntity.cover">
              <img :src="item.information.vodEntity.cover" />
              <img class="vrImg" src="/static/images/home/icon/bofang.png" />
            </div>
            <div class="vrImgs" v-else>
              <img src="/static/images/background_img/active.png" />
              <img class="vrImg" src="/static/images/home/icon/bofang.png" />
            </div>
            <!-- <div class="footer">
              <span class="commnent-icon"></span>{{item.supportTotal}}
            </div> -->
          </router-link>
        </template>
        <!-- <router-link tag="li" class="item"
            v-for="(item,index) of vrListData"
            v-if="item.information"
            :key="index"
            :to="{name:'videodetail',query:{videoId:item.information.uuid}}">
          <h3 class="title">{{item.information.title}}</h3>
          <div class="vrImgs" v-if="item.information.vodEntity.cover">
            <img :src="item.information.vodEntity.cover" />
            <img class="vrImg" src="/static/images/home/icon/bofang.png" />
          </div>
          <div class="vrImgs" v-else>
            <img src="/static/images/background_img/active.png" />
            <img class="vrImg" src="/static/images/home/icon/bofang.png" />
          </div>
          <div class="footer">
            <span class="commnent-icon"></span>{{item.supportTotal}}
          </div>
        </router-link> -->
      </ul>
    </mescroll>
    <div class="searchBg_nodata" v-if="imgShow"></div>
  </div>
</template>

<script>
import utils from '@/modules/utils.js'
import mescroll from '@/common/mescroll/Mescroll.vue' /* 分页组件 */
/*import NavList from '@/pages/components/NavList'
import ServicePop from '@/pages/components/ServicePop'*/
import HeaderTitle from '@/pages/components/HeaderTitle.vue'
export default {
  name: 'Vr',
  components: {
    mescroll,
    /*NavList,
    ServicePop,*/
    HeaderTitle
  },
  data () {
    return {
      paramJson: {
        "params": {
          "pageNum": "1",
          "pageSize": "10"
        }
      },
      isNavShow: false,
      isTelShow: false,
      vrListData: [],
      title: '',
      emptyKeyImg:1,
      imgShow: false // 无数据显示的图片
    }
  },
  created () {
    // this.title = '视频-' + this.$route.query.search
    this.title = "我的收藏";
  },
  /*mounted () {
    this.$http.post(this.baseurl+'/collect/collect-list', this.paramJson).then(function (res) {
      console.log(res);
    })
  },*/
  methods: {
    //客服电话
    phoneCall () {
      window.location.href = 'tel:010-53579588'
    },
    closeNav () {
      this.isNavShow = false;
    },
    closeTel () {
      this.isTelShow = false;
    },
    // 上拉加载
    upCallback (page) {
      let { paramJson } = this
      paramJson.params.pageNum = page.num
      paramJson.params.pageSize = page.size
      this.$http.post(this.baseurl+'/collect/collect-list', paramJson).then((res) => {
        console.log(res.data.data)
        if (res.data.code == 200) {
          if( res.data.data.length!==0 ){
            this.vrListData = this.vrListData.concat(res.data.data)
          }else{
            this.$refs.mescroll.endErr() //停止加载转圈
            console.log(res.data.data.length)
            this.imgShow=true
            return
          }
          let list = res.data.data
          this.$refs.mescroll.endSuccess(list.length)
        }
      }).catch((error) => {
        this.$refs.mescroll.endErr()
      })
    }
  }
}
</script>

<style lang="less" scoped>
  @rem: 50rem;
  .searchBg_nodata {
    height: 668/@rem;
    margin-top: 100/@rem;
    background: url(/static/images/empty/bg_nodata.png) no-repeat;
    background-size: 50%;
    background-position: 50% 50%;
  }
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
      .item {
        border-top: 1px solid #dae0e6;
        border-bottom: 1px solid #dae0e6;
        //margin-bottom: 14/@rem;
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
          height: 90/@rem;
          color: #999;
          line-height: 90/@rem;
          text-align: right;
          margin-right: 24/@rem;
          .commnent-icon {
            font-size: 24/@rem;
            width: 30/@rem;
            height: 30/@rem;
            background-image: url('/static/images/home/icon/comment-icon.png');
            background-repeat: no-repeat;
            background-size: 30/@rem 30/@rem;
            display: inline-block;
            position: relative;
            top: 8/@rem;
            left: -10/@rem;
          }
        }
      }

    }
  }
</style>
