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
    <label :for="props.element.id" class="block text-sm font-medium text-gray-900 dark:text-white">
      {{ props.element.label }}
      <span v-if="props.element.params.required" class="text-red-500">*</span>
    </label>

    <!-- Área de texto enriquecido -->
    <textarea
      :id="props.element.id"
      :required="props.element.params.required"
      class="border border-gray-300 rounded-xl shadow-sm text-gray-900 dark:bg-gray-800 dark:text-white resize-none overflow-hidden py-2 px-3 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      rows="4"
      placeholder="Max xx caracteres."
    ></textarea>

    <!-- Descripción y ayuda del campo -->
    <p v-if="props.element.params.desc" class="text-sm text-gray-600 dark:text-gray-400">
      {{ props.element.params.desc }}
    </p>
    <small v-if="props.element.params.help" class="text-xs text-gray-500 dark:text-gray-300">
      {{ props.element.params.help }}
    </small>
  </div>
</template>
