<template>
  <div class="phone_container">
  <h2>{{photoDetail.title}}</h2>
  <p class="sontitle">
  <span>发表时间：{{photoDetail.add_time}}</span>
  <span>点击：{{photoDetail.click}}</span>
  </p>
    <!--内容-->
    <div class="phonedesc">
    <p>
    {{photoDetail.content}}
    </p>
    
    </div>
    <!--缩略图-->
    <div>
    <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
    </div>
    <!--评论-->
    <comment-box :news_id="id"></comment-box>
  </div>
</template>

<script>
import photoDetail from '../../data/photoDetail'

import { Toast } from "mint-ui";
//导入评论组件
import comment from "../comment/Comment";
import Mimg from '../../data/mphoto'

export default {
    data(){
        return {
            id:this.$route.params.id,
            photoDetail:{},
            slide1:[]
        }
    },
    created(){
             this.getPhotoInfo(),
             this.getMIng()
    },
    methods:{
        getPhotoInfo(){
            let detail= []
          if(photoDetail.data){
              let items =photoDetail.data
               detail = items.filter(function(item,index,items){
                    if(items[index].id == this.id){
                        return items[index]
                    }
              },this)
              if(detail.length>0){
             this.photoDetail = detail[0]
              }
             
          }else{
              Toast('数据丢失')
          }
        },
        getMIng(){
            let m = []
            if(Mimg){

                 m = Mimg.filter(function(item,index,Mimg){
                            if(Mimg[index].id==this.id){
                                return Mimg[index]
                            }
                 },this)
            }else{
                Toast('缩略图加载失败')
            }
            if(m.length>0){
                this.slide1 = m
            }else{
                Toast('无缩略图')
            }
        },
         handleClose () {
          console.log('close event')
      }
    },
    props: ["news_id"],
     components: {
    "comment-box": comment
     }
  }

</script>

<style scoped lang="scss">
.phone_container{
    padding:0px 5px;
}
.sontitle{
    border-bottom:1px solid #ccc;
}
.phonedesc{
    width:100%;
}
.phonedesc p{
    word-break:break-all;
}
</style>