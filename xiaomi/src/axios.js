/*
  1.引入vue
  2.引入axios库
  3.设置跨域请求保存session
  4.设置请求服务基础路径
  5.将axios注册为vue实例的一部分
  6.
  7.在main.js引入axios
*/
import Vue from 'vue'
import axios from 'axios'
axios.defaults.withCredentials=true;//允许传送(凭证)cookie
axios.defaults.baseURL="http://127.0.0.1:3000/";
Vue.prototype.axios=axios;