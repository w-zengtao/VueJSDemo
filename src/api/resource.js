import Vue from 'vue'
import VueResource from 'vue-resource'
import { API_ROOT } from '../config/index'

Vue.use(VueResource)

// 下面这个 interceptors 拦截请求 or 对请求的 response 处理
Vue.http.interceptors.push((request, next)=>{
  // 这里对请求体进行处理
  // request.headers = request.headers || {}
  // if (getCookie('token')) {
  //   request.headers.Authorization = 'Bearer ' + getCookie('token').replace(/(^\")|(\"$)/g, '')
  // }
  next((response) => {
    if (response.status === 401) {
      // signOut()
      // window.location.pathname = '/login'
    }
    if (response.status === 200) {
      alert('xx');
    }

  })
})

export const UserResource = Vue.resource(API_ROOT + 'students{/id}/profile')
export const WorkResource = Vue.resource(API_ROOT + 'teachers{/id}/dynamics')
