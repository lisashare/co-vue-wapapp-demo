<template>
  <div class="FocusList">
    <mescroll ref="mescroll" :emptyKeyImg="emptyKeyImg" :upCallback="upCallback"  warpId="index_scroll" id="index_scroll">
      <ul class="brand-content" ref="content">
        <brand-list-item
          v-for = "(list,index) in listBrandByTags"
          :key = "index"
          :list = "list.brand">
        </brand-list-item>
      </ul>
    </mescroll>
    <div class="searchBg_nodata" v-if="imgShow"></div>
  </div>
</template>

<script>
import mescroll from '@/common/mescroll/Mescroll.vue' /* 分页组件 */
import BrandListItem from '@/common/brandListItem/BrandListItem'
export default {
  name: 'MyFocusList',
  components: {
    mescroll,
    BrandListItem
  },
  data () {
    return {
        info: {  // 请求的参数                
            pageNum: 1,
            pageSize: 10
        },
        listBrandByTags:[],
        emptyKeyImg:1,
        imgShow: false // 无数据显示的图片
    }
  },
  methods: {
    // 上拉加载
    upCallback (page) {
      let {info} = this
      info.pageNum = page.num
      info.pageSize = page.size
      this.$http.get(this.baseurl + '/user/follows',info).then((res) => {
        if(res.data.code == 200){
            var listdata=res.data
            if(listdata.data.length!==0){
              this.listBrandByTags = this.listBrandByTags.concat(res.data.data.list)
            }else{
              this.$refs.mescroll.endErr() //停止加载转圈
              console.log(listdata.length)
              this.imgShow=true
              return
            }
            
            let list = res.data.data.list
            this.$refs.mescroll.endSuccess(list.length)
        }
      }).catch((error) => {
          this.$refs.mescroll.endErr() //停止加载转圈
          // 401时候
          // 跳转登录
          this.$router.push({name:'my'})          
      })
    }
  }
}
</script>
<style lang="less" scoped>
@rem:50rem;
.searchBg_nodata {
    height: 668/@rem;
    margin-top: 100/@rem;
    background: url(/static/images/empty/bg_nodata.png) no-repeat;
    background-size: 50%;
    background-position: 50% 50%;
}
</style>