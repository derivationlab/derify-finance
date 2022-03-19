/*
 * @Author: kim
 * @Date: 2021-04-03 10:50:41
 * @LastEditors: kim
 * @LastEditTime: 2021-04-30 20:02:19
 * @FilePath: /derify-finance/src/router/routers.js
 */
export default [
  {
    path: "*",
    name: "notFound",
    component: () => import("@/views/error/index.vue"),
  },
  {
    path: "/ido",
    name: "ido",
    component: () => import("@/views/ido"),
  },
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home"),
  }
];
