import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueI18n from 'vue-i18n';

import { Button, Layout, Icon, Drawer, Radio, Menu, Form, Input, Select, LocaleProvider, DatePicker, Dropdown } from "ant-design-vue";
import Authorized from "./components/Authorized.vue";
import Auth from "./directives/auth";

import zhCN from "./locale/zhCN";
import enUS from "./locale/enUS";
import queryString from "query-string";

import VueHighlightJS from 'vue-highlightjs';
import 'highlight.js/styles/monokai-sublime.css';

Vue.use(VueHighlightJS);

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
Vue.use(LocaleProvider);
Vue.use(DatePicker);
Vue.use(Dropdown);

Vue.component("Authorized", Authorized);
Vue.use(Auth);

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_3676254_v07nk2dt618.js', // 在 iconfont.cn 上生成
});

Vue.component("IconFont", IconFont);

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: queryString.parse(location.search).locale || "zhCN",
  messages: {
    zhCN: { message: zhCN },
    enUS: { message: enUS },
  }
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
