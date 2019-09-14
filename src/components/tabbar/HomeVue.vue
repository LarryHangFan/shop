<template>
  <div>
  <!-- 轮播区 -->
      <srapper :swriperDataList="swriperDataList"></srapper>
    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9 grid_view_6">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-home grid_item_icon"></span>
		                    <div class="mui-media-body">Home</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email grid_item_icon"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/news">
		                    <span class="mui-icon mui-icon-chatbubble grid_item_icon"></span>
		                    <div class="mui-media-body">新闻</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
		                    <span class="mui-icon mui-icon-location grid_item_icon"></span>
		                    <div class="mui-media-body">分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goods">
		                    <span class="mui-icon mui-icon-search grid_item_icon"></span>
		                    <div class="mui-media-body">商品</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone grid_item_icon"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		        
		        </ul> 
  </div>
</template>

<script>
import swriperData from  '../../data/swraper'
import {Toast} from 'mint-ui'
import srapper from '../common/Swrapper'

export default {
    data(){
        return {
          swriperDataList:[]
        } 
    },
    methods : {
       getSwriper(){
        // this.$http.get().then()
        if(swriperData){
         this.swriperDataList = swriperData.data
         //Toast("加载成功！")
        }else{
          Toast("加载失败！")
        }
        console.log(swriperData)
        return ''
       }
    },
    created() {
      this.getSwriper()
    },
    components:{
      srapper
    }
}
</script>

<style  lang="scss" scoped >

.mint-swipe{
  height:200px;
}
.swriperImgs{
  height:200px;
  width:100%;
}
.mui-grid-view.mui-grid-9{
  background-color:#fff !important;
  color:#fff;
}
.grid_item_icon{
  color:red;
}
</style>