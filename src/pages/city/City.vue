<template>
  <div class="City">
    <city-search></city-search>
    <city-list :cities="cities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  data () {
    return {
      cities: [],
      letter: '',
      hotCities: []
    }
  },
  components: {
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    //全部省区城市列表
    getCityData () {
      this.$http.get('/static/cityData/addecodelist.json').then(this.getCityDataSucc)
    },
    getCityDataSucc (res) {
      res = res.data
      if ( res.ret && res.data) {
        this.cities = res.data
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    },
    // 热门城市
    getHotCities () {
      this.$http.post(this.baseurl+'/home/hotcity', {
        'pageSize': '6',
        'pageNum': '1'
      }).then((res) => {
        console.log(11111)
        console.log(res.data)
        console.log(22222)
      })

    }
  },
  mounted () {
    this.getCityData()
    // this.getHotCities()
  }
}
</script>

<style lang="less" scoped></style>
