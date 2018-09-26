import Vue from 'vue'
import Router from 'vue-router'
import Opportunity from '@/pages/opportunity/Opportunity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home/Home'),
      meta: {
        title: '这是商机盒子首页',
        desc: '欢迎来到商机盒子',
        timelineTitle: '欢迎点击关注商机盒子，商机多多',
        //link: window.location.href.split('#')[0]+'#'+window.location.href.split('#')[1],
        //imgUrl: 'http://kdwap-frontend-test.kuaidaoapp.com/static/images/home/icon_bao@3x.png'
        imgUrl: 'http://kdwap-frontend-test.kuaidaoapp.com/static/images/home/wxshare.png'
      }
    },
    {path: '/vr', name: 'vr', component: () => import('@/pages/vr/Vr')},
    {path: '/homesearchone',name: 'homesearchone',component: ()=>import('@/pages/homesearchone/Homesearchone')},
    {path: '/homesearchtwo',name: 'homesearchtwo',component: ()=>import('@/pages/homesearchtwo/Homesearchtwo')},
    {path: '/videomorelist',name: 'videomorelist',component: ()=>import('@/pages/videomorelist/Videomorelist')},
    {path: '/videodetail', name: 'videodetail', component: ()=>import('@/pages/videodetail/Videodetail')},
    {path: '/brandmorelist',name: 'brandmorelist',component: ()=>import('@/pages/brandmorelist/Brandmorelist')},
    {
      path: '/shangping',
      name: 'shangping',
      component: () => import('@/pages/shangping/Shangping'),
      meta: {
        title: '这是商评列表页',
        desc: '欢迎来到商机盒子商评列表页',
        timelineTitle: '欢迎点击关注商评列表页,评论多多',
        //link: window.location.href.split('#')[0]+'#'+window.location.href.split('#')[1],
        imgUrl: 'http://kdwap-frontend-test.kuaidaoapp.com/static/images/home/icon_bao@3x.png'
      }
    },
    {path: '/city', name: 'city', component: () => import('@/pages/city/City')},
    {path: '/searchcity', name: 'searchcity', component: () => import('@/pages/searchcity/Searchcity')},
    {path: '/login', name: 'login', component: () => import('@/pages/login/Login')},
    {path: '/messagelogin', name: 'messagelogin', component: () => import('@/pages/messagelogin/Messagelogin')},
    {path: '/forgetpassword', name: 'forgetpassword', component: () => import('@/pages/forgetpassword/Forgetpassword')},
    {path: '/register', name: 'register', component: () => import('@/pages/register/Register')},
    {path: '/useragreement', name: 'useragreement', component: () => import('@/pages/useragreement/Useragreement')},
    {path: '/privacyagreement', name: 'privacyagreement', component: () => import('@/pages/privacyagreement/Privacyagreement')},

    {path: '/opportunity', name: 'opportunity',
      component: Opportunity,
      meta: {
        keepAlive: true
      }
    },
    {path: '/search', name: 'search', component: () => import('@/common/search/Search')},
    {path: '/branddetail', name: 'branddetail', component: () => import('@/pages/brandDetail/BrandDetail')},
    {path: '/authentication', name: 'authentication', component: () => import('@/pages/authentication/Authentication')},
    {path: '/brandsearch', name: 'brandsearch', component: () => import('@/pages/brandSearch/BrandSearch')},
    {path: '/joinarea', name: 'joinarea', component: () => import('@/pages/joinArea/JoinArea')},
    {path: '/hotnews', name: 'hotnews', component: () => import('@/pages/hotNews/HotNews')},
    {path: '/searchcase', name: 'search1', component: () => import('@/common/search/SearchCase')},
    // {path: '/chat',name: 'chat',component: ()=>import('@/pages/chat/Chat')},
    // {path: '/message',name: 'message',component: ()=>import('@/pages/message/Message')},
    // {path: '/sysmsgs',name: 'sysmsgs~',component: ()=>import('@/pages/sysMsgs/SysMsgs.vue')},
    // {path:'',redirect:'/home'},
    {path: '/case', name: 'case', component: () => import('@/pages/case/Case')},
    {path: '/casedetail', name: 'casedetail', component: () => import('@/pages/caseDetail/CaseDetail')},
    {path: '/casesearch', name: 'casesearch', component: () => import('@/pages/casesearch/casesearch')},
    {path: '/my', name: 'my', component: () => import('@/pages/my/My')},
    {path: '/mycollect', name: 'mycollect', component: () => import('@/pages/mycollect/MyCollect')},
    {path: '/myfocus', name: 'myfocus', component: () => import('@/pages/my/MyFocus')},
     // {path:'',redirect:'/home'},
  ]
})
