<template>
    <div class="recommend-video">
        <swiper :options="swiperOption" class="swiperY">
            <swiper-slide class="swiper" v-for = "(list,index) in lists" :key = "index">
              <a v-if="list.vodEntity">
                <img v-if="list.vodEntity.cover" :src="list.vodEntity.cover||'/static/images/background_img/active.png'">
                <p>
                  <router-link :to = "{name:'casedetail',query:{infoId:list.informationId}}" tag = "img" @click.native="flushCom" width="100%" src="/static/images/opportunity/branddetail/bofang.png" alt=""></router-link>
                </p>
              </a>
              <div class="title" v-if="list.title">{{list.title}}</div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
  name: 'RecommendVideo',
  props: ['swiper','seriesId','seriesNum'],
  data () {
    const self = this
    return {
      video: '',
      showVideo: false,
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 22,
        pagination: {
          // el: '.swiper-pagination',
          // clickable: true
        },
        observeParents: true,
        observer: true,
        on: {
          slideChange:function(){
            // console.log(this.activeIndex);
            // 如果第一次传递的数据，还有第二页，则进行第二页的请求
            // console.log(self.swiper.length)
            // console.log(self.seriesNum)
            // if(self.swiper.size !== self.swiper.total){
            if(self.swiper.length !== self.seriesNum){
            // if(true){
              self.imageLoadOver()
            }
          }
        }
      },
      info:{
        seriesId: this.seriesId,
        pageNum: 1,
        pageSize: 10,
        userId:""
      },
      // swiper: "",
      lists: this.swiper,
      imageSwiper: ''
    }
  },
  methods: {
    imageLoadOver(){
      if(this.imageSwiper&&(this.imageSwiper.pageNum == this.imageSwiper.pages)){
        // console.log(this.imageSwiper)
          return false
      }else{
        this.info.pageNum = this.info.pageNum + 1
        // console.log(this.info.pageNum)
        let params = {
          'params': this.info
        }
        this.$http.post( this.baseurl + '/discovery/getseriesinfolist',params).then(res=>{
          // console.log(res)
          if(res.data.code == 200){
             // console.log(res.data.data)
            this.imageSwiper = res.data.data
            let list = res.data.data.list
            // console.log(list)
            // this.swiper = this.swiper.concat(list)
            this.lists = this.lists.concat(list)
          }
        })
      }
    },
    flushCom:function(){
　　　//router是路由实例,例如:var router = new Router({})
　　　//router.go(n)是路由的一个方法，意思是在history记录中前进或者后退多少步，0就表示还是当前，类似window.history.go(n)
      // this.$router.go(0);
      window.location.reload()
　　}
  },
  created(){
    // console.log(this.seriesId)
    // console.log(this.swiper)
    // console.log(this.lists)
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
        position: relative;
        height:180/@rem;
        img{
          width:100%;
          display:block;
          height:180/@rem;
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
          img{height:auto;}
      }
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
