import { createWebHistory, createRouter } from "vue-router";
import Home from "@/resources/js/views/Home.vue";
import About from "@/resources/js/views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;