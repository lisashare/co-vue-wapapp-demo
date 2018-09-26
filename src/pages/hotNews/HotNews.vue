<template>
    <div class="hotnews page-top">
        <div class="line-bottom search-header bc">
            <i class="icon-left" v-on:click = "$router.back(-1)"></i>
        </div>
        <h3 class="title">{{listHotInfo.title}}</h3>
        <p class="time">{{listHotInfo.source}} 发布时间：{{listHotInfo.publishTime|formatTime}}</p>
        <div class="content" v-html="listHotInfo.content">
        </div>
    </div>
</template>
<script>
export default {
  name: 'HotNews',
  data () {
    return {
      listHotInfo: ''
    }
  },
  created () {
    this.listHotInfo = JSON.parse(window.sessionStorage.getItem('listHotInfo'))
  }
}
</script>
<style lang="less">
@rem: 50rem;
*{
    box-sizing: border-box;
}
.hotnews{
    font-size: 26/@rem;
    h3.title{
        font-size: 34/@rem;
        font-weight: 700;
        margin: 60/@rem 32/@rem;
    }
    p.time{
        color: #666666;
        font-size: 26/@rem;
        padding: 10px 24/@rem;
    }
    .content{
        padding: 30/@rem 32/@rem;
        p{
            overflow: hidden;
        }
        p>span:first-child{
            display: inline-block;
            text-indent: 1em;
        }
        img{
            width:100%;
        }
    }
}
</style>
