<script lang="ts" setup>
import Valores from "./Valores.vue";
import Adjuntos from "./Adjuntos.vue";
import Ubicacion from "./Ubicacion.vue";
</script>
<template>
  <div
    id="sidebar-right"
    data-open="false"
    class="h-full flex flex-col items-stretch gap-5 transition-transform duration-300 z-10 bg-gray-100 dark:bg-gray-900 absolute top-0 right-0 translate-x-[calc(100%+2rem)] lg:static lg:translate-x-0"
  >
    <!-- VALORES -->
    <div class="content-box">
      <Valores />
    </div>
    <!-- FIN VALORES -->

    <!-- ARCHIVOS ADJUNTOS -->
    <div class="content-box">
      <Adjuntos />
    </div>
    <!-- FIN ARCHIVOS ADJUNTOS -->

    <!-- UBICACION -->
    <div class="content-box">
      <Ubicacion />
    </div>
  </div>
</template>
