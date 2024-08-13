<script lang="ts" setup>

import { ChevronLeftIcon, MagnifyingGlassIcon } from "@heroicons/vue/16/solid";

defineProps({
  flujo:String,

})

</script>
<template>
  <div class="py-5 space-y-4 mb-5 md:flex items-center justify-between">
    <div class="md:flex">
      <div class="flex items-center gap-1">
        <a href="home.html"> <ChevronLeftIcon class="size-5 ml-0" /> </a>
        <div>
          <h3>{{flujo}}</h3>
          <h1 class="text-3xl font-bold">Actividades</h1>
        </div>
      </div>
      <div class="ml-5 flex gap-2 h-full">
        <button
          type="button"
          class="text-xs px-2 py-1 bg-gray-200 text-blue-500 text-center rounded-md"
        >
          Ver flujo
        </button>
        <button
          type="button"
          class="text-xs px-2 py-1 bg-gray-200 text-blue-500 text-center rounded-md"
        >
          Ver reportes
        </button>
      </div>
    </div>
    <div class="relative">
      <input
        id="omnisearch"
        type="search"
        name="omnisearch"
        placeholder="Buscar"
        value=""
        class="w-full pl-2 pr-10 py-3 bg-light-light border-0 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-500 dark:bg-dark-lightgray-700 focus:ring-2 focus:ring-inset focus:ring-blue-500 outline-none rounded-md"
      />
      <span class="absolute top-1/2 -translate-y-1/2 right-2">
        <MagnifyingGlassIcon class="size-5" />
      </span>
    </div>
  </div>
</template>
