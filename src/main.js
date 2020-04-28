import Vue from 'vue'
import "./row-col.scss"
import "./pm.scss"
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
