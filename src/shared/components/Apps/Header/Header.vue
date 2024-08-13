<script lang="ts" setup>
import LSection from "./LSection.vue";
import Navbar from "./NavBar.vue";
import RSection from "./RSection.vue";
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <header class="w-full flex items-center bg-light-light dark:bg-dark-darker border-b border-gray-200 dark:border-gray-700">
    <div class="relative max-w-[1280px] h-16 mx-auto px-5 flex items-center justify-between grow">
      <!-- Sección de la izquierda (Logo y botón de iniciar flujo) -->
      <LSection />
      
      <!-- Barra de Navegación -->
      <Navbar class="bg-light-light dark:bg-dark-darker" />

      <!-- Sección de la derecha (Campana, Soporte y Menú de Usuario) -->
      <RSection :toggleMenu="toggleMenu" :isMenuOpen="isMenuOpen" />
    </div>
  </header>
</template>
