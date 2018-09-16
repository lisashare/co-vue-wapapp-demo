<template>
    <div class="opportunity page-top">
        <!-- <app-search></app-search> -->
        <header-search :placeholder="placeholder"></header-search>
        <app-banner></app-banner>
        <brand-list></brand-list>
        <floating></floating>
    </div>
</template>
<script>
import HeaderSearch from '@/pages/components/HeaderSearch.vue'
import AppBanner from './AppBanner'
import BrandList from './BrandList'
import Floating from '@/common/floating/Floating'
export default {
  name: 'Opportunity',
  components: { AppBanner, BrandList, HeaderSearch, Floating},
  data () {
    return {
      placeholder: '请输入您想查询的品牌名称'
    }
  }
}
</script>
<style lang="less" scoped>

</style>
