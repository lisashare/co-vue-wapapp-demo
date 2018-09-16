<template>
    <div class="case page-top">
        <header-searchCase :placeholder="placeholder"></header-searchCase>
        <case-list></case-list>
        <floating></floating>
    </div>
</template>
<script>
import HeaderSearchCase from '@/pages/components/HeaderSearchCase.vue'
import CaseList from './CaseList'
import Floating from '@/common/floating/Floating'
export default {
  name: 'Case',
  components: {HeaderSearchCase, CaseList,Floating},
  data () {
    return {
      placeholder: '请输入关键字搜索'
    }
  }
}
</script>
<style lang="less" scoped>

</style>
