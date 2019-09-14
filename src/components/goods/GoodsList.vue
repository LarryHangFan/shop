<template>
  <div class="goods_list">

  <div tag="div" class="goods_item" v-for="item in goodsList" :key="item.id"  @click='toGoodsInfo(item.id)'>
  <img :src="item.img_src" alt="">
  <h3 class="goods_title">{{item.title}}</h3>
  <div class="info">
  <p class="price">
     <span class="now">{{item.sell_price}}</span>
     <span class="old">{{item.market_price}}</span>
  </p>
  <p class="sell">
  <span>{{item.desc}}</span>
  <span>{{item.store_quantity}}</span>
  </p>
  </div>
  </div>

 </div>


</template>

<script>
import goodslist from '../../data/goodsLists'
import {Toast} from 'mint-ui'

export default {
    data(){
        return {
            goodsList:[]
        }
    },
    methods:{
        getGoodsList(){
         if(goodslist.data){
              this.goodsList = goodslist.data
         }else{
             Toast('数据丢失')
         }
         
        },
        toGoodsInfo(id){
            this.$router.push('/goods/goodsinfo/'+id)
        }
    },
    created(){
       this.getGoodsList()
    }
}
</script>

<style scoped lang="scss">
.goods_list{
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  padding:0px 5px;
}
.goods_item{
    margin:2px 0px;
    width:49%;
    height:260px;
    border:1px solid #777;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
}
.info{
    background-color:#eee;
}
.goods_item .goods_title{
font-size:15px;
margin-bottom:2px;
}
.goods_item img{
    display:block;
    width:100%; 
    overflow:hidden;
}
.price,.sell{
    margin-bottom:0px;
    padding:0px 4px;
    font-size:12px;
    height:15px;
    line-height:15px;
    overflow:hidden;
}
.now{
    font-size:15px;
    color:red;
}
.sell{
    display:flex;
    justify-content:space-between;
}
.sell{

}
</style>