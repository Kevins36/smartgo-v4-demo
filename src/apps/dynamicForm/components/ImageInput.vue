<script setup lang="ts">
import { defineProps } from 'vue';
import { PhotoIcon } from '@heroicons/vue/16/solid';

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
  <div class="flex flex-col items-center justify-center w-full">
    <!-- Zona de carga de archivo -->
    <label
      :for="props.element.id"
      class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
    >
      <div class="flex flex-col items-center justify-center pt-5 pb-6">
        <!-- Icono -->
       <PhotoIcon class="size-6" />
        
        <!-- Texto de instrucciones -->
        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
          <span class="font-semibold">Click para seleccionar</span> arrastre
        </p>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          SVG, PNG, JPG or GIF (MAX. 800x400px)
        </p>
      </div>
      <!-- Input de archivo -->
      <input
        :id="props.element.id"
        type="file"
        class="hidden"
        :required="props.element.params.required"
      />
    </label>
    
    <!-- Descripción y ayuda del campo -->
    <p v-if="props.element.params.desc" class="mt-2 text-sm text-gray-600 dark:text-gray-400">
      {{ props.element.params.desc }}
    </p>
    <small v-if="props.element.params.help" class="text-xs text-gray-500 dark:text-gray-300">
      {{ props.element.params.help }}
    </small>
  </div>
</template>
