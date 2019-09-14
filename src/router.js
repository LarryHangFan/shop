import VueRouter from 'vue-router'

//导入路由组件
import HomeVue from './components/tabbar/HomeVue.vue'
import MemberVue from './components/tabbar/MemberVue.vue'
import SearchVue from './components/tabbar/SearchVue.vue'
import ShopCarVue from './components/tabbar/ShopCarVue.vue'
import News from './components/news/NewList'
import NewDetail from './components/news/NewDetails'
import photolist from './components/photo/photolist'
import photoDetail from './components/photo/PhotoDetail'
import goods from './components//goods/GoodsList'
import goodsInfo from './components/goods/GoodsInfo'
let router = new VueRouter({
    routes:[
         {path:'/',redirect:'/home'},
         {path:'/home',name:'home', component : HomeVue},
         {path:'/member',name:'member', component : MemberVue},
         {path:'/shopcar',name:'shopcar', component: ShopCarVue},
         {path:'/search',name:'search', component: SearchVue},
         {path:'/news',name:'news',component:News},
         {path:'/news/news_detail/:id',name:'news_detail',component:NewDetail},
         {path:'/home/photolist',name:'photo',component:photolist},
         {path:'/photolist/photodetail/:id',name:'photoDetail',component:photoDetail},
         {path:'/home/goods',name:'goods',component:goods},
         {path:'/goods/goodsinfo/:id',name:"goodsinfo",component:goodsInfo}
    ],
    linkActiveClass : 'mui-active'
   
})

//暴露路由
export default router