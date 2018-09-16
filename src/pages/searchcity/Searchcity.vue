<template>
  <div class="searchcity">
    <div class="search-top line-bottom">
      <!-- <form class="search-inp" @submit.prevent="searchTarget"> -->
      <form class="search-inp">
          <i class="icon"></i>
          <!-- <input type="text" name="search" id="search"  maxlength="30" class="name" autocomplete="off"
              v-focus
              :placeholder="placeholder"

              v-model="searchValue"
              @input="checkInput"/> -->
          <input type="text" v-model="keyword" v-focus name="search" id="search" placeholder="请输入城市名"  maxlength="30" class="name" autocomplete="off" @input="checkInput" >
          <!-- <i class="close" v-if="close" @click="clearValue"></i> -->
          <i class="close" v-if="close" @click="clearValue"></i>
      </form>
      <span class="txt" v-on:click = "$router.go(-1)">取消</span>
    </div>
    <div class="search-content" >
      <ul>
        <template v-for="(todo,index) of codeList">
          <li class="search-item" v-for="(item,index) of list" :key="index" @click="handleCityClick(item,todo)">{{item}}</li>
        </template>
        <!-- <li class="search-item" v-for="(item,index) of list" :key="index" @click="handleCityClick(item)">{{item}}</li> -->
        <li class="search-item" v-show="hasNoData">抱歉，未找到相关位置，可尝试修改后重试</li>
      </ul>
    </div>
  </div>
</template>

<script>
import SearchInput from "@/pages/components/Search"
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Searchcity',
  components: {
    SearchInput
  },
  data () {
    return {
      close: false,
      cityHead: '',
      keyword: '',
      cities: [],
      list: [],
      codeList: [],
      timer: null

    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    },
    ...mapState({
      currentCity: 'city'
    }),
    ...mapState(['manual']),
    ...mapState(['code']),
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.getCitySearchData()
      this.timer = setTimeout(()=>{
        const result = []
        const result2 = []
        /*for(var i=0; i<this.cities.length;i++){
          for(var j=0; j<this.cities[i].data.length; j++){
              var str = this.cities[i].data[j].cityName;
              if( str.indexOf(this.keyword)>-1 ){
                  result.push( str )
              }
              // console.log( str )
          }
        }*/
        var len = this.cities.length;
        for(var i=0; i<len; i++){
          result.push( this.cities[i].areaName )
          result2.push( this.cities[i].gbCode )
        }
        this.list = result;
        this.codeList = result2;
        console.log(this.codeList)
      },150)
    }
  },
  methods: {
    // 监控input框内的值，显示清除按钮
    checkInput () {
      if (this.keyword !== 0) {
        this.close = true
      } else {
        this.close = false
      }
    },
    // 点击清除按钮，清空值
    clearValue () {
      this.keyword = ''
      this.close = false
    },
    handleCityClick (city, code) {
      // this.$store.commit('changeCity', city)
      this.changeCode(code)
      this.changeCity(city)
      this.changeManual()
      this.$router.push('/')
    },
    ...mapMutations (['changeCity']),
    ...mapMutations (['changeManual']),
    ...mapMutations (['changeCode']),

    /*getCityData () {
      this.$http.get('/static/cityData/addecodelist.json').then( this.getCityDataSucc )
    },
    getCityDataSucc (res) {
      res = res.data
      console.log( res.data );
      if ( res.ret && res.data) {
        // this.cities = res.data
      }
    },*/
    //搜索查询城市列表的数据
    getCitySearchData () {
      this.$http.post(this.baseurl+'/home/citysearch',{
        "params": {
          "name": this.keyword
        }
      }).then((res)=>{
        /*console.log(res.data.code)
        console.log(res.data.data)*/
        if( res.data.code == 200 ){
          this.cities = res.data.data
        }
      })
    }
  }//,
  /*mounted () {
    // this.getCityData()
    // this.getCitySearchData()
    // console.log( this.codeList )
  }*/
}
</script>

<style lang="less" scoped>
  @rem: 50rem;
  *{box-sizing: border-box;}
  .search-top{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 86/@rem;
    padding: 15/@rem 24/@rem;
    z-index: 1001;
    background: #fff;
  }
  .search-inp {
    position: relative;
    height: 56/@rem;
    width: 626/@rem;
    background: #eff3f7;
    border-radius: 28/@rem;
    margin-right: 6/@rem;
    padding-left: 54/@rem;
    input{
      width: 80%;
      height: 56/@rem;
      font-size: 26/@rem;
      color: #666666;
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
  .icon {
    position: absolute;
    left: 16/@rem;
    top: 50%;
    -webkit-transform: translate3d(0, -50%, 0);
    -ms-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0);
    display: inline-block;
    width: 28/@rem;
    height: 32/@rem;
    background-image: url(/static/images/opportunity/icon/icon_search@2x.png);
  }
  .close {
    position: absolute;
    right: 20/@rem;
    top: 50%;
    -webkit-transform: translate3d(0, -50%, 0);
    -ms-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0);
    display: inline-block;
    width: 26/@rem;
    height: 26/@rem;
    background-image: url(/static/images/home/icon/x@3x.png);
  }

  .txt {
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 10/@rem;
    padding: 0 14/@rem;
    display: block;
    height: 86/@rem;
    // width: 84/@rem;
    text-align: center;
    line-height: 86/@rem;
    font-size: 30/@rem;
    color: #333333;
  }
  .searchcity {
    background: #fff;
    .search-content {
      width: 100%;
      background: #fff;
      position: absolute;
      top: 86/@rem;
      left: 24/@rem;
      //border: 1px solid red;
      li {
        font-size: 30/@rem;
        color: #333;
        height: 88/@rem;
        line-height: 88/@rem;
        border-bottom: 1px solid #e1e1e1;
      }
    }
  }
</style>
