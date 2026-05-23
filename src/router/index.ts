
import MainLayout from "@/layouts/MainLayout.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import JobView from "@/views/JobView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "",
          component: HomeView
        },
        {
          path: "jobs",
          component: JobsView
        },
      ]
    },
    {
      path: "/jobs/new",
      component: AddJobView,
      props: true
    },
    {
      path: "/jobs/:id",
      component: JobView,
      props: true
    },
    {
      path: "/jobs/:id/edit",
      component: EditJobView,
      props: true
    },

    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView
    }
  ]
})

export default router;
