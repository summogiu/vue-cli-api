import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    component: () => import('../views/LogIn.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/backstage/DashBoard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/backstage/ProductsView.vue')
      }]
  },
  {
    path: '/user',
    component: () => import('../views/user/UserBoard.vue'),
    children: [
      {
        path: 'productList',
        component: () => import('../views/user/UserProductList.vue')
      },
      {
        path: 'product/:productid',
        component: () => import('../views/user/UserProduct.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
