<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';
import { PencilIcon } from '@heroicons/vue/16/solid';

interface Params {
  required: boolean;
  desc: string;
  help: string;
  visibility: string;
}

interface Element {
  label: string;
  type: string;
  edit: boolean;
  params: Params;
  id: string;
}

const props = defineProps<{ element: Element; value: string }>();
const emit = defineEmits(['update:modelValue']);

const localValue = computed({
  get: () => props.value,
  set: (value: string) => emit('update:modelValue', value),
});
</script>

<template>
  <div>
    <!-- Etiqueta del campo de entrada -->
    <label :for="props.element.id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      {{ props.element.label }}
      <span v-if="props.element.params.required" class="text-red-500">*</span>
    </label>

    <!-- Contenedor del campo de entrada con icono -->
    <div class="relative">
      <!-- Icono de lápiz -->
      <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        <PencilIcon class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" />
      </div>
      <!-- Campo de entrada de texto -->
      <input
        type="text"
        :id="props.element.id"
        v-model="localValue"
        :required="props.element.params.required"
        :placeholder="props.element.params.desc"
        class="bg-gray-50 border border-gray-300 rounded-xl shadow-sm text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>

    <!-- Descripción y ayuda del campo -->
    <p v-if="props.element.params.desc" class="mt-1 text-gray-600 dark:text-gray-400">{{ props.element.params.desc }}</p>
    <small v-if="props.element.params.help" class="text-gray-500 dark:text-gray-300">{{ props.element.params.help }}</small>
  </div>
</template>
