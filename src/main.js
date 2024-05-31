import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "tailwindcss/tailwind.css";
import components from "./components/UI/index.js";
import { IoSettings, IoDocument } from "oh-vue-icons/icons";
import { OhVueIcon, addIcons } from "oh-vue-icons";

addIcons(IoSettings, IoDocument);
const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});
app.component("v-icon", OhVueIcon);
app.use(router);
app.mount("#app");
