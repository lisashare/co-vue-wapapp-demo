<template>
  <div class="comment">
    <h3 class="title h80">跟帖</h3>
    <p class="commentNum h80">评论 <em class="red">{{this.totalNum}}</em></p>
    <mescroll ref="mescroll" :upCallback="commentData" :emptyKeyImg="emptyKeyImg" :myTip = "myTip" warpId="brand_comment_scroll3" id="brand_comment_scroll3">
      <div class="commentList">
          <div class="itemCom" ref="content" v-for = "(list, index) in lists" :key = "index" v-if="boxShow">
            <dl class="clear">
              <dt class="avatar">
                <img width="100%" :src="list.userAvatar||'/static/images/opportunity/branddetail/default_head.png'" alt="">
              </dt>
              <dd class="qaDetail">
                <p class="username">{{list.name}}</p>
                <p class="question">{{list.commentContent}}</p>
                <span class="ctime">{{list.commentTime|formatMsgTime}}</span>
                <div class="reply" v-if="list.replyContent">
                  <p class="replyCon"><span class="red">客服回复：</span>{{list.replyContent}}</p>
                </div>
              </dd>
            </dl>
          </div>
        <p class="finishComment" v-if="bottomShow">已经全部加载完毕</i></p>
      </div>
    </mescroll>
  </div>
</template>

<script>
import mescroll from '@/common/mescroll/Mescroll.vue' /* 分页组件 */
export default {
  name: 'caseComment',
  components: {
    mescroll
  },
  props:['totalNum'],
  data () {
    return {
      lists: [],
      loading: true,
      boxShow: true,
      bottomShow: false,
      upAuto: false,
      info: { // 请求的参数
        pageNum: 1,
        pageSize: 10
      },
      myTip: 1,
      emptyKeyImg: 1
    }
  },
  methods: {
    // 上拉加载
    commentData (page) {
      let {info} = this
      info.pageNum = page.num
      info.pageSize = page.size
      info.informationId = this.$route.query.infoId
      info.sortFlag = "desc"
      let params = {
        'params': info
      }
      this.$http.post(this.baseurl+'/discovery/commentlist', params).then((res) => {
        console.log(res)
        if (res.data.code == 200) {
            let list = res.data.data
            let list1 = res.data.data.list
            this.$refs.mescroll.endSuccess(list.length)
            this.$refs.mescroll.endSuccess(list.total)
            if(list1){
              this.lists = this.lists.concat(res.data.data.list)
            }
            

            if (list.length < page.size) {//没有评论
                this.bottomShow = true
            }
            if (list.total < page.size) {//不足一页
                this.bottomShow = true
            }
            // if (list.total ==0) {
            //     this.boxShow = false
            // }




            // list.total 根据当前页返回的 list 数据数量，来判断是否还有下一页数据
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
      font-size: 32/@rem;
      text-align: center;
    }
    .commentNum {
      font-size: 32/@rem;
      padding-left: 14/@rem;
      border-left: 10/@rem solid #63bec4;
      border-bottom: 1px solid #dae0e6;
    }
    .commentList {
      .itemCom {
        dl {
          margin: 30/@rem 0;
          padding-left:24/@rem;
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
