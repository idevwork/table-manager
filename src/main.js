import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import VueKonva from "vue-konva";
import store from "./store/store";
import "nprogress/nprogress.css";

Vue.use(VueKonva);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
  created() {}
}).$mount("#app");
