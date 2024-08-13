import { defineStore } from 'pinia';
import { ref } from 'vue';
import { FlujoRepo } from '../api/flujo-repo';
import type { FlujoBoxType, Flujo } from '@/shared/interfaces/flujos/flujo.interface';

export const useFlujoStore = defineStore('flujoStore', () => {
  const flujos = ref<FlujoBoxType[]>([]);
  const isLoading = ref<boolean>(true);
  const currentFlujo = ref<FlujoBoxType | null>(null);

  const flujoRepo = new FlujoRepo();

  const loadFlujos = async () => {
    isLoading.value = true;
    // Simulación de retardo de 1.5 segundos
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const response = await flujoRepo.getAll();
    flujos.value = response.map((flujo: Flujo) => ({
      idFlujo: flujo.idFlujo,
      nombre: flujo.flujo,
      ultimaModificacion: flujo.ultimaModificacion,
      color: flujo.color,
      estado: flujo.estado
    }));
    isLoading.value = false;
  };

  const setCurrentFlujo = (idFlujo: string) => {
    currentFlujo.value = flujos.value.find(flujo => flujo.idFlujo === idFlujo) || null;
  };

  return {
    flujos,
    isLoading,
    loadFlujos,
    currentFlujo,
    setCurrentFlujo,
  };
});
