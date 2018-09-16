<template>
    <div class="join-area" id="select">
        <div class="direction search-header">
            <i class="icon-left icon-left-white" v-on:click = "$router.back(-1)"></i>
        </div>
        <div class="header-box">
			<div class="banner">
				<img width="100%" src="/static/images/opportunity/area/banner@2x.png" alt="">
			</div>
			<div class="searchArea">
				<div class="leftbox">
					<div class="ico">
                        <img width="100%" src="/static/images/opportunity/area/icon_quyuchaxun@2x.png" alt="">
                    </div>
					<div class="tit">区域查询</div>
				</div>
				<div class="righbox" id="trigger">
                    <div class="icon-box">
                        <img width="100%" src="/static/images/opportunity/area/searchico.png">
                    </div>
					<span>查询</span>
				</div>
			</div>
			<div class="table">
				<table>
					<thead>
						<tr class="nav font-w7">
							<td>省(直辖市)</td>
							<td>城市</td>
							<td>区县</td>
							<td>是否加盟</td>
						</tr>
                    </thead>
                 </table>
            </div>
        </div>
        <div class="table tablebox">
            <div v-show="loading" class="loading-animation">
                <div class="loading-img loading-logo">
                    <img width="100%" src="/static/images/common/logo.png" alt="">
                </div>
                <div class="loading-img loading-circle Rotation">
                    <img width="100%" src="/static/images/common/circle.png" alt="">
                </div>
                <p>正在加载...</p>
            </div>
            <table v-show="!loading">
                <tbody class="tbodybox">
                    <tr v-for="(item,index) in areaList" :key="index">
                        <td :class="[item.provinceName ? '':'border-top-none']">{{item.provinceName}}</td>
                        <td :class="[item.cityName ? '':'border-top-none']">{{item.cityName}}</td>
                        <td>{{item.areaName}}</td>
                        <td>{{item.allowJoin == 1 ?'是':'否'}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
// import MobileSelect from './mobile-select'  /* 三联动插件 */
import './mobile-select' /* 三联动插件 */
import area from './area'
import './mobile-select/mobile-select.css'

export default {
  name: 'JoinArea',
  data () {
    return {
      brandId: '', // 品牌id
      areaList: [], // 先获取的品牌区域
      areaData: [], // 存一波全国
      value: [], // 搜索绑定的值
      showAddress: false, // 是否显示地址选择
      code: '0', // 选中传递请求的参数,地址code
      searchType: '0', // 选中传递请求的参数,地址省份类型
      loading: true // 未获取到数据，显示加载动画
    }
  },
  methods: {
    getBrandAreaList () {
      let data = {brandId: this.brandId}

      let params = {
        'apiUrl': this.weburl + 'mobile/brand/brandAreaList',
        'params': data
      }
      this.$http.post(this.baseurl + '/brand/api', params).then(res => {
        // console.log(res.data.data)
        this.areaList = res.data.data
        this.getProvinceName()
        this.areaData = this.areaList

        this.loading = false
      })
    },
    getBrandAreaItem () { // 三联动 选择地区
      this.loading = false
      let data = {brandId: this.brandId, code: this.code, searchType: this.searchType}
      let params = {
        'apiUrl': this.weburl + 'mobile/brand/brandAreaList',
        'params': data
      }
      this.$http.post(this.baseurl + '/brand/api', params).then(res => {
        // console.log(res.data.data)
        this.areaList = res.data.data
        this.getProvinceName()
        this.loading = false
      })
    },
    // 省市去重开始
    getProvinceName (list) {
      var item = this.areaList
      var len = this.areaList.length
      for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
          if (item[i].provinceName == item[j].provinceName) {
            item[j].provinceName = ''
          } else {
            break
          }
        }
      }
      for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
          if (item[i].cityName == item[j].cityName) {
            item[j].cityName = ''
          } else {
            break
          }
        }
      }
    }
  },
  created () {
    this.brandId = this.$route.query.brandId

    this.getBrandAreaList()
  },
  mounted () {
    var self = this
    // DOM 更新了
    var mobileSelect = new MobileSelect({
      trigger: '#trigger',
      title: '',
      wheels: [{data: area.searchData}],
      // position:[0,1],  // 初始化位置
      callback (indexArr, data) {
        var arr = []
        for (var i = 0; i < data.length; i++) {
          if (arr.indexOf(data[i].id) == -1) {
            arr.push(data[i].id)
          }
        }

        // 参数类型
        if (arr[0] === '0') {
          return false
          // self.searchType=0; //全国
        } else {
          if (arr.length == 1) {
            self.searchType = '1' // 省
          }
          if (arr.length == 2) {
            self.searchType = '2' // 市
          }
          if (arr.length == 3) {
            self.searchType = '3' // 区县
          }
        }
        // 参数code
        if (arr[0] === '0') {
          return false
          // self.code = 0
        } else {
          self.code = arr[arr.length - 1]
        }
        // 选择后重新请求
        self.getBrandAreaItem()
      }
    })
  }
}
</script>
<style lang="less" scoped>
@rem: 50rem;
*{
    box-sizing: border-box;
}
.loading-animation{
    margin: 20% auto;
}
.mobileSelect-show {
    opacity: 1;
    z-index: 10000;
}
.mask{
    position: fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    background: rgba(0, 0, 0, .47);
    z-index: 9999;
}
// 地区选择器
// .mobileSelect{
//     position: relative;
// }
.content{
    position: fixed;
    width: 100%;
    height: 300px;
    background: #ffffff;
    z-index: 10000;
}
.brnBar{
    position: relative;
    text-align: center;background: rgba(0,0,0,0.15);
    color: #fff;
    font-size: 1.05rem;
    height: 3rem;
    line-height: 3rem;
}
.panel{
    position:relative;
    .wheels{
        width: 100%;
        height: 200px;
        overflow: hidden;
    }
}

.join-area{
    position: relative;
    .direction{
        background-color: transparent;
        i{
            color: #ffffff;
            font-size: 34/@rem;
        }
    }
}
.header-box{
    position: fixed;
    z-index: 1;
    background: #ffffff;
}
.searchArea{
    height: 148/@rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .leftbox{
        display: flex;
        align-items: center;
        font-size: 34/@rem;
        color: #666666;
        .ico{
            margin-left: 24/@rem;
            margin-right: 27/@rem;
            width: 70/@rem;
            height: 70/@rem;
        }
    }
    .righbox{
        margin-right: 24/@rem;
        width: 218/@rem;
        height: 64/@rem;
        background: #35aeb6;
        font-size: 30/@rem;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6/@rem;
        .icon-box{
            margin-right: 20/@rem;
            width: 39/@rem;
            height:39/@rem;
        }
    }
}
.table table{
    width: 100%;
    text-align: center;
    background: #ffffff;
    th{
        width: 100%;
    }
    td{
        border-right: 1px solid #fff;
        border-top: 1px solid #fff;
    }
    td:last-child{
        border-right:0;
    }
}
// table{
//     display: table;
//     // border-collapse: separate;
//     // border-spacing: 1px;
//     // border-color: #ffffff;
// }

.table table thead td{
    background: #35aeb6!important;
    color: #fff!important;
    font-size: 30/@rem;
    height: 66/@rem;
    line-height: 66/@rem;
}
.table table tbody td{
    padding: 19/@rem 0;
    font-size: 28/@rem;
}
.table table td:first-child{
    width:28%;
}
.table table td:nth-child(4){
    width:21%;
}
.table table td:nth-child(2){
    width:26%;
}
.table table td:nth-child(3){
    width: 25%;
}
.table table tbody tr:nth-child(even) {
    background: #d9eef1;
}
.table table tbody tr:nth-child(odd) {
    background: #f1f9f8;
}
.table table tbody td:nth-child(1) {
    background: #d9eef1;
}
.table table tbody td:nth-child(2) {
    background: #d9eef1;
}
.tablebox{
    position: absolute;
    overflow-y: scroll!important;
    margin-top: 545/@rem;
    width: 100%;
}
.border-top-none{
    border-top: 0!important;
}
</style>
