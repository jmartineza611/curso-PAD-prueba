import Vue from 'vue'
import App from './App.vue'
import Varb from 'bootstrap-vue'

Vue.use(Varb);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
