<template>
    <div class="brand-detail page-top">
        <!-- 头部title start -->
        <header-title :title="title"></header-title>
        <div v-if="loading==1" class="loading-animation">
            <div class="loading-img loading-logo">
                <img width="100%" src="/static/images/common/logo.png" alt="">
            </div>
            <div class="loading-img loading-circle Rotation">
                <img width="100%" src="/static/images/common/circle.png" alt="">
            </div>
            <p>正在加载...</p>
        </div>
        <div class="babaliang" v-else-if="loading==3">
            <img src="/static/images/common/no_03.png" alt="">
        </div>
        <div v-else :class="[iframe ? 'change-content':'']">
            <!-- 选项卡 -->
            <ul class="brand-tab" v-if='iframe'>
                <li v-for="item of tab"
                    :key="item.id"
                    @click="handlerTabChange(item.id)"
                    :class="[activetab==item.id ? 'activeTabClass': '']">{{item.title}}</li>
            </ul>

            <div v-if="activetab == 1" class="detailurl">
                <!-- 品牌介绍 start -->
                <brand-banner v-if="brandImages" :brandImages = 'brandImages'></brand-banner>
                <div class="brand-introduce">
                    <div class="name border-bt over bc">
                        <div class="title ellipsis" v-if="brandInfo">{{ brandInfo.company }}</div>
                        <div class="comments">
                            <div class="concern" @click="mineAttention">
                                <div v-show="!attention">
                                    <i class="img-bg"><img width="100%" src="/static/images/opportunity/branddetail/icon_attention_normal.png" alt=""></i>
                                    <span class="concern-plus">关注</span>
                                </div>
                                <div v-show="attention">
                                    <i class="img-bg"><img width="100%" src="/static/images/opportunity/branddetail/icon_attention_hover@3x.png" alt=""></i>
                                    <span class="concern-plus" style="color: #279683;">已关注</span>
                                </div>
                            </div>
                            <!-- 跳转到认证页面 -->
                            <span class="authentication" @click="setCertificate">
                                <i class="img-bg"></i>
                                <span class="authenticated">已认证</span>
                            </span>
                        </div>
                    </div>
                    <!-- 品牌投资信息介绍 -->
                    <div class="intro border bc mar-bt">
                        <ul class="investment over">
                            <li class="investment-volume">
                                <i><img width="100%" src="/static/images/opportunity/branddetail/icon_rmb.png"></i>
                                <span>预估总投资额</span><span class="money">{{ brandInfo.invesmentAmount }}</span>
                            </li>
                            <li class="investment-info">
                                <ul>
                                    <li class="" v-if="brandInfo.joinInvestMax">加盟费：{{joinInvest}}万</li>
                                    <li class="">店铺区域：{{brandInfo.joinRequire}}</li>
                                    <li class="">合同期限：{{brandInfo.contractPeriod}}年</li>
                                    <li class="">关注人数：{{brandInfo.focusCount}}人</li>
                                    <li class="main-product">
                                        <span>主营产品：</span>
                                        <span class="main-item" v-if="brandInfo.mainProductList">{{brandInfo.mainProductList|item}}</span>
                                    </li>
                                </ul>
                            </li>
                            <li class="investment-condition">
                                <!-- <router-link to="/" tag="div" class="calculator"> -->
                                <div class="calculator" @click="popup(1)">
                                    <div class="button_cal">
                                        <img width="100%" src="/static/images/opportunity/branddetail/button_cal.png" class="button_address">
                                    </div>
                                    <p>投资计算器</p>
                                    <div class="arrow">
                                        <img width="100%" src="/static/images/opportunity/branddetail/icon_arrow.png">
                                    </div>
                                <!-- </router-link> -->
                                </div>
                                <router-link :to="{name:'joinarea',query:{brandId}}" tag="div" class="area">
                                    <div class="button_addr">
                                        <img width="100%" src="/static/images/opportunity/branddetail/button_address.png" class="button_address">
                                    </div>
                                    <p>加盟区域</p>
                                    <div class="arrow">
                                        <img width="100%" src="/static/images/opportunity/branddetail/icon_arrow.png">
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <!-- 盈利预估 -->
                    <div class="profit border-bt bc mar-bt" v-if="brandInfo.tableAnalysis">
                        <h2 class="item border">盈利预估</h2>
                        <div class="profit-table">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>预估初始投资总额</td><td>{{brandInfo.invesmentAmount}}</td>
                                        </tr>
                                        <tr>
                                            <td>预估客单价</td><td>{{brandInfo.tableAnalysis.single}}元/人</td>
                                            </tr>
                                        <tr>
                                            <td>预估日客流量</td><td>{{brandInfo.tableAnalysis.dailyFlow}}人/日</td>
                                            </tr>
                                        <tr>
                                            <td>预估月销售额</td>
                                            <td>{{brandInfo.tableAnalysis.monthlySales}}万元</td>
                                        </tr>
                                        <tr>
                                            <td>预估毛利率</td><td>{{brandInfo.tableAnalysis.grossProfit}}%</td>
                                        </tr>
                                        <tr>
                                            <td>预估回报周期</td><td>{{brandInfo.returnCycleMin}}~{{brandInfo.returnCycleMax}}个月</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>注：以上为预估数值，仅供参考。</p>
                        </div>
                    </div>
                    <!-- 主打产品 -->
                    <div v-if="brandInfo.advantageImg">
                        <div v-if="brandInfo.advantageImg.list">
                            <div class="product border-bt bc mar-bt" v-if="brandInfo.advantageImg.list.length">
                                <h2 class="item border">主打产品</h2>
                                <banner-image v-if="brandInfo" busiType="6" :brandId="brandId" :swiper = "brandInfo.advantageImg"></banner-image>
                            </div>
                        </div>
                    </div>
                    <!-- 门店实景 -->
                    <div v-if="brandInfo.outdoorScene">
                        <div v-if="brandInfo.outdoorScene.list">
                            <div class="scenery border-bt bc mar-bt" v-if="brandInfo.outdoorScene.list.length">
                                <h2 class="item border">门店实景</h2>
                                <banner-image02 v-if="brandInfo" busiType="3" :brandId="brandId" :swiper = "brandInfo.outdoorScene"></banner-image02>
                            </div>
                        </div>
                    </div>
                    <!-- 品牌视频 -->
                    <div v-if="brandInfo.video">
                        <div class="video border-bt bc mar-bt" v-if="brandInfo.video.list.length">
                            <h2 class="item border">品牌视频</h2>
                            <banner-video v-if="brandInfo" :brandId="brandId" :swiper = "brandInfo.video"></banner-video>
                        </div>
                    </div>
                    <!-- 创始人问答区 -->
                    <div class="founder border-bt bc mar-bt" v-if="brandInfo.founderRsp">
                        <!-- 如果有创始人问答内容 -->
                        <h2 class="item border" v-if="brandInfo.founderRsp">
                            <span>创始人问答区</span>
                            <span class="question" @click="popup(2)"><img src="/static/images/opportunity/branddetail/icon_comment.png"/>提问与评论</span>
                        </h2>
                        <div class="explain border-bt" v-if="brandInfo.founderRsp">
                            <div class="prople">
                                <div class="information over">
                                    <p class="over">
                                        <img width="100%" :src="brandInfo.founderRsp.headUrl">
                                    </p>
                                    <h3>{{brandInfo.founderRsp.founderName}}</h3>
                                    <div class="label">
                                        <span v-for="(item,index) in brandInfo.founderRsp.founderTag" :key="index">{{item}}</span>
                                    </div>
                                </div>
                                <div class="synopsis">
                                    <h3>{{brandInfo.founderRsp.introduction}}</h3>
                                    <p>{{brandInfo.founderRsp.bewrite}}</p>
                                </div>
                            </div>
                        </div>
                        <!-- 精选回答 start-->
                            <!-- 如果有精选问答内容 -->
                        <div class="answer" v-if="brandInfo.askRsp">
                            <h2>
                                <span>HOT</span><span>精选问答</span>
                                <span class="question" @click="popup(2)">
                                    <img src="/static/images/opportunity/branddetail/icon_comment.png">提问与评论
                                </span>
                            </h2>
                            <!-- 精选回答内容 start -->
                            <div class="answerComent">
                                <div class="answername" v-for="(item,index) in brandInfo.askRsp" :key="index">
                                    <dl class="answerinfo over">
                                        <dt class="avatar">
                                            <div class="avatar-box img-bg over">
                                                <img width="100%" :src="item.askHeadUrl" alt="">
                                            </div>
                                        </dt>
                                        <dd class="avatarname">
                                            <p class="avatarname-p position-re font-w7">
                                                <span>{{item.askName}}</span>
                                                <i class="wen"><img width="100%" height="100%" src="/static/images/opportunity/branddetail/wen.png" alt=""></i>
                                            </p>
                                            <p class="answerwen">{{item.problem}}</p>
                                            <div class="answerReturn position-re">
                                                <!-- 修饰箭头 -->
                                                <div class="riangle-up"></div>
                                                <dl class="answerfounder over">
                                                    <dt class="avatar">
                                                        <div class="avatar-box img-bg over">
                                                            <img width="100%" :src="item.founderHeadUrl" alt="">
                                                        </div>
                                                    </dt>
                                                    <dd class="">
                                                        <p class="avatarname-p position-re font-w7">
                                                            <span>创始人&nbsp;{{item.founderName}}</span><i class="da"><img width="100%" height="100%" src="/static/images/opportunity/branddetail/da.png" alt=""></i>
                                                        </p>
                                                        <p class="hello">{{item.answer}}</p>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <!-- 精选回答内容 end -->
                        </div>
                        <!-- 精选回答 end -->
                    </div>
                    <div v-if="brandComment.list">
                        <brand-comment v-if="brandComment.list.length" :brand-comment='brandComment' :brandId="brandId" :popup="popup"></brand-comment>
                    </div>
                    <div class="footer">
                        <div class="icon-button" @click="mineAttention">
                            <!-- <div class="icon-share">
                                <i><img src="/static/images/common/icon_fenxiang@2x.png" alt=""></i>
                                <span>分享</span>
                            </div>
                            <div class="column-line"></div>           -->
                            <div class="icon-concern" v-show="!attention">
                                <i><img src="/static/images/common/icon_follow@2x.png" alt=""></i>
                                <span>关注</span>
                            </div>
                            <div class="icon-concern" v-show="attention">
                                <i><img src="/static/images/common/icon_follow_hover@2x.png" alt=""></i>
                                <span>关注</span>
                            </div>
                        </div>

                        <div class="icon-contact" @click="contactConsultant">
                            <i><img src="/static/images/common/user_03.png" alt=""></i>
                            <span>创业顾问</span>
                        </div>
                    </div>
                </div>
                <!-- 品牌介绍 end -->
            </div>
            <!-- iframe -->

            <!-- <div v-else class="iframeurl" style="overflow: auto;-webkit-overflow-scrolling:touch;width: 100%;height: 100vh;"> -->
                <!-- <iframe v-if="type" :src="outurl" scrolling="auto" frameborder="0" width="100%" height="100%"></iframe>
                <iframe v-else :src="outurl" frameborder="0" height="100%" scrolling='no' style="width: 1px; min-width: 100%; *width: 100%;"></iframe> -->
                <!-- <iframe v-if="type" :src="outurl" frameborder="0" width="100%" height="100%"></iframe>
                <iframe v-else :src="outurl" frameborder="0" height="100%" style="width: 1px; min-width: 100%; *width: 100%;"></iframe>
            </div> -->

            <div v-else :class="[type==true?'iframeurl':'minheight']">
                <iframe :src="outurl" frameborder="0"></iframe>
            </div>

            <!-- 顶部banner -->
            <!-- 提示下载app  投资计算器-->
            <div class="mask" v-if="pointToAppCalcul" @click="hide(1)">
                <img class="calculatorTag position" src="/static/images/opportunity/branddetail/fenxiang.png">
            </div>
            <!-- 提示下载app  提问与评论-->
            <div class="mask" v-if="pointToAppQuest" @click="hide(2)">
                <img class="questionTag position" src="/static/images/opportunity/branddetail/share.png">
            </div>
       </div>
    </div>
</template>
<script>
import Vue from 'vue'
import utils from '@/modules/utils.js'
import config from '@/modules/http'

import HeaderTitle from '@/pages/components/HeaderTitle.vue'
import BrandBanner from './BrandBanner.vue'
import BannerImage from './BannerImage'
import BannerImage02 from './BannerImage02'
import BannerVideo from './BannerVideo'
import BrandComment from './BrandComment'
export default {
  name: 'BrandDetail',
  components: {HeaderTitle, BrandBanner, BannerImage,BannerImage02,BannerVideo, BrandComment},
  data () {
    return {
      title: '',
      tab: [
          {id: 1,title: '品牌详情'},
          {id: 2,title: '资料官网'}
      ],
      activetab: 1,

      loading: 1,
      brandId: '', // 品牌id动态路由
      brandInfo: '',
      brandImages: '',
      pointToAppCalcul: false, // 点击计算器，控制显示
      pointToAppQuest: false,  // 点击提问与评论，控制显示
      brandComment: '',
      attention: false, // 关注
      iframe: false,
      outurl:'',

      uid: '',
      mobile: '',
      sdktoken: '',
      accesstoken: '',
      type: true //判断安卓类型
    }
  },
  filters: { // 组件的选项中定义本地的过滤器
    item: function (value) {
      var str = ''
      var len = value.length
      for (var i = 0; i < len; i++) {
        if (value[i] !== value[len - 1]) {
          str += value[i] + ' | '
        } else {
          str += value[i]
        }
      }
      return str
    }
  },
  computed: {
    joinInvest () {
      let max = this.brandInfo.joinInvestMax
      let min = this.brandInfo.joinInvestMin
      if (max === min) {
        return max
      }
      return min + '~' + max
    }
  },
  methods: {
    contactConsultant(){ // 点击创业顾问
        window._vds.track("wap_business_details_con",{ "name": this.title});

        // 判断是否登录，获取sessionId
        this.uid = utils.getCookie('uid')
        this.sdktoken = utils.getCookie('sdktoken')
        this.mobile = utils.getCookie('mobile')
        if (!this.uid && !this.mobile && !this.sdktoken) {
            this.$router.push({name: 'login'})
        } else {

            // location.href="http://localhost:3000/webdemo/h5/index.html#/chat/p2p-9c09d7a4417c406293a115a8e41901c9"
            this.getSessionId()
        }
    },
    getSessionId () {
        let params = {
            'params': {
                'customerIM': this.uid,
                'customerPhone': this.mobile
            }
        }
        this.$http.post(this.baseurl + '/im/getimaccount', params).then(res => {
            if(res.data.code == 200){
                let sessionId = res.data.data
                utils.setCookie('sessionId', sessionId)
                // console.log(sessionId)
                var sendImageUrl = ''
                if(this.brandInfo.logo){
                    sendImageUrl = this.brandInfo.logo
                }
                let frombrand = {
                    sendBrandID : this.brandId,
                    sendImageUrl : sendImageUrl,    // 消息中的图片地址
                    titleName  : this.title,        // 消息标题
                    subTitle: this.brandInfo.invesmentAmount       // 消息描述
                }
                // 页面的id,存储图片，品牌，投资额
                utils.setCookie('frombrand', JSON.stringify(frombrand))
                // console.log(frombrand)
                // 跳转
                location.href = config.imChat + sessionId
            }
        }).catch((error) => {
            if(error.response.status == 401){
                utils.clearCookie()
                this.$router.push({name:'login'})
            }
        })
    },
    handlerTabChange(id){  // 切换选项卡
        this.activetab = id
        if(id !== 1){  // 选项卡切换不等1的时候是资料官网，打点
            window._vds.track("wap_business_details_data",{ "name": this.title});
        }
    },
    getBrandIdDetail () {
      let {brandId} = this
      let params = {
        'brandId': brandId
      }
      this.$http.post(this.baseurl + '/home/detailbrand', params).then((res) => {
          if(res.data.code==200){
                this.brandInfo = res.data.data
                this.loading = 2
                this.brandImages = res.data.data.promotes // 顶部的轮播
                this.brandComment = res.data.data.phoneComment
                this.title = this.brandInfo.brandName
                this.attention = res.data.data.attention

                this.iframe = res.data.data.hasouturl
                if(this.iframe){
                    this.outurl = res.data.data.outurl
                }
          }
      })
    },
    // 点击联系电话
    phoneCall () {
      window.location.href = 'tel:010-53579588'
    },
    setCertificate () {
      utils.setSessionStore('brandInfo', this.brandInfo)
      this.$router.push({name: 'authentication'})
    },
    // 点击我的关注
    mineAttention () {
      // 关注成功埋点
      window._vds.track("wap_business_details_attention",{ "name": this.title});

      // 取cookie 判断是否登录，如果未登录跳转到登录页面，如果登录，请求，关注成功后，改变样式
      this.accesstoken = utils.getCookie('accesstoken')
      if (!this.accesstoken) {
          this.$router.push({name: 'login'})
      } else {
          if(this.attention){
            var params = {
                    "do": "unfollow",
                    "busId": this.brandId
                }
                this.$http.post(this.baseurl + '/home/dobrandfollow',params).then(res => {
                    if(res.data.code == 200){
                        this.attention = false
                        utils.mobileTip({
                            "obj":Vue,
                            "content":"取消关注"
                        })
                    }
                })
                .catch((error) => {
                    // console.log(error)
                    if(error.response.status == 401){
                        utils.clearCookie()
                        this.$router.push({name:'login'})
                    }else{
                        utils.mobileTip({
                            "obj":Vue,
                            "content":"取消关注失败，请稍后重试"
                        })
                    }
                })
          }else{
              var params = {
                    "do": "follow",
                    "busId": this.brandId
                }
              this.$http.post(this.baseurl + '/home/dobrandfollow',params).then(res => {
                if(res.data.code == 200){
                    this.attention = true
                    utils.mobileTip({
                        "obj":Vue,
                        "content":"关注成功"
                    })

                }
              })
               .catch((error) => {
                    console.log(error)
                    if(error.response.status == 401){
                        utils.clearCookie()
                        this.$router.push({name:'login'})
                    }else{
                        utils.mobileTip({
                            "obj":Vue,
                            "content":"取消关注失败，请稍后重试"
                        })
                    }
                })
          }
      }
    },
    // 点击投资计算器
    popup (item) {
      if (item === 1) {
        this.pointToAppCalcul = true
      }
      if (item === 2) {
        this.pointToAppQuest = true
      }
      document.getElementsByTagName('body')[0].className = 'overHidden'
    },
    // 点击提示遮罩隐藏
    hide (item) {
      if (item === 1) {
        this.pointToAppCalcul = false
      }
      if (item === 2) {
        this.pointToAppQuest = false
      }
      document.getElementsByTagName('body')[0].className = ''
    }
  },
  created () {
    // 获取设备判断是ios android 显示iframe标签
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    if(isAndroid){
        this.type = true
    }else{
        this.type = false
    }

    this.title = utils.getSessionStore('brandtitle')
    this.brandId = this.$route.query.brandId
    if(this.brandId){
        this.getBrandIdDetail()
        if (this.title === '') {
          this.title = this.brandInfo.brandName
        }
    }else{
        this.loading = 3
    }
  }
}
</script>
<style lang="less" scoped>
@rem: 50rem;
*{
    box-sizing: border-box;
}
.detailurl{
    padding-bottom: 98/@rem;
}
.iframeurl{
    position: absolute;
    top: 188/@rem;
    right: 0;left:0;
    bottom:0;
    width: 100%;
    height: 100vh;
    iframe{
      width: 100%;
      height: 100%;
    }
}
.minheight{
    iframe{
      width: 100%;
      min-height: 100vh;
    }
}
.change-content{
    padding-top: 100/@rem;
    .brand-tab{
        position: fixed;
        top: 88/@rem;left:0;right:0;
        width: 100%;
        height: 100/@rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #ffffff;
        z-index: 10;
        li{
            width: 160/@rem;
            height:64/@rem;
            line-height: 64/@rem;
            border: 1px solid #35AEB6;
            font-size: 26/@rem;
            text-align: center;
            color: #35AEB6;
        }
        li:first-child{
            border-right: none;
            border-radius:8/@rem 0 0 8/@rem;
        }
        li:last-child{
            border-left: none;
            border-radius: 0 8/@rem 8/@rem 0;
        }
        .activeTabClass{
            background: #35AEB6;
            color: #ffffff;
        }
    }
}
.footer{
    position: fixed;
    width: 100%;
    height: 98/@rem;
    bottom: 0;right: 0;
    background: #f0f0f0;
    font-size: 20/@rem;
    color: #333333;
    display: flex;
    z-index: 9;
    .icon-button{
        display: flex;
        flex: 1;
        height: 98/@rem;
        text-align: center;
        justify-content: center;
        position: relative;;
        padding: 14/@rem 0 10/@rem;
        .icon-share,.icon-concern{
            // width: 50%;
            span{
                display: block;
                line-height: 20/@rem;
            }
        }
        i{
            display: block;
            // margin-bottom: 10/@rem;
            img{
                width: 44/@rem;
                height: 44/@rem;
            }

        }
    }
    .icon-contact{
        width: 402/@rem;
        line-height: 98/@rem;
        font-size: 28/@rem;
        color: #ffffff;
        text-align: center;
        background: #1ca998;
        font-weight: 600;
        i{
            img{
                width: 42/@rem;
                height: 46/@rem;
                margin-right: 15/@rem;
                display: inline-block;
                vertical-align: middle;
            }
        }

    }
    .column-line{
        position:absolute;
        width: 1px;
        height: 70/@rem;
        background: #cbcbcb;
        bottom: 10/@rem;
        left: 50%;
        -webkit-transform: translate3d(-50%,0, 0);
        -ms-transform: translate3d(-50%, 0, 0);
        transform: translate3d(-50%, 0, 0);
    }

}
.babaliang{
    position: relative;
    img{
        display: block;
        margin: 282/@rem auto 0;
        width: 438/@rem;
        height: 375/@rem;
    }
}
.loading-animation{
    margin: 40% auto;
}
.riangle-up{  // 修饰箭头
    width: 0;
    height: 0;
    border-left: 22/@rem solid transparent;
    border-right: 22/@rem solid transparent;
    border-bottom: 22/@rem solid #f4f4f4;
    position: absolute;
    left: 27/@rem;
    top: -16/@rem;
}

.mask{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 1999;
}
.calculatorTag{
    width: 582/@rem;
    height: 393/@rem;
}
.questionTag{
    width: 600/@rem;
    height: 410/@rem;
}
.position{
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%, -54%, 0);
    -ms-transform: translate3d(-50%, -54%, 0);
    transform: translate3d(-50%, -54%, 0);
}
// 头部title start
.icon { // 返回的小箭头
    position: absolute;
    top: 50%;
    left: 24/@rem;
    -webkit-transform: translate3d(0, -50%, 0);
    -ms-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0);
    font-size: 38/@rem;
}
.txt {
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 10/@rem;
    padding: 0 14/@rem;
    display: block;
    height: 88/@rem;
    line-height: 88/@rem;
    text-align: center;
    img{
        width:34/@rem;
        height: 32/@rem;
    }
}
.mar-bt{margin-bottom: 14/@rem;}
// 项目标题
.item{
    height: 80/@rem;
    line-height: 80/@rem;
    padding-left: 14/@rem;
    border-left: 10/@rem solid;
    font-size: 32/@rem;
    font-weight: 600;
    color: #333333;
}
// 头部title end
// 品牌介绍 start
.brand-introduce{
    position: relative;
    background: #eff3f7;
    // padding-bottom: 14/@rem;
}
/* 品牌名称 */
.name{
    display: flex;
    justify-content: space-between;
    // padding: 34/@rem 24/@rem 30/@rem;
    padding: 0 24/@rem;
    margin-bottom: 6/@rem;
    .title{
        width: 410/@rem;
        font-size: 32/@rem;
        line-height: 96/@rem;
        font-weight: 600;
    }
    .comments{
        display: flex;
        align-items: center;
        font-size: 28/@rem;
        color:#666666;
        line-height: 33/@rem;
        .concern>div{
            display: flex;
            margin-right: 37/@rem;
            i{
                width:33/@rem;
                height:33/@rem;
                display: block;
                margin-right: 9/@rem;
            }
        }
        .authentication{
            display: flex;
            i{
                width:33/@rem;
                height:33/@rem;
                display: block;
                background-image:url('/static/images/opportunity/branddetail/icon_attestation_hover.png');
                margin-right: 9/@rem;
            }
        }
        .authenticated{
            color: #279683;
        }
    }
}
/* 加盟信息 */
.intro{
    margin-bottom:15/@rem;
    padding: 24/@rem 24/@rem 40/@rem;
    .investment{
        .investment-volume{
            margin-bottom: 16/@rem;
            padding-top:2px;
            display: flex;
            font-size: 30/@rem;
            font-weight: 700;
            i{
                display: block;
                width:40/@rem;
                height:40/@rem;
                margin-right: 7/@rem;
            }
            span{
                line-height:40/@rem;
                &.money{
                    margin-left: 5px;
                    color: #dd1400;
                }
            }
        }
        .investment-info{
            ul{
                display: flex;
                justify-content: space-between;
                flex-wrap:wrap;
                li{
                    width: 50%;
                    line-height:53/@rem;
                    font-size: 26/@rem;
                }
                li:last-child{
                    width:100%;
                }
            }
        }
        .investment-condition{
            display: flex;
            height: 70/@rem;
            margin-top:26/@rem;
            font-size: 26/@rem;
            font-weight: 700;
            .calculator,.area{
                display: flex;
                align-items: center;
                flex: 1;
                p{
                    margin:0 21/@rem 0 13/@rem;
                }
            }
            .calculator{
                border-right: 1px solid #dddddd;
            }
            .arrow{
                width:15/@rem;
                height:26/@rem;
            }
        }
    }
    .button_cal{
        margin-left:36/@rem;
        width: 70/@rem;
    }
    .button_addr{
        margin-left:74/@rem;
        width: 70/@rem;
    }
}
/* 盈利预估 */
.profit{
    h2{
        border-left-color: #0098cb;
    }
    .profit-table{
        margin:24/@rem 24/@rem 0/@rem;
        table {
            display: table;
            border-collapse: separate;
            border-spacing: 2px;
            border-color: grey;
        }
        table{
            width: 100%;
            font-size: 26/@rem;
            tbody{
                // border: 1px solid #fff;
                tr{
                    height: 46/@rem;
                }
                tr:nth-child(odd) {
                    background: #d9eeef;
                }
                tr:nth-child(even) {
                    background: #f2f9fb;
                }
                tr:last-child{
                    font-weight: 700;
                }
                td:first-child {
                    width: 40%;
                    color: #0d8274;
                    padding-left: 22/@rem;
                }
                td:last-child {
                    width: 60%;
                    color: #666666;
                    text-align: center;
                }
            }
        }
    }
    p{
        height: 64/@rem;
        line-height:64/@rem;
        font-size: 24/@rem;
        color: #35aeb6;
    }
}
/* 主打产品 */
.product{
    h2{border-left-color:#8299d5;}
}
/* 门店实景 */
.scenery{
    h2{border-left-color:#5dbec5;}
}
/* 品牌视频 */
.video{
    h2{border-left-color:#5ab379;}
}

/* 创始人问答 */
.founder{
    h2{
        border-left-color:#0098cb;
    }
}
.explain{
    margin: 0 24/@rem;
    padding: 59/@rem 0 88/@rem;
    .prople {
        position: relative;
        min-height: 382/@rem;
        background: #eff3f7;
        border-radius: 8px;
        border: 1px solid #dae0e6;
        .information{
            position: absolute;
            width: 236/@rem;
            height: 420/@rem;
            top:-21/@rem;
            left: 20/@rem;
            border-radius: 8px;
            box-shadow: #b0aeb5 10/@rem 10/@rem 22/@rem;
            background: #ffffff;
            text-align: center;
            padding-top: 20/@rem;
            h3{
                font-size: 30/@rem;
                font-weight: 700;
                line-height: 70/@rem;
                color: #333333;
            }
            p{
                display: inline-block;
                width: 200/@rem;
                height: 200/@rem;
                border: 1px solid #dae0e6;
                padding: 10/@rem;
                border-radius: 50%;
                img{
                    border-radius: 50%;
                }
            }
            .label{
                padding-left: 10px;
                span{
                    border: 1px solid #e1e1e1;
                    color: #999;
                    padding: 8/@rem;
                    border-radius: 8px;
                    float: left;
                    margin-right: 20/@rem;
                    margin-bottom: 20/@rem;
                    font-size: 20/@rem;
                    line-height: 20/@rem;
                }
            }
        }
        .synopsis{
            width: 426/@rem;
            margin-left: 276/@rem;
            padding: 20/@rem 22/@rem 20/@rem 0;
            h3{
                font-size: 28/@rem;
                font-weight: 700;
                color: #333333;
            }
            p{
                line-height: 36/@rem;
                color: #666666;
                margin-top: 7px;
                font-size: 22/@rem;
            }
        }
    }
}
/* 精选回答 */
.answer{
    h2{
        padding: 0 24/@rem;
        height: 90/@rem;
        line-height: 90/@rem;
        color:#333333;
        font-size: 32/@rem;
        span:first-child {
            display: inline-block;
            vertical-align: middle;
            font-size: 24/@rem;
            width: 51/@rem;
            height:30/@rem;
            line-height: 30/@rem;
            background: #ff3021;
            color: #fff;
            border-radius: 2px;
            // font-weight: 500;
            margin-right: 20/@rem;
            text-align:center;
        }
    }
}
// 问
.answername{
    padding:10/@rem 0 40/@rem;
    margin:0 24/@rem;
    // margin:10/@rem 24/@rem 40/@rem;
    .answerinfo{
        display: flex;
        .avatar-box{
            width: 62/@rem;
            height: 62/@rem;
            border-radius: 50%;
        }
    }
    .avatarname{ // 提问者头像
        width: 620/@rem;
        padding-left: 20/@rem;
        padding-top: 6/@rem;
        .avatarname-p{  // 提问者样式
            line-height: 50/@rem;
            font-size: 24/@rem;
            color:#333333;
        }
    }
    .answerwen{
        line-height: 36/@rem;
        font-size: 26/@rem;
        // margin-bottom:15/@rem;
        margin-bottom: 27/@rem;
    }
}
// 回答
.answerfounder{
    display: flex;
    padding: 20/@rem 20/@rem 14/@rem ;
    background:#f4f4f4;
    border-radius: 8px;
    color: #333333;
    .kefuhuifu{  // 评论下的客服回复
        padding:0;
        p:first-child{
            color: #ff0404;
            font-size: 26/@rem;
        }
    }
    dd{
        padding-left:20/@rem;
    }
    .hello{
        font-size: 26/@rem;
        line-height: 32/@rem;
        color: #666666;
    }
}
/* 评论区 */
.comment{
    h2{border-left-color:#8299d5;}
    .answerComent{
        padding-top: 30/@rem;
    }
    .answerReturn{
        margin-bottom: 20/@rem;
    }
}
.question{
    font-weight: 500;
    float:right;
    padding-right: 10px;
    color: #f46e65;
    font-size: 14px;
    img{
        width:14px;
        height:14px;
        margin-right:10/@rem;
    }
}
.position-re{
    position: relative;
}
.wen,.da{
    position: absolute;
    width:40/@rem;
    height: 36/@rem;
    overflow: hidden;
    margin-left: 20/@rem;
    img{
       display: block;
    }
}
.time{
    font-size: 22/@rem;
    color: #999999;
}
// 品牌介绍 end
</style>
