<template>
    <van-tabbar route v-model="active" class="active_tab" active-color="#FF5777" inactive-color="#000">
      <van-tabbar-item
          to="/home"
      >
        <span>首页</span>
        <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? home_icon.active : home_icon.normal"
        >
      </van-tabbar-item>
      <van-tabbar-item
          to="/category"
      >
        <span>分类</span>
        <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? category_icon.active : category_icon.normal"
        >
      </van-tabbar-item>
      <van-tabbar-item
          to="/cart"
      >
        <span>购物车</span>
        <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? shopcart_icon.active : shopcart_icon.normal"
        >
      </van-tabbar-item>
      <van-tabbar-item
          to="/profile"
      >
        <span>我的</span>
        <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? profile_icon.active : profile_icon.normal"
        >
      </van-tabbar-item>
    </van-tabbar>
</template>

<script>
  export default {
    name: "TabBar",
    data() {
      return {
        active: 0,
        home_icon: {
          normal: require('@/assets/img/tabbar/home.svg'),
          active: require('@/assets/img/tabbar/home_active.svg')
        },
        category_icon: {
          normal: require('@/assets/img/tabbar/category.svg'),
          active: require('@/assets/img/tabbar/category_active.svg')
        },
        shopcart_icon: {
          normal: require('@/assets/img/tabbar/shopcart.svg'),
          active: require('@/assets/img/tabbar/shopcart_active.svg')
        },
        profile_icon: {
          normal: require('@/assets/img/tabbar/profile.svg'),
          active: require('@/assets/img/tabbar/profile_active.svg')
        }
      }
    }
  }
</script>

<style scoped>
  .active_tab img {
    width: 26px;
    height: 26px;
  }
</style>
