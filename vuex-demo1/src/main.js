import Vue from 'vue'
import Vuex from './min-vuex'
import App from './App.vue'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

Vue.prototype.$store = store

new Vue({
  render: h => h(App),
}).$mount('#app')
