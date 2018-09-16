<template>
  <ul class="Alphabet">
    <li class="item" v-for="(item, index) of letters" :key="item" :ref="item" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" @click="handleLetterClick">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: ['cities'],
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(this.cities[i].type)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick: function (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY + 20
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="less" scoped>
  @rem: 50rem;
  .Alphabet {
    width: 48/@rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 10/@rem;
    bottom: 0;
    .item {
      font-size: 24/@rem;
      color: #35aeb6;
      text-align: center;
      line-height: 40/@rem;
    }
  }
</style>
