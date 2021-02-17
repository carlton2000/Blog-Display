import Vue from "vue";
import VueRouter from "vue-router";
// import Welcome from "../views/Welcome.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import Home from "../views/Home.vue";
import CreateBlogPost from "../components/createBlogpost.vue";
// import Fans from "../views/readerView.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Welcome",
  //   component: Welcome
  // },
  {
    path: "/",
    name: "Registration",
    component: Signup
  },
  {
    path: "/log",
    name: "Log in    ",
    component: Signin
  },
  {
    path: "/Home",
    name: "Home",
    component: Home
  },
  {
    path: "/create",
    name: "Create",
    component: CreateBlogPost
  },
  // {
  //   path: "/fHome",
  //   name: "ReadersView",
  //   component: Fans
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
