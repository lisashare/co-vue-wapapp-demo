<template>
  <div class="List" ref="cityList">
    <div class="wraper">
      <div class="currentCity">
        <div class="position">当前： <span class="current">{{this.cityHead}}{{this.currentCity}}</span></div>
        <span class="changeVillage" v-on:click="toggleClick">切换区县<em class="icon-down-arrow"></em></span>
      </div>
      <ul class="villageList" v-show="toggle">
        <li v-for="(item, index) in currentCiytList" :key="item.gbCode">
          <div class="btn" @click="handleCityClick(item.areaName, item.gbCode, item.cityName)">{{item.areaName}}</div>
        </li>
      </ul>
      <div class="hotCity">热门城市</div>
      <ul class="villageList hotCitylist">
        <!-- <li><div class="btn">无</div></li> -->
      </ul>
      <!-- <div class="country">全国</div> -->
      <div class="areaCatalog" v-for="(item, index) in cities" :ref="item.type">
        <div class="title" :class="{country: !changeStyle1(index)}">{{item.type}}</div>
        <ul class="item-list" v-if="changeStyle1(index)">
          <li v-for="innerItem of item.data" @click="handleCityClick(innerItem.cityName, innerItem.cityCode)">{{innerItem.cityName}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll"
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  computed: {
    ...mapState({
      currentCity: 'city'
    }),
    ...mapState(['manual']),
    ...mapState(['code']),
  },
  props: ["cities","letter"],
  data () {
    return {
      cityHead: '',
      lat: '',
      lng: '',
      toggle: false,
      point: {},
      currentCiytList: []
    }
  },
  methods: {
    //获取当前的经纬度
    getPosition () {
     var _this = this;
     var geolocation = new BMap.Geolocation();
     geolocation.getCurrentPosition(function(r){
       if(this.getStatus() == BMAP_STATUS_SUCCESS){
         _this.mk = new BMap.Marker(r.point);
         // console.log(r)
           // _this.getAddress(r.point);
           _this.point = r.point;
           console.log( _this.point )

           _this.$http.post(this.baseurl+'/home/currentarea', {
              "params":{
                 "searchType":"1",
                 "code": "",
                 "lat": _this.point.lat,
                 "lng": _this.point.lng
               }
           }).then((res) => {
              console.log(res)
              if( res.data.code == 200 && res.data.data ){
                _this.currentCiytList = res.data.data.areaList
              }
            })

         }else {
           alert('failed'+this.getStatus());
         }
     })
    },
    //城市的区县
    getCityArea (code) {
      this.$http.post(this.baseurl+'/home/currentarea', {
        "params":{
           "searchType":"1",
           "code": this.code,
           "lat": this.lat,
           "lng": this.lng
         }
     }).then((res) => {
        console.log(res)
        if( res.data.code == 200 && res.data.data ){
          this.currentCiytList = res.data.data.areaList
        }
      })
    },
   //当前热门城市
   /*getHotcityData () {
     this.getPosition()
     this.$http.post('/api/home/hotcity', {
       "lat": this.point.lat,
       "lng": this.point.lng
     }).then((res) => {
        console.log(res)
      })
   },*/
    toggleClick () {
      this.toggle = !this.toggle
    },
    changeStyle (index) {
      return index != 0
    },
    changeStyle1 (index) {
      return index != 0
    },
    handleCityClick (city, code, cityHead) {
      // this.$store.commit('changeCity', city)
      this.changeCode(code)
      this.getCityArea(code)
      this.cityHead = cityHead || '',
      this.changeCity(city)
      this.changeManual()
      this.$router.push('/')
    },
    ...mapMutations (['changeCity']),
    ...mapMutations (['changeManual']),
    ...mapMutations (['changeCode'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.cityList,{
      bounce:false,
      // scrollY: false, // 因为scrollY默认为true，其实可以省略
      // scrollX: true,
      // mouseWheel: true,
      click: true,
      taps: true
    })

    if(!this.manual){
       this.getPosition()
    }else{
      // this.getCityArea(this.code)
    }

    // console.log(this.code);
    this.getCityArea(this.code)
  }

}
</script>

<style lang="less" scoped>
  @rem: 50rem;
  .List {
    position: absolute;
    overflow:hidden;
    top: 89/@rem;
    left: 0;
    right: 0;
    bottom: 0;
    .wraper {
      /*height: 88/@rem;
      line-height: 88/@rem;
      border-bottom: 1px solid #dae0e6;*/
      box-sizing: border-box;
      .currentCity {
        font-size: 28/@rem;
        color: #333;
        height: 88/@rem;
        line-height: 88/@rem;
        border-bottom: 1px solid #dae0e6;
        padding: 0 24/@rem;
        position: relative;
        .changeVillage {
          font-size: 24/@rem;
          color: #666;
          position: absolute;
          right: 24/@rem;
          top: 0;
          .icon-down-arrow {
            width: 18/@rem;
            height: 11/@rem;
            background-image: url("/static/images/home/icon/Back(shouqi)@3x.png");
            background-repeat: no-repeat;
            background-size: 18/@rem 11/@rem;
            display: inline-block;
            margin-left: 12/@rem;
            position: relative;
            top: -2px;
          }
        }
      }
      .villageList {
        overflow: hidden;
        padding: 20/@rem 14/@rem 20/@rem 14/@rem;
        margin-right: 48/@rem;
        background: #eff3f7;
        li {
          float: left;
          width: 33.33333%;
          .btn {
            font-size: 28/@rem;
            color: #333;
            width: 202/@rem;
            height: 50/@rem;
            line-height: 50/@rem;
            text-align: center;
            border: 1px solid #e1e1e1;
            border-radius: 3px;
            margin: 10/@rem;
            background: #fff;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
      .hotCity {
        font-size: 28/@rem;
        color: #666;
        /*height: 46/@rem;*/
        padding:10/@rem 24/@rem 0;
      }
      .hotCitylist {
        background: #fff;
      }
    }
    .areaCatalog {
      margin-right: 48/@rem;
      .title {
        font-size: 28/@rem;
        color: #999;
        height: 50/@rem;
        line-height: 50/@rem;
        padding-left: 24/@rem;
        background: #f5f5f5;
      }
      .country {
        font-size: 30/@rem;
        color: #333;
        height: 80/@rem;
        line-height: 80/@rem;
        background: #fff;
        /*padding: 10/@rem 24/@rem;
        border: 1px solid red;*/
      }
      .item-list {
        padding-left: 24/@rem;
        li {
          font-size: 30/@rem;
          color: #333;
          height: 88/@rem;
          line-height: 88/@rem;
          border-bottom: 1px solid #eff3f7;
        }

      }
    }
  }
</style>
