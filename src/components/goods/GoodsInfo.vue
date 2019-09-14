<template>
  <div class="goodsbc">
              <!---->
              
           <div class="mui-card">
           <srapper :swriperDataList="goodsWrappers"></srapper>
			
			</div>

            <div class="mui-card">
				<div class="mui-card-header">{{goodsInfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">市场价：<del>￥{{goodsInfo.market_price}}</del> &nbsp&nbsp 销售价：
                        <span class="now_price">￥{{goodsInfo.sell_price}}</span>
                        </p>
                        <p class="">购买数量:
                        <numbox></numbox>
                       </p>
                       
                        <mt-button type='primary' size="small" >立即购买</mt-button>
                        <mt-button type='danger' size="small">加入购物车</mt-button>
					</div>
				</div>
				
			</div>

            <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号:{{goodsInfo.good_no}}</p>
						<p>库存情况:{{goodsInfo.store_quantity}}</p>
						<p>上架时间:{{goodsInfo.add_time}}</p>

					</div>
				</div>
				<div class="mui-card-footer">
                <mt-button type='primary' size="large" plain>图文介绍</mt-button>
                 <mt-button type='danger' size="large" plain>商品评论</mt-button>
                </div>
			</div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
import goodsWrapper from '../../data/goodsWrapper'
import srapper from '../common/Swrapper'
import numbox from '../common/Numbox'
import goodslist from '../../data/goodsLists'

export default {
    data(){
        return {
            id:this.$route.params.id,
            goodsWrappers:[],
            goodsInfo:{}
        }
    },
    created(){
         this.getGoodsWrapper(),
         this.getGoodsInfo()
    },
    methods:{
        getGoodsWrapper(){
            let currentWrapper = []
           if(goodsWrapper.data){
                     let items = goodsWrapper.data
                    currentWrapper = items.filter(function(item,index,items){
                              if(items[index].id==this.id){
                                  return items[index].img_src
                              }
                    },this)
                    if(currentWrapper.length>0){
                        let temp = []
                        let ids = 0
                        for(let i of currentWrapper[0].img_src){
                          let a ={}
                          a.id = ids
                          a.imgSrc = i
                            temp.push(a)
                            ids++
                        }
                        this.goodsWrappers = temp
                    }else{
                        Toast('数据错误')
                    }
                    console.log(goodsWrapper.data)
                    console.log(this.goodsWrappers)
           }else{
               Toast('数据丢失')
           }
        },
        getGoodsInfo(){
                if(goodslist){
                   let gl = goodslist.data
                   let temp = []
                    temp = gl.filter(function(item,index,dl){
                          if(dl[index].id==this.id){
                              return dl[index]
                          }
                   },this)
                   if(temp.length>0){
                       this.goodsInfo  = temp[0]
                   }else{
                       Toast("数据处理失败")
                   }
                   console.log(temp)
                }else{
                    Toast("数据丢失")
                }
        }
    },
    components:{
      srapper,
      numbox
    }
}
</script>

<style scoped lang="scss">
.goodsbc{
    background-color:#eee;
    padding:5px 2px; 
}
.now_price{
    color:red;
    font-size:16px;
}
.mui-card-footer{
  display:block;
}
.mui-card-footer button{
    margin:10px 0px;
}
</style>