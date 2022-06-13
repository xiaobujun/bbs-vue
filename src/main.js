import Vue from 'vue'
import ElementUI from 'element-ui' // 引入ElementUI
import 'element-ui/lib/theme-chalk/index.css'; // 引入ElementUI样式
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'


Vue.use(ElementUI); // ElementUI样式
Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
