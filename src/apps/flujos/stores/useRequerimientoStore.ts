import { defineStore } from 'pinia';
import { ref } from 'vue';
import { RequerimientoRepo } from '../api/requerimiento-repo';
import type { Requerimiento } from '@/shared/interfaces/requerimientos/requerimientos.interface';

export const useRequerimientosStore = defineStore('requerimientos', () => {
  const requerimientos = ref<Requerimiento[]>([]);
  const loading = ref<boolean>(true);
  const searchQuery = ref<string>('');

  const requerimientoRepo = new RequerimientoRepo();

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const applyFilters = async () => {
    loading.value = true;
    await delay(800);

    const filteredRequerimientos = await requerimientoRepo.getFiltered(requerimiento => {
      const matchSearch = !searchQuery.value || 
        requerimiento.titulo.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
        requerimiento.creador.usuario.toLowerCase().includes(searchQuery.value.toLowerCase());

      return matchSearch;
    });

    requerimientos.value = filteredRequerimientos;
    loading.value = false;
  };

  const loadRequerimientos = async (flowId: number) => {
    loading.value = true;
    await delay(1500);
    if (flowId) {
      await applyFilters();
    } else {
      requerimientos.value = await requerimientoRepo.getAll();
      loading.value = false;
    }
  };

  return {
    requerimientos,
    loading,
    searchQuery,
    loadRequerimientos,
    applyFilters,
  };
});
