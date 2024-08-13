<script lang="ts" setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/16/solid";
</script>
<template>

    <h1 class="text-3xl font-bold">Mis Flujos</h1>
    <div class="relative">
      <input
        id="omnisearch"
        type="search"
        name="omnisearch"
        placeholder="Buscar"
        value=""
        class="w-full pl-2 pr-10 py-3 bg-light-light border-0 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-500 dark:bg-dark-light focus:ring-2 focus:ring-inset focus:ring-blue-500 outline-none rounded-md"
      />
      <span class="absolute top-1/2 -translate-y-1/2 right-2">
        <MagnifyingGlassIcon class="size-4" />
      </span>
    </div>

</template>
