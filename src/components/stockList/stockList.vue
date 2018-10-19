<template>
  <div class="stockList">
    <div class="flex list-title">
      <p class="stock_info_w">名称代码</p>
      <p class="price_w">最新价</p>
      <p class="increase_w">涨跌幅</p>
    </div>
    <ul>
      <li class="flex flex-ai-center">
        <div class="stock_info_w stock_info">
          <p><span>腾讯控股</span><span class="new">新</span><span class="buy">买</span><span class="sale">卖</span></p>
          <p><span>HK</span><span class="sub">00700</span></p>
        </div>
        <div class="price_w price">76.000</div>
        <div class="increase_w increase">+8.19%</div>
      </li>
      <li class="flex flex-ai-center">
        <div class="stock_info_w stock_info">
          <p><span>腾讯控股</span><span class="new">新</span><span class="buy">买</span><span class="sale">卖</span></p>
          <p><span>HK</span><span class="sub">00700</span></p>
        </div>
        <div class="price_w price">76.000</div>
        <div class="increase_w increase">+8.19%</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/stylus/variable.styl'
  // @import '../../assets/stylus/baseFlex.styl'
  .stockList
    .stock_info_w
      width 3.5rem
      text-align left 
    .price_w
      width 1.7rem
      text-align right 
    .increase_w
      width 1.6rem
      text-align right 
    .sub
      margin-left 0.08rem
      color $color-font-sub
    .list-title
      line-height 0.8rem
      flex-grow 1
      flex-shrink 1
      font-size $font-size-small
      color $color-font-tabs-dark
      background-color $color-background-title
      padding 0 0.24rem
    ul
      padding 0 0.24rem
      li
        height 1.04rem
        flex-grow 1
        flex-shrink 1
        border-bottom 1px solid #E6E6E6
        .stock_info          
          p
            font-size $font-size-small-s 
          p:nth-child(1) 
            span 
              margin-right 0.08rem       
              font-size $font-size-small-s  
              box-sizing border-box
              padding 0 1px
            span:nth-child(1)
              padding 0
              font-size $font-size-medium 
            .new
              color  $color-font-tabs-red
              border 1px solid $color-font-tabs-red
            .buy
              color #FF7733
              border 1px solid #FF7733
            .sale
              color #3399FF
              border 1px solid #3399FF

        .price
          font-size $font-size-large-s
        .increase
          font-size $font-size-large-s
          color $color-font-tabs-red
</style>
