<template>
     <tab-bar>
      <!-- 这里的path前面不用加：号，因为是原封不动地将/home作为字符串传递给子组件 -->
      <tab-bar-item path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbar/home-active.svg" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category"  activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/type.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbar/type-active.svg" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart"  activeColor="green">
        <img slot="item-icon" src="~assets/img/tabbar/shop.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbar/shop-active.svg" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile"  activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/my.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbar/my-active.svg" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
   components: {
    TabBar,
    TabBarItem,
  }
};
</script>

<style scoped>
</style>
