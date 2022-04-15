/*
 * @Author: kim
 * @Date: 2021-04-02 13:28:45
 * @LastEditors: kim
 * @LastEditTime: 2021-04-30 19:52:36
 * @FilePath: /derify-finance/src/main.js
 */
import Vue from "vue";
import App from "./App.vue";
import i18n from "./languages/i18n";
import store from "./store";
import router from "./router";
import * as filters from "./filters";
import "./assets/css/common.css";

console.log(process.env.VUE_APP_VERCEL_GIT_COMMIT_SHA)
// 自定义filter
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
