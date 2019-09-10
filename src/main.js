//入口
import Vue from '../node_modules/vue/dist/vue.js'

//按需导入mint-ui组件
import {Header} from 'mint-ui'
import 'mint-ui/lib/style.css'

//组件挂载到Vue
Vue.component(Header.name,Header)

//导入根组件
import App from './App.vue'

let vm = new Vue({
    el:"#app",
    render: c => c(App)
})