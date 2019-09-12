<template>
  <div>
  <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for='item in newsList' :key='item.id'>
					<router-link :to="'/news/news_detail/'+ item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.desc}}
							<p class='mui-ellipsis'>
							<span>发表时间： {{item.add_time | dateFormate}}</span>
							<span> 点击 {{item.click}}</span>
							</p>
						</div>
					</router-link>
				</li>
		

			</ul>
  </div>
</template>

<script>
import newsData from '../../data/news'
import {Toast} from 'mint-ui'

export default {
    data(){
       return {
		   newsList:[]
	   }
	},
	created(){
         this.getNewsList()
	},
	methods :{
		getNewsList(){
           if(newsData){
			   this.newsList = newsData.data
			   console.log(this.newsList)
			
		   }else{
              Toast("获取失败")
		   }
		}
	}
}
</script>

<style scoped lang="scss" type="text/sass">

	.mui-ellipsis{
		display:flex;
		justify-content:space-between;
	}
</style>