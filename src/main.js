import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// import jquery library as globally
window.$ = window.jQuery = require("jquery");

// include font-awesome
import "../node_modules/font-awesome/css/font-awesome.min.css";

// import vue minified
import "../node_modules/vue/dist/vue.min";

// to include bootstrap  files globally
import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

// import global css files
import "./assets/css/responsive.css";
import "./assets/css/style.css";

// We import JQuery
const $ = require("jquery");
// We declare it globally
window.$ = $;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
