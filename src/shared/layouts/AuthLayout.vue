<!-- src/shared/layouts/AuthLayout.vue -->
<script lang="ts" setup>
import Header from "../components/Auth/Header.vue";
import Footer from "../components/Apps/Footer/Footer.vue";
</script>
<template>
  <Header />
  <div class="relative h-full w-full">
    <!-- Fondo de color sólido -->
    <div class="absolute inset-0 bg-white"></div>
    <!-- Ola azul en el pie -->
    <div class="absolute bottom-0 left-0 w-full wave-container">
      <div class="wave"></div>
    </div>
    <div class="relative z-10 flex flex-col h-full">
      <main>
        <slot />
      </main>
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.bg-white {
  background-color: #ffffff;
}

.wave-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 950px; /* Ajusta la altura según sea necesario */
  overflow: hidden;
  clip-path: polygon(0% 100%, 10% 80%, 20% 90%, 30% 70%, 40% 80%, 50% 60%, 60% 70%, 70% 50%, 80% 60%, 90% 40%, 100% 50%, 100% 100%);
}

.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, 
    transparent 0%, 
    #66ccff 25%, /* Color azul más claro */
    transparent 50%, 
    #66ccff 75%, 
    transparent 100%);
  background-size: 200% 100%;
  transform: rotate(-180deg);
  z-index: 1;
  animation: waveAnimation 4s infinite linear;
}

@keyframes waveAnimation {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 0%;
  }
}
</style>
