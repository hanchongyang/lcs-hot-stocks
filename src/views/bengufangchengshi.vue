<template>
  <div class="benguFCS">
    <div class="searchHotStock">
      <img src="@/assets/img/bengu/bengu_search_stock.png" alt="">
    </div>
    <div class="selectStock">
      <div class="sS-title flex flex-js-sb">
        <p>方程式选股</p>
        <p>10月8日盘后更新</p>
      </div>
      <div class="tabs flex" ref="tabs">
        <p v-for="(o,i) in tabs" :key="i" :class="{active : tabIndex === i}" @click="changeShowType(o)">{{o.name}}</p>
        <div class="moveLine" ref="moveLine"></div>
      </div>
      <stock-list></stock-list>
      <div class="look_record flex flex-ai-center flex-js-sb">
        <p>选股池最近有5次调入记录，6次调出记录</p>
        <p class="look_record_btn">查看记录</p>
      </div>
    </div>
    <!-- <div class="allRecord">
      <div class="title">
        <p>战绩一览</p>
        <p>最近30天</p>
      </div>
    </div> -->
  </div>
</template>

<script>
  import stockList from '@/components/stockList/stockList'
  export default {
    data() {
      return {
        tabs: [{
          name: '进攻型',
          index: 0
        }, {
          name: '防守型',
          index: 1
        }],
        tabIndex: 0
      }
    },
    methods: {
      changeShowType(o) {
        const tabsClientWidth = this.$refs.tabs.offsetWidth
        let num = o.index ? 1 : -1
        this.tabIndex = o.index
        this.$refs.moveLine.style.left = this.$refs.moveLine.offsetLeft + tabsClientWidth / 2 * num + 'px'
      }
    },
    components: {
      stockList
    }
  }
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/variable.styl'
// @import '../assets/stylus/baseFlex.styl'
.active
  color $color-font-tabs-red !important
.benguFCS
  background-color $color-background-page
  padding-top 0.24rem
  font-family $font-family-PCM
.searchHotStock
  width 7.02rem
  margin 0 auto
  margin-bottom 0.24rem
  img 
    display block
    width 100%
.selectStock  
  background-color $color-background-module 
  .sS-title
    font-size 0.38rem
    color $color-font-theme
    line-height 1.08rem
    font-weight 500
    padding 0 0.24rem
    p:nth-child(2)
      font-family 'PingFangSC-Regular'
      font-size 0.28rem
      color $color-font-sub
      font-weight 400
  .tabs
    position relative
    line-height 0.88rem
    p
      flex-grow 1
      text-align center
      font-size $font-size-medium 
      font-weight 500
      color $color-font-tabs-dark
    .moveLine
      position absolute
      width 0.36rem
      height 0.06rem
      background-color $color-font-tabs-red
      bottom 0
      left calc( 25% - 0.18rem )
  .look_record
    height 1.04rem
    padding 0 0.24rem
    font-size $font-size-medium-s
    color $color-font-sub 
    .look_record_btn
      width 1.6rem
      height 0.56rem
      border-radius 0.28rem
      background -webkit-linear-gradient(#FF3333, #FF794C)
      color #FFFFFF
      font-size $font-size-medium
      line-height 0.56rem

</style>
