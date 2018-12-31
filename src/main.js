import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import 'bootstrap'
import "bootstrap/dist/css/bootstrap.css";


import Posts from '@/components/Posts.vue'
import Contact from '@/components/Contact.vue'
import About from '@/components/About.vue'
import Post from '@/components/Post.vue'


const routes = [
  {
    path: '/',
    component: Posts
  },
  {
    path: '/index',
    component: Posts
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/post',
    component: Post
  }
];


const router = new VueRouter({
  routes
})

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
