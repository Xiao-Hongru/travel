<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in imgs" :key="item.id">
        <img class="swiper-img" :src="item.imgURL">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
    export default {
        name: "HeaderSwiper",
        data() {
          return {
            swiperOptions: {
              pagination:'.swiper-pagination',
            },
            imgs:[
              {id:'001',
               imgURL:'https://img1.qunarzz.com/travel/poi/1806/b1/b2c978f8384ba837.png_r_720x400x95_ae9cd77b.png'
              },
              {id:'002',
                imgURL:'https://img1.qunarzz.com/travel/poi/1806/4d/3bd43e3ef7500037.png_r_720x400x95_5ac85332.png'
              },
              {
                id:'003',
                imgURL:'https://img1.qunarzz.com/travel/poi/1806/96/21247baf4705cf37.png_r_720x400x95_f83b289c.png'
              }
              ]
          }

        },
        computed: {
          swiper() {
            return this.$refs.mySwiper.$swiper
          }
        },

    }
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background-color:#fff !important
  .wrapper
    overflow :hidden
    width :100%
    height:0
    padding-bottom :43%
  .swiper-img
    width:100%
    margin-top:-5vw
</style>
