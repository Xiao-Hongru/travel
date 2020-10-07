<template>
  <div>
    <home-header></home-header>
    <header-swiper></header-swiper>
  </div>
</template>

<script>
  import HomeHeader from "./components/Header";
  import HeaderSwiper from "./components/HeaderSwiper";

    export default {
        name: "Home",
        components:{
          HomeHeader,
          HeaderSwiper
        }
    }
</script>

<style scoped>

</style>
