// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BackToTop from 'vue-backtotop'
import VueTreeNavigation from 'vue-tree-navigation'
import VueParticles from 'vue-particles'
import DatePicker from 'vue-md-date-picker'

Vue.use(DatePicker)
Vue.use(VueParticles)
Vue.use(VueTreeNavigation)
Vue.use(BackToTop)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
