<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  buttons: {
    label: string;
    active: boolean;
  }[];
}>();
</script>

<template>
  <div class="inline-flex rounded-md shadow-sm" role="group">
    <button
      v-for="(button, index) in props.buttons"
      :key="index"
      type="button"
      :class="[
        'px-4 py-2 text-sm font-medium border rounded-md focus:z-10 focus:ring-2 focus:ring-blue-700',
        button.active
          ? 'text-gray-900 bg-white border-gray-200'
          : 'text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white'
      ]"
    >
      {{ button.label }}
    </button>
  </div>
</template>
