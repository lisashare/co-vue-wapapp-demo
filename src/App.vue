<template>
  <div id="app">
        <!-- 切页动画设置 -->
    <!-- <transition :name="transitionName"> -->
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view  v-if="!$route.meta.keepAlive"></router-view>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
