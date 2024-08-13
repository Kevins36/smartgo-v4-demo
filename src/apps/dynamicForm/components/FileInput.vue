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
    };
    id: string;
  };
}>();
</script>

<template>
  <div class="flex flex-col gap-2">
    <!-- Etiqueta del campo -->
    <label :for="props.element.id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      {{ props.element.label }}
      <span v-if="props.element.params.required" class="text-red-500">*</span>
    </label>

    <!-- Campo de carga de archivos -->
    <input
      type="file"
      :id="props.element.id"
      :required="props.element.params.required"
      class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
      aria-describedby="file_input_help"
    />

    <!-- Descripción y ayuda del campo -->
    <p v-if="props.element.params.desc" class="mt-1 text-gray-600 dark:text-gray-400">
      {{ props.element.params.desc }}
    </p>
    <small v-if="props.element.params.help" class="text-gray-500 dark:text-gray-300">
      {{ props.element.params.help }}
    </small>
  </div>
</template>

<style scoped>
/* Asegurar estilo consistente */
input[type="file"] {
  box-sizing: border-box;
}
</style>
