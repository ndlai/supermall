<template>
<div class="recommend">
  <div v-for="item in recommends" class="recommend-item"> 
  <a :href="item.link">
    <img :src="item.image" alt="item.title">
    <div>{{item.title}}</div>
  </a>
  </div>
</div>
</template>
<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  }
};
</script>
<style scoped>
.recommend{
  margin: 10px 0;
  display: flex;
  text-align: center;
  font-size: 12px;
  padding-bottom: 8px;
  border-bottom: 6px solid rgb(212, 212, 212);
}
.recommend-item{
flex: 1;
}
.recommend-item img{
  width: 70px;
  height: 70px;
  margin-bottom: 8px;
}
</style>
