const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Landing.vue") },
      {
        path: "/home",
        component: (homeBranding) => import("../components/home.vue"),
      },
      {
        path: "/about",
        component: (aboutBranding) => import("../components/about.vue"),
      },
      {
        path: "/requirements",
        component: (requirementsBranding) =>
          import("../components/requirements.vue"),
      },
      {
        path: "/pricing",
        component: (pricingBranding) => import("../components/pricing.vue"),
      },
      {
        path: "/partners",
        component: (partnerssBranding) => import("../components/partners.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
