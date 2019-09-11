import VueRouter from 'vue-router'

//导入路由组件
import HomeVue from './components/tabbar/HomeVue.vue'
import MemberVue from './components/tabbar/MemberVue.vue'
import SearchVue from './components/tabbar/SearchVue.vue'
import ShopCarVue from './components/tabbar/ShopCarVue.vue'

let router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
         {path:'/home',name:'home', component : HomeVue},
         {path:'/member',name:'member', component : MemberVue},
         {path:'/shopcar',name:'shopcar', component: ShopCarVue},
         {path:'/search',name:'search', component: SearchVue}
        
    ],
    linkActiveClass : 'mui-active'

    
})

//暴露路由
export default router