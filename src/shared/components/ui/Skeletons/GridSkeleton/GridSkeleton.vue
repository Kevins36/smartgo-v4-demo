<script lang="ts" setup>
import SkeletonItem from "./SkeletonItem.vue";
</script>

<template>
  <div
    role="status"
    class="pb-10 border-b border-gray-300 dark:border-gray-700 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 animate-pulse"
  >
    <SkeletonItem v-for="n in 12" :key="n" />
    <span class="sr-only">Loading...</span>
  </div>
</template>
