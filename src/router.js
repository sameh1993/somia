import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// import Main Components
import HomePage from "./views/Home.vue";
const DemoOne = () => import("./views/demo-one.vue");
const DemoTwo = () => import("./views/demo-two.vue");
const DemoThree = () => import("./views/demo-three.vue");

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "Home",
      path: "/",
      component: HomePage,
    },
    {
      name: "demoOne",
      path: "/index-demo-1",
      component: DemoOne,
    },
    {
      name: "demoTwo",
      path: "/index-demo-2",
      component: DemoTwo,
    },
    {
      name: "demoThree",
      path: "/index-demo-3",
      component: DemoThree,
    },
  ],
});
