<script setup lang="ts">
import { defineProps } from 'vue';
import { CurrencyDollarIcon } from '@heroicons/vue/16/solid';

const props = defineProps<{
  element: {
    label: string;
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

    <!-- Contenedor del campo de entrada con icono -->
    <div class="relative">
      <!-- Icono de divisa -->
      <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        <CurrencyDollarIcon class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" />
      </div>
      <!-- Campo de entrada de número -->
      <input
        type="number"
        :id="props.element.id"
        :required="props.element.params.required"
        :placeholder="props.element.params.desc"
        class="bg-gray-50 border rounded-xl shadow-sm border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>

    <!-- Descripción y ayuda del campo -->
    <p class="mt-1 text-gray-600 dark:text-gray-400">{{ props.element.params.desc }}</p>
    <small class="text-gray-500 dark:text-gray-300">{{ props.element.params.help }}</small>
  </div>
</template>
