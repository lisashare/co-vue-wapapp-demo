<template>
    <div class="banner-image">
        <swiper :options="swiperOption" class="swiperY" >
            <swiper-slide class="swiper img-bg" v-for = "(list,index) in lists" :key = "index">
                <img width="100%" height="100%" preview="0" :src="list.imgUrl">
            </swiper-slide>
        </swiper>
        <!-- <gallary-img
            :swiper="swiper"
            :brandId="brandId"
            :busiType="busiType"
            v-show="showGallary"
            @close="handleGallaryClose"
      ></gallary-img> -->
    </div>
</template>
<script>
// import GallaryImg from '@/common/gallary/GallaryImg'
export default {
  name: 'BannerImage',
  props: ['swiper','brandId','busiType'],
  // components: {GallaryImg},
  data () {
    // const self = this
    return {
      // showGallary: false,
      imgIndex: '',
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 22,
        pagination: {
          // el: '.swiper-pagination'
          // clickable: false
        },
        observeParents: true,
        observer: true,
      },
      info:{
        brandId: this.brandId,
        busiType: this.busiType,
        pageNum: 1,
        pageSize: 10
      },
      lists: this.swiper.list,
      imageSwiper: ''
    }
  },
  created(){
    if(this.swiper.size !== this.swiper.total){
      this.info.pageSize = this.swiper.total
      this.imageLoadOver()
    }
    
  },
  methods: {
    imageLoadOver(){
        let params = {
          'apiUrl': this.weburl + 'mobile/share/listBrandImage',
          'params': this.info
        }
        this.$http.post( this.baseurl + '/brand/api',params).then(res=>{
          if(res.data.code == 200){
            // console.log(res.data.data)
            this.imageSwiper = res.data.data
            this.lists = res.data.data.list
          }
        })
      }
      
    },
    // handleBannerClick () {
    //   this.showGallary = true
    // },
    // handleGallaryClose () {
    //   this.showGallary = false
    // }
}
</script>
<style lang="less" scoped>
@rem: 50rem;
.swiper{
    width: 340/@rem;
    // background: #dd0;
    border-radius: 5px;
    // margin-right: 22/@rem;
    height: 200/@rem;
    overflow: hidden;
    background: #d8d8d8;
    // background-image:url(/static/images/background_img/);
}
.swiperY{
    margin: 40/@rem 0;
    padding: 0 24/@rem;
    height: 200/@rem;
    a{
        display: inline-block;
        width: 340/@rem;
        border-radius: 5px;
        margin-right: 22/@rem;
        overflow: hidden;
    }
}
</style>
