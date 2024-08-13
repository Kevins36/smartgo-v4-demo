<script lang="ts" setup>
import type { Requerimiento } from '@/shared/interfaces/requerimientos/requerimientos.interface';

const props = defineProps<{
  data: Requerimiento[];
}>();

// Mapeo de estados a clases y etiquetas
const estadoMapping: { [key: number]: { class: string; label: string } } = {
  0: { class: 'activities-estado-pendiente', label: 'Pendiente' },
  1: { class: 'activities-estado-aprobado', label: 'Aprobado' },
  2: { class: 'activities-estado-terminado', label: 'Terminado' },
  3: { class: 'activities-estado-cancelado', label: 'Cancelado' },
};

// Mapeo de prioridades a clases y etiquetas
const prioridadMapping: { [key: number]: { class: string; label: string } } = {
  1: { class: 'activities-prioridad-baja', label: 'Baja' },
  2: { class: 'activities-prioridad-normal', label: 'Normal' },
  3: { class: 'activities-prioridad-alta', label: 'Alta' },
};
</script>

<template>
  <tbody id="activities-table" class="lg:divide-y-2 divide-gray-300 dark:divide-gray-700">
    <RouterLink
      v-for="item in props.data"
      :key="item.idRequerimiento"
      :to="`/flujos/${item.idFlujo}/actividades/${item.idRequerimiento}/historial`"
      custom
      v-slot="{ navigate }"
    >
      <tr class="activities-tr activities-new" @click="navigate" style="cursor: pointer;">
        <td class="activities-td text-center">
          <div class="flex items-center justify-between">
            <span :class="[estadoMapping[item.estado]?.class, 'lg:hidden']">{{ estadoMapping[item.estado]?.label }}</span>
          </div>
        </td>
        <td class="activities-td hidden lg:table-cell">
          <span :class="estadoMapping[item.estado]?.class">{{ estadoMapping[item.estado]?.label }}</span>
        </td>
        <td class="activities-td">
          <h2 class="text-sm font-bold hidden lg:block">{{ item.flujo }}</h2>
        </td>
        <td class="activities-td hidden lg:table-cell">
          <div class="flex items-center gap-2">
            <picture class="w-5 h-5 shrink-0 rounded-full overflow-hidden">
              <img :src="`https://i.pravatar.cc/100`" alt="Responsable" class="w-full h-full object-fill" />
            </picture>
            <div>
              <p>{{ item.creador.nombre }} {{ item.creador.apellido }}</p>
            </div>
          </div>
        </td>
        <td class="activities-td">
          <h3>{{ new Date(item.fechaCompromiso).toLocaleDateString() }}</h3>
        </td>
        <td class="activities-td">
          <h3>
            {{ Math.ceil((new Date().getTime() - new Date(item.fechaCompromiso).getTime()) / (1000 * 60 * 60 * 24)) }}
            <span class="text-rose-500">
              ({{ Math.ceil((new Date().getTime() - new Date(item.fechaCompromiso).getTime()) / (1000 * 60 * 60 * 24)) }} días de atraso)
            </span>
          </h3>
        </td>
        <td class="activities-td hidden lg:table-cell">
          <span :class="[prioridadMapping[item.prioridad]?.class, 'text-gray-900']">{{ prioridadMapping[item.prioridad]?.label }}</span>
        </td>
        <td class="activities-td hidden lg:table-cell">
          <div class="flex justify-start gap-2">
            <picture class="relative w-5 h-5 rounded-full overflow-hidden z-[1] -ml-0">
              <img :src="`https://i.pravatar.cc/100`" alt="Responsable" class="w-full h-full object-fill" />
            </picture>
            <div>
              <span>+{{ item.responsable.length }}</span>
            </div>
          </div>
        </td>
        <td class="activities-td hidden lg:table-cell">
          <p class="font-semibold">{{ item.entidad[0]?.entidad }}</p>
          <p>{{ item.entidad[0]?.codigo }}</p>
        </td>
        <td class="activities-td hidden lg:table-cell">
          <p class="font-semibold">{{ item.valor.monto }}</p>
          <p>{{ item.valor.moneda }}</p>
        </td>

      </tr>
    </RouterLink>
  </tbody>
</template>
