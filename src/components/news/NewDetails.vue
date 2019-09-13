<template>
  <div class="newinfo_container">
    <h3 class="title">{{newsInfos.title}}</h3>
    <p class="sontitle">
      <span>发表时间： {{newsInfos.add_time}}</span>
      <span>点击： {{newsInfos.click}}</span>
    </p>
    <div class="newinfo_content" v-html="newsInfos.content"></div>
    <div>
      <comment-box :news_id="id"></comment-box>
    </div>
  </div>
</template>

<script>
import newsInfo from "../../data/newDetails";
import { Toast } from "mint-ui";

//导入评论组件
import comment from "../comment/Comment";

import commentsDetail from "../../../src/data/comments";

export default {
  data() {
    return {
      id: this.$route.params.id,
      newsInfos: []
     
    };
  },
  created() {
    this.getNewInfo();
   
  },

  methods: {
    getNewInfo() {
      if (newsInfo) {
        let data = newsInfo.data.filter(function(item, index, newsInfo) {
          console.log(newsInfo[index].id);
          if (newsInfo[index].id == this.id) {
            return newsInfo[index];
          }
        }, this);
        if (data.length > 0) {
          this.newsInfos = data[0];
        } else {
          Toast("数据已丢失！");
        }
      } else {
        Toast("操作失败");
      }
    }
  },
  props: ["news_id"],
  components: {
    "comment-box": comment
  }
};
</script>

<style scoped >
.newinfo_container {
  padding: 0px 10px;
}
.newinfo_container .title {
  font-size: 16px;
  text-align: center;
  margin: 15px 0;
  color: red;
}
.newinfo_container .sontitle {
  font-size: 13px;
  color: blue;
  display: flex;
  justify-content: space-between;
}
.newinfo_content {
  border-bottom: 1px solid #555;
  border-top: 1px solid #555;
}
.newinfo_container .newinfo_content >>> p {
  width: 100%;
  word-break: break-all !important;
  text-indent: 30px;
}
</style>