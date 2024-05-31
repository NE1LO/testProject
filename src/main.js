import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "tailwindcss/tailwind.css";
import components from "./components/UI/index.js";

import { CoHamburgerMenu, IoClose } from "oh-vue-icons/icons";
import { OhVueIcon, addIcons } from "oh-vue-icons";

addIcons(CoHamburgerMenu, IoClose);
const app = createApp(App);
app.component("v-icon", OhVueIcon);
components.forEach((component) => {
  app.component(component.name, component);
});

app.use(router);
app.mount("#app");
