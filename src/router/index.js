import { createRouter, createWebHistory } from 'vue-router'

import { useAuthStore } from '../store/auth';


const BLANK_LAYOUT = "BlankLayout";
const REGULAR_LAYOUT = "Layout";

const NO_AUTH_ROUTES = ['login', 'register', 'link-id', 'activate', 'forgot-password'];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path: "/",
        redirect: { path: "/dashboard" },
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          layout: REGULAR_LAYOUT
        },
        component: () => import('../pages/dashboard.vue'),
      },
      {
        path: '/blogs',
        name: 'blogs',
        meta: {
          layout: REGULAR_LAYOUT
        },
        component: () => import('../pages/blogs.vue'),
      },
      {
        path: '/transfer-money',
        name: 'transfer',
        meta: {
          layout: REGULAR_LAYOUT
        },
        component: () => import('../pages/transfer-money.vue'),
      },
      {
        path: '/login',
        name: 'login',
        meta: {
          layout: BLANK_LAYOUT
        },
        component: () => import('../pages/login.vue'),
      },
      {
        path: '/register',
        name: 'register',
        meta: {
          layout: BLANK_LAYOUT
        },
        component: () => import('../pages/register.vue'),
      },
      {
        path: '/forgot-password',
        name: 'forgot-password',
        meta: {
          layout: BLANK_LAYOUT
        },
        component: () => import('../pages/forgot-password.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        meta: {
          layout: BLANK_LAYOUT
        },
        component: () => import('../pages/404.vue'),
      },
  ],
})

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore();
  const ENVIRONMENT =  process.env.VUE_APP_ENVIRONMENT;

  if (!authStore.user && !NO_AUTH_ROUTES.includes(to.name)) {
    if (ENVIRONMENT != "test") {

      return { name: 'login' }
    }
  }
})

export default router
