<template>
  <div>
    <!-- 顶部滑动条 -->
    <div class="mui-content">
      <div id="slider" class="mui-slider">
        <div
          id="sliderSegmentedControl"
          class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
        >
          <div class="mui-scroll">
           
            <a class="mui-control-item" href="#item2mobile" v-for="item in nav" :key="item.id">{{item.title}}</a>
         
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//导入mui滑动所需的js
import muijs from '../../lib/mui/js/mui.min.js'

import nav from '../../data/photoListNav'
import { Toast } from "mint-ui";

export default {
    data(){
      return {
        nav:[]
      }
    },
    created(){
     this.getNav()
    },
    mounted(){
        //初始化滑动控件
        muijs('.mui-scroll-wrapper').scroll({
          deceleration:0.0005
        })
    },
    methods:{
        getNav(){
          if(nav.data){
           this.nav = nav.data
          }else{
             Toast('导航渲染失败')
          }
        }
    }
}
</script>

<style scoped lang="scss">
* {
  touch-action: pan-y;
}
</style>