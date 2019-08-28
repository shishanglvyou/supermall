import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tabbar, TabbarItem ,NavBar,Swipe, SwipeItem,Lazyload,Grid, GridItem,Image} from 'vant';
Vue.use(Tabbar).use(TabbarItem).use(NavBar).use(Swipe).use(SwipeItem).use(Lazyload).use(Grid).use(GridItem).use(Image);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
