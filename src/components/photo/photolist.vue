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
           
            <a class="mui-control-item" href="#item2mobile" v-for="item in nav" :key="item.id" @click="getImgList(item.id)">{{item.title}}</a>
         
          </div>
        </div>
      </div>
    </div>
    <!-- 图片滑动区 -->
     <ul class="img_ul">
        <router-link v-for="(item,i) in imgList" :key="i++" tag='li' :to="'/photolist/photodetail/'+item.id">
          <img v-lazy="item.img_url">
          <div class="img_info">
          <h3 class="info_title">{{item.title}}</h3>
          <p class="info_desc">{{item.desc}}</p>
          </div>
        </router-link>
      </ul>
  </div>
</template>

<script>
//导入mui滑动所需的js
import muijs from '../../lib/mui/js/mui.min.js'

import nav from '../../data/photoListNav'
import imgList from '../../data/imgList'

import { Toast } from "mint-ui";

export default {
    data(){
      return {
        nav:[],
        imgList:[]
      }
    },
    created(){
     this.getNav(),
     this.getImgList() 
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
        },
        getImgList(cateId){
          if(cateId){
           if(imgList.data){
             let items =imgList.data
                let list = items.filter(function(item,index,s){
                  if(s[index].cate_id==cateId){
                      return s[index]
                  }
                },this)
                if(list.length>0){
                     this.imgList = list
                }
                console.log(items)
                console.log(this.imgList)
           }else{
             Toast('渲染img列表失败')
           }
        
        }else{
          this.imgList = imgList.data
        }
        }
    }
}
</script>

<style scoped lang="scss">
* {
  touch-action: pan-y;
}
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.img_ul{
  list-style:none;
   padding:0px;
   margin:0px 10px;
   
}

.img_ul li{
  width:100%;
  margin-bottom:5px;
  position:relative;
}
.img_ul img{
  display:block;
  margin:0 auto;
  height:220px;
  width:100%;
}
.img_info{
  position:absolute;
  vertical-align:left;
  width:100%;
  bottom:0px;
  max-height:50px;
  color:white;
  overflow:hidden;
  background-color:rgba(0,0,0,0.4)
}
.info_title,.info_desc{
  padding-left:5px;
   color:#fff;
}
.info_title{
  font-size:13px;
}
</style>