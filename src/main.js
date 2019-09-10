//入口
import Vue from 'vue'

//导入根组件
import app from './App.vue'

let vm = new Vue({
    el:"#app",
    data:{},
    render: c => c(app)
})