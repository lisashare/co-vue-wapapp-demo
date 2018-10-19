<template>
    <div class="search page-top">
        <!-- <search-top :placeholder="placeholder"></search-top> -->
        <!-- 顶部搜索框 start-->
        <div class="search-header line-bottom">
            <i class="icon-left" v-on:click = "$router.go(-1)"></i>
            <div class="search-inp" @keyup.enter="searchTarget">
                <i class="fdj"></i>
                <input type="text" name="search" id="search"  maxlength="30" class="name" autocomplete="off"
                    v-focus
                    :placeholder="placeholder"
                    v-model="searchValue"
                    @input="checkInput"/>
                <i class="el-input-clear" v-if="close" @click="clearValue"></i>
            </div>
            <span class="search-txt" v-on:click = "searchTarget">搜索</span>
        </div>
        <!-- 顶部搜索框 end -->

        <div class="cont" >
            <div class="title">
                <h4>热搜品牌</h4>
                <div class="search-branch">
                    <ul class=""><li><span class=""></span></li></ul>
                    <!-- .hot-brand-name 里面有值 -->
                </div>
            </div>
            <div class="title" v-if="listHotInfos">
                <h4>大家都在搜</h4>
                <div class="search-branch">
                    <ul>
                        <li v-for="(listHotInfo,index) in listHotInfos" :key="listHotInfo.infoId" @click="enterMessage(index)">
                            <span class="hottxt">热文</span>
                            <span class="hotinfo">{{ listHotInfo.title }}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="title" v-if="showHistory">
                <h4>搜索记录</h4>
                <div class="search-branch">
                    <ul>
                        <router-link :to="{name:'casesearch',query:{name:item}}" tag="li" class="search-history ellipsis" v-for="(item,index) in searchHistory" :key="index">
                            <span class="ind">{{index+1}}</span>
                            <p>{{item}}</p>
                        </router-link>
                    </ul>
                </div>
                <h5 @click="clearAllHistory">清空搜索记录</h5>
            </div>
        </div>
    </div>
</template>

<script>

import utils from '@/modules/utils.js'

export default {
  name: 'Search',
  data () {
    return {
      placeholder: '请输入关键字',
      listHotInfos: '',
      params: {pageNum: 1, pageSize: 10},
      close: false,
      searchValue: '', // 搜索内容
      //   restaurantList: [], // 搜索返回的结果
      searchHistory: [], // 搜索历史记录
      showHistory: false, // 是否显示历史记录，     // 只有在返回搜索结果后隐藏
      emptyResult: false // 搜索结果为空时显示
    }
  },
  // components:{SearchTop},
  methods: {
    getListHotInfo () { // 获取热门信息
      let params = {
          'apiUrl': this.weburl + 'mobile/brand/listHotInfo',
          'params': this.params
      }
      this.$http.post(this.baseurl + '/brand/api', params).then(res => {
        this.listHotInfos = res.data.data.slice(0, 2)
      })
    },
    enterMessage (index) { // 回车进行搜索
      this.searchValue = this.listHotInfos[index].title
      let listHotInfo = JSON.stringify(this.listHotInfos[index])
      window.sessionStorage.setItem('listHotInfo', listHotInfo)

      // 变量控制 历史类表隐藏
      this.$router.push({name: 'hotnews'})
    },
    getHistoryItems () { // 获取历史列表
      let history = JSON.parse(utils.getStore('searchHistory'))

      if (!history) {
        return false
      }
      if (history.length) {
        this.searchHistory = history.slice(0, 3)
        // 本地缓存中有数据显示数据
        this.showHistory = true
      }
    },
    // 数据框，点击回车搜索结果并显示，同时将搜索内容存入历史记录
    searchTarget () { // 搜索目标

      // 埋点
      window._vds.track("wap_search_input",{ "content": this.searchValue });

      /*
        * 点击搜索结果进入下一页面时进行判断是否已经有一样的历史记录
        * 如果没有则新增，如果有则不做重复储存，判断完成后进入下一页
        */
    //   searchValue 前后去空格后
    //   if (!this.searchValue) {
      // 输入的值为空提示
      // toast
    //   } else {
      // 请求，存本地，返回的值跳转到相应页面
      // let history =  !utils.getStore('searchHistory') ? utils.getStore('searchHistory').slice(0,3):'';
      let history = JSON.parse(utils.getStore('searchHistory'))
      // console.log(history)
      if (history) {
        let checkrepeat = false
        // this.searchHistory = history;
        this.searchHistory.forEach(item => {
          if (item == this.searchValue) {
            checkrepeat = true
          }
        })
        if (!checkrepeat) {
          this.searchHistory.unshift(this.searchValue)
        }
      } else {
        this.searchHistory.unshift(this.searchValue)
      }
      utils.setStore('searchHistory', this.searchHistory)
      // 跳转
      this.$router.push({ name: 'casesearch', query: { name: this.searchValue }})
      // 清空value值
      this.searchValue = ''
      // }
    },
    // 监控input框内的值，显示清除按钮
    checkInput () {
      if (this.searchValue !== 0) {
        this.close = true
      } else {
        this.close = false
      }
    },
    // 点击清除按钮，清空值
    clearValue () {
      this.searchValue = ''
      this.close = false
    },
    // 清除搜索历史
    clearAllHistory () {
      this.showHistory = false
      this.searchHistory = []
      utils.setStore('searchHistory', this.searchHistory)
    }
  },
  created () { // 获取热搜数据
    this.getListHotInfo()
    this.getHistoryItems()
  }
}
</script>
<style lang="less" scoped>
@rem:50rem;
*{
    box-sizing: border-box;
}

.hot-brand-name{
     display: inline-block;
     vertical-align: middle;
     width: 138/@rem;
     height: 38/@rem;
     font-size: 26/@rem;
     color: #666666;
     line-height: 38/@rem;
     text-align: center;
}
.cont{
    padding: 30/@rem 24/@rem 50/@rem;
}
.title{
    h5{
        margin-top: 65/@rem;
        text-align: center;
        font-size: 30/@rem;
        color: #999999;
    }
}
.title{
    h4{
        height: 60/@rem;
        line-height: 60/@rem;
        font-size: 30/@rem;
        font-weight: bold;
    }
    .search-branch{
        li{
            margin: 15/@rem 0/@rem;
            span.hottxt{
                vertical-align: middle;
                display: inline-block;
                width: 68/@rem;
                height: 36/@rem;
                line-height: 36/@rem;
                text-align: center;
                font-size: 21/@rem;
                color: #fff;
                background: #f94d4d;
                margin-right: 13/@rem;
                border-radius: 2px;
            }
            span.hotinfo{
                width: 80%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                display: inline-block;
                vertical-align: bottom;
                line-height: 36/@rem;
                font-size: 26/@rem;
                color:#666666;
            }
        }
    }
}
.search-history{
    display: flex;
    font-size: 26/@rem;
    align-items: center;
    color: #666666;
    .ind{
        display: inline-block;
        vertical-align: middle;
        width: 28/@rem;
        height: 28/@rem;
        text-align: center;
        line-height: 28/@rem;
        border-radius: 2px;
        background: #f4f4f4;
        margin-right: 19/@rem;
    }
}
// 头部输入框
.search-header{
//     position: fixed;
//     top:0;
//     left:0;
//     width: 100%;
//     height: 88/@rem;
    padding: 16/@rem 104/@rem;
//     z-index: 3;
//     .icon-left{
//         position:absolute;
//         top: 50%;
//         left: 24/@rem;
//         font-size: 36/@rem;
//         color: #333333;
//         -webkit-transform: translate3d(0, -50%, 0);
//         -ms-transform: translate3d(0, -50%, 0);
//         transform: translate3d(0, -50%, 0);
    }
//     i {
//         display: inline-block;
//         vertical-align: middle;
//         background-size: 100% 100%;
//         background-position:center center;
//         background-repeat: no-repeat;
//     }
//     .fdj{
//         position: absolute;
//         left: 16/@rem;
//         top: 50%;
//         -webkit-transform: translate3d(0, -50%, 0);
//         -ms-transform: translate3d(0, -50%, 0);
//         transform: translate3d(0, -50%, 0);
//         display: inline-block;
//         width: 28/@rem;
//         height: 32/@rem;
//         background-image: url(/static/images/opportunity/icon/icon_search@2x.png);
//     }
// }
// // 头部form
.search-inp {
    position: relative;
    height: 56/@rem;
    width: 542/@rem;
    background: #eff3f7;
    border-radius: 28/@rem;
    margin-right: 6/@rem;
    padding-left: 66/@rem;
    input{
        width: 80%;
        height: 56/@rem;
        font-size: 24/@rem;
        color: #666666;
        background: #eff3f7;
    }
}
// .search-txt {
//     display: inline-block;
//     width: 104/@rem;
//     text-align: center;
//     font-size: 28/@rem;
//     line-height: 88/@rem;
//     color: #333333;
//     position: absolute;
//     right: 0;
//     top: 0;
//     z-index: 11;
// }
// // input close
// .el-input-clear {
//     display: none;
//     position: absolute;
//     top: 50%;
//     right: 20/@rem;
//     width: 30/@rem;
//     height: 30/@rem;
//     margin-top: -15/@rem;
//     -webkit-transform: rotate(45deg);
//     transform: rotate(45deg);
//     cursor: pointer;
// }
// .el-input-clear:before {
//     width: 70%;
//     height: 1px;
// }
// .el-input-clear:before{
//     position: absolute;
//     content: "";
//     top: 50%;
//     left: 50%;
//     -webkit-transform: translate(-50%, -50%);
//     transform: translate(-50%, -50%);
//     background-color: #333333;
// }

// .el-input-clear:after {
//     width: 1px;
//     height: 70%;
//     color: #333333;
// }
// .el-input-clear:after {
//     position: absolute;
//     content: "";
//     top: 50%;
//     left: 50%;
//     -webkit-transform: translate(-50%, -50%);
//     transform: translate(-50%, -50%);
//     background-color: #333333;
// }
</style>
