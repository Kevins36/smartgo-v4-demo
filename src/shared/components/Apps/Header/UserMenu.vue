<script lang="ts" setup>
import UserOptions from "./UserOptions.vue";

import { toggleTheme, getTheme } from '@/shared/utils/theme/ThemeToggle';
import { ref, onMounted, defineProps } from 'vue';
import { SunIcon, MoonIcon, XMarkIcon, ArrowRightStartOnRectangleIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  toggleMenu: Function
});

const currentTheme = ref(getTheme());

const handleToggleTheme = () => {
  toggleTheme();
  currentTheme.value = getTheme();
};

onMounted(() => {
  currentTheme.value = getTheme();
}); 

</script>

<template>
  <div class="mb-5 flex items-center justify-between">
    <figure class="w-8 h-8 overflow-hidden rounded-full">
      <img
        src="../../../../assets/images/avatar_menu.png"
        alt="Perfil para {Nombre Apellido}"
        class="w-full h-full object-cover"
      />
    </figure>
    <div class="flex items-center">
      <div
        class="flex items-center bg-light-light dark:bg-dark-darker border border-gray-300 dark:border-gray-700 overflow-hidden rounded-2xl text-gray-300 dark:text-gray-400"
      >
        <button
          id="color-scheme-light"
          :data-selected="currentTheme === 'light'"
          type="button"
          class="p-1 data-[selected=true]:bg-white data-[selected=true]:text-amber-500"
          @click="handleToggleTheme"
        >
          <SunIcon class="size-5" />
        </button>
        <button 
          id="color-scheme-dark"
          :data-selected="currentTheme === 'dark'"
          type="button"
          class="p-1 data-[selected=true]:bg-gray-900 data-[selected=true]:text-gray-50"
          @click="handleToggleTheme"
        >
          <MoonIcon class="size-5" />
        </button>
      </div>
      <button
        id="header-menu-close"
        type="button"
        class="w-10 h-10 grid place-content-center translate-x-2"
        title="Cerrar"
        @click="props.toggleMenu"
      >
        <XMarkIcon class="size-5 text-gray-500" />
      </button>
    </div>
  </div>

  <UserOptions />

  <footer class="flex items-center justify-between md:justify-end">
    <button
      type="button"
      class="px-3 py-2 text-xs text-gray-50 flex items-center justify-center gap-1 bg-blue-500 dark:bg-blue-400 rounded-lg md:hidden"
    >
      <i class="fa-solid fa-plus"></i>
      <span>Iniciar Flujo</span>
    </button>
    <div class="flex items-center gap-4">
      <button type="button" class="text-xs text-gray-600 dark:text-gray-400 flex items-center md:hidden">
        <i class="fa-solid fa-circle-question"></i>
        <span>Soporte</span>
      </button>
      <button
        type="button"
        class="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1 hover:text-red-600 dark:hover:text-red-600 hover:font-bold transition-all duration-150"
      >
        <span>Salir</span>
        <ArrowRightStartOnRectangleIcon class="size-4" />
      </button>
    </div>
  </footer>
</template>
