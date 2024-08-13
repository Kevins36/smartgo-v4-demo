<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
  step: string;
}>();
</script>

<template>
  <div>
    <ol
      class="flex items-center justify-center text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base"
    >
      <!-- Paso 1 -->
      <li
        :class="[
          'flex items-center after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block sm:after:mx-6 xl:after:mx-10 dark:after:border-gray-700',
          { 'text-blue-600 dark:text-blue-500': props.step === '1', 'text-gray-500 dark:text-gray-400': props.step !== '1' }
        ]"
      >
        <span
          class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"
        >
          <span class="me-2">1</span>
          Cuenta
        </span>
      </li>

      <!-- Paso 2 -->
      <li
        :class="[
          'flex items-center after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block sm:after:mx-6 xl:after:mx-10 dark:after:border-gray-700',
          { 'text-blue-600 dark:text-blue-500': props.step === '2', 'text-gray-500 dark:text-gray-400': props.step !== '2' }
        ]"
      >
        <span
          class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"
        >
          <span class="me-2">2</span>
          Organización
        </span>
      </li>

      <!-- Paso 3 -->
      <li
        :class="[
          'flex items-center',
          { 'text-blue-600 dark:text-blue-500': props.step === '3', 'text-gray-500 dark:text-gray-400': props.step !== '3' }
        ]"
      >
        <span class="me-2">3</span>
        Usuario
      </li>
    </ol>
  </div>
</template>

