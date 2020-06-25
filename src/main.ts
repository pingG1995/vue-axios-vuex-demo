import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import vueAxios from 'vue-axios'


Vue.config.productionTip = false
Vue.use(vueAxios, axios)
Vue.use(ElementUI)
Vue.prototype.$axios = axios;
import './element'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
