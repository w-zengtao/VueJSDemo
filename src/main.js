// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Home from './components/Home'
import App from './App'
import store from './store'
import TimeEntries from './components/TimeEntries'
import User from './components/User'


import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  { path : '/', component : Home },
  { path : '/home', component : Home},
  {
    path : '/time-entries', component: TimeEntries,
    children : [{
      path : 'log-time',
      component : resolve => require(['./components/LogTime.vue'], resolve),
    }]
  },
  { path : '/user/:id', name: 'user', component: User }
];

const router = new VueRouter({
  routes: routes
});

/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  router,
  store,
  // components: { App }
  ...App,
})
