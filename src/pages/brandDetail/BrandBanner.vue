
<template>
	<div class="brand-banner">
		<swiper :options="swiperOption" ref="mySwiper-p1" class="brandImg img-bg">
			<swiper-slide v-for = "(slide, index) in brandImages" :key = "index">
				<img :src="slide.imgUrl" width="100%">
			</swiper-slide>
      <div class="swiper-pagination swiper-p1" slot="pagination"></div>
		</swiper>
	</div>
</template>
<script>

export default {
  props: ['brandImages'],
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-p1',
          type: 'fraction',
          // type : 'custom',
          // type:'bullets',
          clickable: true
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false // 触碰后自动切换也不会停止
        },
        loop: true,
        observeParents: true,
        observer: true,
      },
      swiperSlides: ''
    }
  }
}
</script>
<style lang="less" scoped>
@rem:50rem;
.swiper-pagination-fraction{
  color: #ffffff;
  text-align: right !important;
}
.brandImg{
    width:750/@rem;
    height:420/@rem;
    background-image: url(/static/images/background_img/brand_top_banner.png);
}
// .swiper-p1{ // 实例化样式
//     text-align: right !important;
//     color: #fff;
//     font-size: 15px;
//     height:30px;
//     line-height:30px;
// }
.img-background{
  background-image: url(/static/images/background_img/brand_top_banner.png);
  background-size:100% 420/@rem;
  background-position:center center;
  background-repeat:no-repeat;
  overflow: hidden;
}
</style>
