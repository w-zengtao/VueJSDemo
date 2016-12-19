import Vue from 'vue'
import VueRouter from 'vue-router'
import TimeEntries from '../components/TimeEntries'
import User from '../components/User'
import UserProfile from '../components/user/profile'
import Home from '../components/Home'

Vue.use(VueRouter)

const routes = [
  { path : '/', component : Home },
  { path : '/home', component : Home},
  {
    path : '/time-entries', component: TimeEntries,
    children : [{
      path : 'log-time',
      component : resolve => require(['../components/LogTime.vue'], resolve),
    }]
  },
  { path : '/users/:id', name: 'user', component: User,
    children: [
      {
        path: 'profile',
        component: UserProfile
      }
    ]
  }
];

export default new VueRouter({
  routes: routes
})
