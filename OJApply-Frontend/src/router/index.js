import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/ojApply/LoginView.vue'
import RegisterView from '../views/ojApply/RegisterView.vue'
import FormView from '../views/ojApply/FormView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/Register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/Form',
      name: 'form',
      component: FormView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
