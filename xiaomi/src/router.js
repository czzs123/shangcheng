import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: () => import( './components/Home.vue')},
    {path: '/home',component: () => import( './components/Home.vue')},
   // {path: '/swipe',component: () => import( './components/common/swipe.vue')},
    {path: '/cart',component: () => import( './components/common/cart.vue')},
    {path: '/me',component: () => import( './components/common/me.vue')},
    {path: '/login',component: () => import( './components/login.vue')},
    {path: '/resgiter',component: () => import( './components/resgiter.vue')},
    {path: '/goodlist',component: () => import( './components/goodlist.vue')},
    {path: '/vuex',component: () => import( './components/vuex.vue')},
    {path: '/todobox',component: () => import( './vuex excise/todobox.vue')},
    {path: '/brother1',component: () => import( './components/brother1.vue')},
    {path: '/brother2/:lid',component: () => import( './components/brother2.vue')},
    {path: '/father',component: () => import( './components/father.vue')},
  ]
})
