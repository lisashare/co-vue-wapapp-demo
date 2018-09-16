<template>
  <div class="comment">
    <!-- <h3 class="title h80">跟帖</h3> -->
    <h2 class="title h80">跟帖</h2>
    <p class="commentNum h80">评论 <em class="red">{{len}}</em></p>
    <!-- <div class="commentList">
      <div class="itemCom">
        <dl class="clear">
          <dt class="avatar"><img src="/static/images/home/icon/default_head.png" /></dt>
          <dd class="qaDetail">
            <p class="username">{{lists[0].name}}</p>
            <p class="question">{{lists[0].commentContent}}</p>
            <span class="ctime">{{lists[0].commentTime|formatTime}}</span>
            <div class="reply">
              <p class="replyCon"><span class="red">客服回复：</span>{{lists[0].replyContent}}</p>
            </div>
          </dd>
        </dl>
      </div>
      <p class="allComment" @click="showComment">所有评论<i class="fa fa-angle-down"></i></p>
    </div> -->
    <!-- <mescroll ref="mescroll" :upCallback="commentData" warpId="brand_comment_scroll3" id="brand_comment_scroll3"> -->
      <div class="commentList">
          <div class="itemCom" v-if="lists" v-for = "(list, index) in lists" :key = "index">
            <dl class="clear">
              <dt class="avatar"><img src="/static/images/home/icon/default_head.png" /></dt>
              <dd class="qaDetail">
                <p class="username">{{list.name}}</p>
                <p class="question">{{list.commentContent}}</p>
                <span class="ctime">{{list.commentTime|formatTime}}</span>
                <div class="reply" v-if="list.replyContent">
                  <p class="replyCon"><span class="red">客服回复：</span>{{list.replyContent}}</p>
                </div>
              </dd>
            </dl>
          </div>
         <p class="finishComment">已经全部加载完毕</p>
      </div>
    <!-- </mescroll> -->
  </div>
</template>

<script>
import mescroll from '@/common/mescroll/Mescroll.vue' /* 分页组件 */
export default {
  name: 'VideoComment',
  components: {
    mescroll
  },
  props:['caseComment'],
  data () {
    return {
      lists: this.caseComment.data,
      loading: true,
      bottomShow: false,
      upAuto: false,
      // lists: this.brandComment.list,
      info: {
        "params": {
          "status": 1,
          "pageNum": 1,
          "informationId": this.$route.query.videoId,
          "pageSize": 10,
          "sortFlag": "desc"
        }
      },
    }
  },
  computed:{
    len(){
      if(!this.caseComment.data){
        return 0
      }
      let len = this.caseComment.total
      return len
    }
    
  },
  methods: {
    // 上拉加载
    // commentData (page) {
    //   let {info} = this
    //   info.pageNum = page.num
    //   info.pageSize = page.size
    //   this.$http.post(this.baseurl+'/discovery/detail', info).then((res) => {
    //     console.log(res)
    //     // if (res.data.code == 200) {
    //     //   let list = res.data.data
    //     //   this.$refs.mescroll.endSuccess(list.length)
    //     //   this.lists = this.lists.concat(res.data.data)
    //     // }
    //   }).catch((error) => {
    //     this.$refs.mescroll.endErr()
    //   })
    // },
    // // 点击显示评论列表
    // showComment () {
    //   this.loading = false
    // },
    // // 点击关闭评论列表，仅仅显示第一条评论
    // hideComment () {
    //   this.loading = true
    //   this.bottomShow = false
    // }
  },
  created () {
    // console.log(this.caseComment)
  }
}
</script>

<style lang="less" scoped>
  @rem: 50rem;
  .finishComment{
      position: absolute;
      width: 100%;
      text-align: center;
      font-size: 28/@rem;
      color: #666666;
      line-height: 86/@rem;
      i{
          margin-left: 10/@rem;
      }
  }
  .comment {
    width: 100%;
    background: #fff;
    .red {
      color: red;
    }
    .h80 {
      height: 80/@rem;
      line-height: 80/@rem;
    }
    .title {
      font-size: 34/@rem;
      text-align: center;
    }
    .commentNum {
      font-size: 32/@rem;
      padding-left: 14/@rem;
      border-left: 10/@rem solid #63bec4;
    }
    .commentList {
      padding: 0 24/@rem;
      .itemCom {
        dl {
          margin: 30/@rem 0;
        }
        .avatar {
          width: 62/@rem;
          float: left;
          img {
            width: 62/@rem;
            height: 62/@rem;
            overflow: hidden;
            border-radius: 50%;
          }
        }
        .qaDetail {
          float: left;
          width: 610/@rem;
          padding-left: 14/@rem;
          position: relative;
          .username {
            font-size: 26/@rem;
            color: #999;
            line-height: 60/@rem;
          }
          .question {
            font-size: 26/@rem;
            color: #333;
            margin: 10/@rem 0;
            line-height: 36/@rem;
          }
          .ctime {
            font-size: 26/@rem;
            color: #999;
            position: absolute;
            right: 0;
            top: 15/@rem;
          }
          .reply {
            font-size: 26/@rem;
            width: 597/@rem;
            line-height: 40/@rem;
            padding: 14/@rem;
            background: #f4f4f4;
            .replyCon {

            }
          }
        }
      }
    }
  }
</style>
