
<template>
    <div class="app_container">
        <!-- 固定顶部 -->
           <mt-header fixed title="shop"></mt-header>
        <!--  中间部分-->
        <transition>
         <router-view tag="div"></router-view>
        </transition>
       
        <!-- tabbar底部 -->
    <nav class="mui-bar mui-bar-tab">
        <router-link  class="mui-tab-item" to="/home">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link  class="mui-tab-item" to="/member">
            <span class="mui-icon mui-icon-email"></span>
            <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link  class="mui-tab-item" to="/shopcar">
            <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
            <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link  class="mui-tab-item" to="/search">
            <span class="mui-icon mui-icon-gear"></span>
            <span class="mui-tab-label">搜索</span>
        </router-link>
    </nav>
    </div>
    
</template>

<script>
    export default {
        
    }
</script>

<style land = 'scss' scoped>
.app_container{
    padding-top:40px;
}
.v-enter{
    opacity:0;
    transform: translateX(100%)
}
.v-leave{
    opacity:0;
    transform: translateX(-100%);
    position:absolute;

}
.v-enter-active,
.v-leave-active{
transition:all 0.5s ease;
}
</style>