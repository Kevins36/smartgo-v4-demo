<script lang="ts" setup>
import { ChevronLeftIcon } from "@heroicons/vue/16/solid";

const props = defineProps<{
  flujo: string;
}>();
</script>

<template>
  <div class="py-5 space-y-4 mb-5 md:flex items-center justify-between">
    <div class="md:flex">
      <div class="flex items-center gap-1">
        <a href="/flujos"> <ChevronLeftIcon class="size-5 ml-0" /> </a>
        <div>
          <h1 class="text-3xl font-bold">Actividades</h1>
          <h3 class="text-3xl">{{ props.flujo }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
