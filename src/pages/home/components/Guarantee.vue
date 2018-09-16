<template>
  <div class="Guarantee">
    <div class="title">保障</div>
    <div class="jmUl">
      <a><img src="/static/images/home/icon_sheng@3x.png"></a>
      <a><img src="/static/images/home/icon_tui@3x.png"></a>
      <a><img src="/static/images/home/icon_bao@3x.png"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeGuarantee'
}
</script>

<style lang="less" scoped>
  @rem: 50rem;
  .Guarantee {
    padding: 0 48/@rem;
    margin-bottom: 60/@rem;
    .title {
      font-size: 40/@rem;
      color: #333;
      width: 100%;
      line-height: 48/@rem;
      margin-bottom: 40/@rem;
    }
    .jmUl {
      display: flex;
      justify-content: space-between;
      a {
        display:inline-block;
        img {
          width: 207/@rem;
          height: 148/@rem;
        }
      }
    }
  }
</style>
