<script lang="ts" setup>
import { PlusIcon } from '@heroicons/vue/16/solid';

</script>

<template>
  <div class="flex items-center justify-start gap-2">
    <a href="/login" title="Volver al inicio" class="w-[120px] h-auto">
      <img
        src="../../../../assets/images/smartgo_logo.svg"
        alt="SmartGo Logo"
        class="w-full h-full object-contain dark:hidden"
      />
      <img
        src="../../../../assets/images/smartgo_logo_dark.svg"
        alt="SmartGo Logo"
        class="hidden w-full h-full object-contain dark:block"
      />
    </a>

  </div>
</template>
