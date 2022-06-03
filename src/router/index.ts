import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";
import ProjectsView from "../views/ProjectsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: IndexView,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsView,
    },
  ],
});

export default router;
