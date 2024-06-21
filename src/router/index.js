import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: 'frontPage',
    children: [
      {
        path: 'frontPage',
        component: () => import('../views/user/FrontPage.vue')
      },
      {
        path: 'productList',
        component: () => import('../views/user/UserProductList.vue')
      },
      {
        path: 'product/:productid',
        component: () => import('../views/user/UserProduct.vue')
      },
      {
        path: 'placeOder',
        component: () => import('../views/user/PlaceOder.vue')
      },
      {
        path: 'checkout/:oderid',
        component: () => import('../views/user/CheckoutView.vue')
      }
    ]
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
      },
      {
        path: 'coupons',
        component: () => import('../views/backstage/CouponsView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
