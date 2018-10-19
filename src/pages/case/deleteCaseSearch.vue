<template>
 <div class="app-search bc line-bottom" id="search">
        <router-link to="/search" tag="div" class="search-inp">
            <i class="fdj"></i>
            <input type="text" name="search" id="search" readonly placeholder="请输入关键字搜索" maxlength="30" class="name">
        </router-link>
        <i class="txt" @click = "phoneCall"><img src="/static/images/opportunity/icon/icon_tel.png"></i>
 </div>
</template>
<script>
export default {
  name: 'CaseSearch',
  methods: {
    phoneCall () {
      window.location.href = 'tel:010-53579588'
    }
  }

}
</script>
<style lang="less" scoped>
@rem: 50rem;
*{
    box-sizing: border-box;
}
.app-search{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 88 /@rem;
    padding: 16/@rem 24/@rem;
    z-index: 1001;
}
.search-inp {
    position: relative;
    height: 56/@rem;
    width: 626/@rem;
    background: #eff3f7;
    border-radius: 28/@rem;
    margin-left: 18/@rem;
    padding-left: 24/@rem;
    overflow: hidden;
    input{
        position: absolute;
        width: 602/@rem;
        height: 56/@rem;
        font-size: 24/@rem;
        color: #999999;
        background: #eff3f7;
    }
}
i {
    display: inline-block;
    vertical-align: middle;
    background-size: 100% 100%;
    background-position:center center;
    background-repeat: no-repeat;
}
.fdj{
    position: absolute;
    top: 50%;
    right: 24/@rem;
    -webkit-transform: translate3d(0, -50%, 0);
    -ms-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0);
    width: 28/@rem;
    height: 32/@rem;
    background-image: url(/static/images/opportunity/icon/icon_search@2x.png);
    z-index: 1002;
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
        width: 34/@rem;
        height: 32/@rem;
    }
}
</style>
