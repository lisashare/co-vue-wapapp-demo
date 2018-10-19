<template>
    <!-- <router-link
    :to = "{name:'branddetail',query:{brandId:list.brandId}}"
    tag = "li" :brandId = 'list.brandId' class="brand-list-item"> -->
    <li class="brand-list-item" @click="setTitle">
        <dl>
            <dt class="img-wrap img-bg">
                <img width="100%" height="100%" :src="list.brandLogo">
                <div class="type">
                    <h3 class="title">{{list.brandName}}</h3>
                    <span>|</span>
                    <p class="sub-title">{{list.mainPoint}}</p>
                </div>
            </dt>
            <dd>
                <div class="core-feature">
                    <b>核心特色: </b>{{list.coreFeatures}}
                </div>
            </dd>
            <dd>
                <div class="tipbox">
                    <div class="tip-p">
                        <span class="tip">总部{{list.location}}</span>
                        <template v-if="list.cashBackMillion||list.wantToBoss">
                            <span class="tip"
                                v-for="(tag,index) in list.tagList"
                                :key="tag"
                                v-if="index<1">{{tag}}</span>
                        </template>
                         <template v-else>
                            <span class="tip"
                                v-for="(tag,index) in list.tagList"
                                :key="tag"
                                v-if="index<2">{{tag}}</span>
                        </template>
                        <span class="help-money" v-if="list.cashBackMillion">返现</span>
                        <span class="help" v-if="list.wantToBoss">万元助力金</span>
                    </div>
                    <div class="pinglun fr">
                        <i class="pinglun-icon"><img width="100%" src="/static/images/opportunity/icon/icon_talk@2x.png"></i>
                        <span class="pinglu-num">{{list.commentTotalNum}}</span>
                    </div>
                </div>

            </dd>
        </dl>
    <!-- </router-link> -->
    </li>
</template>
<script>
import utils from '@/modules/utils.js'
export default {
  name: 'BrandListItem',
  props: ['list'],
  data () {
    return {
      brandtitle: this.list.brandName,

      name: ''
    }
  },
  methods: {
    setTitle () {
      // 点击获取埋点来源
      var name = this.$route.name
      console.log(name)
      switch(name){
        case 'home' : this.name = '首页';window._vds.track("wap_business_list",{ "name": this.brandtitle,"act_source": this.name});break;   
        case 'opportunity' : this.name = '商机列表';window._vds.track("wap_business_list",{ "name": this.brandtitle,"act_source": this.name});break;     
      }
      utils.setSessionStore('brandtitle', this.brandtitle)
      this.$router.push({name: 'branddetail', query: {brandId: this.list.brandId}})
    }
  }
}
</script>
<style lang="less" scoped>
@rem: 50rem;
*{
    box-sizing: border-box;
}
.brand-list-item{
    position:relative;
    padding:30/@rem 48/@rem 30/@rem;
    overflow: hidden;
    .img-wrap{
        position:relative;
        width: 654/@rem;
        height: 279/@rem;
        // width: 100%;
        // height: auto;
        border-radius: 6/@rem;
        overflow: hidden;
        background-image:url(/static/images/background_img/shouye_tuijian.png);
        .type{
            position: absolute;
            left:0;
            bottom:0;
            width:100%;
            height: 66/@rem;
            background:rgba(0, 0, 0, .8);
            display: flex;
            align-items: center;
            .title{
                padding-left: 20/@rem;
                font-size: 29/@rem;
                //height: 58/@rem;
                //line-height: 58/@rem;
                color:#ffffff;
                max-width: 300/@rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                // font-weight: 600;
            }
            span{
                display: block;
                margin-left:18/@rem;
                margin-right:12/@rem;
                font-size:0;
                width:1px;
                height:24/@rem;
                background: #c1c1c1;
            }
            .sub-title{
                font-size: 27/@rem;
                //height: 58/@rem;
                line-height:58/@rem;
                color: #d5d5d5;
                max-width: 260/@rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }
}
// 核心特色
.core-feature{
    margin-top: 10/@rem;
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
    font-size: 25/@rem;
    line-height: 64/@rem;
   b{
       color: #666666;
       font-weight: 600;
    }
}
// tip
.tipbox{
    position: relative;
    width: 654/@rem;
    color:#999999;
    .tip-p{
        width: 554/@rem;
        display: flex;
        flex-wrap: wrap;
        span{
            // display: inline-block;
            margin-right: 12/@rem;
            text-align: center;
            margin-bottom: 7/@rem;
        }
    }

    .tip{
        font-size: 23/@rem;
        border-radius: 4/@rem;
        border:1px solid #bbbaba;
        padding: 0 4/@rem;
        height: 32/@rem;
        line-height: 32/@rem;
    }
    .help{
        // margin-top: 1px;
        margin-left: 8/@rem;
        padding-left:14/@rem;
        padding-right: 14/@rem;
        font-size: 20/@rem;
        height: 30/@rem;
        line-height: 32/@rem;
        text-align: center;
        color: #ffffff;
        background: #ff3354;
        border-radius: 15/@rem;
    }
    .help-money{
        // margin-top: 1px;
        margin-left: 8/@rem;
        padding-left:14/@rem;
        padding-right: 14/@rem;
        font-size: 20/@rem;
        height: 30/@rem;
        line-height: 32/@rem;
        color: #ffffff;
        background: #ff3354;
        border-radius: 15/@rem;
    }
    .pinglun{
        position: absolute;
        top:0;
        right: 0;
        width: 100/@rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 32/@rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        .pinglu-num{
            padding-left: 10/@rem;
            font-size: 24/@rem;
            color: #999999;
        }
        .pinglun-icon{
            width: 25/@rem;
            height: 24/@rem;
            img{
                display: inline-block;
                vertical-align: top;
            }
        }
    }
}
</style>
