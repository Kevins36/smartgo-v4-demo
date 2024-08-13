<script lang="ts" setup>
import { ref, defineProps } from 'vue';

// Definir las props
const props = defineProps<{
  options: Array<{ label: string; value: any }>;
}>();

// Estado para los valores seleccionados
const selectedValues = ref<Set<any>>(new Set());

// Verificar si una opción está seleccionada
const isChecked = (value: any) => selectedValues.value.has(value);

// Manejar el cambio de selección
const handleCheckboxChange = (value: any) => {
  if (isChecked(value)) {
    selectedValues.value.delete(value);
  } else {
    selectedValues.value.add(value);
  }
};
</script>

<template>
  <div class="space-y-2 mt-2">
    <div v-for="option in props.options" :key="option.value" class="flex items-center">
      <input
        type="checkbox"
        :id="option.value"
        :value="option.value"
        @change="handleCheckboxChange(option.value)"
        :checked="isChecked(option.value)"
        class="h-4 w-4 rounded-full text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
      />
      <label :for="option.value" class="ms-2 text-sm font-medium text-gray-900 dark:text-white">
        {{ option.label }}
      </label>
    </div>
  </div>
</template>
