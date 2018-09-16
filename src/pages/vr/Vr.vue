<template>
  <div class="Vr">
    <!-- <div class="vrHeader">
      <span class="arrowLeft-icon" v-on:click = "$router.go(-1)"><</span>
      VR看店
      <span class="kefu-icon"></span>
      <span class="nav-icon"></span>
    </div> -->
    <vr-header></vr-header>
    <mescroll ref="mescroll" :upCallback="upCallback"  warpId="index_scroll" id="index_scroll">
      <ul class="vrList">
        <li class="item" v-for="(item,index) of vrListData" :key="index">
          <a style="display:block" :href="item.vrUrl">
            <h3 class="title">{{item.title}}</h3>
            <div class="vrImgs">
              <img :src="item.cover" />
              <img class="vrImg" src="/static/images/home/icon/icon_VR.png" />
            </div>
          </a>
        </li>
      </ul>
    </mescroll>
    <floating></floating>
  </div>
</template>

<script>
import mescroll from '@/common/mescroll/Mescroll.vue' /* 分页组件 */
import VrHeader from './components/Header'
import Floating from '@/common/floating/Floating'
export default {
  name: 'Vr',
  components: {
    mescroll,
    VrHeader,
    Floating
  },
  data () {
    return {
      vrListData: [],
      paramJson: {
        "params": {
          "pageNum": "1",
          "pageSize": "10"
        }
      }
    }
  },
  methods: {
    // 上拉加载
    upCallback (page) {
      let { paramJson } = this
      paramJson.params.pageNum = page.num
      paramJson.params.pageSize = page.size
      this.$http.post(this.baseurl+'/home/vrlist', paramJson).then((res) => {
        if (res.data.code == 200) {
          let list = res.data.data.list
          let total = res.data.data.total
          if( this.paramJson.params.pageNum>1 && list.length == total ){
            list.length = 0;
          }
          this.$refs.mescroll.endSuccess(list.length)
          this.vrListData = this.vrListData.concat(list)
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
  .Vr {
    width: 100%;
    .vrList {
      padding: 0 48/@rem;
      margin-top: 120/@rem;
      .item {
        margin-bottom: 80/@rem;
        h3.title {
          width: 90%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 34/@rem;
          color: #333;
          margin-bottom: 24/@rem;
        }
        .vrImgs {
          width: 654/@rem;
          height: 280/@rem;
          position: relative;
          img {
            width: 654/@rem;
            height: 280/@rem;
          }
          .vrImg {
            width: 94/@rem;
            height: 94/@rem;
            position: absolute;
            right: 40/@rem;
            bottom: 40/@rem;
          }
        }
      }

    }
  }
</style>
