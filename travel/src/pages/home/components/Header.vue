<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont">&#xe61c;</i>
      </div>
    <div class="header-input">
      <i class="iconfont">&#xe60b;</i>
      输入城市景点主题</div>
    <div class="header-right">城市
    <i class="iconfont">&#xe64a;</i>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HomeHeader"
    }
</script>

<style lang="stylus" scoped>
  .header
    height :.86rem
    display :flex
    background-color #00bcd4
    color:white
    line-height :.86rem
    .header-left
      text-align :center
      width:.64rem
    .header-input
      padding-left :.3rem
      flex:1
      height:.64rem
      line-height :.64rem
      color:#ccc
      background-color: white
      margin-top:.12rem
      border-radius :.1rem
    .header-right
      width :1.24rem
      text-align:center
      .iconfont
        font-size :.3rem

</style>
