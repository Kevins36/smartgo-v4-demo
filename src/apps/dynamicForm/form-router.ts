import { type RouteRecordRaw } from 'vue-router';
import FormApp from '@/apps/dynamicForm/FormApp.vue';


const formRoutes: RouteRecordRaw[] = [
  {
    path: '/forms',
    component: FormApp,
    
  },
];

export default formRoutes;
