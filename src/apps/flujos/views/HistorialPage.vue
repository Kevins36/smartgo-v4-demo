<script lang="ts" setup>
import PageHeader from "../components/historial/ui/PageHeader.vue";
import OptionButtons from "../components/historial/OptionButtons.vue";
import LSidebar from "../components/historial/menus/Left/LSidebar.vue";
import RSidebar from "../components/historial/menus/Right/RSidebar.vue";
import MainSection from "../components/historial/MainSection.vue";
</script>

<template>
  <PageHeader />

  <OptionButtons />
  <section
    class="relative lg:static lg:max-w-full lg:grid lg:grid-cols-[250px_1fr_250px] lg:gap-5 xl:grid-cols-[350px_1fr_350px]"
  >
    <LSidebar />
    <MainSection />
    <RSidebar />
  </section>
</template>
