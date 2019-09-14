     
    
    <template>
  <div>
  <mt-swipe :auto="0">

          <mt-swipe-item v-for="item in swriperDataList" :key="item.id">
          <img :src="item.imgSrc" class="swriperImgs">
          </mt-swipe-item>
       
      </mt-swipe>
  </div>
</template>

<script>
export default {
    props:['swriperDataList']
}
</script>

<style scoped lang="scss">
        .mint-swipe{
        height:200px;
        }
        .swriperImgs{
        height:200px;
        width:100%;
        }
</style>
    
    
    
