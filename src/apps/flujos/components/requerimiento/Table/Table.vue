<script lang="ts" setup>
import { ref, computed, onMounted, watch } from "vue";
import { useRequerimientosStore } from "../../../stores/useRequerimientoStore";
import ListSkeleton from "@/shared/components/ui/Skeletons/ListSkeleton/ListSkeleton.vue";
import FilterWindow from "../../filtros/FilterWindow.vue";
import SearchFilter from "../../filtros/SearchFilter.vue";
import { ArrowDownTrayIcon, ArrowPathIcon, AdjustmentsVerticalIcon } from "@heroicons/vue/16/solid";
import { estadoMapping, prioridadMapping } from "./mappers";

// Definición de propiedades recibidas por el componente
const props = defineProps<{ flowId: number, items: Array<any> }>();

// Inicialización del store para manejar los requerimientos
const requerimientosStore = useRequerimientosStore();

// Estado local del filtro de búsqueda
const searchFilter = ref('');

// Estado local para mostrar u ocultar la ventana de filtros
const isFilterWindowVisible = ref(false);

// Métodos

// Muestra la ventana de filtros
const showFilterWindow = () => {
  isFilterWindowVisible.value = true;
};

// Oculta la ventana de filtros
const hideFilterWindow = () => {
  isFilterWindowVisible.value = false;
};

// Refresca los datos llamando al método de carga del store
const refreshData = () => {
  requerimientosStore.loadRequerimientos(props.flowId);
};

// Maneja la búsqueda actualizando el valor del filtro de búsqueda
const handleSearch = (search: string) => {
  searchFilter.value = search;
};

// Computed property para filtrar los datos según el filtro de búsqueda
const filteredData = computed(() => {
  if (searchFilter.value.trim() === '') {
    return requerimientosStore.requerimientos;
  }
  return requerimientosStore.requerimientos.filter(item => 
    item.creador.nombre.toLowerCase().includes(searchFilter.value.toLowerCase()) ||
    item.color.toLowerCase().includes(searchFilter.value.toLowerCase())
  );
});

// Ciclo de vida del componente

// Carga los requerimientos al montar el componente
onMounted(() => {
  requerimientosStore.loadRequerimientos(props.flowId);
});

// Observa cambios en la propiedad flowId y recarga los requerimientos cuando cambia
watch(
  () => props.flowId,
  () => {
    requerimientosStore.loadRequerimientos(props.flowId);
  }
);
</script>

<template>
  <div>
    <!-- Opciones de la tabla (combinadas con filtros y acciones) -->
    <div class="flex items-end justify-between mb-10">
      <!-- Filtros izquierda -->
      <div class="flex items-end justify-start gap-4">
        <SearchFilter @search="handleSearch" />
        <button
          id="btn-filtros"
          class="interactive-control flex items-center justify-center gap-2"
          @click="showFilterWindow"
        >
          <AdjustmentsVerticalIcon class="size-4" />
          Filtros
        </button>
        <FilterWindow v-if="isFilterWindowVisible" @close="hideFilterWindow" />
      </div>
      
      <!-- Acciones derecha -->
      <div class="flex items-end justify-end gap-4">
        <div class="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            class="opt-btn-left flex justify-center items-center gap-2"
          >
            <ArrowDownTrayIcon class="size-4" />
            Descargar
          </button>

          <button
            type="button"
            class="opt-btn-right flex justify-center items-center gap-2"
            @click="refreshData"
          >
            <ArrowPathIcon class="size-4" />
            Recargar
          </button>
        </div>
      </div>
    </div>

    <div class="activities-table-container">
      <template v-if="requerimientosStore.loading">
        <ListSkeleton class="min-w-full" />
      </template>
      <template v-else>
        <table class="activities-table">
          <thead class="hidden lg:table-header-group">
            <tr>
              <th class="w-6 pl-2">&nbsp;</th>
              <th class="activities-text-heading w-20">Estado</th>
              <th class="activities-text-heading w-24">Actividad</th>
              <th class="activities-text-heading">Solicitante</th>
              <th class="activities-text-heading">Compromiso</th>
              <th class="activities-text-heading">Días transcurridos</th>
              <th class="activities-text-heading w-20">Prioridad</th>
              <th class="activities-text-heading">Responsables</th>
              <th class="activities-text-heading">Cliente/Entidad</th>
              <th class="activities-text-heading w-20">Monto</th>
            </tr>
          </thead>
          <tbody
            id="activities-table"
            class="lg:divide-y-2 divide-gray-300 dark:divide-gray-700"
          >
            <RouterLink
              v-for="item in filteredData"
              :key="item.idRequerimiento"
              :to="`/flujos/${item.idFlujo}/actividades/${item.idRequerimiento}/historial`"
              custom
              v-slot="{ navigate }"
            >
              <tr
                class="activities-tr activities-new"
                @click="navigate"
                style="cursor: pointer"
              >
                <td class="activities-td text-center">
                  <div class="flex items-center justify-between">
                    <span
                      :class="[estadoMapping[item.estado]?.class, 'lg:hidden']"
                      >{{ estadoMapping[item.estado]?.label }}</span
                    >
                  </div>
                </td>
                <td class="activities-td hidden lg:table-cell">
                  <span :class="estadoMapping[item.estado]?.class">{{
                    estadoMapping[item.estado]?.label
                  }}</span>
                </td>
                <td class="activities-td">
                  <h2 class="text-sm font-bold hidden lg:block">
                    {{ item.flujo }}
                  </h2>
                </td>
                <td class="activities-td hidden lg:table-cell">
                  <div class="flex items-center gap-2">
                    <picture
                      class="w-5 h-5 shrink-0 rounded-full overflow-hidden"
                    >
                      <img
                        :src="`https://i.pravatar.cc/100`"
                        alt="Responsable"
                        class="w-full h-full object-fill"
                      />
                    </picture>
                    <div>
                      <p>
                        {{ item.creador.nombre }} {{ item.creador.apellido }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="activities-td">
                  <h3>
                    {{ new Date(item.fechaCompromiso).toLocaleDateString() }}
                  </h3>
                </td>
                <td class="activities-td">
                  <h3>
                    {{
                      Math.ceil(
                        (new Date().getTime() -
                          new Date(item.fechaCompromiso).getTime()) /
                          (1000 * 60 * 60 * 24)
                      )
                    }}
                    <span class="text-rose-500">
                      ({{
                        Math.ceil(
                          (new Date().getTime() -
                            new Date(item.fechaCompromiso).getTime()) /
                            (1000 * 60 * 60 * 24)
                        )
                      }}
                      días de atraso)
                    </span>
                  </h3>
                </td>
                <td class="activities-td hidden lg:table-cell">
                  <span
                    :class="[
                      prioridadMapping[item.prioridad]?.class,
                      'text-gray-900',
                    ]"
                    >{{ prioridadMapping[item.prioridad]?.label }}</span
                  >
                </td>
                <td class="activities-td hidden lg:table-cell">
                  <div class="flex justify-start gap-2">
                    <picture
                      class="relative w-5 h-5 rounded-full overflow-hidden z-[1] -ml-0"
                    >
                      <img
                        :src="`https://i.pravatar.cc/100`"
                        alt="Responsable"
                        class="w-full h-full object-fill"
                      />
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
        </table>
      </template>
    </div>
  </div>
</template>
