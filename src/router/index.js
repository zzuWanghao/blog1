import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
/*
import Create from '../pages/Create/template.vue'
import Detail from '../pages/Detail/template.vue'
import User from '../pages/User/template.vue'
import Mine from '../pages/Mine/template.vue'
import Edit from '../pages/Edit/template.vue'
import Index from '../pages/Index/template.vue'
import Login from '../pages/Login/template.vue'
import Register from '../pages/Register/template.vue'

*/

Vue.use(VueRouter)
import store from '../store'

window.store = store


const routes = [
  // {
  //   path: '/',
  //   component: Index
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {
  //   path: '/register',
  //   component: Register
  // },
  // {
  //   path: '/create',
  //   component: Create,
  //   meta:{requiresAuth:true}
  // },
  // {
  //   path: '/detail/:blogId',
  //   component: Detail
  // },
  // {
  //   path: '/edit/:blogId',
  //   component: Edit,
  //   meta:{requiresAuth:true}
  // },
  // {
  //   path: '/index',
  //   component: Index
  // },
  // {
  //   path: '/login',
  //   component: Login
  // },
  // {
  //   path: '/mine',
  //   component: Mine,
  //   meta:{requiresAuth:true}
  // },
  //
  // {
  //   path: '/user/:userId',
  //   component: User
  // },


  {
    path: '/',
    component: () => import('@/pages/Index/template.vue')
  },
  {
    path: '/login',
    component: () => import('@/pages/Login/template.vue')
  },
  {
    path: '/detail/:blogId',
    component: () => import('@/pages/Detail/template.vue')
  },
  {
    path: '/edit/:blogId',
    component: () => import('@/pages/Edit/template.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/create',
    component: () => import('@/pages/Create/template.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/user/:userId',
    component: () => import('@/pages/User/template.vue')
  },
  {
    path: '/mine',
    component: () => import('@/pages/Mine/template.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    component: () => import('@/pages/Register/template.vue')
  }

]



const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
if (to.matched.some(record=>record.meta.requiresAuth)){

  store.dispatch('checkLogin').then(()=>{

      next()

  }, () => {
    next({
      path:'/login',
      query:{redirect:to.fullPath}
    })
    console.log('fuck')
  })

}else {
  next()
}

})

export default router
