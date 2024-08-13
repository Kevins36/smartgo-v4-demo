<script lang="ts" setup>
import "flowbite";
import { ref } from "vue";

// Definir el emisor de eventos para cerrar el componente
const emit = defineEmits<{
  (e: "close"): void;
}>();

const selectedFilters = ref({
  date: null,
  usuario: null,
  entidad: null,
  actividad: null,
  estado: [],
  prioridad: []
});

// Importación de componentes de filtro
import CheckboxFilter from "./CheckBoxFilter.vue";
import Dropdown from "./DropDown.vue";

// Opciones para los filtros
const actividadOptions = [
  { label: "Actividad 1", value: "actividad-1" },
  { label: "Actividad 2", value: "actividad-2" },
  { label: "Actividad 3", value: "actividad-3" },
];

const EstadoOptions = [
  { label: "Terminado", value: "estado-1" },
  { label: "Pendiente", value: "estado-2" },
  { label: "Aprobado", value: "estado-3" },
];
const PrioridadOptions = [
  { label: "Baja", value: "prioridad-1" },
  { label: "Normal", value: "prioridad-2" },
  { label: "Alta", value: "prioridad-3" },
];

const userOptions = [
  { label: "Aa", value: "usuario-1" },
  { label: "Bb", value: "usuario-2" },
  { label: "Cc", value: "usuario-3" },
  { label: "Ff", value: "usuario-4" },
  { label: "Gg", value: "usuario-5" },
];

const entidadOptions = [
  { label: "Entidad 1", value: "entidad-1" },
  { label: "Entidad 2", value: "entidad-2" },
  { label: "Entidad 3", value: "entidad-3" },
];

// Función para manejar la aplicación de filtros
const applyFilters = (event: Event) => {
  event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

  const dateFilter = (document.getElementById("date-filter") as HTMLInputElement)?.value;
  selectedFilters.value.date = dateFilter;

  // Lógica para obtener los valores seleccionados en Dropdowns y Checkboxes
  console.log("Filtros aplicados:", JSON.stringify(selectedFilters.value, null, 2));
};
</script>

<template>
  <aside
    id="filter-window"
    class="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Filters"
  >
    <form
      class="h-full px-5 py-4 overflow-y-auto no-scrollbar bg-light-light dark:bg-gray-800"
    >
      <div class="flex justify-between">
        <span class="font-semibold">Filtros Seleccionados</span>
        <button
          @click="emit('close')"
          class="mb-4 px-2 rounded-full font-bold text-gray-900 dark:text-white bg-[#D1DDF7] hover:bg-[#D1DDF7]/70 dark:hover:bg-gray-700"
        >
          x
        </button>
      </div>
      <div class="text-sm">
        <div class="bg-light-darker h-24 rounded-lg p-2 mt-2"></div>
      </div>
      <div class="space-y-4 mt-4">
        <div>
          <label
            for="date-filter"
            class="block text-xs font-medium text-gray-900 dark:text-white"
            >Fecha</label
          >
          <input
            id="date-filter"
            type="date"
            class="block w-full p-2 text-gray-900 rounded-lg dark:text-white bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          />
        </div>
        <!-- FILTROS DROPDOWN -->
        <div class="bg-light-darker py-2 px-1 rounded-lg">
          <span
            class="flex-1 px-2 text-sm font-semibold text-left rtl:text-right whitespace-nowrap"
            >Usuario</span
          >
          <Dropdown v-model="selectedFilters.usuario" :options="userOptions" />
        </div>
        <div class="bg-light-darker py-2 px-1 rounded-lg">
          <span
            class="flex-1 px-2 text-sm font-semibold text-left rtl:text-right whitespace-nowrap"
            >Entidad</span
          >
          <Dropdown v-model="selectedFilters.entidad" :options="entidadOptions" />
        </div>

        <div class="bg-light-darker py-2 px-1 rounded-lg">
          <span
            class="flex-1 px-2 text-sm font-semibold text-left rtl:text-right whitespace-nowrap"
            >Actividad</span
          >
          <Dropdown v-model="selectedFilters.actividad" :options="actividadOptions" />
        </div>
        <!-- FILTROS CHECKBOX -->
        <div class="bg-light-darker py-2 rounded-lg px-3">
          <span
            class="flex-1 text-left text-sm rtl:text-right whitespace-nowrap font-semibold"
            >Estado</span
          >
          <CheckboxFilter v-model="selectedFilters.estado" :options="EstadoOptions" />
        </div>

        <div class="bg-light-darker py-2 rounded-lg px-3">
          <span
            class="flex-1 text-left text-sm rtl:text-right whitespace-nowrap font-semibold"
            >Prioridad</span
          >
          <CheckboxFilter v-model="selectedFilters.prioridad" :options="PrioridadOptions" />
        </div>
      </div>

      <!-- BOTONES -->
      <div class="w-full flex justify-between mt-4">
        <button
          @click.prevent="selectedFilters = { date: null, usuario: null, entidad: null, actividad: null, estado: [], prioridad: [] }"
          class="mb-4 text-sm px-2 rounded-full font-semibold text-dark-dark dark:text-white bg-[#D1DDF7] hover:bg-[#D1DDF7]/70 dark:hover:bg-gray-700"
        >
          Limpiar
        </button>
        <button
          @click="applyFilters"
          class="mb-4 text-sm px-2 rounded-full font-semibold text-dark-dark dark:text-white bg-[#D1DDF7] hover:bg-[#D1DDF7]/70 dark:hover:bg-gray-700"
        >
          Aplicar
        </button>
      </div>
    </form>

    <!-- Mostrar el JSON de filtros -->
    <div class="p-4">
      <h3 class="font-semibold">Filtros Aplicados</h3>
      <pre>{{ JSON.stringify(selectedFilters, null, 2) }}</pre>
    </div>
  </aside>
</template>
