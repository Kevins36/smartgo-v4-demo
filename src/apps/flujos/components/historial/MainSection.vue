<script lang="ts" setup>

import OptionPanel from './OptionPanel.vue';
import Compromiso from './menus/CompromisoMobile.vue';
import Suceso from './historial/Suceso.vue'
import Anuncio from './historial/Anuncio.vue';

</script>
<template>
  <!-- CONTENDOR PRINCIPAL -->
  <div class="flex flex-col items-stretch gap-5">
    <!-- ACCIONES -->

    <OptionPanel />
    <!-- COMPROMISO (SOLO MOVIL)-->
    <Compromiso />
    <!-- HISTORIAL -->
    <div class="content-box dark:bg-dark-mid ">
      <Suceso />
      
    </div>
    <div class="content-box dark:bg-dark-mid">
      <Anuncio />
      
    </div>

    <div class="content-box dark:bg-dark-mid">
      <Suceso />
      
    </div>

    <div class="content-box mb-4 dark:bg-dark-mid">
      <Anuncio />
      
    </div>

  </div>
  <!-- FIN CONTENEDOR PRINCIPAL -->
</template>
