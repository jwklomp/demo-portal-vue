// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mainmenu from './components/Mainmenu.vue'

var numeral = require("numeral")

Vue.config.productionTip = false

Vue.filter('amount', function (value) {
	return numeral(value).format('0,0.00')
})

Vue.filter('lowercase', function (value) {
	return value.toLowerCase()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template:     
  '<div class="col-lg-10 container">' +
  '<main-menu></main-menu>' +
  '<router-view></router-view>' + 
  '</div>',
  components: {
    'main-menu': Mainmenu
  }
})
