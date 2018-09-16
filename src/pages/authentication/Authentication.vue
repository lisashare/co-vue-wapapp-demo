<template>
    <div class="authentication" v-if="brandInfo.company">
        <!-- <div class="header bc line-bottom">
            <i class="icon fa fa-angle-left" v-on:click = "$router.back(-1)"></i>
        </div> -->
        <div class="direction search-header">
            <i class="icon-left icon-left-white" v-on:click = "$router.back(-1)"></i>
        </div>
        <div class="bannerimg"><img width="100%" src="/static/images/opportunity/branddetail/banner_renzheng@2x.png"></div>
        <div class="container">

            <div class="companybox bc">
                <div class="companyname ellipsis border-bt" v-if="brandInfo.company">{{brandInfo.company}}</div>
                <div class="companyinfo" v-if="brandInfo.companyIntroduction">{{brandInfo.companyIntroduction}}</div>
            </div>
            <div class="qualification-certificate" v-if="certificate.list">
                <div class="linebox"></div>
                <div class="imgtitle">
                    <em>——</em>
                    <span>资质及证书</span>
                    <em>——</em>
                </div>
                <div class="imgbox">
                    <img v-if="certificate.list" v-for="(list,index) in certificate.list" :src="list.imgUrl" :key="index">
                    <!-- <img :src="certificate.list[1].imgUrl"> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import utils from '@/modules/utils.js'
export default {
  name: 'Authentication',
  data () {
    return {
      brandInfo: '',
      certificate: ''
    }
  },
  created () {
    this.brandInfo = JSON.parse(utils.getSessionStore('brandInfo'))
    this.certificate = this.brandInfo.certificateList
  }
}
</script>
<style lang="less" scoped>
@rem:50rem;
*{
    box-sizing: border-box;
}
.direction{
    background-color: transparent;
    i{
        color: #ffffff;
        font-size: 34/@rem;
    }
}
.container{
    position: absolute;
    right:0;
    left:0;
    top: 400/@rem;
    width: 100%;
    border-radius: 10/@rem 10/@rem 0 0;
    z-index: 1;
    overflow: hidden;
}
.bannerimg{
    width:100%;
    height: 420/@rem;
}
.companybox{
    padding: 0 24/@rem 22/@rem;
    margin-bottom: 14/@rem;
    .companyname{
        width: 700/@rem;
        font-size: 30/@rem;
        color: #000000;
        height: 90/@rem;
        line-height: 90/@rem;
        margin-bottom:22/@rem;
    }
    .companyinfo{
        font-size: 24/@rem;
        color: #666666;
        line-height: 48/@rem;
        text-indent: 1.8em;
        word-wrap:break-word;
    }
}
.imgtitle{
    text-align: center;
    color:#666666;
    padding: 52/@rem 0;
    font-size: 30/@rem;
    em{
        color: #d8dadc;
    }
    span{
        padding:0 8/@rem;
    }
}
.imgbox{
    margin: 0 24/@rem 67/@rem;
    border: 1px dotted #ccd6e4;
    padding: 42/@rem 48/@rem 42/@rem;
    img{width: 100%;margin-bottom: 38/@rem;}
    // img:first-child{
    //     margin-bottom: 38/@rem;
    // }
}
.linebox {
    width: 100%;
    height: 14/@rem;
    background: #f0f3f7;
    border-top: 1px solid #dbe0e5;
    border-bottom: 1px solid #dbe0e5;
}
</style>
