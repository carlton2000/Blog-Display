import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

// Filters
Vue.filter("to-uppercase", function(value) {
  return value.toUpperCase();
});

// Vue.filter("snippet", function(value) {
//   return value.slice(0, 100) + "...";
// });

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
