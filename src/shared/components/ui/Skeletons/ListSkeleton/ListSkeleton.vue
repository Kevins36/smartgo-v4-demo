<script lang="ts" setup>
import SkeletonItem from './SkeletonItem.vue';
</script>
<template>
    
<div role="status" class="max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
    <SkeletonItem v-for="n in 6" :key="n" />
    <span class="sr-only">Loading...</span>
</div>

</template>