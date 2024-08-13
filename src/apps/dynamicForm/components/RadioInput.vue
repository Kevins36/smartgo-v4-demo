<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  element: {
    label: string;
    options: { value: string; label: string }[];
    params: {
      required: boolean;
      desc: string;
      help: string;
      visibility: string;
    };
    id: string;
  };
}>();
</script>

<template>
  <div>
    <!-- Etiqueta del campo de entrada -->
    <label :for="props.element.id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ props.element.label }}</label>

    <!-- Contenedor de los radio buttons -->
    <ul class="space-y-2">
      <li v-for="option in props.element.options" :key="option.value" class="flex items-center">
        <input
          type="radio"
          :id="option.value"
          :name="props.element.id"
          :value="option.value"
          :required="props.element.params.required"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
        />
        <label :for="option.value" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ option.label }}</label>
      </li>
    </ul>

    <!-- Descripción y ayuda del campo -->
    <p class="mt-1 text-gray-600 dark:text-gray-400">{{ props.element.params.desc }}</p>
    <small class="text-gray-500 dark:text-gray-300">{{ props.element.params.help }}</small>
  </div>
</template>
