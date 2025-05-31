import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/Login.vue";
import Dashboard from "../pages/Dashboard.vue";
import AddEditCharger from "../pages/AddEditCharger.vue";
import Register from "../pages/Register.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/register", component: Register }, // ← Add this line
  { path: "/dashboard", component: Dashboard },
  { path: "/charger/:id?", component: AddEditCharger },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
