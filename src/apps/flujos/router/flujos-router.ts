// router/index.ts
import { type RouteRecordRaw } from 'vue-router';
import FlujosPage from '../views/FlujosPage.vue';
import ActividadesPage from '../views/ActividadesPage.vue';
import HistorialPage from '../views/HistorialPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/flujos',
    name: 'FlujosPage',
    component: FlujosPage
  },
  {
    path: '/flujos/:flowId/actividades/:flujoNombre?',
    name: 'FlujoActividades',
    component: ActividadesPage,
    props: route => ({
      idFlujo: Number(route.params.flowId),
      flujoNombre: route.params.flujoNombre || ''  
    })
  },
  {
    path: '/flujos/:idFlujo/actividades/:idRequerimiento/historial',
    name: 'FlujoHistorial',
    component: HistorialPage,
    props: route => ({
      flowId: Number(route.params.idFlujo),
      activityId: Number(route.params.idRequerimiento)
    })
  }
];

export default routes;
