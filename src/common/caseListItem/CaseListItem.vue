<template>
    <router-link
    :to = "{name:'casedetail',query:{infoId:list.infoId}}"
    tag = "li" :infoId = 'list.infoId' class="case-list-item">
        <div class="case_title">{{list.title}}</div>
        <div class="img-wrap" v-if="list.vodEntity.cover">
            <img width="100%" height="100%" :src="list.vodEntity.cover">
            <div class="videoIcon">
                <img width="100%" src="/static/images/opportunity/branddetail/bofang.png" alt="">
            </div>
        </div>
        <div class="img-wrap" v-else>
            <img width="100%" height="100%" src="/static/images/background_img/active.png" />
            <div class="videoIcon">
                <img width="100%" src="/static/images/opportunity/branddetail/bofang.png" alt="">
            </div>
        </div>
        <div class="tipbox">
            <div class="pinglun fr">
                <i class="fa fa-commenting-o"></i>
                <span class="pinglu-num">{{list.commentEntity.total}}</span>
            </div>
        </div>
        <div class="masks"></div>
    </router-link>
</template>
<script>
export default {
  name: 'CaseListItem',
  props: ['list']
}
</script>
<style lang="less" scoped>
@rem: 50rem;
*{
    box-sizing: border-box;
}
.case-list-item{
    position:relative;
    overflow: hidden;
    .img-wrap{
        position:relative;
        width: 100%;
        height: auto;
        overflow: hidden;
        .videoIcon{
            position: absolute;
            left: 50%;
            top: 50%;
            width:128/@rem;
            height:128/@rem;
            margin-left:-64/@rem;
            margin-top:-64/@rem;
        }
    }
}
// 视频标题
.case_title{
    padding:24/@rem 20/@rem;
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
    font-size: 28/@rem;
    b{
       font-weight: 700;
    }
}
// tip
.tipbox{
    width:100%;
    color:#999999;
    clear:both;
    overflow: hidden;
    padding:24/@rem 20/@rem;
    font-size:28/@rem;
    .pinglun{
        display: flex;
        align-items: center;
        height: 32/@rem;
        .pinglu-num{
            padding-left: 10/@rem;
        }
    }
}
.masks {
    height: 1em;
    width: 100%;
    background: #eff3f7;
    border-top: 1px solid #dae0e6;
    border-bottom: 1px solid #dae0e6;
}
</style>
