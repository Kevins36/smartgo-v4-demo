<script lang="ts" setup>
import UserMenu from "./UserMenu.vue";
import { BellIcon, QuestionMarkCircleIcon } from "@heroicons/vue/16/solid";
import { defineProps } from "vue";

const props = defineProps({
  toggleMenu: Function,
  isMenuOpen: Boolean,
});
</script>

<template>
  <div class="flex items-center gap-4">
    <!-- Notificaciones -->
    <button
      id="header-notifications-trigger"
      type="button"
      class="relative text-gray-600 dark:text-gray-400"
    >
      <BellIcon class="size-5" />
      <span
        class="absolute top-0 right-0 translate-x-1 -translate-y-1 w-4 h-4 text-xs bg-red-500 rounded-full grid place-content-center text-gray-50"
        >5</span
      >
    </button>

    <!-- Soporte -->
    <button
      type="button"
      class="hidden text-sm text-gray-600 dark:text-gray-400 items-center md:flex gap-1"
    >
      <QuestionMarkCircleIcon class="size-4" />
      <span>Soporte</span>
    </button>

    <!-- Menú de Usuario -->
    <button
      id="header-menu-open"
      type="button"
      class="w-8 h-8 overflow-hidden rounded-full border-2 border-gray-100 dark:border-gray-800 hover:border-blue-500 transition-colors duration-300 ease-in-out"
      @click="props.toggleMenu"
    >
      <img
        src="../../../../assets/images/avatar_menu.png"
        alt="Perfil para {Nombre Apellido}"
        class="w-full h-full object-cover"
      />
    </button>

    <!-- Menú de Usuario desplegable -->
    <div
      id="header-menu"
      :class="{ 'top-16': props.isMenuOpen, hidden: !props.isMenuOpen }"
      class="absolute top-16 right-0 z-30 min-w-64 w-auto min-h-fit bg-light-light dark:bg-dark-darker shadow-md rounded-e-lg p-5 transition-all duration-500 ease-in-out"
    >
      <UserMenu :toggleMenu="props.toggleMenu" />
    </div>
  </div>
</template>
