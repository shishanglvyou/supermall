<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <van-swipe :autoplay="3000" style="height: 200px;">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <img v-lazy="item.image" width="100%"/>
      </van-swipe-item>
    </van-swipe>
    <van-grid :border="false" :column-num="4">
      <van-grid-item v-for="(grid, index) in recommends" :key="index">
        <van-image :src="grid.image"/>
        <span>{{grid.title}}</span>
      </van-grid-item>
    </van-grid>
    <div class="feature">
      <a href="https://act.mogujie.com/zzlx67">
        <img src="@/assets/img/home/recommend_bg.jpg" alt="">
      </a>
    </div>
    <tab-control></tab-control>
  </div>
</template>

<script>
  import NavBar from '@/components/navbar/NavBar.vue'
  import TabControl from '@/components/tabControl/TabControl.vue'
  import {getHomeMultidata} from "../../api/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      TabControl
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created(){
      getHomeMultidata().then(res=>{
        this.banners=res.data.banner.list;
        this.recommends=res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .feature img {
    width: 100%;
  }
</style>
