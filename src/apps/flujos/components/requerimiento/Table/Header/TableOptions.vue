<script lang="ts" setup>
import { useRequerimientosStore } from "@/apps/flujos/stores/useRequerimientoStore";
import Filters from "./Filters.vue";
import { ArrowDownTrayIcon, ArrowPathIcon } from "@heroicons/vue/16/solid";

const props = defineProps<{ flowId: number }>();
const requerimientosStore = useRequerimientosStore();

const refreshData = () => {
  requerimientosStore.loadRequerimientos(props.flowId);
};
</script>

<template>
  <div class="hidden lg:flex items-end justify-between mb-10">
    <!-- FILTROS IZQUIERDA -->
    <Filters />
    <!-- ACCIONES DERECHA -->
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
          <ArrowPathIcon class="size-4" /> Recargar
        </button>
      </div>
    </div>
  </div>
</template>
