import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () =>import('@/views/home/Home.vue')
const Category = () =>import('@/views/category/Category.vue')
const Cart = () =>import('@/views/cart/Cart.vue')
const Profile = () =>import('@/views/profile/Profile.vue')

export default new Router({
  mode:'history',
  routes:[
    {
      path:'',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
