import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);

// Vue.directive('rainbow', {
//   bind(el, binding, vnode) {
//     el.style.color = '#' + Math.random().toString(16).slice(2, 8);
//   }
// })
Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = '1260px'
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = '560px'
    }
    if(binding.arg == 'column'){
      el.style.background = '#6677cc';
      el.style.padding = '20px';
    }
  }
});
//自定义过滤器
// Vue.filter('to-uppercase',function(value){
//   return value.toUpperCase();
// });
Vue.filter("snippet", function(value){
  return value.slice(0,100) + "...";
});

Vue.use(VueResource)
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
