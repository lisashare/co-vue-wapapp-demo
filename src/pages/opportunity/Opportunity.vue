<template>
    <div class="opportunity page-top">
        <header-search :name="name" :placeholder="placeholder"></header-search>
        <app-banner></app-banner>
        <brand-list></brand-list>
        <floating :name="name"></floating>
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
      placeholder: '请输入您想查询的品牌名称',

      name: '商机列表', // 进入页面将name传递给需要点击的事件组件
    }
  }
}
</script>
<style lang="less" scoped>

</style>
