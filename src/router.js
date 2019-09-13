import VueRouter from 'vue-router'

//导入路由组件
import HomeVue from './components/tabbar/HomeVue.vue'
import MemberVue from './components/tabbar/MemberVue.vue'
import SearchVue from './components/tabbar/SearchVue.vue'
import ShopCarVue from './components/tabbar/ShopCarVue.vue'
import News from './components/news/NewList'
import NewDetail from './components/news/NewDetails'
import photoList from './components/photo/photolist.vue'
let router = new VueRouter({
    routes:[
         {path:'/',redirect:'/home'},
         {path:'/home',name:'home', component : HomeVue},
         {path:'/member',name:'member', component : MemberVue},
         {path:'/shopcar',name:'shopcar', component: ShopCarVue},
         {path:'/search',name:'search', component: SearchVue},
         {path:'/news',name:'news',component:News},
         {path:'/news/news_detail/:id',name:'news_detail',component:NewDetail},
         {path:'/home/photolist',name:'photolist',component:photoList}
        
    ],
    linkActiveClass : 'mui-active'

    
})

//暴露路由
export default router