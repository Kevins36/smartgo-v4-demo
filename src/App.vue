<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import MainLayout from "@/shared/layouts/MainLayout.vue";
import AuthLayout from "@/shared/layouts/AuthLayout.vue";

const route = useRoute();

const themeClass = "bg-standard-light text-text-standard-light dark:bg-standard-dark dark:text-text-standard-dark";

const layoutComponent = computed(() => {
  if (route.meta.layout === 'auth') {
    return AuthLayout;
  } else {
    return MainLayout;
  }
});
</script>

<template>
  <main :class="themeClass">
    <component :is="layoutComponent">
      <RouterView />
    </component>
  </main>
</template>

//vue-dragable, ckeditor, transiciones, estados con pinia
