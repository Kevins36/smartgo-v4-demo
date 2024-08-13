<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { useFlujoStore } from '../../stores/useFlujoStore';
import FlujoBox from '../flujo/FlujoBox.vue';
import GridSkeleton from '@/shared/components/ui/Skeletons/GridSkeleton/GridSkeleton.vue';

const flujoStore = useFlujoStore();
const isLoading = computed(() => flujoStore.isLoading);
const flujos = computed(() => flujoStore.flujos);

onMounted(() => {
  flujoStore.loadFlujos();
});
</script>



<template>
    <div v-if="isLoading" >
      <GridSkeleton class="min-w-full"/>
    </div>
  
    <div v-else class="pb-10 border-b border-gray-300 dark:border-gray-700 flex flex-col items-stretch justify-start gap-5 md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <FlujoBox 
        v-for="flujo in flujos"
        :key="flujo.idFlujo"
        :idFlujo="flujo.idFlujo"
        :nombre="flujo.nombre"
        :ultimaModificacion="flujo.ultimaModificacion"
        :color="flujo.color"
        :estado = "flujo.estado"
        
      />
    </div>
  </template>