<template>
    <div class="brand-list" id="nav" :class="navBarFixed == true ? 'isFixed' :''">
        <div class="nav-box line-bottom-bc01">
            <!-- 选项卡标题 start -->
            <div class="nav-bar" :class="searchBarFixed == true ? 'isFixed' :''">
                <div :class = "['nav-items',showfilterindex === navItem.id ? ' changecolor':'']"
                    v-for="navItem in navItems"
                    :key="navItem.id"
                    @click="setFilterPanel(navItem.id)"
                >
                    <div class="nav-item">
                        <span class="ellipsis">{{navItem.title}}</span>
                        <i :class="['fa fa-angle-'+ (showfilterindex === navItem.id ? 'up changecolor':'down')]"></i>
                    </div>
                    <div v-if="navItem.line" class='height'></div>
                </div>
            </div>
            <!-- 选项卡标题 end -->
            <!-- menu start -->
            <div class="menu" v-if="showfilter">
            <!-- 餐饮分类 -->
                <div class="classify" v-if="showfilterindex==1">
                    <ul>
                        <li
                        v-for="item in filterdata.cates"
                        :key="item.id"
                        @click="setCateIndex(item.id)"
                        :data_id = "item.id"
                        :class="[item.isChange ? 'changebgcolor':'']"
                        >{{item.name}}</li>
                    </ul>
                    <div class="buttons-box">
                        <div class="reset" @click.stop = "reset">重置</div>
                        <div class="complete" @click.stop="setFoodIndex">完成</div>
                    </div>
                </div>
                <!-- 智能排序 -->
                <div class="intelligent-sort" v-if="showfilterindex==2">
                    <ul class="sort">
                        <li class="sort-item"
                        v-for="item in filterdata.intelligentSort"
                        :key="item.id"
                        :class="[item.isChange ? 'changebgcolor':'']"
                        @click="brandSort(item.id)"
                        >{{item.title}}</li>
                    </ul>
                </div>
                <!-- 筛选 -->
                <div class="filter" v-if="showfilterindex==3">
                    <div class="filter-content">
                        <div class="filter-wrap" v-for="item in otherdata" :key="item.id">
                            <h2>{{item.type}}</h2>
                            <ul>
                                <li
                                :class="[list.isChange ? 'changebgcolor':'']"
                                v-for="list of item.lists"
                                :key="list.id"
                                @click="filterAll(item.id,list.id)">{{list.name}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="buttons-box">
                        <div class="reset" @click.stop = "resetFilter">重置</div>
                        <div class="complete" @click.stop="completeFilter">完成</div>
                    </div>
                </div>
            </div>
            <!-- menu start -->
        </div>
        <!-- 遮罩 -->
        <div :class="[showfilterindex ? 'masked':'']" @click="hideFilter"></div>
        <mescroll ref="mescroll" :upCallback="upCallback" warpId="index_scroll" id="index_scroll">
            <ul class="brand-content" ref="content">
                 <brand-list-item
                  v-for = "(list,index) in listBrandByTags"
                  :key = "index"
                  :list = "list">
                </brand-list-item>
            </ul>
        </mescroll>
    </div>
</template>
<script>
import Vue from 'vue'
import mescroll from '@/common/mescroll/Mescroll.vue' /* 分页组件 */
import BrandListItem from '@/common/brandListItem/BrandListItem.vue'
export default {
  name: 'BrandList',
  components: {mescroll, BrandListItem},
  data () {
    return {
      listBrandByTags: [], // 品牌列表数据
      listTags: [], // 获取的全部listTags
      category: [], // listTags中的餐饮theme
      investment: [],
      area: [],
      region: [],
      info: { // 请求的参数
        // investment: '',
        "cityCode": "",
        list: [
          {
            'classifyCode': 'BRAND_CATEGORY',
            'tagList': []
          },
          {
            'classifyCode': 'BRAND_INVESTMENT',
            'tagList': []
          },
          {
            'classifyCode': 'BRAND_AREA',
            'tagList': []
          }
        ],
        pageNum: 1,
        pageSize: 10,
        regionTagId: '',
        // shopArea: '',
        amountSort: '', // 投资金额排序 1低到高 2 高到低 传空为默认排序
        attentionSort: '' // 关注度排序 1 升序 2 降序 传空为默认排序
      },
      codeList: {codeList: ['BRAND_CATEGORY', 'BRAND_INVESTMENT', 'BRAND_AREA', 'REGION_TAG']}, // 获取筛选项的请求参数
      searchBarFixed: false, // 判断是否吸顶
      navBarFixed: false,
      navItems: [ // 总分类类表
        {id: 1, title: '餐饮分类', icon: 'up', line: true},
        {id: 2, title: '智能排序', icon: 'up', line: true},
        {id: 3, title: '筛选', icon: 'up', line: false}
      ],
      showfilterindex: null, // 显示哪个筛选类目，默认都不显示
      showfilter: false, // 是否显示下拉筛选
      filterdata: {
        cates: [], // 餐饮分类
        intelligentSort: [ // 智能排序
          {id: 1, title: '智能排序', isChange: true},
          {id: 2, title: '最受关注', isChange: false},
          {id: 3, title: '金额最低', isChange: false},
          {id: 4, title: '金额最高', isChange: false}
        ]
      },
      otherdata: [
        {id: 1, type: '投资金额', codeList: 'BRAND_INVESTMENT', lists: []},
        {id: 2, type: '开店面积', codeList: 'BRAND_AREA', lists: []},
        {id: 3, type: '考察区域', codeList: 'REGION_TAG', lists: []}
      ]
    }
  },
  methods: {
    // 上拉加载
    upCallback (page) {
      let {info} = this
      info.pageNum = page.num
      info.pageSize = page.size
      let params = {
        // 'apiUrl':"http://kuaidaoservice-brand-test.kuaidaoapp.com/brand/v1.0/phone/listBrandByTag",
        // 'apiUrl': this.weburl + 'mobile/brand/listBrandByTags2',
        'params': info
      }
      this.$http.post(this.baseurl + '/home/listbrandbytag', params).then((res) => {
        if (res.data.code == 200) {
          // console.log(res.data.data.list)
          var more = res.data.data
          var list = res.data.data.list
          if( more.pages < info.pageNum ){
            list.length = 0;
          }
          this.$refs.mescroll.endSuccess(list.length)
          this.listBrandByTags = this.listBrandByTags.concat(list)
        }
      }).catch((error) => {
        this.$refs.mescroll.endErr()
      })
    },
    getListTags () {
      let params = {
        'apiUrl': this.weburl + 'mobile/brand/listTags',
        'params': this.codeList
      }
      this.$http.post(this.baseurl + '/brand/api', params).then((res) => {
      // this.$http.post(this.baseurlproxy + '/mobile/brand/listTags', this.codeList).then((res) => {
        // console.log(res.data.data)
        if (res.data.code == 200) {
          this.listTags = res.data.data
          this.category = res.data.data[0].tagList[0].childList
          this.investment = res.data.data[1].tagList
          this.area = res.data.data[2].tagList
          this.region = res.data.data[3].tagList
          this.filterdata.cates = this.filterCategory

          this.otherdata[0].lists = this.filterInvestmentData
          this.otherdata[1].lists = this.filterAreaData
          this.otherdata[2].lists = this.filterRegionData
        }
      })
    },
    // 设置选项卡面板显示
    setFilterPanel (id) {
      if (this.showfilterindex === id) { // 判断是否相等
        this.navBarFixed = false
        this.showfilter = false
        this.showfilterindex = null
        // 遮罩，body定位
        document.getElementsByTagName('body')[0].className = ''
      } else {
        this.navBarFixed = true

        this.showfilter = true
        this.showfilterindex = id // 点击相等，对应的id,的选项卡显示
        document.getElementsByTagName('body')[0].className = 'overHidden'
      }
    },
    // 设置餐饮分类
    setCateIndex (id) {
      let items = this.filterdata.cates
      if (!id) { // 如果点击的是全部 0 让所有除了全部的都是false
        items[0].isChange = true
        items.forEach(item => {
          if (item.id !== 0) {
            return item.isChange = false
          }
        })
      } else {
        items[0].isChange = false // 否则第一个为false
        items.forEach(item => {
          if (item.id == id && item.id) {
            item.isChange = !item.isChange
          }
        })
      }
    },
    // 餐饮分类的请求
    setFoodIndex () {
      this.info.list[0].tagList = this.filterfoods

      this.navItems[0].title = this.filterfoodstitle

      this.clearData()
      this.hideFilter()
    },
    brandSort (id) { // 智能排序的数据
      var type = this.filterdata.intelligentSort
      type.forEach(item => {
        if (item.id == id) { // 循环项目，如果和传递过来的id相等
          item.isChange = true
        } else {
          item.isChange = false
        }
        return item
      })
      switch (id) {
        case 1: this.info.attentionSort='';this.info.amountSort = '';this.navItems[1].title="智能排序";break;
        case 2: this.info.attentionSort = '2';this.info.amountSort = '';this.navItems[1].title="最受关注";break;
        case 3: this.info.amountSort = '1';this.info.attentionSort = '';this.navItems[1].title="金额最低";break;
        case 4: this.info.amountSort = '2';this.info.attentionSort = '';this.navItems[1].title="金额最高";break;
        // default:break;
      }
      this.clearData()
      this.hideFilter()
    },
    filterAll (itemid, listid) { // 点击获取类型和类型对应的id 对数据做一个处理sts)
      if (itemid == 1) {
        this.otherdata[0].lists.forEach(list => {
          if (list.id !== listid) {
            list.isChange = false
          } else {
            list.isChange = true
          }
        })
      } else if (itemid == 2) {
        this.otherdata[1].lists.forEach(list => {
          if (list.id !== listid) {
            list.isChange = false
          } else {
            list.isChange = true
          }
        })
      } else if (itemid == 3) {
        this.otherdata[2].lists.forEach(list => {
          if (list.id !== listid) {
            list.isChange = false
          } else {
            list.isChange = true
          }
        })
      }
    },
    clearData () { // 餐饮重置数据
      this.listBrandByTags = []
      this.$refs.mescroll.resetUpScroll()// 重置列表数据
    //   this.$refs.mescroll.hideTopBtn()// 隐藏回到顶部按钮
    },
    // 重置筛选分类
    resetFilter () {
      var item = this.otherdata
      for (var i = 0; i < item.length; i++) {
        item[i].lists.forEach(list => {
          if (list.id !== 0) {
            list.isChange = false
          } else {
            list.isChange = true
          }
        })
      }

      this.info.regionTagId = ''      // 重置考察区域
      this.info.list[1].tagList = []  // 重置投资金额
      this.info.list[2].tagList = []  // 重置开店面积
    },
    // 完成筛选分类
    completeFilter () {
      var item = this.otherdata
      // 第一个投资金额
      var arr01 = item[0].lists.filter(list => {
        return list.isChange ? list.id : false // 返回的是数据中对应list.id 的那一项
      })
      this.info.list[1].tagList = []
      if (arr01.length) {
        this.info.list[1].tagList.push(arr01[0].id)
      }
      this.info.list[2].tagList = []
      // 第二个面积
      let arr02 = item[1].lists.filter(list => {
        return list.isChange ? list.id : false
      })
      if (arr02.length) {
        this.info.list[2].tagList.push(arr02[0].id)
      }
      // console.log(this.info.list[2].tagList)
      // 第三个面积
      let arr03 = item[2].lists.filter(list => {
        return list.isChange ? list.id : false
      })
      // console.log(arr03)
      // console.log(arr03.length + '长度')
      if (arr03.length) {
        this.info.regionTagId = arr03[0].id
      }else{
        this.info.regionTagId = ''
      }
      // console.log(this.info.regionTagId + '区域id')
      // console.log(this)

      this.clearData()
      this.hideFilter()
    },
    reset () { // 重置餐饮分类
      let items = this.filterdata.cates
      items[0].isChange = true
      return items.forEach(item => {
        if (item.id) {
          return item.isChange = false
        }
      })
    },
    hideFilter () { // 隐藏选项数据
      this.showfilterindex = ''
      this.showfilter = false
      this.navBarFixed = false
      document.getElementsByTagName('body')[0].className = ''
    },
    // 监听滚动导航吸顶
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      var offsetTop = document.querySelector('#nav').offsetTop - document.querySelector('#search').clientHeight
      if (scrollTop > offsetTop) {
        this.searchBarFixed = true
      } else {
        this.searchBarFixed = false
      }
    }
  },
  computed: {
    filterInvestmentData () { // 过滤投资金额
      let lists = this.investment
      let len = lists.length
      for (let i = 0; i < len; i++) {
        Vue.set(lists[i], 'isChange', false)
      }
      let all = {id: 0, name: '全部', isChange: true}
      lists.unshift(all)
      return lists
    },
    filterRegionData () {
      let lists = this.region
      let len = lists.length
      for (let i = 0; i < len; i++) {
        Vue.set(lists[i], 'isChange', false)
      }
      let all = {id: 0, name: '全部', isChange: true}
      lists.unshift(all)
      return lists
    },
    filterAreaData () {
      let lists = this.area
      let len = lists.length
      for (let i = 0; i < len; i++) {
        Vue.set(lists[i], 'isChange', false)
      }
      let all = {id: 0, name: '全部', isChange: true}
      lists.unshift(all)
      return lists
    },
    filterfoods () { // 过滤类目分类
      let foodId = this.filterdata.cates.filter(item => {
        return item.isChange ? item.id : false
      })
      let list = []
      for (let i = 0; i < foodId.length; i++) {
        list.push(foodId[i].id)
      }
      // console.log(list)
      return list
    },
    filterfoodstitle () { // 过滤类目分类
      let foodId = this.filterdata.cates.filter(item => {
        return item.isChange ? item.id : false
      })
      var title = []
      for (let i = 0; i < foodId.length; i++) {
        title.push(foodId[i].name)
      }
      console.log(title)
      if(!title.length){
        return '餐饮分类'
      }else{
        title = title.join('')
         return title
      }
    },
    filterCategory () { // 处理餐饮项数据，给数据添加字段
      let lists = this.category
      let len = lists.length
      for (let i = 0; i < len; i++) {
        Vue.set(lists[i], 'isChange', false)
        // lists[i].isChange = false // **** 这么设置数据改变页面不会更改 ****
      }
      let all = {id: 0, name: '全部', isChange: true}
      lists.unshift(all)
      return lists
    }
  },
  created () {
    this.getListTags()
  },
  mounted () { // 监听滚动条
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () { // 组件切换的时候，销毁监听
    window.removeEventListener('scroll', this.handleScroll)
  },
  activated(){
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated(){
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="less" scoped>
@rem: 50rem;
*{
    box-sizing: border-box;
}
.nav-bar{
  .nav-items:last-child{
    span{
      width: 70/@rem!important;
    }
  }
}
// 遮罩定位
.overHidden{
    height: 100%;
    overflow: hidden!important;
}
// 控制导航显示颜色
.change {
  color: #35aeb6;
  background: #ebfefd !important;
}
.changebgcolor {
    border: none!important;
    background: #35aeb6!important;
    color: #ffffff!important;
}
.changecolor {
    color: #35aeb6!important;
}
// 最外层
.brand-list{
    position: relative;
    background: #ffffff;
    min-height: 926/@rem;
}
// 选项卡 start
.isFixed{      // 滚动定位
    position:fixed;
    top:88/@rem;
    left: 0;
    right: 0;
    z-index:3;
}
.nav-box{
  position: relative;
  z-index: 4;
  background-color:#ffffff;
  height: 88/@rem;
  .nav-bar {
    background-color:#ffffff;
    width:100%;
    height: 88/@rem;
    line-height: 88/@rem;
    display: flex;
    .nav-items {
      font-size: 30/@rem;
      text-align: center;
      flex: 1;
      position: relative;
      color: #333333;
      .nav-item{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        span{
          display: inline-block;
          width: 133/@rem;
          text-align: center;
        }
      }
      i {
        font-size: 34/@rem;
        padding-left: 5/@rem;
        color: #333333;
      }
    }
  }
}
.height {  // 导航中间的分割线
    width: 1px;
    height: 48/@rem;
    background: #e1e1e1;
    position: absolute;
    top: 50%;
    -webkit-transform: translate3d(0, -50%, 0);
    -ms-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0);
    right: 0;
}
// 选项卡 end
.masked {
    width: 100%;
    height: 100%;
    background: #000000;
    opacity: .5;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
}

// 品牌列表
.brand-content {
    position: relative;
    color:#666666;
    margin-top: 30/@rem;
    overflow-y: scroll;
}
// 导航
.menu{
  position:absolute;
  width: 100%;
  top: 88/@rem;
  left: 0;
  z-index: 9999;
}
// 餐饮分类
.classify{
    width: 100%;
    position: absolute;
    left: 0;
    top: -1px;
    background: #fff;
    z-index: 999;
    ul{
        // border-bottom: 1px solid #e1e1e1;
        padding:40/@rem 30/@rem 20/@rem;
        flex-wrap: wrap;
        display: flex;
        color: #333;
        font-size: 26/@rem;
        display: flex;
        li{
            display: block;
            width: 118/@rem;
            height: 50/@rem;
            text-align: center;
            line-height: 50/@rem;
            border-radius: 3px;
            background: #f5f5f5;
            margin: 0 10/@rem 20/@rem;
        }
    }
}
// 重置 确定按钮
.buttons-box{
    padding: 20/@rem 40/@rem 20/@rem;
    font-size: 32/@rem;
    display: flex;
    justify-content: space-between;
    div{
        width: 320/@rem;
        height: 80/@rem;
        text-align: center;
        line-height: 80/@rem;
        border: 1px solid #e1e1e1;
        color: #333333;
        border-radius: 8/@rem;
    }
    .complete {
        background: #35aeb6;
        font-size: 32/@rem;
        color: #ffffff!important;
    }
}
// 智能排序
.intelligent-sort{
    width: 100%;
    position: absolute;
    left: 0;
    top: -1px;
    background: #fff;
    z-index: 999;
}
.sort{
    position: relative;
    background: #fff;
    position: relative;
    padding: 30/@rem 114/@rem 32/@rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .sort-item{
        width: 248/@rem;
        height:76/@rem;
        line-height: 76/@rem;
        text-align: center;
        margin-bottom: 26/@rem;
        font-size: 26/@rem;
        color: #666666;
        border: 1px solid #cccccc;
        border-radius: 4px;
    }
}
// 筛选
.filter{
    width: 100%;
    position: absolute;
    left: 0;
    top: -1px;
    background: #ffffff;
    z-index: 999;

    .filter-content{
        padding: 0 11/@rem;
        display: flex;
        flex-direction: column;
        height: 716/@rem;
        overflow-y: scroll;
    }
    h2{
        font-size: 28/@rem;
        color: #333333;
        // font-weight: 600;
        line-height: 88/@rem;
        padding: 0 13/@rem;
    }
    ul{
      padding-bottom: 4/@rem;
      width: 728/@rem;
      li{
          float:left;
          width: 156/@rem;
          height: 64/@rem;
          line-height: 64/@rem;
          font-size: 26/@rem;
          color: #666666;
          border: 1px solid #cccccc;
          text-align: center;
          margin: 0 13/@rem 26/@rem;
          border-radius: 4px;
      }
    }
    .buttons-box{
        padding: 36/@rem 24/@rem 35/@rem;
        div{
            width: 335/@rem;
        }
    }
}
</style>
