<script lang="ts" setup>
import Footer from "../components/Apps/Footer/Footer.vue";
import Header from "../components/Apps/Header/Header.vue";
</script>

<template>
  <Header />

  <main class="responsive-main-page min-h-screen max-w-fit w-3">
    <slot />
  </main>

  <Footer />
</template>
