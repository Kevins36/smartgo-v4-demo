import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
//Aplicaciones
import authRoutes from '@/apps/auth/router/auth-router'
import flujosRoutes from '@/apps/flujos/router/flujos-router';
import hrRoutes from '@/apps/hr/router/hr-router'; 
import formRoutes from '@/apps/dynamicForm/form-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  ...authRoutes,
  ...flujosRoutes, 
  ...hrRoutes,     
  ...formRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
