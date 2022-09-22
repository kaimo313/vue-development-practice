import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import Antd from "ant-design-vue";
// // 需要自定义样式主题，这里使用less
// import "ant-design-vue/dist/antd.less";

// import Button from "ant-design-vue/lib/button";
// import 'ant-design-vue/lib/button/style';

import { Button } from "ant-design-vue";

Vue.config.productionTip = false;

// Vue.use(Antd);
Vue.use(Button);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
