<template>
  <div class="page-top">
    <!-- 头部title start -->
    <header-title :title="title"></header-title>
    <my-focusList></my-focusList>
  </div>
</template>

<script>
import HeaderTitle from '@/pages/components/HeaderTitle.vue'
import MyFocusList from './components/FocusList'
export default {
  name: 'Home',
  components: {HeaderTitle, MyFocusList},
  data () {
    return {
      title: '我的关注'
    }
  }
}
</script>
