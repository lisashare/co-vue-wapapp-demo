<template>
    <div class="case page-top">
        <header-search :name="name" :placeholder="placeholder" :to="to"></header-search>
        <case-list></case-list>
        <floating></floating>
    </div>
</template>
<script>
// import HeaderSearchCase from '@/pages/components/HeaderSearchCase.vue'
import HeaderSearch from '@/pages/components/HeaderSearch.vue'
import CaseList from './CaseList'
import Floating from '@/common/floating/Floating'
export default {
  name: 'Case',
  components: {HeaderSearch, CaseList,Floating},
  data () {
    return {
      placeholder: '请输入关键字搜索',
      to: '/searchcase',
      name: '发现列表页'
    }
  }
}
</script>
<style lang="less" scoped>

</style>
