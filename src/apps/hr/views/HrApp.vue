<script lang="ts" setup>
import Sidebar from "@/apps/hr/components/ui/Sidebar.vue";
import PageHeader from "../components/ui/PageHeader.vue";
</script>

<template>
  <section class="flex flex-col">
    <PageHeader />
    <div class="flex mb-4">
      <Sidebar />
      <section class="flex-grow w-full">
        <router-view />
      </section>
    </div>
  </section>
</template>
