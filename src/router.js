import { createRouter, createWebHashHistory } from "vue-router";
import Orders from "./Page/Orders.vue";
import Invoice from "./Page/Invoice.vue";
import Setting from "./Page/Setting.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Orders, name: "Orders" },
    { path: "/invoice", component: Invoice, name: "Invoice" },
    { path: "/setting", component: Setting, name: "Setting" },
  ],
});
