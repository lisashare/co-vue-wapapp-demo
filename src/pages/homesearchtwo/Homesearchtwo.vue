<template>
  <div class="Homesearchtwo">
    <!-- 顶部搜索框 start-->
    <div class="search-header line-bottom">
        <i class="icon-left" v-on:click = "$router.go(-1)"></i>
        <!-- <div class="search-inp" @keyup.enter="searchTarget"> -->
        <div class="search-inp" >
            <i class="fdj"></i>
            <!-- <input type="text" name="search" id="search"  maxlength="30" class="name" autocomplete="off"
                v-focus
                :placeholder="placeholder"
                v-model="searchValue"
                @input="checkInput"/> -->
            <input type="text"
                   name="search"
                   id="search"
                   v-model="searchValue"
                   maxlength="30"
                   class="name"
                   autocomplete="off"
                   @input="checkInput"
                   @keyup.enter="fnSearch"
                   v-focus />
            <i class="el-input-clear" v-if="close" @click="clearValue"></i>
            <!-- <i class="el-input-clear" v-if="close"></i> -->
            <!-- <i class="el-input-clear"></i> -->
        </div>
        <!-- <span class="search-txt" v-on:click = "searchTarget">搜索</span> -->
        <span class="search-txt" @click="fnSearch">搜索</span>
    </div>
    <!-- 顶部搜索框 end -->
    <div class="section" v-if="brandList.length != 0">
      <div class="title">
        品牌
        <router-link tag="span" :to="{name:'brandmorelist',query: {search:this.searchValue}}" class="more">更多<em class="icon-rightarrow"></em></router-link>
      </div>
      <ul class="sectionList">
        <brand-list-item
          v-for = "(list,index) in brandList"
          :key = "index"
          :list = "list">
        </brand-list-item>
      </ul>
    </div>
    <div class="section videoSection" v-if="videoList.length != 0">
      <div class="title">
        视频
        <router-link tag="span" :to="{name:'videomorelist', query: {search:this.searchValue}}" class="more">更多<em class="icon-rightarrow"></em></router-link>
      </div>
      <ul class="sectionList">
        <video-list-item
          v-for = "(list,index) in videoList"
          :key = "index"
          :list = "list">
          </video-list-item>
      </ul>
    </div>
    <div class="searchBg_nodata" v-if="noData"></div>
  </div>
</template>

<script>
import utils from '@/modules/utils.js'
import BrandListItem from '@/common/brandListItem/BrandListItem'
import videoListItem from '@/common/videoListItem/videoListItem'

export default {
  name: 'Homesearchone',
  components: {
    BrandListItem,
    videoListItem
  },
  data () {
    return {
      close: false,
      brandList: [],
      videoList: [],
      searchValue: '',
      noData: false
    }
  },
  methods: {
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
    //搜索事件
    fnSearch () {
      // 埋点
      window._vds.track("wap_search_input",{ "content": this.searchValue });
      this.$route.query.name = this.searchValue
      // console.log( this.$route.query.name )
      this.getSearchData ()
    },
    //请求列表数据
    getSearchData () {

      this.$http.post(this.baseurl+'/home/homesearch', {
        "params": {
          "vodPageNum": "1",
          // "title": utils.setStore('searchHistory'),
          "title": this.searchValue,
          "ckPageNum": "1",
          "ckPageSize": "2",
          "brandPageNum": "1",
          "vodPageSize": "2",
          "brandPageSize": "2"
        }
      }).then(res => {
        if( res.data.code == 200 ){
          this.brandList = res.data.data.brands
          this.videoList = res.data.data.videoInfos
          this.noData = (this.brandList.length == 0 && this.videoList.length==0)
        }
      })
    }
  },
  created () {
    this.searchValue = this.$route.query.name
    this.getSearchData()
    console.log(this.$route.query.name)
  }//,
  /*computed: {
    noData () {
      return brandList.length == 0 && videoList.length==0
    }
  }*/

}
</script>

<style lang="less" scoped>
  @rem:50rem;
  *{
      box-sizing: border-box;
  }
  .cont{
      padding: 30/@rem 24/@rem 50/@rem;
  }
  // 头部输入框
  .search-header{
    padding: 16/@rem 104/@rem;
    background: #fff;
  }
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
  .Homesearchtwo {
    margin-top: 88/@rem;
    background: #eff3f7;
    .section {
      background: #fff;
      border-bottom: 1px solid #dae0e6;
      .title {
        font-size: 32/@rem;
        color: #333;
        text-indent: 14/@rem;
        height: 80/@rem;
        line-height: 80/@rem;
        border-left: 10/@rem solid #0098cb;
        border-bottom: 1px solid #dae0e6;
        position: relative;
        span.more {
          font-size: 24/@rem;
          color: #999;
          float: right;
          padding-right: 48/@rem;
          position: relative;
          .icon-rightarrow {
            width: 10/@rem;
            height: 16/@rem;
            background-image: url("/static/images/home/icon/icon_arrow_more@3x.png");
            background-repeat: no-repeat;
            background-size: 10/@rem 16/@rem;
            position: absolute;
            right: 24/@rem;
            top: 50%;
            margin-top: -8/@rem;
          }
        }
      }
    }
    .videoSection {
      margin-top: 14/@rem;
      margin-bottom: 30/@rem;
      .title {
        border-top: 1px solid #dae0e6;
        border-left: 10/@rem solid #5dbec5;
      }
    }

  }
 .searchBg_nodata {
   height: 668/@rem;
   margin-top: 100/@rem;
   background-image: url(/static/images/empty/bg_noend.png);
   background-repeat: no-repeat;
   background-color: #fff;
   background-size: 50%;
   background-position: 50% 50%;
 }
</style>
