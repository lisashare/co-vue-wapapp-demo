<template>
    <div class="brand-search page-top">

        <header-title :title="title"></header-title>

        <div class="search-content">
            <mescroll ref="mescroll" :emptyKeyImg="1" :upCallback="getBrandTitle" warpId="brandsearch_scroll" id="brandsearch_scroll">
                <ul class="brand-content" ref="content">
                    <brand-list-item
                    v-for = "(list,index) in list"
                    :key = "index"
                    :list = "list">
                    </brand-list-item>
                </ul>
            </mescroll>
            <div class="searchBg_nodata" v-if="imgShow"></div>
        </div>
    </div>
</template>
<script>
import BrandListItem from '@/common/brandListItem/BrandListItem.vue'
import mescroll from '@/common/mescroll/Mescroll.vue' /* 分页组件 */
import HeaderTitle from '@/pages/components/HeaderTitle.vue'
export default {
  name: 'BrandSearch',
  components: {BrandListItem, mescroll, HeaderTitle},
  data () {
    return {
      title: '',
      listBrandByTitle: '',
      list: [],
      imgShow: false // 无数据显示的图片
    }
  },
  methods: {
    phoneCall () {
      window.location.href = 'tel:010-53579588'
    },
    getBrandTitle (page) {
      let data = {title: this.listBrandByTitle, brandPageNum: page.num, brandPageSize: page.size}
      let params = {
        'apiUrl': this.weburl + 'mobile/brand/listBrandByTitle',
        'params': data
      }
      this.$http.post(this.baseurl + '/brand/api', params).then(res => {
        if (res.data.code == 200) {
          let list = res.data.data.list
          this.$refs.mescroll.endSuccess(list.length)
          // console.log(res.data.data.list)
          this.list = this.list.concat(res.data.data.list)
          
          if (list.length == 0) {
            this.imgShow = true
          }
        }
      }).catch((error) => {
        this.$refs.mescroll.endErr()
      })
    }
  },
  created () {
    this.listBrandByTitle = this.$route.query.name
    this.title = '品牌-' + this.listBrandByTitle
  }
}
</script>
<style lang="less" scoped>
@rem:50rem;
*{
    box-sizing: border-box;
}
// 最外层
.brand-list{
    position: relative;
    background: #ffffff;
    min-height: 926/@rem;
}
// 品牌列表
.brand-content {
    position: relative;
}
.mescroll-empty{
    margin-top: 200/@rem!important;
}
.searchBg_nodata {
    height: 668/@rem;
    margin-top: 100/@rem;
    background: url(/static/images/empty/bg_noend.png) no-repeat;
    background-size: 50%;
    background-position: 50% 50%;
}
</style>
