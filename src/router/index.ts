import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SshView from "../views/SshView.vue";
import AboutView from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/ssh",
      name: "ssh",
      component: SshView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
  ],
});

export default router;
