<script lang="ts" setup>
import { ChevronLeftIcon} from "@heroicons/vue/16/solid";

defineProps({
  flujo: String,
});
</script>
<template>
  <div class="py-5 space-y-4 mb-5 md:flex items-center justify-between">
    <div class="md:flex">
      <div class="flex items-center gap-1">
        <a href="/flujos"> <ChevronLeftIcon class="size-5 ml-0" /> </a>
        <div>
          <h3>{{ flujo }}</h3>
          <h1 class="text-3xl font-bold">Historial</h1>
          <h2 class="text-3xl font-bold">{{ flujo }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>
