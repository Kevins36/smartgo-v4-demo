<script lang="ts" setup>
import { FlagIcon } from "@heroicons/vue/16/solid";

</script>

<template>
  <div class="flex flex-col items-center justify-center gap-2">
    <div class="flex flex-col items-center">
      <div id="avatar">
        <img
          src="https://i.pravatar.cc/100"
          alt="Gonzalo Patricio Recabal Mella"
          class="w-8 h-8 rounded-full"
        />
      </div>
      <div class="flex flex-col items-center">
        <h3 class="font-semibold">Maura Andrea Barrios Vergara</h3>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          Mie. 14 de feb 2023, 10:45
        </p>
      </div>
    </div>

    <div>
      <FlagIcon class="size-16"/>
      <p>Finalizado</p>
    </div>
  </div>
</template>
