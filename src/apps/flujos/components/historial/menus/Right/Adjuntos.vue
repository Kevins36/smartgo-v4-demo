<template>
  <div>
    <div class="content-box-header">
      <h2 class="content-box-heading">Archivos adjuntos</h2>
      <button
        type="button"
        class="text-md text-blue-500 dark:text-blue-400 flex items-center gap-2"
        @click="toggleDropzone"
      >
        <PlusIcon class="size-4" /> Cargar archivos
      </button>
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex items-center justify-between gap-2">
        <p class="flex items-center">
          <PaperClipIcon class="size-4" />
          Nombre del archivo
        </p>

        <div class="flex gap-1">
          <a href="" title="Información del archivo">
            <InformationCircleIcon class="size-5" />
          </a>
          <a href="" title="Descargar archivo">
            <ArrowDownCircleIcon class="size-5" />
          </a>
          <a href="" title="Eliminar archivo">
            <XCircleIcon class="size-5" />
          </a>
        </div>
      </div>
    </div>

    <!-- Área Dropzone -->
    <Dropzone v-if="showDropzone" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
  ArrowDownCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
  PlusIcon,
  PaperClipIcon,
} from "@heroicons/vue/16/solid";
import Dropzone from './Dropzone.vue'; // Ajusta la ruta según sea necesario

const showDropzone = ref(false);

const toggleDropzone = () => {
  showDropzone.value = !showDropzone.value;
};
</script>

<style>
/* Estilos para el componente principal */
</style>
