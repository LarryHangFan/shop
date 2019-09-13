<template>
  <div>
    <h3>发表评论</h3>
    <textarea placeholder="开始你的表演,最多两百字" v-model='msg' maxlength="200"></textarea>
    <mt-button type="primary" size="large" @click='postComment()'>发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comentList" :key='item.id'>
        <div class="cmt-title">
          <span>第{{i++ +1}}楼</span>
          <span>用户：{{item.user_name}}</span>
          <span>发表时间：{{item.add_time}}</span>
        </div>
        <div class="cmt-body">{{item.content}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import commentsDetail from "../../../src/data/comments";


export default {
  data() {
    return {
      comentList: [],
      msg:''
    };
  },
  created() {
    this.getCommentsListByNewId();
  },
  props: ["news_id"],
  methods: {
    getCommentsListByNewId() {
        console.log('this.news_id:'+this.news_id)
       
      let comentList = [];
      let temp =commentsDetail.data
      if (commentsDetail.data) {

        comentList = temp.filter(function(item,index,temp ) {
          if (temp[index].news_id == this.news_id) {
            return temp[index];
          }
        },
        this);
      } else {
        Toast("评论操作失败");
      }
       console.log(comentList)
      if (comentList.length > 0) {
        this.comentList = comentList;
      } else {
        Toast("数据已丢失！");
      }
      
    },
    postComment(){
        //该新闻添加评论
        let addComment ={}
        addComment.user_name = '本人'
        addComment.add_time = new Date()
        addComment.news_id = this.news_id

        if(this.msg){
            addComment.content = this.msg
            commentsDetail.data.unshift(addComment)
            let ComStr = "let comments ="+JSON.stringify(commentsDetail)+";export default comments"
            
            //将对象写入展示区
            this.comentList.unshift(addComment)
        }else{
            Toast('评论不能为空！')
        }
    }
  }
};
</script>

<style scoped lang="scss">
textarea {
  font-size: 13px;
}
.cmt-item {
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 12px;
  margin-bottom: 5px;
}
.cmt-list {
  margin: 10px 0;
}
.cmt-title {
  line-height: 30px;
  border-radius: 10px 10px 0px 0px;
  background-color: #ccc;
  padding-left: 10px;
}
.cmt-body {
  padding-left: 10px;
  line-height: 30px;
}
</style>