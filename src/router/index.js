import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Login',
    component: ()=> import('../views/Login.vue')
  },
  {
    path: '/tasks',
    name: 'Tasks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Task.vue')
  },
  {
    path:'/register',
    name: 'Register',
    component: ()=>import('../views/Register.vue')
  },
  {
    path:'/register-message',
    name: 'Register Successful',
    component: ()=>import('../views/RegisterMessage.vue')
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
