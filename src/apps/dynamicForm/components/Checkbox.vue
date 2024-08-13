<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  element: {
    label: string;
    params: {
      required: boolean;
      desc: string;
      help: string;
      visibility: string;
      fieldOptions: string;
    };
    id: string;
  };
}>();

const options = props.element.params.fieldOptions.split('\n').filter(option => option.trim() !== '');
</script>

<template>
  <div>
    <!-- Etiqueta del campo -->
    <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">{{ props.element.label }}</h3>

    <!-- Lista de checkboxes -->
    <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <li v-for="option in options" :key="option" class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center ps-3">
          <input
            :id="props.element.id + '-' + option"
            type="checkbox"
            :value="option"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <label
            :for="props.element.id + '-' + option"
            class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {{ option }}
          </label>
        </div>
      </li>
    </ul>

    <!-- Descripción y ayuda del campo -->
    <p class="mt-2 text-gray-600 dark:text-gray-400">{{ props.element.params.desc }}</p>
    <small class="text-gray-500 dark:text-gray-300">{{ props.element.params.help }}</small>
  </div>
</template>
