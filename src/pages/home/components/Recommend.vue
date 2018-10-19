<template>
  <div class="Recommend">
    <div class="title">推荐</div>
    <mescroll ref="mescroll" :upCallback="upCallback"  warpId="index_scroll" id="index_scroll">
      <ul class="brand-content" ref="content">
        <brand-list-item
          v-for = "(list,index) in listBrandByTags"
          :key = "index"
          :list = "list">
        </brand-list-item>
      </ul>
    </mescroll>
  </div>
</template>

<script>
import mescroll from '@/common/mescroll/Mescroll.vue' /* 分页组件 */
import BrandListItem from '@/common/brandListItem/BrandListItem'
export default {
  name: 'HomeRecommend',
  components: {
    mescroll,
    BrandListItem
  },
  data () {
    return {
      paramJson: {
          "params": {
            "info_getNewsHot": {
              "userId": ""
            },
            "banner_appGet": {
              "pid": "0"
            },
            "vod_videoList": { //
              "pageNum": "1",
              "sourceType": "0",
              "pageSize": "10"
            },
            "bus_videoList": {
              "pageNum": "1",
              "sourceType": "2",
              "pageSize": "10"
            },
            "brand_list": {//
              "pageNum": "1",
              "searchType": "3",
              "type": "1",
              /*"searchType": "2",
              "cityCode": "131",
              "areaGbCode": "131",*/
              "cityCode": "",
              "areaGbCode": "",
              "pageSize": "10"
            },
            "activity_channelList": {
              "pageNum": "1",
              "pageSize": "5"
            },
            "vr_videoList": {
              "pageNum": "1",
              "pageSize": "10"
            },
            "vod_liveVideoList": {
              "pageNum": "1",
              "sourceType": "1",
              "pageSize": "10"
            }
          }
      },
      listBrandByTags:[]
    }
  },
  methods: {
    // 上拉加载
    upCallback (page) {
      let { paramJson } = this
      paramJson.params.brand_list.pageNum = page.num
      paramJson.params.brand_list.pageSize = page.size
      this.$http.post(this.baseurl+'/home/api', paramJson).then((res) => {
        console.log(res)
        if( res.data.code == 200 ){
          let tmp = res.data.data.brandList
          let list = res.data.data.brandList.list
          // console.log(tmp.total)
          // console.log(Math.floor(tmp.total/tmp.pageSize))
          if ( Math.ceil(tmp.total/tmp.pageSize) < paramJson.params.brand_list.pageNum ) {
            list.length = 0
          }
          this.$refs.mescroll.endSuccess(list.length)
          this.listBrandByTags = this.listBrandByTags.concat(res.data.data.brandList.list)

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
  .Recommend {
    .title {
      font-size: 40/@rem;
      color: #333;
      width: 100%;
      line-height: 48/@rem;
      margin-bottom: 10/@rem;
      padding-left: 48/@rem;
      box-sizing: border-box;
    }
  }
</style>
