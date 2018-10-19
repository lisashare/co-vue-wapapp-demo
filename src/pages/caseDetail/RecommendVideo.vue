<template>
    <div class="recommend-video">
        <swiper :options="swiperOption" class="swiperY">
            <swiper-slide class="swiper" v-for = "(list,index) in swiper" :key = "index">
            <a v-if="list.vodEntity">
                <router-link :to = "{name:'casedetail',query:{infoId:list.informationId}}" tag = "img" @click.native="flushCom(list.title)" v-if="list.vodEntity.cover" :src="list.vodEntity.cover||'/static/images/background_img/active.png'"></router-link>
                </a>
                <div class="title" v-if="list.title">{{list.title}}</div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
  name: 'RecommendVideo',
  props: ['swiper'],
  data () {
    return {
      video: '',
      showVideo: false,
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 22,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        onSlideChangeEnd: swiper => {
          // 这个位置放swiper的回调方法
          this.page = swiper.realIndex + 1
          this.index = swiper.realIndex
        }
      },
      // videoId:""
    }
  },
  methods: {
    flushCom (title) {
　　　//router是路由实例,例如:var router = new Router({})
　　　//router.go(n)是路由的一个方法，意思是在history记录中前进或者后退多少步，0就表示还是当前，类似window.history.go(n)
      // this.$router.go(0);

      window._vds.track("wap_find_details_rec",{ "fx_name": title });  // 发现详情页-内容推荐

      window.location.reload()
　　}
  },
  created(){
    // this.videoId=this.$route.query.videoId //地址栏接受videoId参数
  }
}
</script>
<style lang="less" scoped>
@rem: 50rem;
.swiper{
    width: 340/@rem;
    // background: #dd0;
    border-radius: 5px;
    // margin-right: 22/@rem;
    height: 240/@rem;
    overflow: hidden;
    position: relative;
}
.swiperY{
    margin: 40/@rem 0 30/@rem;
    padding: 0 24/@rem;
    height: 240/@rem;
    // background-image:url();
    a{
        display: inline-block;
        border-radius: 5px;
        overflow: hidden;
        height:180/@rem;
        img{
          width:100%;
          display:block;
          height:180/@rem;
        }
    }
    p{
        width: 72/@rem;
        height:72/@rem;
        position:absolute;
        left: 50%;
        top: 50%;
        -webkit-transform:translate3d(-50%,-50%,0);
        -ms-transform: translate3d(-50%,-50%,0);
        transform:translate3d(-50%,-50%,0);
    }
    .title{
      font-size: 28/@rem;
      height: 60/@rem;
      line-height:60/@rem;
      text-align: center;
      overflow: hidden;
      white-space: nowrap;
      word-break: keep-all;
      text-overflow: ellipsis;
      color: #999;
    }
}
</style>
