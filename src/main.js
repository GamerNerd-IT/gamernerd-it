import { createApp } from "vue";
import { createPinia } from 'pinia'
import App from "./App.vue";
import router from "./router";
import VueLazyLoad from "vue3-lazyload";
import "./index.css";
createApp(App).use(router).use(VueLazyLoad).use(createPinia()).mount("#app");
