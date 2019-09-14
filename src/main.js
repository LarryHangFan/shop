//入口
import Vue from '../node_modules/vue/dist/vue.js'
//导入路由模块
import VueRouter from 'vue-router'
//导入vue-resource
import VueResource from 'vue-resource'

//导入mui的样式文件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

///导入时间格式化插件
import moment from 'moment'

//按需导入mint-ui组件
//import {Header,Swipe, SwipeItem,Button,Lazyload} from 'mint-ui'
import Mint from 'mint-ui';

import 'mint-ui/lib/style.css'

//导入路由模块
import router from './router'

import VuePreview from 'vue-preview'

// defalut install
Vue.use(VuePreview)
Vue.use(VuePreview, {
     mainClass: 'pswp--minimal--dark',
     barsSize: {top: 0, bottom: 0},
     captionEl: false,
     fullscreenEl: false,
     shareEl: false,
     bgOpacity: 0.85,
     tapToClose: true,
     tapToToggleControls: false
   })
//Vue挂载路由
Vue.use(VueRouter)
//Vue挂载resource
Vue.use(VueResource)

Vue.use(Mint);
//组件注册到Vue
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);

//导入根组件
import App from './App.vue'

//定义全局filter
Vue.filter("dateFormate",function(dataStr,pattern='YYYY-MM-DD HH:mm:ss'){
     return moment(dataStr).format(pattern)
})

let vm = new Vue({
    el:"#app",
    render: c => c(App),
    router 
})