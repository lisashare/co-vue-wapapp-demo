// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './modules/rem'
import './stylesheets/main.css'

// 过滤器
import './modules/filter'
// 指令
import './modules/directive'
import './modules/http'
import './modules/utils'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../static/swiper/swiper.css'
Vue.use(VueAwesomeSwiper)

import preview from 'vue-photo-preview'
import '../static/swiper/skin.css'
Vue.use(preview)

import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
