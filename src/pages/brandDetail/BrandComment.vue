<template>
    <!-- 评论区 -->
    <div class="comment">
        <h2 class="item border bc">
            <span>评论区</span>
            <span class="question" @click="popup(2)"><img src="/static/images/opportunity/branddetail/icon_comment.png"/>提问与评论</span>
        </h2>
        <!-- 问答内容 -->
        <div class="answerComent bc" v-if="loading">
            <div class="answername" v-if="lists">
                <dl class="answerinfo over">
                    <dt class="avatar">
                        <div class="avatar-box img-bg over">
                            <img width="100%" :src="lists[0].userImg ? lists[0].userImg:'/static/images/opportunity/branddetail/default_head.png'" alt="">
                        </div>
                    </dt>
                    <dd class="avatarname">
                        <p class="avatarname-p position-re font-w7">
                            <span>{{lists[0].userName}}</span>
                        </p>
                        <p class="answerwen">{{lists[0].content}}</p>
                        <div class="answerReturn" v-if="lists[0].reply.replyContent">
                            <dl class="answerfounder over" >
                                <!-- 客服回复 -->
                                <dd class="kefuhuifu">
                                    <p class="fl">
                                        <span>客服回复:&nbsp; </span>
                                    </p>
                                    <p class="hello">{{lists[0].reply.replyContent}}</p>
                                </dd>
                            </dl>
                        </div>
                    </dd>
                </dl>
            </div>
            <p class="allComment" @click="showComment">所有评论<i class="fa fa-angle-down"></i></p>
        </div>
        <div class="answerComent bc position-re" v-if="!loading">
            <mescroll ref="mescroll" :upCallback="commentData" :emptyKeyImg="emptyKeyImg" :myTip = "myTip" :upAuto="upAuto" warpId="brand_comment_scroll" id="brand_comment_scroll">
                <div ref="content" class="content-wrap">
                    <div class="answername border-bt" v-for = "(list,index) in lists" :key = "index">
                        <dl class="answerinfo over"
                        >
                            <dt class="avatar">
                                <div class="avatar-box img-bg over">
                                    <img width="100%" :src="list.userImg||'/static/images/opportunity/branddetail/default_head.png'" alt="">
                                </div>
                            </dt>
                            <dd class="avatarname">
                                <p class="avatarname-p position-re font-w7">
                                    <span>{{list.userName}}</span>
                                </p>
                                <p class="answerwen">{{list.content}}</p>
                                <div class="answerReturn" v-if="list.reply.replyContent">
                                    <dl class="answerfounder over">
                                        <!-- 客服回复 -->
                                        <dd class="kefuhuifu" >
                                            <p class="fl">
                                                <span>客服回复:&nbsp; </span>
                                            </p>
                                            <p class="hello"> {{list.reply.replyContent}}</p>
                                        </dd>
                                    </dl>
                                </div>
                                <div class="time">{{list.commentTime|formatMsgTime}}</div>
                            </dd>
                        </dl>
                    </div>
                </div>
            </mescroll>
            <p class="finishComment" v-if="bottomShow" @click="hideComment">已经全部加载完毕<i class="fa fa-angle-up"></i></p>
        </div>
    </div>
</template>
<script>
import mescroll from '@/common/mescroll/Mescroll.vue' /* 分页组件 */
export default {
  name: 'Comment',
  props: ['popup', 'brandComment', 'brandId'],
  components: {mescroll},
  data () {
    return {
      loading: true,
      bottomShow: false,
      upAuto: false,
      lists: this.brandComment.list,
      info: {
        brandId: this.brandId,
        pageNum: 1,
        pageSize: 10
      },
      myTip: 1,
      emptyKeyImg: 1
    }
  },
  //   created(){
  //       console.log(this.brandComment)
  //   },
  methods: {
    // 上拉加载
    commentData (page) {
      let {info} = this
      info.pageNum = page.num + 1
      info.pageSize = page.size

      let params = {
        'apiUrl': this.weburl + 'mobile/share/listBrandComment',
        'params': info
      }
      this.$http.post(this.baseurl + '/brand/api', params).then((res) => {
        // console.log(res.data.data)
        if (res.data.code == 200) {
          let list = res.data.data.list
          this.$refs.mescroll.endSuccess(list.length)
          this.lists = this.lists.concat(res.data.data.list)

          if (list.length < page.size) {
            this.bottomShow = true
          }
          // list.length 根据当前页返回的 list 数据数量，来判断是否还有下一页数据
        }
      }).catch((error) => {
        this.$refs.mescroll.endErr()
      })
    },
    // 点击显示评论列表
    showComment () {
      this.loading = false
    },
    // 点击关闭评论列表，仅仅显示第一条评论
    hideComment () {
      this.loading = true
      this.bottomShow = false
    }
  }
}
</script>

<style lang="less" scoped>
@rem: 50rem;
*{
    box-sizing: border-box;
}
.mar-bt{margin-bottom: 14/@rem;}
//所有评论
.allComment{
    text-align: center;
    font-size: 28/@rem;
    color: #666666;
    height: 58/@rem;
    i{
        margin-left: 10/@rem;
    }
}
.content-wrap{ // 评论外层
    margin-bottom: 30/@rem;
}
.finishComment{
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-size: 28/@rem;
    color: #666666;
    line-height: 86/@rem;
    i{
        margin-left: 10/@rem;
    }
}
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
            font-size: 24/@rem;
            width: 51/@rem;
            height:30/@rem;
            line-height: 30/@rem;
            background: #ff3021;
            color: #fff;
            // border-radius: 3px;
            font-weight: 500;
            margin-right: 20/@rem;
            text-align:center;
        }
    }
}
// 问
.answername{
    padding:40/@rem 0 40/@rem;
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
        margin-bottom:15/@rem;
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
    // .answerComent{
    //     margin-bottom: 98/@rem;
    // }
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
</style>
