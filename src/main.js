//入口
import Vue from '../node_modules/vue/dist/vue.js'
//导入路由模块
import VueRouter from 'vue-router'
//导入vue-resource
import VueResource from 'vue-resource'

//Vue挂载路由
Vue.use(VueRouter)
//Vue挂载resource
Vue.use(VueResource)

//导入mui的样式文件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'



//按需导入mint-ui组件
import {Header,Swipe, SwipeItem} from 'mint-ui'
import 'mint-ui/lib/style.css'

//导入路由模块
import router from './router'

//组件挂载到Vue
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


//导入根组件
import App from './App.vue'


let vm = new Vue({
    el:"#app",
    render: c => c(App),
    router 
})