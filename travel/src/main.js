// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'
import 'swiper/dist/css/swiper.css'
import fastClick from 'fastclick'
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;
fastClick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
