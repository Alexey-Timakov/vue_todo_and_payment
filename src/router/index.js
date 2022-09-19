import { createRouter, createWebHistory } from "vue-router";
import Users from "../views/Users.vue";
import Payments from "../views/Payments.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Users,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/payments",
    name: "Payments",
    component: Payments,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
