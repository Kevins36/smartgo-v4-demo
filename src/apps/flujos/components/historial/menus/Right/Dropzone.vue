<!-- Dropzone.vue -->
<template>
    <div class="dropzone-container" ref="dropzoneContainer">
      <!-- La zona donde se puede soltar o seleccionar archivos -->
      <form id="dropzone-form" class="dropzone"></form>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import Dropzone from 'dropzone';
  
  // Desactivar el comportamiento automático de descubrimiento
  Dropzone.autoDiscover = false;
  
  const dropzoneContainer = ref<HTMLElement | null>(null);
  
  onMounted(() => {
    if (dropzoneContainer.value) {
      new Dropzone("#dropzone-form", {
        url: "/file/post", // URL de destino para la carga de archivos
        autoProcessQueue: false, // No procesar automáticamente los archivos
        // Configura otras opciones aquí según sea necesario
      });
    }
  });
  </script>
  
  <style scoped>
  .dropzone-container {
    padding: 10px;
    border: 2px dashed #ddd;
    border-radius: 4px;
    background: #f9f9f9;
  }
  
  .dropzone {
    height: 150px; /* Ajusta la altura según sea necesario */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  