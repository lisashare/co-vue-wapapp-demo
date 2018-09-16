<template>
    <div class="case-list">
        <mescroll ref="mescroll" :upCallback="upCallback"  warpId="index_scroll" id="index_scroll">
            <ul class="brand-content" ref="content">
                 <case-list-item
                  v-for = "(list,index) in listBrandByTags"
                  :key = "index"
                  :list = "list">
                </case-list-item>
            </ul>
        </mescroll>
    </div>
</template>
<script>
import mescroll from '@/common/mescroll/Mescroll.vue' /* 分页组件 */
import CaseListItem from '@/common/caseListItem/CaseListItem.vue'
export default {
  name: 'CaseList',
  components: {mescroll, CaseListItem},
  data () {
    return {
      info: { // 请求的参数
        pageNum: 1,
        pageSize: 10
      },
      listBrandByTags: []
    }
  },
  methods: {
    // 上拉加载
    upCallback (page) {
      let {info} = this
      info.pageNum = page.num
      info.pageSize = page.size
      info.firstStageType = '06'
      info.userId = ''
      info.timePointer = ''
      // let params = {
      //   'apiUrl': 'https://m.kuaidao.cn/mobile/info/getXList',
      //   'params': info
      // }     
      // this.$http.post(this.baseurl + '/brand/api', params).then((res) => {
      let params = {
        'params': info
      }
      this.$http.post(this.baseurl + '/discovery/getallist', params).then((res) => { 
        // console.log(res) 
        if (res.data.code == 200) {          
          let list = res.data.data
          this.$refs.mescroll.endSuccess(list.length)
          this.listBrandByTags = this.listBrandByTags.concat(res.data.data)
        }
      }).catch((error) => {
        this.$refs.mescroll.endErr()
      })
    }
  }
}
</script>
<style lang="less" scoped>

</style>
