import Vue from 'vue'
import VueRouter from 'vue-router'

const Home =()=>import('views/home/Home')
const Cart =()=>import('views/cart/Cart')
const Category =()=>import('views/category/Category')
const Profile =()=>import('views/profile/Profile')
Vue.use(VueRouter)
//注意：只能使用routes这个名
const routes= [
    {
      path: '',
      redirect: '/home'
    },{
        path: '/home',
        component:Home
      }, {
      path: '/cart',
      component:Cart
    },  {
      path: '/profile',
      component:Profile
    }, {
      path: '/category',
      component:Category
    }
  ]

export default new VueRouter({
  routes,
  mode:'history'
})