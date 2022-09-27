import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Button, Layout, Icon, Drawer, Radio, Menu, Form, Input, Select } from "ant-design-vue";
import Authorized from "./components/Authorized.vue";
import Auth from "./directives/auth";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);

Vue.component("Authorized", Authorized);
Vue.use(Auth);

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_3676254_v07nk2dt618.js', // 在 iconfont.cn 上生成
});

Vue.component("IconFont", IconFont);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
