import { type RouteRecordRaw } from 'vue-router';
import HrApp from '@/apps/hr/views/HrApp.vue';
import AreaPage from '@/apps/hr/entities/area/views/AreaPage.vue';
import AreaEditPage from '@/apps/hr/entities/area/views/AreaEditPage.vue';
import AreaAddPage from '@/apps/hr/entities/area/views/AreaAddPage.vue';
import EmpresaPage from '@/apps/hr/entities/empresa/views/EmpresaPage.vue';

const hrRoutes: RouteRecordRaw[] = [
  {
    path: '/hr',
    component: HrApp,
    children: [
      {
        path: 'area',
        children: [
          { path: '', component: AreaPage },
          { path: 'edit/:id', component: AreaEditPage },
          { path: 'add', component: AreaAddPage },
        ],
      },
      {
        path: 'empresa',
        children: [
          { path: '', component: EmpresaPage },
          // Agrega otras rutas hijas para Empresa
        ],
      },
      // Agrega otras rutas hijas para HR aquí
    ],
  },
];

export default hrRoutes;
