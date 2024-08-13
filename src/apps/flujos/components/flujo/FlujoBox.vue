<script lang="ts" setup>
import type { FlujoBoxType } from "@/shared/interfaces/flujos/flujo.interface";

const props = defineProps<FlujoBoxType>();
</script>

<!-- FlujoBox.vue -->
<template>
  <RouterLink
    :to="`/flujos/${props.idFlujo}/actividades/${encodeURIComponent(props.nombre)}`"
    class="p-3 bg-light-light dark:bg-dark-light rounded-md space-y-3 hover:shadow-md"
    :title="'Ver actividades de ' + props.nombre"
  >
    <div class="flex items-center gap-2">
      <span
        class="w-10 h-10 grid place-content-center rounded-md text-sm text-gray-50 bg-gray-100"
        :style="{ backgroundColor: props.color }"
      >
        {{ props.nombre ? props.nombre.substring(0, 2).toUpperCase() : "" }}
      </span>
      <h2 class="text-base font-bold">{{ props.nombre }}</h2>
    </div>
    <div class="text-sm">
      <h3 class="text-gray-500 dark:text-gray-400">Última modificación</h3>
      <p class="font-bold">
        {{ new Date(props.ultimaModificacion).toLocaleDateString() }}
      </p>
    </div>
    <div class="text-sm">
      <h3 class="text-gray-500 dark:text-gray-400">Estado</h3>
      <p class="font-bold">
        {{ props.estado }}
      </p>
    </div>
  </RouterLink>
</template>
