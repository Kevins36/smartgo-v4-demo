<script lang="ts" setup>
import { PhoneIcon } from "@heroicons/vue/16/solid";


</script>
<template>
  <div class="relative">
    <div
      class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"
    >
      <PhoneIcon class="size-5 text-slate-500"/>
    </div>
    <input
      type="text"
      aria-describedby="helper-text-explanation"
      class="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="+123-4567 8901"
      required
    />
  </div>
  <p
    id="helper-text-explanation"
    class="mt-2 text-sm text-gray-500 dark:text-gray-400"
  >
    Ingrese un número con el formato indicado.
  </p>
</template>
