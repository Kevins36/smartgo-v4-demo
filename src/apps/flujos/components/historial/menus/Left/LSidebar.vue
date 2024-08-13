<script lang="ts" setup>

import Compromiso from "./Compromiso.vue"
import Info from "./Info.vue"
import Entidades from "./Entidades.vue"

</script>
<template>
  <!-- SIDEBAR IZQUIERDO -->
  <div
    id="sidebar-left"
    data-open="false"
    class="h-full flex flex-col items-stretch gap-5 transition-transform duration-300 z-10 bg-gray-100 dark:bg-gray-900 absolute top-0 left-0 -translate-x-[calc(100%+2rem)] lg:static lg:translate-x-0"
  >
    <!-- COMPROMISO (SOLO DESKTOP) -->
    <div class="content-box hidden lg:block">
      <Compromiso />
    </div>
    <!-- FIN COMPROMISO (SOLO DESKTOP) -->

    <!-- INFORMACIÓN -->
    <div class="content-box">
      <Info />
    </div>
    <!-- FIN INFORMACIÓN -->

    <!-- ENTIDADES -->
    <div class="content-box">
      <Entidades />
    </div>
    <!-- FIN ENTIDADES -->
  </div>
  <!-- FIN SIDEBAR IZQUIERDO -->
</template>
