import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout/index.vue";
import HomeViewVue from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Layout,
      children: [
        {
          path: "",
          name: "home",
          component: HomeViewVue,
        },
        {
          path: "promotion",
          name: "promotion",
          component: () => import("@/views/PromotionView.vue"),
        },
        {
          path: "wallet",
          name: "wallet",
          component: () => import("@/views/WalletView.vue"),
        },
        {
          path: "customService",
          name: "customService",
          component: () => import("@/views/CustomServiceView.vue"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("@/views/ProfileView.vue"),
        },
      ],
    },
  ],
});

export default router;
