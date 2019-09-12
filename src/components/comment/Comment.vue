<template>
  <div>
  <h3>发表评论</h3>
  <textarea placeholder="开始你的表演,最多两百字" maxlength='200'></textarea>
  <mt-button type="primary" size='large'>发表评论</mt-button>
  <div class="cmt-list">
    <div class="cmt-item">
        <div class="cmt-title">
        <span>一楼 </span>
        <span>用户：匿名 </span>
        <span>发表时间：0000 00 00 </span>
        </div>
        <div class="cmt-body">
        爱神的箭as
        </div>
    </div>
  </div>
   <mt-button type="danger" size='large'>加载更多</mt-button>
  </div>
</template>

<script>
    export default {
        data(){
            return{}
        },
        created(){

        },
        methods:{

        }
    }
</script>

<style scoped lang="scss">
textarea{
    font-size:13px;
}
.cmt-item{
    border:1px solid #ccc;
    border-radius:10px;
    font-size:12px;
}
.cmt-list{
    margin:10px 0;
}
.cmt-title{
    line-height:30px;
    border-radius:10px 10px 0px 0px;
    background-color:#ccc;
    padding-left:10px;
}
.cmt-body{
    padding-left:10px;
    line-height:30px;
}
</style>