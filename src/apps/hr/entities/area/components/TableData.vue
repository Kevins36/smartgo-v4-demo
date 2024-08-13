<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
import type { Area } from '@/shared/interfaces/hr/area.interface';
import { TrashIcon, PencilIcon } from '@heroicons/vue/16/solid';

const props = defineProps<{
  data: Area[];
}>();

const emit = defineEmits(['edit']);

function editArea(area: Area) {
  emit('edit', area); // Emitir el área completa en lugar del ID
}
</script>

<template>
  <tbody id="activities-table" class="lg:divide-y-2 divide-gray-300 dark:divide-gray-700">
    <tr v-for="item in props.data" :key="item.id" class="activities-tr activities-new">
      <td class="activities-td text-center">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-1">
            <input
              :data-activity="`activities-id-${item.id}`"
              type="checkbox"
              class="form-checkbox rounded text-blue-500 w-3 h-3"
            />
            <h2 class="text-sm font-bold lg:hidden">{{ item.area }}</h2>
          </div>
        </div>
      </td>
      <td class="activities-td hidden lg:table-cell">{{ item.codigo }}</td>
      <td class="activities-td">{{ item.area }}</td>
      <td class="activities-td hidden lg:table-cell">{{ item.modificado_por.usuario.usuario }}</td>
      <td class="activities-td">{{ item.descripcion }}</td>
      <td class="activities-td">{{ item.modificado_por.usuario.usuario }}</td>
      <td class="activities-td flex-grow items-center justify-center">
        <a @click.prevent="editArea(item)" class="flex items-center justify-end gap-1 cursor-pointer">
          <PencilIcon class="size-4" />
          <span class="lg:hidden">Editar</span>
        </a>
        <a :href="`/hr/area/${item.id}`" class="flex items-center justify-end gap-1">
          <TrashIcon class="size-4" />
          <span class="lg:hidden">Eliminar</span>
        </a>
      </td>
    </tr>
  </tbody>
</template>
