import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//0.引入axios
import axios from './axios.js'
//main.js
//1:引入mint-ui库中所有组件:完整引入
import MintUI from 'mint-ui'
//2:单独引入mint-ui样式文件
import'mint-ui/lib/style.css'
//3:将mint-ui组件库中组件注册vue实例中
Vue.use(MintUI);
//引入字体 iconfont 可以直接引用类名
import './font/font_1/iconfont.css'
//引入组件
import home from './components/Home.vue'
//注册全局组件
Vue.component("hahaha",home);







Vue.config.productionTip = false
new Vue({
  router:router,
  store:store,//这边传递给vue
  render: h => h(App)
}).$mount('#app')
