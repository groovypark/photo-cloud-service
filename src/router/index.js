import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'
import PostView from '@/components/PostView'
import CameraView from '@/components/CameraView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/post',
      name: 'PostView',
      component: PostView
    },
    {
      path: '/camera',
      name: 'CameraView',
      component: CameraView
    }
  ]
})
