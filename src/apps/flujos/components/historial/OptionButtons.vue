<script lang="ts" setup>

import { ClockIcon, NoSymbolIcon, ArrowPathIcon } from "@heroicons/vue/16/solid";

</script>
<template>
  <div class="flex justify-end mb-5">
    <div class="flex">
      <button type="button" class="opt-btn-left flex items-center justify-center gap-2">
        <ClockIcon class="size-3"/> Prorrogar
      </button>
      <button type="button" class="opt-btn-center flex items-center justify-center gap-2">
        <NoSymbolIcon class="size-3"/> Anular
      </button>
      <button type="button" class="opt-btn-right flex items-center justify-center gap-2">
        <ArrowPathIcon class="size-3"/> Recargar
      </button>
    </div>
  </div>
</template>
